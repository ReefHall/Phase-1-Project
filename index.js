
const banner = document.querySelector('.banner')


fetch("http://localhost:3000/BootCamps")
    .then(res => res.json())
    .then(BootCamps => BootCamps.forEach(bootcamp => renderBootCamp(bootcamp)))


function renderBootCamp(bootcamp) {
    const divElement = document.createElement('div')
    const clickBtn = document.createElement('button')
    const imgInfoDiv = document.createElement('div')
    const bootcampImg = document.createElement('img')
    const bootcampRating = document.createElement('p')
    const bootcampComment = document.createElement('p')

    const infoName = document.createElement('h1')
    // const infoAddress = document.createElement('p')
    // const infoTel = document.createElement('p')

    bootcampImg.src = bootcamp.image
    infoName.textContent = bootcamp.name.toUpperCase()
    bootcampRating.textContent = `Rating: ${bootcamp.rating}`
    bootcampComment.textContent = `Comments: ${bootcamp.comment}`
    imgInfoDiv.style.display ="none";


    bootcampImg.id = "img"
    divElement.id = "DivElement"
    clickBtn.id = "clickBtn"
    clickBtn.textContent = "CLICK ME"

    imgInfoDiv.append(infoName, bootcampRating, bootcampComment)
    divElement.append(bootcampImg, clickBtn, imgInfoDiv)
    divElement.append(clickBtn)
    banner.append(divElement)

clickBtn.addEventListener("click", ()=>{
    bootcampImg.style.display = "none";
    imgInfoDiv.style.display = "block";
    imgInfoDiv.style.height ="260px";
    imgInfoDiv.style.width ="300px";
    imgInfoDiv.style.background ="gray";
    imgInfoDiv.style.box_sizing = "border-size";
    imgInfoDiv.style.padding ="30px";
    clickBtn.style.display ="none";

    setTimeout(()=>{
        window.location.reload(true)
        }, 2000)
})

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

