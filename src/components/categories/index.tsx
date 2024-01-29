import useSWR from "swr";
import axios from "axios";
import { Category } from "@/types/category";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Categories = () => {
  const { data, error } = useSWR(
    "https://api.escuelajs.co/api/v1/categories",
    fetcher
  );

  return (
    <aside className="border border-border rounded-md hidden md:flex flex-col p-8 h-max">
      <h3 className="text-xl font-semibold text-slate-800 mb-4">Categories</h3>
      <ul className="flex flex-col gap-2">
        {data?.map((category: Category) => (
          <li
            key={category.id}
            className="text-md text-slate-500 cursor-pointer hover:text-slate-700"
          >
            {category.name}
          </li>
        ))}
        {error && <p>Failed to load categories</p>}
      </ul>
    </aside>
  );
};

export default Categories;
