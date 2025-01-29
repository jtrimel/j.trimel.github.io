/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            const headerDiv = document.getElementById("header");
            headerDiv.innerHTML = data;

            // Example: Add a class based on the current page
            if (window.location.pathname.includes("index.html")) {
                document.getElementById("nav-link-home").classList.add("active");
            } else if (window.location.pathname.includes("oznamenia.html")) {
                document.getElementById("nav-link-oznamenia").classList.add("active");
            } else if (window.location.pathname.includes("hostina.html")) {
                document.getElementById("nav-link-hostina").classList.add("active");
            } else if (window.location.pathname.includes("kontakt.html")) {
                document.getElementById("nav-link-kontakt").classList.add("active");
            } 
            else {
                headerDiv.classList.add("default-header");
            }
        })
        .catch(error => console.error("Error loading header:", error));
});
