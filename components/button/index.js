export default function Button({children, className}) {
    return <button className={`mr-20 neumorphic text-xm ${className}`}>
    {children}
</button>
}