
const banner = document.querySelector('.banner')
const navBar = document.querySelector('#navBar')


fetch("http://localhost:3000/BootCamps")
    .then(res => res.json())
    .then(BootCamps => BootCamps.forEach(bootcamp => renderBootCamp(bootcamp)))


function renderBootCamp(bootcamp) {
    const divElement = document.createElement('div')
    const clickBtn = document.createElement('button')
    const imgInfoDiv = document.createElement('div')
    const bootcampImg = document.createElement('img')
    const bootcampRating = document.createElement('p')
    //const bootcampComment = document.createElement('p')
    const li = document.createElement('li')
    const anchor = document.createElement('a')
    const div = document.createElement('div')
    const infoName = document.createElement('h1')
    const comments = document.createElement('p')

    comments.textContent = 'Comments:'

    imgInfoDiv.append(infoName, bootcampRating)
    imgInfoDiv.append(comments)
    bootcamp.comments.forEach(data => renderComment(data))

    function renderComment(data) {
     const bootcampComment = document.createElement('p')
     bootcampComment.innerText = `"${data}"`
     imgInfoDiv.append(bootcampComment)
    }

    
    const commentForm = document.createElement('form')
    const inputComment = document.createElement('input')
    const btnSubmit = document.createElement('button')

    inputComment.type = "text"
    inputComment.placeholder = "Comment Here"
    btnSubmit.type = 'submit'
    btnSubmit.innerText = "Add"
    btnSubmit.style.display = 'none'
    inputComment.style.display = 'none'
    

    commentForm.id = 'commentForm'
    inputComment.id = 'inputComment'
    btnSubmit.id = 'btnSubmit'
    commentForm.append(inputComment, btnSubmit)
    

    commentForm.addEventListener('submit', (e) => addComment(e, bootcamp))

    function addComment(e, bootcamp) {
        e.preventDefault();
       const array = [...bootcamp.comments, inputComment.value]
        const obj = {comments: array};

        renderComment(inputComment.value)

        fetch(`http://localhost:3000/BootCamps/${bootcamp.id}`, {
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(obj)
        })

    



    }


    anchor.href = bootcamp.website
    anchor.innerHTML = bootcamp.name
    div.className = 'line'
    
    li.append(anchor)
    navBar.append(li, div)


    bootcampImg.src = bootcamp.image
    infoName.textContent = bootcamp.name.toUpperCase()
    bootcampRating.textContent = `Rating: ${bootcamp.rating}`
    imgInfoDiv.style.display ="none";


    bootcampImg.id = "img"
    divElement.id = "DivElement"
    clickBtn.id = "clickBtn"
    clickBtn.textContent = "CLICK ME"

   // imgInfoDiv.append(infoName, bootcampRating, bootcampComment)
    divElement.append(bootcampImg, clickBtn, imgInfoDiv, commentForm)
    divElement.append(clickBtn)
    banner.append(divElement)

const xBtn = document.createElement('button')

clickBtn.addEventListener("click", ()=>{
    bootcampImg.style.display = "none";
    imgInfoDiv.style.display = "block";
    imgInfoDiv.style.height ="260px";
    imgInfoDiv.style.width ="300px";
    imgInfoDiv.style.background ="white";
    imgInfoDiv.style.box_sizing = "border-size";
    imgInfoDiv.style.padding = "30px";
    imgInfoDiv.style.border_radius = "30px";
    imgInfoDiv.style.color = "black";
    clickBtn.style.display ="none";

    inputComment.style.display = 'block'
    btnSubmit.style.display = 'block'

    

    imgInfoDiv.style.borderRadius ="10px";


    xBtn.textContent = "x"
    xBtn.id = "xbtn"


    divElement.append(xBtn)
    //css 110 px left
    // -150 top  Changed to divElement append instead of imgInnfoDiv and adjusted CSS sizes

})

xBtn.addEventListener("click", ()=>{
    bootcampImg.style.display = "block";
    imgInfoDiv.style.display = "none";
    clickBtn.style.display = "block";
    inputComment.style.display = "none";
    btnSubmit.style.display = "none";
    imgInfoDiv.append(xBtn) // append back to this div so it doesnt go out of order

})

}
const form = document.getElementById('form')
form .id = "form"
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
        comments:[inPutComment.value],
        website: inPutWebsite.value
    }
    fetch('http://localhost:3000/BootCamps', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObj)
    })
        .then(response => response.json())
        .then(Obj => renderBootCamp(Obj))


    //     const navBar = document.querySelector('#navBar')
    //     const li = document.createElement('li')
    //     const anchor = document.createElement('a')
    //     const div = document.createElement('div')

    //     div.className = 'line'
    //     anchor.href = inPutWebsite.value
    //     anchor.innerText = inPutName.value

    //     li.append(anchor)
    //     navBar.append(div,li)

    //     // inPutName.id = "inPutName"

     banner.style.grid_template_columns = "1fr";

}

