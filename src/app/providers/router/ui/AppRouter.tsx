import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={
            <div style={{display: "flex", justifyContent: "center", flexGrow: "1", padding: "20px",}}>
                Loading...
            </div>
        }><Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            {element}
                        </div>

                    )}/>
            ))}

        </Routes>
        </Suspense>
    );
};

export default AppRouter;