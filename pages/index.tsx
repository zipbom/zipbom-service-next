import type { NextPage } from "next";
import ServiceLayout from "@components/main/templates/ServiceLayout";
import Head from "next/head";
import {} from "react-device-detect";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zipbom | Home</title>
      </Head>
      <ServiceLayout>
        <div>hello Next</div>
      </ServiceLayout>
    </>
  );
};

export default Home;
