import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <>
        <div className="container">
            <ContentLoader
                speed={2}
                width={500}
                height={100}
                viewBox="0 0 500 100"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
                <rect x="137" y="406" rx="0" ry="0" width="12" height="0" />
                <rect x="14" y="39" rx="0" ry="0" width="110" height="57" />
                <rect x="163" y="66" rx="0" ry="0" width="58" height="17" />
                <rect x="239" y="66" rx="0" ry="0" width="58" height="17" />
                <rect x="312" y="66" rx="0" ry="0" width="58" height="17" />
                <rect x="389" y="66" rx="0" ry="0" width="58" height="17" />
            </ContentLoader>
        </div>
    </>
)

export default MyLoader