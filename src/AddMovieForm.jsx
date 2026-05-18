import { useState } from "react"

//formulär för att lägga till film med betyg och titel
function AddMovieForm({ onAddMovie }){
    //state för formulärets titel och betygsfält
    let [filmTitel, setFilmTitel] = useState("")
    let [filmBetyg, setFilmBetyg] = useState("0")

    //uppdaterar titeln i state förnär användaren skriver
    function handleTitle(event) {
        setFilmTitel(event.target.value)
    }

    //Uppdaterar betyget i state när användaren väljer i dropdown 
    function handleGrade(event) {
        setFilmBetyg(event.target.value)
    }

    //Validerar formuläret och skickar filmen till MovieApplication, fälten nollställs efter
    function handleSubmit(event){
        event.preventDefault()

        if (filmTitel === "") {
            alert("Fyll i titel!")
            return
        } if (filmBetyg === "0") {
            alert("Fyll i betyg, tack.")
        }
    
        onAddMovie({ title: filmTitel, rating: Number(filmBetyg)})
        setFilmTitel("")
        setFilmBetyg("0")
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Lägg till en film</legend>
                <label htmlFor="title-field"></label>
                <input 
                    type = "text"
                    id = "title-field"
                    className = "form-control"
                    value = {filmTitel}
                    onChange = {handleTitle}/>

                    <label htmlFor = "rating-field">Betyg: </label>
                    <select 
                        id="rating-field"
                        className="form-control"
                        value= {filmBetyg}
                        onChange={handleGrade}>
                        
                            <option value="0">välj betyg här</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input
                            type="submit"
                            className = "btn btn-success mt-2" 
                            value = "Spara film"/>
            </fieldset>
        </form>
    )
}

export default AddMovieForm 