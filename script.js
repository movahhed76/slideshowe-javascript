const panels = document.querySelectorAll(".pannel")

panels.forEach( panel => {
    panel.addEventListener("click" , () => {
        removeclasslist();
        panel.classList.add("active")
    })
})
const removeclasslist = () => {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}