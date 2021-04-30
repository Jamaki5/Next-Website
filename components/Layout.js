import { useState } from "react";
import Head from "next/head";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import MailIcon from "@material-ui/icons/Mail";

import style from "../styles/All.module.css";
import Nav from "./Nav";
import Footer from "./Footer";

const LINKS = [
  {
    name: "Home",
    path: "/",
    show: true,
    icon: <HomeIcon className="text-white hover:text-gray-300" />,
  },
  {
    name: "Tools",
    path: "/tools",
    show: true,
    icon: <BuildIcon className="text-white hover:text-gray-300" />,
  },
  {
    name: "Contact",
    path: "/contact",
    show: true,
    icon: <MailIcon className="text-white hover:text-gray-300" />,
  },
];

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Head>
        <title>Jann-Marten Kias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:hidden fixed z-50 left-3 top-3 h-10 w-10 bg-black bg-opacity-40 rounded">
        <IconButton
          aria-label="Menu"
          onClick={() => setCollapsed(!collapsed)}
          color="default"
          className="h-10 w-10 "
        >
          <MenuIcon className="text-lg text-white" />
        </IconButton>
      </div>
      <Nav collapsed={collapsed} links={LINKS} setCollapsed={setCollapsed} />
      <div className="min-h-screen md:ml-16">
        <div className={ style.backgroundColor}>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
