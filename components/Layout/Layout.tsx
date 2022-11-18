// components/Layout.tsx

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main className="bg-background p-1">{children}</main>
    </>
  );
}
