import {
  useState,
  useContext,
  useEffect,
  SetStateAction,
  useMemo,
} from "react";
import { FilterContext } from "../../context/FilterContext";
import { Job, JobType, LABEL_TYPES } from "./";

export default function Jobs(props: { allJobs: JobType[] }): JSX.Element {
  const [filters] = useContext(FilterContext);
  const [filteredJobs, setFilteredJobs] = useState(props.allJobs);

  useEffect(() => {
    // Show all jobs if there are no filters
    if (Object.keys(filters).length === 0) {
      setFilteredJobs(props.allJobs);
    }

    // Show only jobs that match the existing filters
    else {
      let newFilteredJobs: SetStateAction<JobType[]> = [...props.allJobs];
      for (let i = 0; i < Object.keys(filters).length; i++) {
        const currentFilter = Object.keys(filters)[i];
        const currentFilterType = Object.values(filters)[i];

        // Filter jobs based on ROLE
        if (currentFilterType === LABEL_TYPES.role) {
          newFilteredJobs = newFilteredJobs.filter(
            (job) => job.role === currentFilter
          );
        }
        // Filter jobs based on LEVEL
        else if (currentFilterType === LABEL_TYPES.level) {
          newFilteredJobs = newFilteredJobs.filter(
            (job) => job.level === currentFilter
          );
        }
        // Filter jobs based on PROGRAMMING LANGUAGES
        else if (currentFilterType === LABEL_TYPES.language) {
          newFilteredJobs = newFilteredJobs.filter((job) =>
            job.languages.includes(currentFilter)
          );
        }
        // Filter jobs based on TOOLS
        else if (currentFilterType === LABEL_TYPES.tool) {
          newFilteredJobs = newFilteredJobs.filter((job) =>
            job.tools.includes(currentFilter)
          );
        }
      }
      setFilteredJobs(newFilteredJobs);
    }
  }, [filters, props.allJobs]);

  return (
    <div id="jobs">
      {filteredJobs.map((job: JobType) => {
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
  );
}
