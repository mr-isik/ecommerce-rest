import ProductContainer from "@/components/productcontainer";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Saved = () => {
  const { data, error } = useSWR(
    "https://api.escuelajs.co/api/v1/products",
    fetcher
  );

  return (
    <div className="container mt-24">
      {error ? (
        <p>Failed to load products</p>
      ) : (
        <ProductContainer data={data} />
      )}
    </div>
  );
};

export default Saved;
