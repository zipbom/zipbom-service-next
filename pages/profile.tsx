import AppLayout from "@components/AppLayout";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Zipbom | 프로필</title>
      </Head>
      <AppLayout>
        <div>내 프로필</div>
      </AppLayout>
    </>
  );
};

export default Profile;
