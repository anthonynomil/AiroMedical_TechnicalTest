import {createBrowserRouter} from "react-router-dom";
import NotFound from "pages/error/NotFound";
import BeerPage from "pages/beer/BeerPage";
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
    path: "/beer/:id",
    element: <BeerPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
