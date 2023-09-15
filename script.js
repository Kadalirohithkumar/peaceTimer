let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

let lightThemeUrl = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)";
let darkThemeUrl = "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)";


function themeChanger(event) {
    if (event.key === "Enter") {
        let themeUserInputVal = themeUserInputEl.value;
        if (themeUserInputVal === "Light") {
            bgContainerEl.style.backgroundImage = lightThemeUrl;
            headingEl.style.color = "#014d40";
        } else if (themeUserInputVal === "Dark") {
            bgContainerEl.style.backgroundImage = darkThemeUrl;
            headingEl.style.color = "#ffffff";
        } else {
            alert("enter the valid theme");
        }
    }
}


themeUserInputEl.addEventListener("keydown", themeChanger);