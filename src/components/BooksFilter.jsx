export default function BooksFilter({ genderValue }) {
    let message;
    console.log(genderValue)

    switch (genderValue) {
        case "Hombre":
            message = "Genero seleccionado: Masculino";
            break;
        case "Mujer":
            message = "Genero seleccionado: Femenino";
            break;
        case "Otros":
            message = "Genero seleccionado: Otros";
            break;
        default:
            message = "Seleccione un genero para filtrar los libros";
    }

    return <div>{message}</div>;
}
