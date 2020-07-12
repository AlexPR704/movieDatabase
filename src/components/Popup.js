import React from 'react'

fucntion Popup({ selected, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{ selected.Title } <span>({ selected.Year })</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                
            </div>
        </section>
    )
}