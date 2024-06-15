import { createBrowserRouter } from "react-router-dom";

// Pages
import Home from "../pages/home";
import ProjectDetail from "../pages/project-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/project-detail",
    element: <ProjectDetail />,
  },
]);

export default router;
