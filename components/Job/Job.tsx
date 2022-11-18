interface JobProps {
  image: string;
  company: string;
  title: string;
}

export default function Job(props: JobProps): JSX.Element {
  return (
    <div
      id={`job-${props.title}`}
      className="flex flex-col md:flex-row justify-between p-4 border-2 rounded-md shadow-lg"
    >
      <div
        id={`job-details-${props.title}`}
        className="flex flex-col md:flex-row gap-4 md:items-center border-b md:border-none"
      >
        <div className="w-24 h-24 border-2 rounded-[100%]">Avatar</div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <h2 className="text-md font-bold">{props.company}</h2>
            <div>NEW!</div>
            <div>FEATURED</div>
          </div>
          <h1 className="md:text-xl font-bold">{props.title}</h1>
          <div className="flex flex-row gap-2">
            <div>1d ago</div>
            <div>Full Time</div>
            <div>USA only</div>
          </div>
        </div>
      </div>



      <div
        id={`job-tags-${props.title}`}
        className={"flex flex-row gap-2 md:justify-center items-center"}
      >
        <div>Frontend</div>
        <div>Senior</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>JavaScript</div>
      </div>
    </div>
  );
}
