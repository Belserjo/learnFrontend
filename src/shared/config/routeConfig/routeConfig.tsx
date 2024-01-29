import {RouteProps} from "react-router-dom";
import MainPageAsync from "pages/MainPage";
import AboutPageAsync from "pages/AboutPage";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about"
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: 'about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routePath.main,
        element: <MainPageAsync/>
    },
    [AppRoutes.ABOUT]: {
        path: routePath.about,
        element: <AboutPageAsync/>
    }
}