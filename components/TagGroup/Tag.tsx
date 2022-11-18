export default function Tag(props: { label: string }): JSX.Element {
  return (
    <div className="mt-4 md:mt-0 py-1 px-2 bg-lightGrayishCyan rounded-md">
      <h3 className="text-primary text-sm font-bold">{props.label}</h3>
    </div>
  );
}
