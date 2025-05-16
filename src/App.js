import "./App.css";
import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResults from "./components/SearchResults";
import { Analytics } from "@vercel/analytics/react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Analytics />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
