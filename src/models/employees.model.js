import { query } from 'services/employees.service';

export default {

  namespace: 'employees',

  state: {
    items: [],
    sort: true
  },

  subscriptions: {
    setup({dispatch, history}) {
      history.listen((location) => {
        const res = /\/employees/.exec(location.pathname);
        if (res) {
          dispatch({
            type: 'fetch',
            isOnLoad: true
          });
        }
      });
    }
  },

  effects: {
    * fetch({payload, isOnLoad}, {call, put, select}) {
      const {items, sort} = yield select(_ => _.employees);

      if (isOnLoad) {
        // prevent fetch the same static data on page load
        if (items && items.length) {
          return;
        }
      }
      const res = yield call(query, {sort});
      yield put({type: 'updateItems', payload: res.data});
    }

  },

  reducers: {
    updateItems(state, {payload}) {
      return {
        ...state,
        items: payload
      };
    },

    toggleSort(state) {
      return {
        ...state,
        sort: !state.sort
      };
    }

  }

};
