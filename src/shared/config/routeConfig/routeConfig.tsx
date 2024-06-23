import { RouteProps } from 'react-router-dom';
import MainPageAsync from 'pages/MainPage';
import AboutPageAsync from 'pages/AboutPage';
import ProfilePageAsync from 'pages/ProfilePage';
import ArticleDetailsPageAsync from 'pages/ArticleDetailsPage';
import ArticlePageAsync from 'pages/ArticlesPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import ArticleEditPageAsync from 'pages/ArticleEditPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;

}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLES_CREATE = 'articles_create',
    ARTICLES_EDIT = 'articles_edit',
    // last
    NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLES_CREATE]: '/articles/new',
    [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
    // last
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPageAsync />,
    },
    [AppRoutes.ABOUT]: {
        path: routePath.about,
        element: <AboutPageAsync />,
    },
    [AppRoutes.PROFILE]: {
        path: `${routePath.profile}:id`,
        element: <ProfilePageAsync />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: routePath.articles,
        element: <ArticlePageAsync />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${routePath.articles_details}:id`,
        element: <ArticleDetailsPageAsync />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: `${routePath.articles_create}`,
        element: <ArticleEditPageAsync />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: `${routePath.articles_edit}`,
        element: <ArticleEditPageAsync />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFoundPage />,
    },
};
