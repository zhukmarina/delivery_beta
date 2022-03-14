import styles from './App.module.scss';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import Modal from "./components/Modal";
import { Provider } from "react-redux";
import {appStore} from "./appStore/appStore";


function App() {

  return (<Provider store={appStore}>
      <BrowserRouter>
        <div className={styles.app}>
          <Header />
          <section>
          <Routes />
          <Modal />
          </section>
        </div>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
