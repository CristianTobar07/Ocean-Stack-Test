import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store/store";
import GlobalRoutes from "routes/routes";
import Loading from "components/organism/loading/loading";
import { Toaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Loading />
    <Toaster
      position="top-right"
      toastOptions={{
        error: {
          duration: 5000,
        },
        success: {
          duration: 7000,
        },
        loading: {
          duration: 2000,
        },
        style: {
          fontSize: "16px",
          background: "#fff",
          color: "#2f0084",
        },
      }}
    />
    <GlobalRoutes />
  </Provider>
);
