import useSWR from "swr";
import { Layout } from "../components/Layout";
import { Jobs } from "../components/Job";
import { AppliedFilters } from "../components/Filter";
import { SkeletonLoader } from "../components/SkeletonLoader";

export default function Home() {
  // Fetcher functop to wrap the native fetch function and return the result of a call to url in json format
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // Set up SWR to run the fetch function when calling '/api/staticdata'
  // There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR("/api/staticdata", fetcher);

  // Handle the error state
  if (error)
    return (
      <Layout>
        <div className="my-8">Failed to load jobs</div>
      </Layout>
    );

  // Handle the loading state and the ready state and display the result contained in the data object
  // mapped to the structure of the json file
  return (
    <Layout>
      <AppliedFilters />
      {!data ? (
        <SkeletonLoader />
      ) : (
        <Jobs allJobs={JSON.parse(data.toString())} />
      )}
    </Layout>
  );
}
