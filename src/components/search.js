import React from 'react'

function Search () {
    const apiurl = "http://www.omdbapi.com/?apikey=trilogy";

    return (
      <section className="seachbox-wrap">
          <input type="text" placeholder="Search for a movie..." className="searchbox" />
      </section>
    )
}

export default Search