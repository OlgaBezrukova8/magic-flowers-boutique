import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import Loader from "./components/UI/Loader";

function App() {
  const router = (
    <Router basename="/magic-flowers-boutique">
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </React.Suspense>
    </Router>
  );

  return router;
}

export default App;
