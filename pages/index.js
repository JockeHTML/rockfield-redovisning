import Head from "next/head";
import HomePage from "../components/home/Home";
import ForWho from "../components/home/forWho/ForWho";
import AboutUs from "../components/home/aboutUs/AboutUs";
import Slider from "../components/slider/Slider";
import Products from "../components/home/products/Products";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Rockfield Redovisning AB</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          content="Frisör på Fridhemsgatan 74, 854 61 Sundsvall.Färgning och klippning, boka tid på 060 - 61 76 10"
        />
      </Head>
      <HomePage />
      <ForWho />
      <AboutUs />
      <Slider />
      <Products />
    </main>
  );
}
