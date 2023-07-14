import { createBrowserRouter } from "react-router-dom";
import NotFound from "pages/error/NotFound";
import BeerPage from "pages/beer/BeerPage";
import Test from "pages/Test";
import RemakeHome from "pages/RemakeHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RemakeHome />,
  },
  {
    path: "/beer/:id",
    element: <BeerPage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
