import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {loginCustomer} from "../utils/session";

function Home() {
    useEffect(() => {
        /*loginCustomer({username: "Celia", password: "9999"}).then((res) => {
            console.log(res);
        }).catch(err => console.log(err));*/

        fetch("http://localhost:4444/authentication-service/customers/login", {
            method: "POST",
            body: JSON.stringify({username: "Celia", password: "9999"}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(RES => {
            console.log(RES);
        }).catch(err => console.log(err));
    });

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