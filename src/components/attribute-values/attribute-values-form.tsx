import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import Button from "@components/ui/button";
import Description from "@components/ui/description";
import Card from "@components/common/card";
import { useRouter } from "next/router";
import { getErrorMessage } from "@utils/form-error";

import { toast } from "react-toastify";
import {
  AttributeValue,
  useAttributesQuery,
  useCreateAttributeValueMutation,
  useUpdateAttributeValueMutation,
} from "@graphql/attributes.graphql";
import Loader from "@components/ui/loader/loader";
import ErrorMessage from "@components/ui/error-message";
import Label from "@components/ui/label";
import ValidationError from "@components/ui/form-validation-error";
import { ROUTES } from "@utils/routes";
import SelectInput from "@components/ui/select-input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  value?: string | null;
  meta?: string | null;
  attribute?: any;
};

const defaultValues = {
  value: "",
  meta: "",
  attribute: "",
};

type IProps = {
  initialValues?: AttributeValue | null;
};
const validationSchema = yup.object().shape({
  value: yup.string().required("Name is required"),
  attribute: yup.object().nullable().required("Attribute is required"),
});
export default function CreateOrUpdateAttributeValueForm({
  initialValues,
}: IProps) {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,

    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    // @ts-ignore
    defaultValues: initialValues ? initialValues : defaultValues,
  });
  const { data, loading, error } = useAttributesQuery({
    variables: {},
    fetchPolicy: "network-only",
  });

  const [
    createAttributeValue,
    { loading: creating },
  ] = useCreateAttributeValueMutation();
  const [
    updateAttributeValue,
    { loading: updating },
  ] = useUpdateAttributeValueMutation();
  const onSubmit = async (values: FormValues) => {
    try {
      if (!initialValues) {
        await createAttributeValue({
          variables: {
            input: {
              value: values.value!,
              meta: values.meta!,
              attribute: { connect: values?.attribute?.id! },
            },
          },
        });
        router.push(ROUTES.ATTRIBUTE_VALUES);
      } else {
        const { data } = await updateAttributeValue({
          variables: {
            input: {
              id: initialValues.id!,
              value: values.value!,
              meta: values.meta!,
              attribute: { connect: values?.attribute?.id! },
            },
          },
        });
        if (data) {
          toast.success("Successfully updated!");
        }
      }
    } catch (err) {
      getErrorMessage(err);
    }
  };
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap my-5 sm:my-8">
        <Description
          title="Description"
          details={`${
            initialValues ? "Update" : "Add"
          } your attribute value and necessary
          information from here`}
          className="w-full px-0 sm:pr-4 md:pr-5 pb-5 sm:w-4/12 md:w-1/3 sm:py-8"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <div className="mb-5">
            <Label>Attributes</Label>
            <SelectInput
              name="attribute"
              control={control}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              options={data?.attributes! as any}
              loading={loading}
            />
            <ValidationError message={errors?.attribute?.message} />
          </div>
          <Input
            label="Name"
            {...register("value")}
            error={errors.value?.message}
            variant="outline"
            className="mb-5"
          />
          <Input
            label="Meta"
            {...register("meta")}
            variant="outline"
            className="mb-5"
          />
        </Card>
      </div>

      <div className="mb-4 text-right">
        {initialValues && (
          <Button
            variant="outline"
            onClick={router.back}
            className="mr-4"
            type="button"
          >
            Back
          </Button>
        )}

        <Button loading={creating || updating}>
          {initialValues ? "Update" : "Add"} Attribute Value
        </Button>
      </div>
    </form>
  );
}
