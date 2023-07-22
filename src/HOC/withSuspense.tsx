import React, { ComponentType, Suspense } from "react";
import DotPreloader from "component/common/dotPreloader/DotPreloader";

const styleForLazyDownload = {
    fontSize: 40,
    margin: "200px",
};

export function withSuspense(Component: ComponentType) {
    return (props: any) => {
        return (
            <Suspense
                fallback={
                    <h1 style={styleForLazyDownload}>
                        Loading
                        <DotPreloader />
                    </h1>
                }
            >
                <Component {...props} />
            </Suspense>
        );
    };
}
