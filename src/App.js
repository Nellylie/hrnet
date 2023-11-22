import RouterHandler from './routerhandler/RouterHandler';
import './styles/main.scss';
import store from "./reduxsection/store";
import { Provider } from 'react-redux';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function App() {
  return (<Provider store={store}>
    <div className="App">
     <RouterHandler/>
    </div>
    </Provider>
  );
}

export default App;
