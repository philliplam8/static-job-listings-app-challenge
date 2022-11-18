import Head from "next/head";
import { Job } from "../components/Job";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Job Listings</title>
        <meta
          name="description"
          content="Frontend Mentor - Static Job Listings Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="jobs">
        <Job
          image={""}
          company={"Photosnap"}
          title={"Senior Frontend Developer"}
        />
      </div>
    </div>
  );
}
