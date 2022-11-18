export default function Tag(props: { label: string }): JSX.Element {
  return (
    <button className="mt-4 md:mt-0 py-1 px-2 bg-lightGrayishCyan hover:bg-primary active:bg-primary text-primary hover:text-white active:text-white rounded-md">
      <h3 className=" text-sm font-bold">{props.label}</h3>
    </button>
  );
}
