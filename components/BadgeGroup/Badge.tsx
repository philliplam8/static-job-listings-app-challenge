interface BadgeType {
  label: string;
  primary: boolean;
}

export default function Badge(props: BadgeType): JSX.Element {
  return (
    <div
      className={`flex h-full px-2 pt-1 text-sm uppercase text-white rounded-xl ${
        props.primary ? "bg-primary" : "bg-veryDarkGrayishCyan"
      }`}
    >
      {props.label}
    </div>
  );
}
