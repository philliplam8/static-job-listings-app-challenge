import { Tag, TagGroup } from "../TagGroup";
import { BadgeGroup } from "../BadgeGroup";
import { Subtitles } from "../Subtitles";
import { Avatar } from "../Avatar";
import { formatId } from "../../helpers";

export const LABEL_TYPES = {
  role: "role",
  level: "level",
  language: "language",
  tool: "tool",
};
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
  const formatedCompany = formatId(props.company);
  const formatedPosition = formatId(props.position);

  return (
    <div
      id={`job-${formatedCompany}-${formatedPosition}`}
      className={`max-w-[1110px] flex flex-col gap-x-3 md:flex-row justify-between px-4 py-11 my-10 md:py-6 md:my-6 mx-auto bg-white rounded-md shadow-xl shadow-primary/20 ${
        props.featured ? "border-l-[5px] border-primary" : ""
      }`}
    >
      <div
        id={`job-details-${formatedCompany}-${formatedPosition}`}
        className="py-2 relative flex flex-col md:flex-row gap-4 md:items-center border-b border-darkGrayishCyan/50 md:border-none"
      >
        <Avatar logo={props.logo} />
        <div className="h-full flex flex-col gap-2 md:gap-0 justify-between">
          <div className="flex flex-row items-center gap-6">
            <h1 className="text-md text-primary font-bold ">{props.company}</h1>
            <BadgeGroup new={props.new} featured={props.featured} />
          </div>
          <h1
            id={`${formatedCompany}-${formatedPosition}`}
            className="md:text-xl font-bold text-veryDarkGrayishCyan hover:text-primary active:text-primary"
          >
            <a href={`#${formatedCompany}-${formatedPosition}`}>
              {props.position}
            </a>
          </h1>
          <Subtitles
            postedAt={props.postedAt}
            contract={props.contract}
            location={props.location}
          />
        </div>
      </div>

      <div
        id={`job-tags-from-${formatedCompany}-${formatedPosition}`}
        className={
          "flex flex-row flex-wrap gap-x-4 md:justify-end items-center"
        }
      >
        <Tag label={props.role} labelType={LABEL_TYPES.role} />
        <Tag label={props.level} labelType={LABEL_TYPES.level} />
        <TagGroup tags={props.languages} labelType={LABEL_TYPES.language} />
        <TagGroup tags={props.tools} labelType={LABEL_TYPES.tool} />
      </div>
    </div>
  );
}
