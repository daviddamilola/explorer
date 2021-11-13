import Head from "next/head";
import MapExplorer from "../components/Map";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <Nav />
        <MapExplorer />
      </main>
    </div>
  );
}
