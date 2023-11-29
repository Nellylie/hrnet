import RouterHandler from './routerhandler/RouterHandler';
import './styles/main.scss';
import store from "./reduxsection/store";
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import Header from './components/header/Header';

Modal.setAppElement('#root');
function App() {
  return (<Provider store={store}>
    <div className="App">
    <Header/>
     <RouterHandler/>
    </div>
    </Provider>
  );
}

export default App;
