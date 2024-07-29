// // navbar 

const collapse = document.querySelector(".collapse") // accessing navbar 
let menubtn = document.querySelector(".menu-icon")  // accessing btn to show / hide content
let closeBtn = document.querySelector(".close-icon")  // accessing close-btn to show x for better UI
const projectMenu = document.querySelector(".Project-toggle")
const projectIcons = document.querySelector(".project-icons")

menubtn.addEventListener("click", function(){
    collapse.classList.add('activeNav'); 
    collapse.style.transform="translateX(0)";
    collapse.style.transition="all 0.2s";
    closeBtn.style.display="block";
    

})

closeBtn.addEventListener("click", function(){
    collapse.classList.remove('activeNav'); 
    collapse.style.transform="translateX(-100%)";
    collapse.style.transition="all 0.5s";
    closeBtn.style.display="none";

})


let tabBtn = document.querySelectorAll('.project-icons li')
let projectContent = document.querySelectorAll('.projectContent div')

console.log(tabBtn);

for (let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].addEventListener('click', function () {

        if (i == 0) {
            for (let l = 0; l < projectContent.length; l++)
             {
                projectContent[l].style.display="block";
                tabBtn[l].classList.remove('active');
                this.classList.add('active');
            }
        }

        else {

            let getBtnId = this.dataset.tab;
            console.log(getBtnId);
            let content = document.getElementById(getBtnId);
            console.log(content);

            for (let j = 0; j < tabBtn.length; j++) {
                tabBtn[j].classList.remove('active');
            }

            for (let k = 0; k < projectContent.length; k++) {
                projectContent[k].style.display = "none";
            }
            content.style.display = "block";
            this.classList.add('active');
        }
    })
}

// contact us:-
// --------------------

let contactUs = document.querySelector('.contactUs'); // 


contactUs.addEventListener('submit', function (e) {
    document.querySelector('#nameError').innerHTML = "";
    document.querySelector('#emailError').innerHTML = "";
    document.querySelector('#mszError').innerHTML = "";

    if (this.name.value.trim() == "") {
        e.preventDefault();
        // console.log("Enter your Name");
        document.querySelector('#nameError').innerHTML = 'Enter your Name';
        this.name.focus();
    }

    else if (this.email.value.trim() == "") {
        e.preventDefault();
        document.querySelector('#emailError').innerHTML = 'Enter your Email';
        this.email.focus();
    }

    else if (this.message.value.trim() == "") {
        e.preventDefault();
        document.querySelector('#mszError').innerHTML = 'Enter your message';
        this.message.focus();
    }

});








