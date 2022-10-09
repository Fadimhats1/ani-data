import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Homepage from './component/pages/homepage/homepage'
import PeoplePage from './component/pages/peoplePage/peoplePage'
import CategoryPage from './component/utils/categoryPage'
import AnimePage from './component/pages/animePage/animePage'
import MangaPage from './component/pages/mangaPage/mangaPage'
import LnPage from './component/pages/lnPage/lnPage'
import NotFound from './component/utils/notFound'
import {ReactQueryDevtools} from 'react-query/devtools'
import { QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        element: <CategoryPage />,
        handle:{
          crumb: () => <Link to="/">Homes</Link>
        },
        children: [
          {
            path: "People",
            element: <PeoplePage />,
            handle: {
              crumb: () => <Link to="/People">Seiyuu</Link>
            },
            children:[
              {
                path:"?page=:page"
              }
            ]
          },
          {
            path: "Anime",
            element: <AnimePage />,
            handle: {
              crumb: () => <Link to="/Anime">Anime</Link>
            }
          },
          {
            path: "Manga",
            element: <MangaPage />,
            handle: {
              crumb: () => <Link to="/Manga">Manga</Link>
            }
          },
          {
            path: "Light-novel",
            element: <LnPage />,
            handle: {
              crumb: () => <Link to="/Light-novel">Light Novel</Link>
            }
          },
          {
            path: "*",
            element: <NotFound />
          }
        ],

      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  //  </React.StrictMode>
)
