import React from 'react';
import { connect } from 'dva';
import Page from 'components/page';
import Loader from 'components/loader';
import { SimpleList } from 'components/simpleList';
import { Employee } from './Employee';
import { faSortAlphaUp, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const renderItem = item => item ? (<Employee key={item.id} {...item}/>) : null;

function EmployeesPage({items, sort, loading, onToggleSort}) {
  const fetching = loading.effects['employees/fetch'];
  return (
      <Page>
        <Page.Header>
          <Page.Title>Employees</Page.Title>
          <div>
            <button disabled={fetching} onClick={onToggleSort}>
              <FontAwesomeIcon icon={sort ? faSortAlphaDown : faSortAlphaUp} fixedWidth />
            </button>
          </div>
        </Page.Header>
        <Page.Content>
          {<Loader spinning={fetching}/>}
          <SimpleList items={items} renderItem={renderItem}/>
        </Page.Content>
      </Page>
  );
}

EmployeesPage.propTypes = {};

const mapStateToProps = ({
  employees: {
    items,
    sort
  },
  loading
}) => ({
  items,
  sort,
  loading
});

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleSort() {
      dispatch({
        type: 'employees/toggleSort'
      });
      dispatch({
        type: 'employees/fetch'
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPage);
