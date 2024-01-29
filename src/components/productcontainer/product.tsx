import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Product as ProductType } from "@/types/product";

const Product = ({ title, price, images }: ProductType) => {
  return (
    <Card className="h-[375px] group relative hover:bg-white hover:shadow-xl cursor-pointer">
      <CardHeader>
        <img
          src={images[0]}
          alt={title}
          className="h-[200px] w-auto rounded-md"
        />
      </CardHeader>
      <CardContent className="pb-3">
        <CardTitle className="text-md product-title text-slate-500 whitespace-nowrap overflow-ellipsis overflow-hidden">
          {title}
        </CardTitle>
        <p className="mt-2 text-xl font-semibold text-slate-800">{price} $</p>
      </CardContent>
      <CardFooter className="flex md:hidden group-hover:flex justify-end gap-4">
        <Button
          variant="outline"
          size="icon"
          className="text-slate-600 absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
        </Button>
        <Button className="w-full">Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

export default Product;
