import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPageAsync from "pages/AboutPage";
import MainPageAsync from "pages/MainPage";
import {useTheme} from "app/providers/ThemeProvider";
import {ClassNames} from "shared/lib/classNames/classNames";


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={ClassNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}><div>Main</div></Link>
            <Link to={'/about'}><div>About Us</div></Link>

                <Suspense fallback={
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        Loading...
                    </div>
                }><Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>

            </Routes></Suspense>

</div>
    );
};

export default App;