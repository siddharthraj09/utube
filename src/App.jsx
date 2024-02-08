import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore.js";

function App() {
  return (
    <Provider store={appStore}>
      <div className="">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
