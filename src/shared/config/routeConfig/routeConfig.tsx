import { RouteProps } from 'react-router-dom';
import MainPageAsync from 'pages/MainPage';
import AboutPageAsync from 'pages/AboutPage';
import ProfilePageAsync from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPageAsync />,
    },
    [AppRoutes.ABOUT]: {
        path: routePath.about,
        element: <AboutPageAsync />,
    },
    [AppRoutes.PROFILE]: {
        path: routePath.profile,
        element: <ProfilePageAsync />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFoundPage />,
    },
};
