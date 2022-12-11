import React from 'react'
import ContenuAccueilTexte from './TexteAccueil'
import ContenuRectangleAdvert from './RectangleAdvert'

 function Accueil () {
  
    
        return (
            <div className="Container" >
        <div  className="section no-pad-bot" >
            <div className='content'>
              <ContenuAccueilTexte />
            </div>
            <div className='content'>
              <ContenuRectangleAdvert />
            </div>
       </div>
       </div>
        )
    
}

export default Accueil;