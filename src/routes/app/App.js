import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import NavMenu from './NavMenu';
import styles from './App.less';

const App = ({children, menu}) => {
  return (
      <div className={styles.app}>
        <div className={styles.sideBar}>
          <NavMenu menu={menu}/>
        </div>
        <div className={styles.page}>
          {children}
        </div>
      </div>
  );
};

App.propTypes = {
  className: PropTypes.string
};

App.displayName = 'App';

export default withRouter(
    connect(({app: {menu}, loading}) => ({menu, loading}))(App)
);
