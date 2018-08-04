import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Loader.less';

const Loader = (props) => {
  const {fullScreen, text} = props;
  const spinning = 'spinning' in props ? props.spinning : true;

  const loaderClassNames = classnames(styles.loader, {
    [styles.hidden]: !spinning,
    [styles.fullScreen]: fullScreen
  });

  return (
      <div className={loaderClassNames}>
        <div className={styles.wrapper}>
          <div className={styles.inner}/>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
  );
};

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool
};

Loader.defaultProps = {
  text: 'LOADING'
};

Loader.displayName = 'Loader';

export default Loader;
