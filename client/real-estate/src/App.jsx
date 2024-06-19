import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import  {Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profile/ProfilePage";
import Register from "./routes/register/Register";
import Login from "./routes/login/login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfileUpdatePage from "./routes/profileUpdatePage/ProfileUpdatePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ],
    },
    {
      path:"/",
      element: <RequireAuth/>,
      children:[
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },


      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
