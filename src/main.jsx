import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/styles.scss'
import store from './redux/store.js'
import "@fontsource/sora"; // Defaults to weight 400
import "@fontsource/sora/400.css"; // Specify weight
import "@fontsource/sora/500.css"; // Specify weight and style
import "@fontsource/sora/600.css"; // Specify weight and style
import "@fontsource/sora/700.css"; // Specify weight and style
import "@fontsource/sora/800.css"; // Specify weight and style
import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/400.css"; // Specify weight
import "@fontsource/nunito/800.css"; // Specify weight
import "@fontsource/nunito/900.css"; // Specify weight
import Dashboard from './pages/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)