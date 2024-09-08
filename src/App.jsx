import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import DrugsProvider from "./Context/SearchDrugsContext";
import SymptomsProvider from "./Context/SymptomsContext";

// pages
import MainLayOut from "./Layout/MainLayOut";
import HomePage from "./Pages/HomePage";
import DashBoard from "./Pages/DashBoard";
import SearchPage from "./Pages/SearchPage";
import DrugsPage from "./Pages/DrugsPage";
import DrugPage from "./Pages/DrugPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayOut />}>
      <Route index element={<HomePage />} />
      <Route path="drug/:name" element={<DrugPage />} />
      <Route path="drugs" element={<DrugsPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="dashboard" element={<DashBoard />} />
      <Route path="*" element={<h1>Page Unavailable</h1>} />
    </Route>
  )
);

const App = () => {
  return (
    <DrugsProvider>
      <SymptomsProvider>
        <RouterProvider router={router} />
      </SymptomsProvider>
    </DrugsProvider>
  );
};

export default App;
