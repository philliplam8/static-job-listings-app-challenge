import { Tag } from '../Tag'

interface JobProps {
  image: string;
  company: string;
  title: string;
}

export default function Job(props: JobProps): JSX.Element {
  return (
    <div
      id={`job-${props.title}`}
      className="flex flex-col md:flex-row justify-between px-4 py-10 md:py-4 m-10 border-l-4 border-primary rounded-md shadow-lg"
    >
      <div
        id={`job-details-${props.title}`}
        className="flex flex-col md:flex-row gap-4 md:items-center border-b border-lightGrayishCyan md:border-none"
      >
        <div className="w-16 h-16 md:w-24 md:h-24 absolute md:relative top-2 border-2 rounded-[100%]">Avatar</div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <h2 className="text-md text-primary font-bold ">{props.company}</h2>
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
        className={"flex flex-row flex-wrap gap-2 md:justify-center items-center"}
      >
        <Tag label="Frontend" />
        <Tag label="Senior" />
        <Tag label="HTML" />
        <Tag label="CSS" />
        <Tag label="JavaScript" />
      </div>
    </div >
  );
}
