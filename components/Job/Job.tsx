import { Tag, TagGroup } from "../TagGroup";
import { BadgeGroup } from "../BadgeGroup";
import Image from "next/image";

export interface JobType {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export default function Job(props: JobType): JSX.Element {
  return (
    <div
      id={`job-${props.position}`}
      className="flex flex-col md:flex-row justify-between px-4 py-10 md:py-4 m-10 bg-white border-l-4 border-primary rounded-md shadow-lg"
    >
      <div
        id={`job-details-${props.position}`}
        className="relative flex flex-col md:flex-row gap-4 md:items-center border-b border-lightGrayishCyan md:border-none"
      >
        <div className="w-14 h-14 md:w-24 md:h-24 mt-2 md:mt-0 -top-[70px] md:top-0 absolute md:relative rounded-[100%] object-fit">
          <Image src={props.logo} alt={""} width={100} height={100} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-3">
            <h2 className="text-md text-primary font-bold ">{props.company}</h2>
            <BadgeGroup new={props.new} featured={props.featured} />
          </div>
          <h1 className="md:text-xl font-bold">{props.position}</h1>
          <div className="flex flex-row gap-2">
            <div>1d ago</div>
            <div>Full Time</div>
            <div>USA only</div>
          </div>
        </div>
      </div>

      <div
        id={`job-tags-${props.position}`}
        className={
          "flex flex-row flex-wrap gap-2 md:justify-center items-center"
        }
      >
        <Tag label={props.role} />
        <Tag label={props.level} />
        <TagGroup tags={props.languages} />
        <TagGroup tags={props.tools} />
      </div>
    </div>
  );
}
