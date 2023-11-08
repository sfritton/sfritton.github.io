var $ae11255f45053273$exports = {};
var $ae11255f45053273$var$_document_querySelector;
const $ae11255f45053273$var$specialCharacters = {
    Backquote: "`",
    Minus: "-",
    Equal: "=",
    BracketLeft: "[",
    BracketRight: "]",
    Backslash: "\\",
    Semicolon: ";",
    Quote: "'",
    Comma: ",",
    Period: ".",
    Slash: "/",
    Space: "space"
};
const $ae11255f45053273$var$getKeyLabel = (code)=>{
    // letters
    if (/^Key/.test(code)) return code.replace("Key", "");
    // numbers
    if (/^Digit/.test(code)) return code.replace("Digit", "");
    // special characters
    if ($ae11255f45053273$var$specialCharacters[code]) return $ae11255f45053273$var$specialCharacters[code];
    return code;
};
const $ae11255f45053273$var$buttons = document.querySelectorAll(".keyboard button");
const $ae11255f45053273$var$findButton = (code)=>{
    const keyLabel = $ae11255f45053273$var$getKeyLabel(code);
    for (let button of $ae11255f45053273$var$buttons){
        if (button.innerText.toLowerCase().replace(/\s/, "") === keyLabel.toLowerCase()) return button;
    }
    return undefined;
};
document.addEventListener("keydown", (e)=>{
    var _findButton;
    return (_findButton = $ae11255f45053273$var$findButton(e.code)) === null || _findButton === void 0 ? void 0 : _findButton.classList.add("pressed");
});
document.addEventListener("keyup", (e)=>{
    var _findButton;
    (_findButton = $ae11255f45053273$var$findButton(e.code)) === null || _findButton === void 0 ? void 0 : _findButton.classList.remove("pressed");
});
($ae11255f45053273$var$_document_querySelector = document.querySelector(".skip-keyboard")) === null || $ae11255f45053273$var$_document_querySelector === void 0 ? void 0 : $ae11255f45053273$var$_document_querySelector.addEventListener("click", (e)=>{
    e.preventDefault();
    const parallaxTitle = document.querySelector(".parallax-title");
    parallaxTitle === null || parallaxTitle === void 0 ? void 0 : parallaxTitle.focus();
});


//# sourceMappingURL=index.70815451.js.map
