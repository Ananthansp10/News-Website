import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
function Header({setcategory,setcountry}) {
  return (
    <div>
      <Navbar expand='lg' collapseOnSelect bg="dark" data-bs-theme="dark" style={{position:'fixed',zIndex:'1' ,width:'100%'}}>
        <Container>
          <Navbar.Brand href="#home" className='badge bg-light text-dark fs-5'>Daily <span className='bg-red'>News</span></Navbar.Brand>
          <select name="" id="country" className='ms-2 badge bg-light text-dark' onClick={()=>setcountry(document.getElementById("country").value)}>
            <option value="in">Select Country</option>
            <option value="in">India</option>
            <option value="us">United States</option>
            <option value="ar">Argentina</option>
            <option value="gr">Greece</option>
            <option value="nl">Netherlands</option>
            <option value="za">South Africa</option>
            <option value="au">Australia</option>
            <option value="hk">Hong Kong</option>
            <option value="nz">New Zealand</option>
            <option value="kr">South Korea</option>
            <option value="at">Austria</option>
            <option value="hu">Hungary</option>
            <option value="ng">Nigeria</option>
            <option value="se">Sweden</option>
            <option value="be">Belgium </option>
            <option value="no">Norway</option>
            <option value="ch">Switzerland </option>
            <option value="br">Brazil</option>
            <option value="id">Indonesia</option>
            <option value="ph">Philippines</option>
            <option value="tw">Taiwan </option>
            <option value="bg">Bulgaria </option>
            <option value="ie">Ireland </option>
            <option value="pl">Poland </option>
            <option value="th">Thailand</option>
            <option value="ca">Canada</option>
            <option value="il">Israel</option>
            <option value="pt">Portugal </option>
            <option value="tr">Turkey</option>
            <option value="cn">China</option>
            <option value="it">Italy </option>
            <option value="ro">Romania</option>
            <option value="ae">UAE</option>
            <option value="co">Colombia</option>
            <option value="jp">Japan</option>
            <option value="ru">Russia</option>
            <option value="ua">Ukraine</option>
            <option value="cu">Cuba</option>
            <option value="lv">Latvia </option>
            <option value="sa">Saudi Arabia</option>
            <option value="gb">United Kingdom</option>
            <option value="cz">Czech Republic </option>
            <option value="lt">Lithuania</option>
            <option value="rs">Serbia</option>
            <option value="eg">Egypt </option>
            <option value="my">Malaysia</option>
            <option value="sg">Singapore</option>
            <option value="ve">Venuzuela</option>
            <option value="fr">France</option>
            <option value="mx">Mexico</option>
            <option value="sk">Slovakia</option>
            <option value="de">Germany</option>
            <option value="ma">Morocco</option>
            <option value="si">Slovenia</option>
          </select>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3">
            <Nav.Link href='#' active onClick={()=>setcategory('science')}>Science</Nav.Link>
            <Nav.Link href='#' active onClick={()=>setcategory('entertainment')}>Entertainment</Nav.Link>
            <Nav.Link href='#' active onClick={()=>setcategory('sports')}>Sports</Nav.Link>
            <Nav.Link href='#' active onClick={()=>setcategory('health')}>Health</Nav.Link>
            <Nav.Link href='#' active onClick={()=>setcategory('business')}>Bussiness</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
