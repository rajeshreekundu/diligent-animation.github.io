import React, { Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PreLoader from "../Components/Sections/PreLoader";
import HomePage from "../Components/Pages/HomePage";
import HeaderSection from "../Components/Sections/HeaderSection";
import AboutPage from "../Components/Pages/AboutPage";

const ROUTES = [
    {
        path: "/",
        key: "ROOT",
        component: (props) => {
            return (
                <div>
                    <HeaderSection/>
                    <RenderRoutes routes={props.routes}/>
                    <p>Footer</p>
                </div>
            )
        }
        ,
        routes: [
            {
                path: "/", key: "HOME", exact: true, component: () =>
                    <Suspense fallback={<PreLoader />}>
                        <HomePage/>
                    </Suspense>
            },
            {
              path: "/about", key: "ABOUT", exact: true, component: () =>
                  <Suspense fallback={<PreLoader />}>
                      <AboutPage/>
                  </Suspense>
          }
        ],
    },
]



function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

export function RenderRoutes({ routes }) {

    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <h1>Not Found!</h1>} />
      </Switch>
    );
  }

export default ROUTES;