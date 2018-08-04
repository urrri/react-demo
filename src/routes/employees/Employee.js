import React, { PureComponent } from 'react';
import styles from './Employees.page.less';
import PropTypes from 'prop-types';
import { SimpleImg, initSimpleImg } from 'react-simple-img';

initSimpleImg();

export class Employee extends PureComponent {
  render() {
    const {first_name, last_name, email, avatar, company, adress, phone} = this.props;
    return (
        <div className={styles.employee}>
          <div className={styles.company}>{company}</div>
          <div className={styles.name}>{first_name} {last_name}</div>
          <div className={styles.email}>{email}</div>
          <SimpleImg wrapperClassName={styles.avatar} src={avatar}/>
          <div className={styles.address}>{adress}</div>
          <div className={styles.phone}>{phone}</div>
        </div>
    );
  }
}

Employee.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
  company: PropTypes.string,
  adress: PropTypes.string,
  phone: PropTypes.string
};
