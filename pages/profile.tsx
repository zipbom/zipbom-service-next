import ServiceLayout from "@components/service/templates/ServiceLayout";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Zipbom | Profile</title>
      </Head>
      <ServiceLayout>
        <div>내 프로필</div>
      </ServiceLayout>
    </>
  );
};

export default Profile;
