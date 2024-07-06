import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"
import { db } from "./firebase-config"

import MainPage from './routes/MainPage'
import BackNav from './routes/BackNav'
import MenuList from './routes/MenuList'
import Menu from './routes/Menu'
import '@/app/index.css'
import Cart from './routes/Cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>
  },
  {
    path: '/menu',
    element: <BackNav/>,
    children: [
      {
        path: '/menu',
        element: <MenuList/>
      },
      {
        path: '/menu/:category',
        element: <Menu/>,
        loader: async({params}) => {
          try {
            const quierySnapshot = getDocs(collection(db, params.category))
            return quierySnapshot
          }
          catch(e) {
            console.error(e)
          }
        }
      },
      {
        path: '/menu/cart',
        element: <Cart/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
