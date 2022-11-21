import { useState } from "react";
import { Skeleton } from "./";

export default function SkeletonLoader(): JSX.Element {
  const [numberOfCards, setNumberOfCards] = useState(6);

  const skeletons = Array.from(Array(numberOfCards).keys());

  return (
    <div>
      {skeletons.map((skeleton) => {
        return <Skeleton key={skeleton} />;
      })}
    </div>
  );
}
