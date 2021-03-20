const React = require("react")

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }, pluginOptions) => {
    setHeadComponents([
        <link rel="stylesheet" type="text/css" href="src/assets/styles/style.css"/>,
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>,
        <link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />
    ]);
    
    setBodyAttributes({
        "class": "bg-triangles"
    })
    
    
}


