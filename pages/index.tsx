import type { NextPage } from "next";
import ServiceLayout from "@components/service/templates/ServiceLayout";
import Head from "next/head";
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
