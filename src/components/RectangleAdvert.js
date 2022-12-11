import React, {Component} from 'react'
import BoutonConnexion from './boutonconnection'

export default class ContenuRectangleAdvert extends Component {
    render() {
        return (
       <div>
            <div   className='rectangleAvert'  >
                <div className='boutonConnexionAdvert' >
                     <  BoutonConnexion />
                 </div>
            </div>
          
        </div>
        )
    }
}