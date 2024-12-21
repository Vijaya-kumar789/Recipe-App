import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "react-redux"
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store/store.js";

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
     <PersistGate loading={null} persistor={persistor}>
  <AuthContextProvider>
    <App />
    <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    />
  </AuthContextProvider>
  </PersistGate>
  </Provider>
,
)
