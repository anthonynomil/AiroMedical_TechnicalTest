import {createBrowserRouter} from "react-router-dom";
import NotFound from "pages/error/NotFound";
import BeerPage from "pages/beer/BeerPage";
import Test from "pages/Test";
import RemakeHome from "pages/RemakeHome";
import Home from "pages/Home";

/**
 * @description
 *  - This is the router of the app.
 *  - It uses react-router-dom's createBrowserRouter to create a router.
 *
 * @returns {JSX.Element} router
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/remake",
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
