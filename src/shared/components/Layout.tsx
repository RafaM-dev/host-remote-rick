import { Outlet } from "react-router";
import Header from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";

const Layout = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-neutral-100">
      <Header search={search} setSearch={setSearch} />
      <main>
        <Outlet context={{ search, setSearch }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
