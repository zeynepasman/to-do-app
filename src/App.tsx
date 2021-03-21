import { FC } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from "./redux/store";


import Routes from './router';


const App: FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App;
