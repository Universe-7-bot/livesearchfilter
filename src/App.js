import React, { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import Preloader from "./Preloader";
import Footer from "./Footer";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import IconButton from '@mui/material/IconButton';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const App = () => {

  const [img, setImg] = useState("");
  const [theme, setTheme] = useState("light-theme");
  const [icon, setIcon] = useState(<ModeNightIcon />)
  const [load, setLoad] = useState(false);

  const inputEvent = (event) => {
    //console.log(event.target.value);
    setImg(event.target.value);
  }

  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    theme === "dark-theme" ? setIcon(<ModeNightIcon />) : setIcon(<LightModeOutlinedIcon />);
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000)
  }, [])

  return (
    <>
      {
        load ? <Preloader /> :
          <>
            <div className="top border bg-light d-flex justify-content-center">
              <h2 className="p-2 text-secondary">Welcome to Live Search Filter</h2>
              <IconButton aria-label="light mode icon" onClick={toggleTheme} className="m-1 mx-4 shadow rounded-5">
                {icon}
              </IconButton>
            </div>
            <div className="container d-flex justify-content-center">
              <div className="row">
                <div className="col-md-12">
                  <div className="search m-5 d-flex justify-content-center">
                    <input onChange={inputEvent} value={img} type="text" className="form-control text-center bg-light w-80" id="exampleFormControlInput1" placeholder="Search Anything" />
                  </div>
                  {
                    img === "" ? null : <SearchResult searchItem={img} />
                  }
                </div>
              </div>
            </div>
            <Footer />
          </>
      }
    </>
  );
};

export default App;