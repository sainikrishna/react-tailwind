export default function Button({children, className}) {
    return <button className={`mr-20 neumorphic text-xs py-1 md:py-2.5 px-3 md:px-9 md:text-xm ${className}`}>
    {children}
</button>
}