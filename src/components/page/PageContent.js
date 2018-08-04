import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Page.less';

const PageContent = ({children, className, scroll = false, ...props}) => {
  return (
      <div
          {...props}
          className={classnames(
              styles.content,
              className,
              {
                [styles.scroll]: scroll
              }
          )}
      >
        {children}
      </div>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
  scroll: PropTypes.bool
};

PageContent.displayName = 'PageContent';

export default PageContent;
