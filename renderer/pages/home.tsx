/** @jsxImportSource @emotion/react */

import React from "react";
import Head from "next/head";
import Template from "../components/template";
import Info from "../components/info";
import { css } from "@emotion/react";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>메뉴 리스트 제작</title>
      </Head>
      <body>
        <section css={css`
          display: flex;
        `}>
          <Template size="A4" />
          <Info />
        </section>
      </body>
    </React.Fragment>
  );
}

export default Home;
