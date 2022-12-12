import React, {Component} from 'react'
import BoutonSignUpfrom from './BoutonSignUp'

export default class ContenuRectangleAdvert extends Component {
    render() {
        return (
       <div>
            <div   className='rectangleAvert'  >
                <div className='boutonConnexionAdvert' >
                     <  BoutonSignUpfrom  />
                 </div>
            </div>
          
        </div>
        )
    }
}