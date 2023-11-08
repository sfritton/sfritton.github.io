var $7d8d13b08cb011c6$exports = {};
const $7d8d13b08cb011c6$var$themeToggleContainer = document.querySelector(".theme-toggle-container");
const $7d8d13b08cb011c6$var$themeToggleButton = document.querySelector(".themeToggle");
const $7d8d13b08cb011c6$var$themeToggleLabel = document.querySelector(".themeToggle .label");
let $7d8d13b08cb011c6$var$isDarkMode = true;
$7d8d13b08cb011c6$var$themeToggleButton === null || $7d8d13b08cb011c6$var$themeToggleButton === void 0 ? void 0 : $7d8d13b08cb011c6$var$themeToggleButton.addEventListener("click", ()=>{
    if ($7d8d13b08cb011c6$var$isDarkMode) {
        $7d8d13b08cb011c6$var$themeToggleContainer === null || $7d8d13b08cb011c6$var$themeToggleContainer === void 0 ? void 0 : $7d8d13b08cb011c6$var$themeToggleContainer.setAttribute("data-theme", "light");
        if ($7d8d13b08cb011c6$var$themeToggleLabel) $7d8d13b08cb011c6$var$themeToggleLabel.textContent = "Switch to dark mode";
    } else {
        $7d8d13b08cb011c6$var$themeToggleContainer === null || $7d8d13b08cb011c6$var$themeToggleContainer === void 0 ? void 0 : $7d8d13b08cb011c6$var$themeToggleContainer.setAttribute("data-theme", "dark");
        if ($7d8d13b08cb011c6$var$themeToggleLabel) $7d8d13b08cb011c6$var$themeToggleLabel.textContent = "Switch to light mode";
    }
    $7d8d13b08cb011c6$var$isDarkMode = !$7d8d13b08cb011c6$var$isDarkMode;
});


//# sourceMappingURL=index.a11e90ee.js.map
