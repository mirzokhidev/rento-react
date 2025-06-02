import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./reduxToolkit/store";
import Routers from "./routers/RouterProvider";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Routers} />
    </Provider>
  );
};

export default App;
