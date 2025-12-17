// 1. Hiệu ứng thu nhỏ menu khi kéo trang
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.padding = "10px";
        header.style.background = "#111";
    } else {
        header.style.padding = "20px";
        header.style.background = "#000";
    }
});


// 2. Validate form liên hệ
// function validateForm(event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let msg = document.getElementById("message").value.trim();

//     if (name === "" || email === "" || msg === "") {
//         alert("Vui lòng nhập đầy đủ thông tin!");
//         return;
//     }

//     if (!email.includes("@")) {
//         alert("Email không hợp lệ!");
//         return;
//     }

//     alert("Gửi thành công! Chúng tôi sẽ phản hồi sớm.");
// }


// 3. Hiệu ứng fade-in cho ảnh gallery
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach((img, index) => {
        img.style.opacity = "0";
        img.style.transition = "opacity 1s ease";

        setTimeout(() => {
            img.style.opacity = "1";
        }, index * 150); // mỗi ảnh hiện cách nhau 0.15s
    });
});