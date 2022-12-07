import "./App.css";
import Router from "./router";
import { Suspense } from "react";
import Loading from "./components/atoms/Loading";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </Suspense>
  );
}

export default App;
