var onTopofPage = true;
var header = document.querySelector("header");

var headerWithoutNav = document.querySelector("#header-without-nav");
var career = document.querySelector(".career");
// var bodyHome = document.querySelector("body");

var mainContainer = document.querySelector(".main-container");
var dataVisContainer = document.querySelector("#data-vis-main-container");
// var dataVisBody = document.querySelector(".body-data-vis");

var isHomePage = false;

// https://www.codegrepper.com/code-examples/javascript/get+current+html+file+name+javascript
var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);

var scrollAmount;

window.addEventListener("scroll", function() {
    console.log(this.pageYOffset);

    if (page == "about.html") {
        scrollAmount = 170;
    } else {
        scrollAmount = 300;
    }
    if (this.pageYOffset > scrollAmount) {
        //default classes
        //hiding stuff
        if (!header.classList.contains('header-smaller')) {
            header.classList.add('header-fixed');
            header.classList.add('header-smaller');
            header.classList.remove('add-gutters');
            onTopofPage = false;
            // bodyHome.classList.remove("body-home");
            // dataVisBody.classList.remove("body-data-vis");
            mainContainer.classList.add("top-margin");
            if (dataVisContainer != null)

                dataVisContainer.classList.add("bigger-top-margin");

            //check if the current page is home page(index.html)
            if (header.classList.contains('two-column')) {
                header.classList.remove('two-column');
                header.classList.remove('grid');
                header.classList.remove('add-gutters');
                isHomePage = true;

            }
            headerWithoutNav.setAttribute('aria-hidden', 'true');

        }
    } else {
        //unhiding stuff
        // bodyHome.classList.add("body-home");
        // dataVisBody.classList.add("body-data-vis");
        header.classList.remove('header-smaller');
        header.classList.remove('header-fixed');

        mainContainer.classList.remove("top-margin");
        if (dataVisContainer != null)
            dataVisContainer.classList.remove("bigger-top-margin");
        if (isHomePage) {
            header.classList.add('two-column');
            header.classList.add('grid');
            header.classList.add('add-gutters');
        }
        headerWithoutNav.setAttribute('aria-hidden', 'false');
    }

});

console.log("hi");