import Product from "@/components/productcontainer/product";
import { Product as ProductType } from "@/types/product";

const ProductContainer = ({ data }: { data: ProductType[] }) => {
  return (
    <div
      className={`col-span-4 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4`}
    >
      {data?.map((product: ProductType) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductContainer;
