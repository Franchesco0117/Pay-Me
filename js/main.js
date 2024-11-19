//Get the transaction type
const transactType = document.querySelector("#transact-type");

//Get the transaction forms
const transefCard = document.querySelector(".transfer-card");
const paymentCard = document.querySelector(".payment-card");

//Check for transaction type event listener
transactType.addEventListener("change", () => {

    //Check for transaction type and display forms
    switch (transactType.value) {
        case "transfer":
            transefCard.style.display = "block";
            transefCard.nextElementSibling.style.display = "none";
        break;
        case "payment":
            paymentCard.previousElementSibling.style.display = "none";
            paymentCard.style.display = "block";
            paymentCard.nextElementSibling.style.display = "none";
        break;
        default:
            transefCard.style.display = "none";
            paymentCard.style.display = "none";
            transefCard.nextElementSibling.style.display = "none";
            paymentCard.nextElementSibling.style.display = "none";
        break;
    }
});