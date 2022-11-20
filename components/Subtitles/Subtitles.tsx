interface SubtitleType {
  postedAt: string;
  contract: string;
  location: string;
}

export default function Subtitles(props: SubtitleType): JSX.Element {
  return (
    <div className="flex flex-row gap-3 text-darkGrayishCyan">
      <p>{props.postedAt}</p>
      <p>•</p>
      <p>{props.contract}</p>
      <p>•</p>
      <p>{props.location}</p>
    </div>
  );
}
