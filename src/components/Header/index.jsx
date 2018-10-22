import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { navigationModel } from 'models/shapes';

import styles from './styles.module.scss';

const Header = ({ title, links }) => (
  <header className={styles.container}>
    <h2>{title}</h2>
    <Nav>
      { links.map(item => (
        <NavItem key={item.title}>
          <Link className={`nav-link ${styles.link}`} to={item.path}>{item.title}</Link>
        </NavItem>
      ))}
    </Nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(navigationModel).isRequired,
};

export default Header;
