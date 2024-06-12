import Head from 'next/head';
import Image from 'next/image';
import getConfig from 'next/config';

import React from "react";
import ReactDOM from "react-dom/client";
import MyApp from "./MyApp.jsx";

import styles from 'src/styles/Home.module.css';
import "./index.css";

const { publicRuntimeConfig } = getConfig();
const { NODE_ENV } = publicRuntimeConfig;

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="Trip dashboard" />

        <link rel="icon" href="https://i0.wp.com/www.aerchain.io/wp-content/uploads/2023/03/cropped-Favicon.png?fit=32%2C32&amp;ssl=1" sizes="32x32" />
        <link rel="icon" href="https://i0.wp.com/www.aerchain.io/wp-content/uploads/2023/03/cropped-Favicon.png?fit=192%2C192&amp;ssl=1" sizes="192x192" />
        <link rel="apple-touch-icon" href="https://i0.wp.com/www.aerchain.io/wp-content/uploads/2023/03/cropped-Favicon.png?fit=180%2C180&amp;ssl=1" />
        <meta name="msapplication-TileImage" content="https://i0.wp.com/www.aerchain.io/wp-content/uploads/2023/03/cropped-Favicon.png?fit=270%2C270&amp;ssl=1" />
        <link rel="prefetch" href="https://www.aerchain.io/contact-us/" />
        
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Image
          src="/nextjs-logo.svg"
          alt="Next.js logo"
          width={120}
          height={70}
        />
        <div>Environment: {NODE_ENV}</div>
      </main>
      <MyApp />
    </div>
  );
};

export default Home;
