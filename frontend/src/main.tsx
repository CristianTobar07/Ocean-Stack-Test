import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store/store";
import GlobalRoutes from "routes/routes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <GlobalRoutes />
  </Provider>
);
