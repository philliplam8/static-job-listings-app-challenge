import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function Tag(props: { label: string }): JSX.Element {
  return (
    <div className="mt-4 p-1 bg-lightGrayishCyan rounded-md">
      <h3 className="text-primary text-sm font-bold">{props.label}</h3>
    </div>
  )
}
