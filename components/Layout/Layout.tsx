// components/Layout.tsx

import Image from "next/image";
import { AppliedFilters } from "../Filter";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main className="bg-background">
        <div className="min-w-screen object-fill bg-primary">
          <Image
            src={`/images/bg-header-desktop.svg`}
            alt={"background-header"}
            width={10000}
            height={200}
            className={"object-fill"}
          />
        </div>
        <div className="min-[1200px]:px-auto px-10">{children}</div>
      </main>
    </>
  );
}
