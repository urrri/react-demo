import { faUserFriends, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default {
  namespace: 'app',
  state: {
    locationPathname: '',
    menu:[
      {
        icon: faUserFriends,
        name: 'Employees',
        route: '/employees'
      },
      {
        icon: faInfoCircle,
        name: 'About',
        route: '/about'
      }
    ]
  },
  subscriptions: {

    setupHistory({dispatch, history}) {
      history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname
          }
        });
      });
    }
  },
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
