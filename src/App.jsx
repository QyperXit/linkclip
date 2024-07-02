import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import UrlProvider from "./context";
import AppLayout from "./layouts/app-layout";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landingPage";
import Link from "./pages/link";
import Redirect from "./pages/redirect";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/auth",
          element: <Auth />,
        },
        {
          path: "/link/:id",
          element: <Link />,
        },
        {
          path: "/:id",
          element: <Redirect />,
        },
      ],
    },
  ]);

  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  );
}

export default App;
