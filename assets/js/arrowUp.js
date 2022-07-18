window.addEventListener("scroll", () =>{
    let floatingBtn = document.getElementById("floatingBtn");
    floatingBtn.classList.toggle("sticky", window.scrollY > 68 && window.scrollY <= 3800);
    console.log(window.scrollY);

    
})