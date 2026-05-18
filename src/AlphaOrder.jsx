//knapp som triggar alfabetisk sortering när den klickas
function orderByAlpha({ onSort }) {
    return (
        <button className="btn btn-secondary me-2"
        onClick= {onSort}> Sortera A-Z</button>

    )
}

export default orderByAlpha 