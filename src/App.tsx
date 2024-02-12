import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FoodItems from "./pages/FoodItems";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/fooditems",
        element: <FoodItems />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
