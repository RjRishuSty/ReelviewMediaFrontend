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
import DashboardLayout from "./layouts/DashboardLayout";
import ServicePage from "./pages/ServicePage";
import SkeletonLoader from "./components/Loader/SkeletonLoader";

const App = () => {
  const loading = useAuthCheck();
  if (loading) return <SkeletonLoader />;


  const router = createBrowserRouter([
     // Public routes
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "service", element: <ServicePage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "login", element: <AuthPage /> },
        { path: "register", element: <AuthPage /> },
      ],
    },
    // Protected routes
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "dashboard", element: <DashboardPage /> },
        { path: "profile", element: <ProfilePage /> },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
