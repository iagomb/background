const button = document.querySelector('#button');
const card = document.querySelector('.card')

let cor = -1
let colors = ['red', 'green', 'blue', 'yellow', 'gray'];


button.addEventListener('click', () => {
    cor++
    if (cor <= colors.length ) {  
        card.style.borderColor = colors[cor]
        console.log(colors);
    }else {
        cor = -1
        console.log(cor);
    }  
})



const url = fetch('https://api.github.com/users/iagomb')

const avatar = document.querySelector('.avatar')
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const company = document.querySelector('.company')
const locaction = document.querySelector('.location')
const repos = document.querySelector('.repos')

async function getGithub() {
    const response = await url
    const data = response.json()
    const user = await data

    avatar.src = user.avatar_url
    followers.innerHTML = user.followers
    following.innerHTML = user.following
    company.innerHTML = user.company
    locaction.innerHTML = user.location
    repos.innerHTML = user.public_repos

    console.log(user);
}

getGithub()

// var aFileParts = [` <div class="card">
// <header class="logo">
//     <img class="logoImg" src="./assets/logo.svg" alt="logo">
//     <h1 class="title"> Iago moreira</h1>
// </header>
// <main>
//     <img class="avatar" src="./assets/logo.svg" alt="">
//     <div class=" links">
//         <div class="link">
//             <img class="followers" src="./assets/followers.svg" alt="">
//             <span  class=" qtdFollowers">468</span>
//             <strong> Seguidores </strong>
//         </div>
//         <div class="link">
//             <img class="followers" src="./assets/followers.svg" alt="">
//             <span class=" qtdFollowers">468</span>
//             <strong> Seguindo </strong>
//         </div>
//         <div class="link">
//             <img src="./assets/repository.svg" alt="">
//             <span  class=" qtdFollowers">468</span>
//             <strong> Repositorios </strong>
//         </div>
//         <div class="link">
//             <img src="./assets/company.svg" alt="">
//             <strong>@Rocketseat</strong>
//         </div>
//         <div class="link">
//             <img src="./assets/location.svg" alt="">
//             <strong> Bebedouro </strong>
//         </div>
//     </div>`];
// var oMyBlob = new Blob(aFileParts, {type : 'image/jpeg'}); // o blob

// var u = URL.createObjectURL(oMyBlob)

// var a = document.querySelector('a')

// a.href = u

// oMyBlob.slice()

// console.log(oMyBlob);


