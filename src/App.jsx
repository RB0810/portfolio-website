import { useEffect, useState } from "react";
import { Home, Layout } from "./utils/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
              <Route
                path="/"
                element={
                  <Layout>
                    <Home />
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
      )}
    </>
  );
}

export default App;