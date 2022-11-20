import Head from "next/head";
import useSWR from "swr";
import { Layout } from "../components/Layout";
import { Job, JobType } from "../components/Job";
import { AppliedFilters } from "../components/Filter";

// Fetcher functop to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  // Set up SWR to run the fetch function when calling '/api/staticdata'
  // There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR("/api/staticdata", fetcher);

  // Handle the error state
  if (error) return <div>Failed to load</div>;
  // Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  const jobs = JSON.parse(data.toString());
  return (
    <Layout>
      <Head>
        <title>Frontend Mentor | Job Listings</title>
        <meta
          name="description"
          content="Frontend Mentor - Static Job Listings Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppliedFilters />

      <div id="jobs">
        {jobs.map((job: JobType) => {
          return (
            <Job
              id={job.id}
              key={job.id}
              company={job.company}
              logo={job.logo}
              new={job.new}
              featured={job.featured}
              position={job.position}
              role={job.role}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
            />
          );
        })}
      </div>
    </Layout>
  );
}
