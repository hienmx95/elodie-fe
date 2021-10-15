import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import NotFoundView from 'pages/404';
import Layout from 'Layout';
import HomeView from 'pages/Home';
import Faq from 'components/faq';
import Contact from 'components/contact';
import About from 'components/about';
import CollectionFull from 'components/collection-full';
import SingleProductLeyla from 'components/product-detail-leyla';
import SingleProductBlossom from 'components/product-details-blossom';
import SingleProductStHonore from 'components/product-detail-st-honere';
import {
    HOME_ROUTE,
    FAQ_ROUTE,
    CONTACT_ROUTE,
    ABOUT_ROUTE,
    LEYLA_PRODUCT_DETAIL_ROUTE,
    NOT_FOUND_ROUTE,
    BLOSSOM_PRODUCT_DETAIL_ROUTE,
    ST_HONORE_PRODUCT_DETAIL_ROUTE,
    COLLECTION_FULL
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
                path: FAQ_ROUTE,
                exact: true,
                component: Faq,
            },
            {
                path: CONTACT_ROUTE,
                exact: true,
                component: Contact,
            },
            {
                path: ABOUT_ROUTE,
                exact: true,
                component: About,
            },
            {
                path: LEYLA_PRODUCT_DETAIL_ROUTE,
                exact: true,
                component: SingleProductLeyla,
            },
            {
                path: BLOSSOM_PRODUCT_DETAIL_ROUTE,
                exact: true,
                component: SingleProductBlossom,
            },
            {
                path: BLOSSOM_PRODUCT_DETAIL_ROUTE,
                exact: true,
                component: SingleProductBlossom,
            },
            {
                path: ST_HONORE_PRODUCT_DETAIL_ROUTE,
                exact: true,
                component: SingleProductStHonore,
            },
            {
                path: COLLECTION_FULL,
                exact: true,
                component: CollectionFull,
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
