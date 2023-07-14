import { createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/error/NotFound";
import BeerPage from "pages/beer/BeerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/beer/:id",
    element: <BeerPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
