import './less/index.less'

// // Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click", function (e) {
//     alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const body = document.querySelector("body");
body.style.transition = "background 3s ease";
const images = document.querySelectorAll("img");


window.onscroll = function (event) {
    const scroll = window.pageYOffset
    if (scroll < 400) {
        body.style.backgroundColor = "gray"
        images.forEach(image => {
            image.style.borderRadius = 0;
        })
    }
    else if (scroll >= 400 && scroll < 600) {
        body.style.backgroundColor = "yellow"
        images.forEach(image => {
            image.style.borderRadius = "100%"
        })
    } else {
        body.style.backgroundColor = "#4032c98f"
    }

}

document.querySelectorAll("img").forEach(resim => {
    resim.addEventListener("mouseover", (event) => {
        event.target.style.filter = "grayscale(100%)"
    })

    resim.addEventListener("mouseout", (event) => {
        event.target.style.filter = "grayscale(0)"
    })

})