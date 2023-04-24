import { memo } from 'react';
import type { FC } from 'react';
import { Route, createRoutesFromElements} from 'react-router-dom';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { MainPage } from './components/MainPage/MainPage';
import { LogInRegisterPage } from './components/LogInRegisterPage/LogInRegisterPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<LogInRegisterPage />} />
      <Route path='main' element={<MainPage />} />
    </Route>
  )
)



function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;
