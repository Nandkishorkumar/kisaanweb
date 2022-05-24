import LoginForm from "@components/auth/login-form";
import Loader from "@components/ui/loader/loader";
import Logo from "@components/ui/logo";
import { ROUTES } from "@utils/routes";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import React from 'react'
// export const getServerSideProps: GetServerSideProps = async (context: any) => {
//   const cookies = parseContextCookie(context?.req?.headers?.cookie);
//   if (cookies?.auth_token) {
//     if (cookies?.auth_permissions?.includes(SUPER_ADMIN)) {
//       return {
//         redirect: { destination: ROUTES.DASHBOARD, permanent: false },
//       };
//     }
//   }
//   return {
//     props: {},
//   };
// };

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    (async () => {
      try {
        await Auth.currentAuthenticatedUser();
        await router.push(ROUTES.ORDERS)
        setLoading(false)
      } catch (err) {
        setLoading(false)
      }
    })()
  }, [])
  if (loading) return <Loader />;
  return (
    <div className="flex items-center justify-center h-screen bg-white sm:bg-gray-100">
      <div className="m-auto max-w-sm w-full bg-white sm:shadow p-5 sm:p-8 rounded">
        <div className="flex justify-center mb-2">
          <Logo />
        </div>
        <h3 className="text-center text-base italic text-gray-500 mb-6 mt-4">
          Login to admin
        </h3>
        <LoginForm />
      </div>
    </div>
  );
}
