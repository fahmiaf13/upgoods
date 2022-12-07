import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
interface Props {
  children: React.ReactNode;
  title?: string;
}

const Template = (props: Props) => {
  const { children, title } = props;
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title ? `${title} | Upgoods` : "Upgoods"}</title>
      </Helmet>
      <Navbar />
      <div className="px-[2rem] md:px-[5rem]">{children}</div>
    </div>
  );
};

export default Template;
