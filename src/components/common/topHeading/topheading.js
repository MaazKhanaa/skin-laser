export default function TopHeading({ text, description }) {
    return (
        <div>
            <h1 className="text-white">{text}</h1>
            <p className="text-white mb-0">{description}</p>
        </div>
    )
}