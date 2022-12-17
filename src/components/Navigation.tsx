import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Navigation() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">PrixBanque</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/virement">Nouveau virement</Nav.Link>
            <Nav.Link href="/releve">Relevé de comptes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>  
    </div>
  )
}

export default Navigation