import React, {Suspense, useState} from 'react';
import './styles/index.scss';
import {Routes, Route, Link} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}></Route>
                    <Route path={'/'} element={<MainPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
