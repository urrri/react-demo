import dva from 'dva';
import createLoading from 'dva-loading';
import '@babel/polyfill';
import createHistory from 'history/createBrowserHistory';
import './themes/defaults.less';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true
  }),
  history: createHistory(),
  onError(e) {
    console.error(e.message);
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/app.model').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
