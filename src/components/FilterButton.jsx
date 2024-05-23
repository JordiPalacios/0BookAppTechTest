export default function FilterButton({ genre, setGenre }) {

    const handleChange = (genderValue) => {
        let gender = genderValue.target.value;

        if (gender === "Fantasía") {
            setGenre("Fantasía");
        } else if (gender === "Ciencia ficción") {
            setGenre("Ciencia ficción");
        } else if (gender === "Zombies") {
            setGenre("Zombies");
        } else if (gender === "Terror") {
            setGenre("Terror");
        } else {
            setGenre("Todos");
        }
    };

    return (
        <>
            <select
                className="px-2 py-1 rounded-lg bg-black/80 text-emerald-400"
                name="gender"
                id="1"
                onChange={handleChange}
            >
                <option className="text-emerald-300 bg-black/70" value="Todos">
                    Todos
                </option>
                <option
                    className="text-emerald-300 bg-black/70"
                    value="Fantasía"
                >
                    Fantasía
                </option>
                <option
                    className="text-emerald-300 bg-black/70"
                    value="Ciencia ficción"
                >
                    Ciencia Ficción
                </option>
                <option
                    className="text-emerald-300 bg-black/70"
                    value="Zombies"
                >
                    Zombies
                </option>
                <option className="text-emerald-300 bg-black/70" value="Terror">
                    Terror
                </option>
            </select>
        </>
    )
}