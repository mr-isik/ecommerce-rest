import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const CartItem = () => {
  return (
    <Card className="flex flex-row items-center">
      <CardHeader>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product"
          className="h-[100px] w-[100px]"
        />
      </CardHeader>
      <CardContent className="flex flex-col pt-8">
        <h2 className="text-xl font-semibold">Product title</h2>
        <p className="text-md text-slate-900 font-semibold text-2xl mt-2">
          31 $
        </p>
      </CardContent>
      <div className="flex flex-1 justify-center items-center gap-4">
        <Button variant="outline" size="icon" className="text-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </Button>

        <p className="text-xl font-semibold">1</p>
        <Button variant="outline" size="icon" className="text-xl">
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Button>
      </div>
      <CardFooter>
        <button className="text-red-600 mt-6 font-semibold">Remove</button>
      </CardFooter>
    </Card>
  );
};

export default CartItem;
