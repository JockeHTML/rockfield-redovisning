import Head from "next/head";
import HomePage from "../components/home/Home";
import ForWho from "../components/home/forWho/ForWho";
import AboutUs from "../components/home/aboutUs/AboutUs";
import Slider from "../components/slider/Slider";
import Products from "../components/home/products/Products";
import Contact2 from "../components/contact/Contact2";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Rockfield Redovisning AB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Rockfield Redovisning, Allt inom redovisning"
          title="Rockfield Redovisning, Ponnyvägen 6, 857 50 Sundsvall"
        />
        <meta property="og:title" content="Rockfield Redovisning" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HomePage />
      <ForWho />
      <AboutUs />
      <Slider />
      <Products />
      <Contact2 />
    </main>
  );
}
