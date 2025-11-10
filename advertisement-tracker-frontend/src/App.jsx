import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthCheck } from "./hooks/useAuthCheck";
import { useSelector } from "react-redux";
import DashboardLayout from "./layouts/DashboardLayout";
import ServicePage from "./pages/ServicePage";
import SkeletonLoader from "./components/Loader/SkeletonLoader";

const App = () => {
  const loading = useAuthCheck();
  console.log("Loading", loading);
  const isAuth = useSelector((state)=>state.auth.isAuthorized)
  console.log("ISAuth",isAuth)
  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuth?<DashboardLayout/>:<AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/login",
          element: <AuthPage />,
        },
        {
          path: "/register",
          element: <AuthPage />,
        },
        {
          path: "/dashboard",
          element: (
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/profile",
          element: (
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  if (loading) return <SkeletonLoader/>

  return <RouterProvider router={router} />;
};

export default App;
