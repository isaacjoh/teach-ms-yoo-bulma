import React from "react";
import Header from "./Header";
import Router from "./Router";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (
  <div className="site">
    <Helmet
      title="Hayoung Yoo Oh"
      meta={[
        { name: "description", content: "Ms. Yoo's personal website" },
        { name: "keywords", content: "teacher, school, education" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "theme-color", content: "#ffffff" },
      ]}
      script={[
        { src: "https://use.fontawesome.com/releases/v5.0.4/js/all.js" },
        { src: "https://code.jquery.com/jquery-3.3.1.min.js" },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.10.0/js/lightbox-plus-jquery.min.js",
        },
      ]}
      link={[
        {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.10.0/css/lightbox.min.css",
        },
      ]}
    />
    <Header />
    <div className="site-content">
      <Router />
    </div>
    <Footer />
  </div>
);

export default Layout;
