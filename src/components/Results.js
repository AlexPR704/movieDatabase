import React from 'react'

import Result from './Result'

function Results ({ results }) {
    return (
        <section className="results">
            <Result result={result} />
        </section>
    )
}

export default Results