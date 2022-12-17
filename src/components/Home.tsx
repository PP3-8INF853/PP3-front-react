import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
      <div>
          
          <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
            <li>
              <Link to="/hebergements">Hebergements</Link>
            </li>
             <li>
              <Link to="/reservations">Reservation</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Home