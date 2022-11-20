import { Job, JobType } from "./";

export default function Jobs(props: { selectedJobs: JobType[] }): JSX.Element {
  return (
    <div id="jobs">
      {props.selectedJobs.map((job: JobType) => {
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
