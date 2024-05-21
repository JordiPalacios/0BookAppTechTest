
export default function SectionContainer ({ sectionClassName, children }) {
    return(
        <div className={`flex flex-col items-center text-pretty px-4 mt-2 ${sectionClassName}`}>
            {children}
        </div>
    )
}