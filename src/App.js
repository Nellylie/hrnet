import RouterHandler from './routerhandler/RouterHandler';
import './styles/main.scss';
import { store, persistor}from "./reduxsection/store";
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import Header from './components/header/Header';
import { PersistGate } from 'redux-persist/integration/react';

Modal.setAppElement('#root');
function App() {
  return (<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
        <Header/>
        <RouterHandler/>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
