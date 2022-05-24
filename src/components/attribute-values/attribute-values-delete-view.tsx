import ConfirmationCard from "@components/common/confirmation-card";
import { useUI } from "@contexts/ui.context";
// import { useDeleteAttributeValueMutation } from "@graphql/attributes.graphql";
import { getErrorMessage } from "@utils/form-error";

const AttributeValueDeleteView = () => {
  // const [
  //   deleteAttributeValueByID,
  //   { loading },
  // ] = useDeleteAttributeValueMutation({
  //   //@ts-ignore
  //   update(cache, { data: { deleteAttributeValue } }) {
  //     cache.modify({
  //       fields: {
  //         attributeValues(existingRefs, { readField }) {
  //           return existingRefs.filter(
  //             (ref: any) => deleteAttributeValue.id !== readField("id", ref)
  //           );
  //         },
  //       },
  //     });
  //   },
  // });

  const { closeModal, modalData } = useUI();
  async function handleDelete() {
    try {
      // await deleteAttributeValueByID({
      //   variables: { id: modalData },
      // });
      closeModal();
    } catch (error) {
      closeModal();
      getErrorMessage(error);
    }
  }
  return (
    <ConfirmationCard
      onCancel={closeModal}
      onDelete={handleDelete}
      deleteBtnLoading={false}
    />
  );
};

export default AttributeValueDeleteView;
