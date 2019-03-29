
const ScrollUs = document.getElementById("ScrollUs");
const ScrollPo = document.getElementById("ScrollPo");
const ScrollCo = document.getElementById("ScrollCo");

ScrollUs.addEventListener("click", function () {
    window.scrollTo(0, OfertsBox.offsetTop + window.innerHeight);
},1000);

ScrollPo.addEventListener("click", function () {
    window.scrollTo(0, MyPorfolio.offsetTop );
},1000);

ScrollCo.addEventListener("click", function () {
    window.scrollTo(0, Contact.offsetTop );
},1000);

