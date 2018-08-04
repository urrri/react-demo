import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './App.less';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenu = ({menu}) => {
  return (
      <div className={styles.navMenu}>
        {menu.map(({name, route, icon}) => (
            <NavLink
                key={route}
                to={route}
                className={styles.link}
                activeClassName={styles.activeLink}>
              <FontAwesomeIcon icon={icon} fixedWidth />
              <span className={styles.menuItemTitle}>{name}</span>
            </NavLink>
        ))}
      </div>
  );
};

NavMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    route: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.object
  })).isRequired
};

NavMenu.displayName = 'NavMenu';

export default NavMenu;
