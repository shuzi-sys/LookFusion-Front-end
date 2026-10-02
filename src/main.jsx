import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Reservar } from './components/Reservar.jsx';


const AdminPanel = lazy(() => import("./admin/AdminPanel"));

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/reservar", element:<Reservar/>},
  {path:"/admin", 
    element: (
      <Suspense fallback={null}>
        <AdminPanel />
        </Suspense>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
