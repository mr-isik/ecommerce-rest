import CartItem from "@/components/cartitem";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div className="container mt-24 grid grid-cols-4 gap-6">
      <div className="col-span-3 flex flex-col gap-6">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="border border-border rounded-md flex flex-col gap-6 p-6 h-max">
        <h2 className="text-2xl font-semibold">Cart Summary</h2>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-lg">Subtotal</p>
            <p className="text-lg font-bold">$ 124</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Shipping</p>
            <p className="text-lg font-bold">$ 0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Tax</p>
            <p className="text-lg font-bold">$ 0</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg">Total</p>
            <p className="text-lg font-bold">$ 124</p>
          </div>
        </div>
        <Button>Proceed to checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
