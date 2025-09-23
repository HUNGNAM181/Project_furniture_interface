import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage";
import Introduction from "./pages/Introduction";
import FormContact from "./components/FormContact";
import BlogPage from "./pages/BlogPage";
import RootBlogLayout from "./pages/RootBlogLayout";
import BlogDetail4phongcach from "./pages/BlogDetail4phongcach";
import BlogKichThuocTuTV from "./pages/BlogDetailkichthuocketu";
import BlogRomanticism from "./pages/BlogDetailRomanticism";
import LivingRoom from "./pages/LivingRoom";
import ChildrenBedRoom from "./pages/ChildrenBedRoom";
import Kitchen from "./pages/Kitchen";
import BedRoom from "./pages/Bedroom";
import SearchResults from "./components/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/gioi-thieu",
        element: <Introduction />, // Trang giới thiệu
      },
      {
        path: "/tin-tuc",
        element: <RootBlogLayout />,
        children: [
          { index: true, element: <BlogPage /> },
          {
            path: "4phongcach",
            element: <BlogDetail4phongcach />,
          },
          {
            path: "kichthuocketuTV",
            element: <BlogKichThuocTuTV />,
          },
          {
            path: "phongcachRomanticism",
            element: <BlogRomanticism />,
          },
        ],
      },
      { path: "/search", element: <SearchResults /> },
      { path: "/livingRoom", element: <LivingRoom /> },
      { path: "/bedroom", element: <BedRoom /> },
      { path: "/kitchen", element: <Kitchen /> },
      { path: "/childrenBedRoom", element: <ChildrenBedRoom /> },
      {
        path: "/lien-he",
        element: <FormContact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
