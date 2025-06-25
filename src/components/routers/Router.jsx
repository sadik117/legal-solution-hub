import {
    createBrowserRouter,
  } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../../Firebase/AuthProvider/PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import { AboutUs } from "../Pages/AboutUs";
import ForgotPass from "../Pages/ForgotPass";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout /> ,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            index: true,
            element: <Home />,
            hydrateFallbackElement: <p className="justify-center items-center mx-120 my-50">
            <span className="loading loading-infinity loading-xs"></span>
            <span className="loading loading-infinity loading-sm"></span>
            <span className="loading loading-infinity loading-md"></span>
            <span className="loading loading-infinity loading-lg"></span>
            <span className="loading loading-infinity loading-xl"></span></p>,
            loader: async () => {
              const eduRes = await fetch('/educationalAppsData.json');
              const healthRes = await fetch('/healthAppsData.json');
              const gamingRes = await fetch('/gamingAppsData.json');
          
              const eduData = await eduRes.json();
              const healthData = await healthRes.json();
              const gamingData = await gamingRes.json();
              return { eduData, healthData, gamingData };
            }
          },
          {
            path: "/appDetails/:id",
            element: <PrivateRoute>
                        <AppDetails></AppDetails>
                     </PrivateRoute> ,
          },
          {
            path:"/auth",
            children:[
              {
              path:"/auth/login",
              Component: Login
            },
            {
              path: "/auth/register",
              Component: Register
            }
          ],  
        },
        {
          path: "/profile",
          element: <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        },
        {
          path: "/aboutUs",
          Component: AboutUs
        },
        {
          path: "/forgetpassword",
          element: <PrivateRoute>
                     <ForgotPass></ForgotPass>
                </PrivateRoute> 
        }
      ]
  }]);