import KakaoSignUpLayout from "@components/auth/templates/KakaoSignUpLayout";
import ServiceLayout from "@components/main/templates/ServiceLayout";
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
