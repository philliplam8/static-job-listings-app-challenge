interface SubtitleType {
  postedAt: string;
  contract: string;
  location: string;
}

export default function Subtitles(props: SubtitleType): JSX.Element {
  function Divider() {
    return <p className="text-darkGrayishCyan/50">•</p>;
  }

  return (
    <div className="flex flex-row gap-3 text-darkGrayishCyan">
      <p>{props.postedAt}</p>
      <Divider />
      <p>{props.contract}</p>
      <Divider />
      <p>{props.location}</p>
    </div>
  );
}
