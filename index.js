
const banner = document.querySelector('.banner')


fetch("http://localhost:3000/BootCamps")
    .then(res => res.json())
    .then(BootCamps => BootCamps.forEach(bootcamp => renderBootCamp(bootcamp)))


function renderBootCamp(bootcamp) {
    const divElement = document.createElement('div')
    const divElementTwo = document.createElement('div')
    const bootcampImg = document.createElement('img')
    // const bootcampName = document.createElement('h2')
    const bootcampRating = document.createElement('p')
    const bootcampComment = document.createElement('p')

    bootcampImg.src = bootcamp.image
    // bootcampName.textContent = bootcamp.name
    bootcampRating.textContent = `Rating: ${bootcamp.rating}`
    bootcampComment.textContent = `Comments: ${bootcamp.comment}`
    bootcampImg.id = "img"
    divElement.id = "DivElement"
    divElementTwo.id = "DivElementTwo"

    divElement.append(bootcampImg)
    divElement.append(divElementTwo)
    divElementTwo.append(bootcampRating, bootcampComment)
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
    const inputImage = document.getElementById('image')

    const newObj = {
        name: inPutName.value,
        image: inputImage.value,
        rating: inPutRating.value,
        comment: inPutComment.value,
        website: inPutRating.value
    }
    fetch('http://localhost:3000/BootCamps', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObj)
    })
        .then(response => response.json())
        .then(obj => renderBootCamp(obj))

    banner.style.grid_template_columns = "1fr";

}

