import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Page.less';

const PageHeader = ({children, className, ...props}) => {
  return (
      <div
          {...props}
          className={classnames(
              styles.header,
              className
          )}
      >
        {children}
      </div>
  );
};

PageHeader.propTypes = {
  className: PropTypes.string,
};

PageHeader.displayName = 'PageHeader';

export default PageHeader;
