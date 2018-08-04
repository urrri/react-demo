import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './SimpleList.less';

export class SimpleList extends PureComponent {
  render() {
    const {items, renderItem, className, ...props} = this.props;
    return (
        <div
            {...props}
            className={classnames(
                styles.list,
                className
            )}
        >
          {items.map(renderItem)}
        </div>
    );
  }
}

SimpleList.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  className: PropTypes.string
};

SimpleList.displayName = 'SimpleList';
