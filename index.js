// debugger;
var emailInput = document.getElementById("emailInput");
var visibleInfo = document.getElementById("validInfo");
visibleInfo.style.visibility = "hidden";
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click',() => {
    // debugger;
    if(!validateEmail(emailInput.value)) {
        visibleInfo.style.visibility = "visible";
    } else visibleInfo.style.visibility = "hidden";;
});
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
