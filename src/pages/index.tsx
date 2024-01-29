import Categories from "@/components/categories";
import ProductContainer from "@/components/productcontainer";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Home = () => {
  const { data, error } = useSWR(
    "https://api.escuelajs.co/api/v1/products",
    fetcher
  );

  return (
    <div className="container grid grid-cols-4 mt-24 gap-6">
      <Categories />
      {error ? (
        <p>Failed to load products</p>
      ) : (
        <ProductContainer data={data} />
      )}
    </div>
  );
};

export default Home;
