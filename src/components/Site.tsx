import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./pages/Error404";
import {S} from './pages/__styles';
import {Page} from "./pages/Page";
import {dataState} from "../data/data.state";


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>

                    {/*<div><NavLink className={({isActive})=>isActive?styles.active:styles.navLink} to={'/page1'}>Page1</NavLink></div>*/}


                    <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>


                </div>
                <div className={styles.content}>
                    <Routes>

                        <Route path={'/'} element={<Navigate to={'/page1'}/>}/> // true


                        {/*<Route path={'/page1'} element={<PageOne/>}/>*/}


                        <Route path={'/page/:id/'} element={<Page pages={dataState.pages}/>}/>


                        {/*<Route path={'/page3'} element={<PageThree/>}/>*/} // false


                        <Route path={'/page/*'} element={<Error404/>}/>

                    </Routes>
                </div>
            </div>
        </div>
    );
};

