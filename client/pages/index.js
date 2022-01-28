import Meta from "../components/Meta";
import { MyContainer } from "../styles/Mystyles";
import axios from "axios";

export default function Home({ products }) {
  // console.log(products);
  return (
    <div>
      <Meta title={"Home"} />
      <MyContainer maxWidth="xl">weee</MyContainer>
    </div>
  );
}
export const getServerSideProps = async () => {
  try {
    const { data } = await axios.get(`${process.env.PROXY}/api/products`);
    return {
      props: {
        products: data._embedded.products,
      },
      // revalidate: 60,
    };
  } catch (error) {
    const err =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(err);
    return { props: { categories: [] } };
  }
};
