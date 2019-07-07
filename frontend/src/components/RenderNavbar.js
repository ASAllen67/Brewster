import React, { Fragment } from 'react'
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaAngleLeft, FaBeer, FaAngleRight, FaSearch } from 'react-icons/fa';

const RenderNavbar = (props)=> {
  return (
    <Navbar bg="dark" variant="dark" style={{ fontSize: '1.2em' }}>
      <LinkContainer to='/'><h3 id="nav-logo"><FaAngleLeft/>Brewster <FaBeer/><FaAngleRight/></h3></LinkContainer>
      <span>&nbsp; &nbsp; &nbsp;</span>
      <Nav className="mr-auto">
        <LinkContainer to='/about-us'><Nav.Link>About Us</Nav.Link></LinkContainer>
        <span>&nbsp; &nbsp; &nbsp;</span>
        {
          props.loggedIn ?
            <Nav.Link onClick={props.changeLoggedIn}>Logout</Nav.Link>
            :
            <Fragment>
              <LinkContainer to='/login'><Nav.Link>Login</Nav.Link></LinkContainer>
              <span>&nbsp; &nbsp; &nbsp;</span>
              <LinkContainer to='/sign-up'><Nav.Link>Sign Up</Nav.Link></LinkContainer>
            </Fragment>
        }
      </Nav>

      <Form inline onSubmit={props.handleSearch} >
        <FormControl name="search" type="text" placeholder=" Search Beer / Users" className="mr-sm-2" />
        <Button type="submit" variant="outline-info"><FaSearch/></Button>
      </Form>
      <span>&nbsp; &nbsp; &nbsp;</span>
    </Navbar>
  )
}

export default RenderNavbar
