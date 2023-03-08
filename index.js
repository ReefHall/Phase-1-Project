// fetch("http://localhost:3000/BootCamps")
// .then(response => response.json())
// .then(bootCamps => bootCamps.forEach(bootCamp => renderBootCamp(bootCamp)))

// function renderBootCamp(bootCamp) {
//     const img = document.getElementById('flat-iron')
//     const name = document.getElementById('name')
//     const rating = document.getElementById('rating')
//     const comment = document.getElementById('comment')

//     img.src = bootCamp.image
//     name.innerText = bootCamp.name
//     rating.innerText = bootCamp.rating
//     comment.innerText = bootCamp.comment

   

// }

//we want to get the name, image, rating, comment, + website

const banner = document.querySelector('.banner')


fetch("http://localhost:3000/BootCamps")
.then(res => res.json())
.then(BootCamps => BootCamps.forEach(bootcamp => renderBootCamp(bootcamp)))


function renderBootCamp(bootcamp){
const divElement = document.createElement('div')
const bootcampImg = document.createElement('img')
// const bootcampName = document.createElement('h2')
const bootcampRating = document.createElement('p')
const bootcampComment = document.createElement('p')

bootcampImg.src = bootcamp.image
// bootcampName.textContent = bootcamp.name
bootcampRating.textContent = bootcamp.rating
bootcampComment.textContent = bootcamp.comment
bootcampImg.id = "img"
divElement.id = "DivElement"

divElement.append(bootcampImg, bootcampRating, bootcampComment)
banner.append(divElement)


}
const form = document.getElementById('form')
form.addEventListener('submit', (e) => submitForm(e))

function submitForm(e) {
    e.preventDefault()
    const inPutName = document.getElementById('name')
    const inPutRating = document.getElementById('rating')
    const inPutComment = document.getElementById('comment')
    const inPutWebsite = document.getElementById('website')
    //const inputImage 

    const newObj = {name: inPutName.value}
                    


}

