//skapar en film med betygsstjärna och ta-bort-knapp
function Movie({ movie, onRemove }) {
    let stars = []
    //skapar en lista med stjärnor baserat på betyget
    for (let starIndex = 0; starIndex < movie.rating; starIndex++){
        stars.push(
            <img key={starIndex} src="/star.png" alt="betygsstjärna" />

        )
    }
    //anropar onRemove med filmens id för att ta bort rätt film från listan
    function handleRemoveClick() {
        onRemove(movie.id)
    }

    return (
        <li>
            {movie.title}
            <img
            src= "/delete.png"
            alt="ta bort film indikator"
            style={{ cursor: "pointer" }}
            onClick={handleRemoveClick}/>
            {stars}
        </li>
    )
}

export default Movie