import axios from 'axios';
import Head from 'next/dist/shared/lib/head';
import Item from '../../src/components/Item/Item';

const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiURL = `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiURL);
  const data = res.data;
  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
