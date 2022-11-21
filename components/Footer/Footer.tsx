export default function Footer(): JSX.Element {
  function Link(props: { label: string; link: string }) {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="font-bold hover:text-primary hover:underline active:text-primary active:underline"
      >
        {props.label}
      </a>
    );
  }

  return (
    <footer className="flex flex-row justify-center py-5 text-xs">
      <p>
        Challenge by{" "}
        <Link
          label="Frontend Mentor"
          link="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt"
        />
        . Coded by{" "}
        <Link
          label="Phillip Lam"
          link="https://github.com/philliplam8/static-job-listings-app-challenge"
        />
        .
      </p>
    </footer>
  );
}
