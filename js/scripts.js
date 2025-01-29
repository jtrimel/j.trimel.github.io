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
                document.getElementById("nav-link-galery").classList.remove("active")
            } else if (window.location.pathname.includes("products.html")) {
                document.getElementById("nav-link-galery").classList.add("active");
                document.getElementById("nav-link-home").classList.remove("active")
            } else {
                headerDiv.classList.add("default-header");
            }
        })
        .catch(error => console.error("Error loading header:", error));
});
