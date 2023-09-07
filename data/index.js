const data = dataJson
const headerNav = document.getElementById("headerNav")
const a = headerNav.querySelectorAll(".a")

const Informasi = document.getElementById("Informasi")
const History = document.getElementById("History")

const Petinggi = document.getElementById("Petinggi")
for (let i = 0; i < a.length; i++) {
    const element = a[i];
    element.addEventListener("click", () => {
        console.log(element.innerHTML)
        if (element.innerHTML === "Petinggi") {
            window.scrollTo({
                top: Petinggi.offsetTop,
                left: 0,
                behavior: "smooth"
            })
        } else if (element.innerHTML === "Anggota") {
            window.scrollTo({
                top: Anggota.offsetTop,
                left: 0,
                behavior: "smooth"
            })
        } else if (element.innerHTML === "Informasi") {
            window.scrollTo({
                top: Informasi.offsetTop,
                left: 0,
                behavior: "smooth"
            })
        } else if (element.innerHTML === "History") {
            window.scrollTo({
                top: History.offsetTop,
                left: 0,
                behavior: "smooth"
            })
        }
    })

}

// --

const Sidebar = document.getElementById("Sidebar")
const sidebarBody = document.getElementById("sidebarBody")
const desc = sidebarBody.querySelectorAll(".Sidebar-in")

const Anggota = document.getElementById("Anggota")
const anggotaContainer = document.getElementById("anggotaContainer")

for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div")
    div.classList.add("anggota-body")

    const canvas = document.createElement('div')
    canvas.classList.add("canvas-anggota")
    div.appendChild(canvas)

    const divBody = document.createElement("img")
    divBody.classList.add("anggota-img")
    divBody.src = data[i].path
    canvas.appendChild(divBody)
    
    const divDesc = document.createElement("div")
    divDesc.innerHTML = data[i].nama
    divDesc.classList.add("anggota-desc")
    div.appendChild(divDesc)

    anggotaContainer.appendChild(div)

    div.addEventListener('click',() => {
        Sidebar.classList.add("show")
        // desc[0].innerHTML = data[i].nama
        // desc[1].innerHTML = data[i].TTL
        // desc[2].innerHTML = data[i].Alamat
        // desc[3].innerHTML = data[i].Moto
    })
}

const close = document.getElementById("close").addEventListener('click',() => {Sidebar.classList.remove("show")})

anggotaContainer.addEventListener("scroll", () => {
    anggotaContainer.classList.remove("notScroll")
    setTimeout(() => {
        anggotaContainer.classList.add("notScroll")
    }, 500)
})
