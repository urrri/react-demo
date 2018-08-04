import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Page.less';

const PageTitle = ({children, className, ...props}) => {
  return (
      <div
          {...props}
          className={classnames(
              styles.title,
              className
          )}
      >
        {children}
      </div>
  );
};

PageTitle.propTypes = {
  className: PropTypes.string,
};

PageTitle.displayName = 'PageTitle';

export default PageTitle;
