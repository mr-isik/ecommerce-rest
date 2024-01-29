import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
