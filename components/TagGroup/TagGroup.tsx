import { Tag } from "./";

interface TagGroup {
  tags: string[];
  labelType: string;
}

export default function TagGroup(props: TagGroup): JSX.Element {
  return (
    <>
      {props.tags.map((tag: string) => {
        return <Tag key={tag} label={tag} labelType={props.labelType} />;
      })}
    </>
  );
}
