import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/errorpage/error-page";
// import "./App.css";
import Login from '@/views/login/Login.jsx'
import Layouts from '@/layout/Layouts.jsx'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/layout",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    // children:[
    //   {
    //     path: "/home",
    //     element: <Login />,
    //     errorElement: <ErrorPage />,
    //   }
    // ]
  },

]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
