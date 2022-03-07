import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { createEpicMiddleware } from 'redux-observable';
import { BrowserHistory, createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { userReducer } from '../../user/data/userReducer';
import { usersReducer } from '../../users/data/usersReducer';

const epicMiddleware = createEpicMiddleware<Action<any>, Action<any>, AppRootState >();
export const history = createBrowserHistory();
const composedEnhancers = composeWithDevTools(applyMiddleware(epicMiddleware, routerMiddleware(history)));

const createRootReducer = (history: BrowserHistory)  => combineReducers({
  router: connectRouter(history),
  user: userReducer,
  users: usersReducer,
});

const rootReducer = createRootReducer(history);

const appStoreImplementation = createStore(rootReducer, composedEnhancers);

type AppRootState = ReturnType<typeof rootReducer>;

export { appStoreImplementation };
export type { AppRootState, createRootReducer };
