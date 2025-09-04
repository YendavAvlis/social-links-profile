const links = [
    {
        name:"Github",
        link:"https://github.com/YendavAvlis",
        icon: "github"
    },
    {
        name:"Frontend Mentor",
        link:"https://www.frontendmentor.io/profile/YendavAvlis",
        icon: "github"
    },
    {
        name:"Linkedin",
        link:"https://www.linkedin.com/in/vadney-da-silva/",
        icon: "linkedin"
    },
    {
        name:"X",
        link:"https://x.com/VadneySilva",
        icon: "twitter"
    },
    {
        name:"Instagram",
        link:"#",
        icon: "instagram"
    },
]

const socialLinks = document.querySelector('.links')

links.forEach(link => {
    socialLinks.innerHTML += `
    <li><a href="${link.link}" target="_blank">${link.name}</a></li>
    `
})