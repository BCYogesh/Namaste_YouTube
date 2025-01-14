import "./App.css";
import Head from "./components/head/Head";
import Body from "./components/body/Body";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import WatchPage from "./components/body/WatchPage";
import { createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/body/MainContainer";
import SearchResultsContainer from "./components/body/SearchResultsContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
        {/* <RouterProvider router={appRouter} /> */}

        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
      </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WatchPage />
      },
      {
        path: '/results',
        element: <SearchResultsContainer />
      }
    ]
  }
])

export default App;
