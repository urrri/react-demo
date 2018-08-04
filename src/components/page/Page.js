import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Loader from 'components/loader';
import styles from './Page.less';

const Page = ({children, className, loading, ...props}) => {
  return (
      <div
          {...props}
          className={classnames(
              styles.page,
              className
          )}
      >
        {<Loader spinning={loading}/> }
        {children}
      </div>
  );
};

Page.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool
};

Page.displayName = 'Page';

export default Page;
