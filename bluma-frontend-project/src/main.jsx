import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTES from "./router/routes.jsx";
import store from "./store/store.js";
import {Provider} from "react-redux";
import * as PropTypes from "prop-types";
import {LocalizationProvider} from "@mui/x-date-pickers";



const router = createBrowserRouter([
    ...ROUTES
])

function LocalizationProvider(props) {
    return null;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  //   <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <RouterProvider router={router}>
          </RouterProvider>
       </Provider>
    // </LocalizationProvider>

)
