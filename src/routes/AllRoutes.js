import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, JokePage, PageNotFound } from '../pages';

export const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="joke" element={<JokePage />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </>
    )
}
