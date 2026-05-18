//knapp som triggar sortering efter betyg när den klickas
function orderByGrade({ onSort }) {
    return (
        <button className="btn btn-secondary"
        onClick= {onSort}> Sortera efter betyg</button>

    )
}

export default orderByGrade