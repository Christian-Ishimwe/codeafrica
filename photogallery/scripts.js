const containers_item= document.querySelectorAll(".container_item")
const model= document.getElementById("model")
const closeBtn= document.getElementById("closeBtn")
containers_item.forEach(element => {
    element.addEventListener("click", (e) => {
        const imgSrc=element.querySelector("img").getAttribute("src")
        const img= document.createElement("img")
        img.src=imgSrc
        model.appendChild(img)
        model.classList.add("model")
        closeBtn.classList.remove("hidden")
    });
});

closeBtn.addEventListener("click", ()=>{
    const img= document.querySelector("#model img")
    model.removeChild(img)
    closeBtn.classList.add("hidden")
    model.classList.remove("model")
})


