import { Badge } from ".";

interface BadgeGroupType {
  new: boolean;
  featured: boolean;
}

export default function BadgeGroup(props: BadgeGroupType): JSX.Element {
  return (
    <div className="flex flex-row gap-2">
      {props.new ? <Badge label="New!" primary={true} /> : ""}
      {props.featured ? <Badge label="Featured" primary={false} /> : ""}
    </div>
  );
}
