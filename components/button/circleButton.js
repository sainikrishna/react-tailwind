import Button from ".";

export default function CircleButton({children, className}) {
    return <Button className={`${className}`}>
        {children}
    </Button>
}