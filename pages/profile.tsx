import ServiceLayout from "@components/templates/ServiceLayout";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Zipbom | 프로필</title>
      </Head>
      <ServiceLayout>
        <div>내 프로필</div>
      </ServiceLayout>
    </>
  );
};

export default Profile;
