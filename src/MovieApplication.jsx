import { useState } from "react"
import AddMovieForm from "./AddMovieForm"
import MovieList from "./MovieList"
import AlphaOrder from "./AlphaOrder"
import GradeOrder from "./GradeOrder"

//vår main komponent som hanterar state och för hela filmlistan
function MovieApplication() {
    //movies håller en lista för alla filmer som har lagts till
    let [movies, setMovies] = useState([])
    //Lägger till en ny film med titel, betyg och ett ID
    function handleAddMovie(newMovie) {
        let movieId = {
            title: newMovie.title,
            rating: newMovie.rating,
            id: Date.now()
        }
        const updateMovieList = movies.concat(movieId)

        setMovies(updateMovieList)
    }
    //tar bort en film från listan, detta görs med hjälp av id
    function handleRemoveMovie(movieIdToRemove) {
        let unaffectedMovies = movies.filter(function(aTitle) {
            return aTitle.id !== movieIdToRemove
        })
    
        setMovies(unaffectedMovies)
    
        
    }
    //sorterar filmer i bokstavsordning
    function handleSortByAlpha() {
        let filmListCopy = movies.slice() //kopierar listan för att inte ändra på orginalet

        let sortedFilmList = filmListCopy.sort(function(filmA, filmB) {
            if (filmA.title > filmB.title) {
                return 1
            }
            if (filmA.title < filmB.title) {
                return -1
            }
            return 0
        })
        setMovies(sortedFilmList) 
    } 
    //sortera filmer från högst till lägst betyg
    function handleSortGrade() {
        let filmListCopy = movies.slice()
        let sortedFilmList = filmListCopy.sort(function(filmA, filmB){
            return filmB.rating - filmA.rating
        })
        setMovies(sortedFilmList)
    }

    return (

        <div className = "container mt-5">
            <h1>Min filmlista</h1>
            <AddMovieForm onAddMovie={handleAddMovie}/>
            <hr />
            <h2>Filmer</h2>
            <AlphaOrder onSort={handleSortByAlpha} />
            <GradeOrder onSort={handleSortGrade}/>

            <MovieList movies={movies} onRemove={handleRemoveMovie} />
    
        </div>
        
    )
}




export default MovieApplication