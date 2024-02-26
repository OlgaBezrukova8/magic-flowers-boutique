import React, { FunctionComponent, lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Loader from "../components/UI/Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const AppRouter: FunctionComponent = () => {
  return (
    <BrowserRouter basename="/magic-flowers-boutique">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
