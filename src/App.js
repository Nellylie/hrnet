import RouterHandler from './routerhandler/RouterHandler';
import './styles/main.scss';
import { store, persistor}from "./reduxsection/store";
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import Header from './components/header/Header';
import { PersistGate } from 'redux-persist/integration/react';

// Sets the root element for modals using react-modal
Modal.setAppElement('#root');

// App Component: Wraps the application with Redux Provider and PersistGate for state management.
// Renders the Header and RouterHandler components for site navigation and content rendering.
function App() {
  return (<Provider store={store}>
      {// PersistGate: Delays the rendering of the app's UI until the persisted state has been retrieved and saved to redux.
      }
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
