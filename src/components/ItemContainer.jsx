export default function ItemContainer({ index, children }) {
    return (
        <div
            key={index}
            className="flex flex-col items-center justify-between m-6 overflow-hidden"
        >
            {children}
        </div>
    );
}
