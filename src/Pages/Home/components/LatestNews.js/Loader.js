import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={500}
        height={150}
        viewBox="0 0 500 150"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="224" y="36" rx="5" ry="5" width="100" height="10" />
        <rect x="225" y="87" rx="5" ry="5" width="220" height="10" />
        <rect x="227" y="113" rx="5" ry="5" width="220" height="10" />
        <rect x="7" y="30" rx="0" ry="0" width="167" height="110" />
        <circle cx="199" cy="41" r="13" />
    </ContentLoader>
)

export default MyLoader