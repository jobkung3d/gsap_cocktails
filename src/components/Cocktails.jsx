import React from 'react'
import { navLinks } from '../../constants'

function Cocktails() {
    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" className="left-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" className="right-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>

                    <ul>
                        {cocktailLists.map((drink) => (
                            <li key={drink.id}>
                                <a href={`#${drink.id}`}>{drink.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktails