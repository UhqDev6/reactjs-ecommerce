import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../logo.svg";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonContainer } from './Button';
import styledComponents from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
                <img src={Logo} alt="logo" className='navbar-brand'/>
            </Link>
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                    <Link to="/" className='nav-link'>
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className='mr-2'>
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    </span>
                </ButtonContainer>
            </Link>
        </NavWrapper>
    )
  }
}

const NavWrapper = styledComponents.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;

    }
`;


