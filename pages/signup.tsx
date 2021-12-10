import KakaoSignUpLayout from "@components/auth/templates/AuthSignUpLayout";
import ServiceLayout from "@components/service/templates/ServiceLayout";
import Head from "next/head";

const SignUp = () => {
  return (
    <>
      <Head>
        <title>Zipbom | 회원 가입</title>
      </Head>
      <ServiceLayout>
        <KakaoSignUpLayout />
      </ServiceLayout>
    </>
  );
};

export default SignUp;
