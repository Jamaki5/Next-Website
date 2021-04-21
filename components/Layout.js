import { useState } from "react";
import Head from "next/head";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import MailIcon from "@material-ui/icons/Mail";

import Nav from "./Nav";

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
  const [broken, setBroken] = useState(false);

  return (
    <>
      <Head>
        <title>Jann-Marten Kias</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:hidden fixed z-50 left-3 top-3 h-10 w-10 bg-black bg-opacity-40 rounded">
        <IconButton color="default" className="h-10 w-10 ">
          <MenuIcon className="text-lg text-white" />
        </IconButton>
      </div>
      <Nav links={LINKS} />
      <div className="min-h-screen w-content min-w-full md:ml-16">
        {children}
      </div>
    </>
  );
}

export default Layout;
