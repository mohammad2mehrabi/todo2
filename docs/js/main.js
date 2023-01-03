// chap
let input = document.querySelector(".form input[type='text']");
let formSubmit = document.querySelector(".form");
let list = document.querySelector(".users ul");
let btnRemove = document.getElementsByClassName("remove");

let usernames;



if (localStorage.getItem('username')) {
    usernames = JSON.parse(localStorage.getItem('username'));

    usernames.forEach(function (item) {
        list.innerHTML += `<div class="item-box"><i class="fa-solid fa-xmark remove"></i><li>${item}</li></div>`;
    });
} else {
    usernames = [];
}
removeIt(btnRemove);


formSubmit.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputValue = input.value;

    if (usernames.includes(inputValue)) {
        alert("This user already exist!");
        formSubmit.reset();

    } else {
        usernames.push(inputValue);
        localStorage.setItem("username", JSON.stringify(usernames));
        list.innerHTML += `<div class="item-box"><i class="fa-solid fa-xmark remove"></i><li>${inputValue}</li></div>`;
        formSubmit.reset();
    }
    removeIt(btnRemove);
})


function removeIt(btn) {

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            this.parentElement.remove();
            let removedText = this.parentElement.innerText;
            for (let j = 0; j < usernames.length; j++) {
                if (usernames[j] == removedText) {
                    usernames.splice(j, 1);
                    localStorage.setItem("username", JSON.stringify(usernames));
                }

            }
        })
    }
}
// clear all 

const btnClearAll = document.querySelector(".clear-all");

// کلیک روی دکمه clear all
btnClearAll.onclick = function () {

    // خالی کردن innerHTML
    list.innerHTML =``;
    
    // پاک کردن localStorage
    localStorage.clear("username", JSON.stringify(usernames));
    window.location.reload();
}