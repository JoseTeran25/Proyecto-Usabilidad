import { PATH_HOME} from "./path";
import { Route, Outlet } from "react-router-dom";
import { lazy, Fragment, Suspense } from 'react'

export const renderRoutes = (routes) => {
  return routes.map((route, index) => {
    const Component = route.element || Fragment
    const Layout = route.layout || Fragment
    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Suspense fallback={<></>}>
            <Layout>
              {route.children ? <Outlet /> : <Component />}
            </Layout>
          </Suspense>

        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    )
  })
}

export const routes = [
  {
    layout: lazy(async () => await import("../layout/AppLayout")),
    children: [
      {
        path: PATH_HOME,
        element: lazy(async () => await import("../pages/Home"))
      },
      
    ]
  }
]

export default renderRoutes