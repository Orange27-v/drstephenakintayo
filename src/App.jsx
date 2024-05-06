import React, { useState, useEffect } from "react";
import AppNavigation from "./navigation/AppNavigation.jsx";
import PreLoader from "./components/Loader.jsx";
import "./index.css";
import "./Styles/Utils.css";
import "./components/Button.css";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    const timer = setTimeout(() => {
      setScreenLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <>{screenLoading ? <PreLoader /> :
  <body>
     <AppNavigation />
  </body>
 
  
  }</>;
};

export default App;
