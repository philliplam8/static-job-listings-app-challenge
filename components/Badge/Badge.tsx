interface BadgeType {
    label: string;
    primary: boolean;
}

export default function Badge(props: BadgeType): JSX.Element {
    return (
        <div className={`${props.primary ? "bg-background" : "bg-black"}`}>
            {props.label}
        </div >);
}