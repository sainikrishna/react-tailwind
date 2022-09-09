export default function Section({children, className}) {
    return <section className={`px-6 md:px-20 ${className}`}>{children}</section>
}