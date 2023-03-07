fetch("http://localhost:3000/BootCamps")
.then(response => response.json())
.then(bootCamps => bootCamps.forEach(bootCamp => renderBootCamp(bootCamp)))

function renderBootCamp(bootCamp) {
    //const divBoot = document.createElement('div')
    const img = document.getElementById('flat-iron')
    const name = document.getElementById('name')
    const rating = document.getElementById('rating')
    const comment = document.getElementById('comment')

    img.src = bootCamp.image
    name.innerText = bootCamp.name
    rating.innerText = bootCamp.rating
    comment.innerText = bootCamp.comment

   

}