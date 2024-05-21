export default function ItemContainer ({ index, children }) {
    return (
        <div key={index} className="mb-2">
            {children}
        </div>
    )
}