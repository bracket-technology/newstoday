import React from "react"
import ContentLoader from "react-content-loader"

const LoaderSiderbar = (props) => (
    <ContentLoader
        speed={2}
        width={900}
        height={600}
        viewBox="0 0 900 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="5" y="9" rx="2" ry="2" width="356" height="356" />
        <rect x="70" y="336" rx="0" ry="0" width="221" height="63" />
        <rect x="32" y="444" rx="0" ry="0" width="311" height="54" />
        <rect x="32" y="514" rx="0" ry="0" width="311" height="54" />
        <rect x="433" y="9" rx="2" ry="2" width="356" height="577" />
    </ContentLoader>
)

export default LoaderSiderbar