interface LinkProps {
  label: string;
  link: string;
}

function Link(props: LinkProps): JSX.Element {
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

export default function Footer(): JSX.Element {
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
