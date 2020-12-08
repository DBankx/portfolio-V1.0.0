import React from "react";

export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <div>
            <footer class="footer">© {year} Hundeyin Oluwadamilola</footer>
        </div>
    )
}

