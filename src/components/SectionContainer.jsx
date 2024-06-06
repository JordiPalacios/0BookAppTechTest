export default function SectionContainer({ sectionClassName, children }) {
    return (
        <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-cols-fr  text-pretty gap-4 my-6 mx-6 ${sectionClassName}`}
        >
            {children}
        </div>
    );
}
