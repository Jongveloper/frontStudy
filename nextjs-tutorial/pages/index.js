import { useEffect, useState } from 'react';
import Axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ItemList from '../src/components/ItemList/ItemList';
import { Header, Divider, Loader } from 'semantic-ui-react';

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>HOME | Jongveloper</title>
        <meta name="description" content="next.js를 연습합니다."></meta>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiURL = process.env.apiURL;
  const res = await Axios.get(apiURL);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
