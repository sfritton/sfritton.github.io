var $b11bec71944d4b3d$exports = {};
var $b11bec71944d4b3d$var$_document_querySelector;
const $b11bec71944d4b3d$var$slotMachine = document.querySelector(".slot-machine");
const $b11bec71944d4b3d$var$digits = Array.from(document.querySelectorAll(".digit > span"));
const $b11bec71944d4b3d$var$randomizeDigits = ()=>{
    $b11bec71944d4b3d$var$digits.forEach((digit)=>{
        digit.textContent = String(Math.floor(Math.random() * 10));
    });
};
($b11bec71944d4b3d$var$_document_querySelector = document.querySelector(".lever")) === null || $b11bec71944d4b3d$var$_document_querySelector === void 0 ? void 0 : $b11bec71944d4b3d$var$_document_querySelector.addEventListener("click", ()=>{
    $b11bec71944d4b3d$var$randomizeDigits();
    $b11bec71944d4b3d$var$slotMachine === null || $b11bec71944d4b3d$var$slotMachine === void 0 ? void 0 : $b11bec71944d4b3d$var$slotMachine.classList.remove("animating");
    setTimeout(()=>{
        return $b11bec71944d4b3d$var$slotMachine === null || $b11bec71944d4b3d$var$slotMachine === void 0 ? void 0 : $b11bec71944d4b3d$var$slotMachine.classList.add("animating");
    }, 0);
});
$b11bec71944d4b3d$var$randomizeDigits();


//# sourceMappingURL=index.07c61a13.js.map
