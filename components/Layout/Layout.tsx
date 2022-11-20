// components/Layout.tsx

import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main className="bg-background">
        <div className="min-w-screen bg-primary object-cover">
          <Image
            src={`/images/bg-header-desktop.svg`}
            alt={"background-header"}
            width={5000}
            height={156}
          />
        </div>
        <div className="min-[1200px]:px-auto px-10">{children}</div>
      </main>
    </>
  );
}
