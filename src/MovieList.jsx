import Movie from "./Movie"
    //renderar en lista Movie-komponenter
function MovieList({ movies, onRemove }){
    //skapar en movie-komponent för varje film i listna
    function renderTitle(aTitle) {
        return <Movie key={aTitle.id} movie={aTitle}
        onRemove={onRemove}/>
    }

    return (
        <ul id="movies">
            {movies.map(renderTitle)}
        </ul>
    )
}

export default MovieList