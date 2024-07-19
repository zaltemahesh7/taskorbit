import { Route, BrowserRouter, Routes } from "react-router-dom";

import React from "react";
import Tasks from "./components/Tasks";
const StopWatch =React.lazy(() => import("./Stop_Watch/StopWatch"));
import Loader4 from "./components/Loder";

const App = () => {
  return (
    <>
      <React.Suspense fallback={<Loader4 />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Tasks />} />
            <Route path="/stopwatch" element={<StopWatch />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </>
  );
};

export default App;
