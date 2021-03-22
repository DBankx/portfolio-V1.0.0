const React = require("react")

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }, pluginOptions) => {
    setHeadComponents([
        <link rel="apple-touch-icon" sizes="180x180" href="src/assets/images/favicon_io/apple-touch-icon.png" />,
            <link rel="icon" type="image/png" sizes="32x32" href="src/assets/images/favicon_io/favicon-32x32.png" />,
                <link rel="icon" type="image/png" sizes="16x16" href="src/assets/images/favicon_io/favicon-16x16.png" />,
                    <link rel="manifest" href="src/assets/images/favicon_io/site.webmanifest" />,
        <link rel="stylesheet" type="text/css" href="src/assets/styles/style.css"/>,
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>,
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />,
        
    ]);
    
    setBodyAttributes({
        "class": "bg-cocktail"
    })
    
    
}


