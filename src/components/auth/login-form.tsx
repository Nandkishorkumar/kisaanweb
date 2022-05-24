import Alert from "@components/ui/alert";
import Button from "@components/ui/button";
import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
// import { useLoginMutation } from "@graphql/auth.graphql";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { useApolloClient } from "@apollo/client";
import { SUPER_ADMIN } from "@utils/constants";
import { ROUTES } from "@utils/routes";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Auth } from 'aws-amplify';

type FormValues = {
  email: string;
  password: string;
};
const loginFormSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup.string(),
});
const LoginForm = () => {
  const client = useApolloClient();
  // const [login, { loading }] = useLoginMutation();
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginFormSchema),
  });
  const router = useRouter();

  async function onSubmit({ email, password }: FormValues) {
    // await client.resetStore();

    // const { data } = await login({
    //   variables: {
    //     email,
    //     password,
    //   },
    // });
    try {


      const data = await Auth.signIn({ username: email, password })
      // console.log({ data })
      // if (data?.login?.token) {
      //   if (
      //     data?.login?.permissions?.length &&
      //     data?.login?.permissions.includes(SUPER_ADMIN)
      //   ) {
      //     Cookies.set("auth_token", data?.login?.token);
      //     Cookies.set("auth_permissions", data?.login?.permissions);
      //     await router.push(ROUTES.DASHBOARD);
      //   } else {
      //     setErrorMsg("Doesn't have enough permission");
      //   }
      // } else {
      //   setErrorMsg("The credentials was wrong!");
      // }
      localStorage.setItem('loggedIn', 'true')
      await router.push(ROUTES.ORDERS)
      router.reload()
    } catch (err: any) {
      setErrorMsg(err.message)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="Email"
          {...register("email")}
          type="email"
          variant="outline"
          className="mb-4"
          error={errors?.email?.message}
        />
        <PasswordInput
          label="Password"
          {...register("password")}
          error={errors?.password?.message}
          variant="outline"
          className="mb-4"
          forgotPageLink="/forgot-password"
        />
        <Button className="w-full" loading={false} disabled={false}>
          Login
        </Button>

        {errorMsg ? (
          <Alert
            message={errorMsg}
            variant="error"
            closeable={true}
            className="mt-5"
            onClose={() => setErrorMsg("")}
          />
        ) : null}
      </form>
    </>
  );
};

export default LoginForm;
