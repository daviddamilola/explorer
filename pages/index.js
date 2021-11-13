import Head from "next/head";
import MapExplorer from "../components/Map";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
       <MapExplorer />
      </main>
    </div>
  );
}
