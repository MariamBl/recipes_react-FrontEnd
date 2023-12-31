import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <main
      className={` text-foreground bg-background h-screen `}
    >
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
