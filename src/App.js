import { Suspense } from "react";
import Routes from './core/routes';
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Router>
          <Routes />
        </Router>
      </Suspense>
    </>
  );
}

export default App;
