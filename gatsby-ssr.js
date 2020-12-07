const React = require("react")

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    setHeadComponents([
        <link rel="stylesheet" type="text/css" href="src/assets/styles/style.css"/>,
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>,
        <script src="js/animsition/jquery.animsition.min.js"></script>,
        <script src="https://cdnjs.cloudflare.com/ajax/libs/sticky-kit/1.1.3/sticky-kit.min.js" integrity="sha512-MAhdSIQcK5z9i33WN0KzveJUhM2852CJ1lJp4o60cXhQT20Y3friVRdeZ5TEWz4Pi+nvaQqnIqWJJw4HVTKg1Q==" crossorigin="anonymous"></script>
    ])
}