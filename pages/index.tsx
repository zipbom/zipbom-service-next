import type { NextPage } from "next";
import ServiceLayout from "@components/service/templates/ServiceLayout";
import MapView from "@components/service/templates/MapLayout";
import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zipbom</title>
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=u27hpbj3bf"
        />
      </Head>
      <ServiceLayout>
        <MapView />
      </ServiceLayout>
    </>
  );
};

export default Home;
