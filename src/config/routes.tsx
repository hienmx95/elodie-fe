import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import NotFoundView from 'pages/404';
import Layout from 'Layout';
import HomeView from 'pages/Home';
import {
    HOME_ROUTE,
    NOT_FOUND_ROUTE,
} from './route-consts';
export const routes: RouteConfig[] = [
    {
        path: NOT_FOUND_ROUTE,
        exact: true,
        component: NotFoundView,
    },
    {
        key: 'main',
        path: HOME_ROUTE,
        component: Layout,
        routes: [
            {
                path: HOME_ROUTE,
                exact: true,
                component: HomeView,
            },
            {
                path: '/:path',
                render() {
                  return <Redirect to={NOT_FOUND_ROUTE} />;
                },
            },
        ],
    }
];
