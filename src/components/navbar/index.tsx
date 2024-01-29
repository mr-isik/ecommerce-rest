import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log((event.target as HTMLFormElement).query.value);
    setSearchParams({ query: (event.target as HTMLFormElement).query.value });
  };

  return (
    <aside className="w-full border-b border-b-border">
      <div className="container py-4 flex justify-between items-center">
        <a href="/">
          <h1 className="text-2xl font-semibold text-slate-700 flex gap-2 items-center">
            GoBuy
          </h1>
        </a>
        <form onSubmit={handleSearch} className="flex gap-2 max-w-md flex-1">
          <Input type="text" name="query" placeholder="Search" />
          <Button variant="outline" size="icon" className="px-2">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>
        </form>
        <div className="flex gap-4 items-center">
          <a href="/cart">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-600 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span className="absolute flex items-center justify-center w-4 h-4 -top-0 -right-0 rounded-full bg-slate-900 text-white text-sm ">
                3
              </span>
            </Button>
          </a>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-40 p-1.5">
              <div className="flex flex-col gap-2">
                <a
                  href="/saved"
                  className="w-full flex gap-2 items-center px-4 py-2 hover:bg-accent rounded-md"
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
                  Saved
                </a>
                <a
                  href="/cart"
                  className="w-full flex gap-2 items-center px-4 py-2 hover:bg-accent rounded-md"
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
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Cart
                </a>
                <a
                  href="/"
                  className="w-full flex gap-2 items-center px-4 py-2 hover:bg-accent rounded-md"
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
                      d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                    />
                  </svg>
                  Logout
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        {/* <div className="flex gap-4">
          <Button>Login</Button>
          <Button variant="secondary">Sign Up</Button>
        </div> */}
      </div>
    </aside>
  );
};

export default Navbar;
