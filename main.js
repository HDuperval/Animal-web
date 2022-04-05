function handleNameInput(event) {
    const name = event.target.value;
    // const nameElement = document.getElementById('name');
    alert("The animal name is"  + name)
}

async function handleSubmit(event) {
    event.preventDefault()
    const nameElement = document.getElementById('name')

    if(!nameElement.value){
        nameElement.classList.add('is-invalid'); 
    }

    const breedImport = document.getElementById('breed')

    if(!breedImport.value){
        // alert("Please provide the breed")
        breedImport.classList.add('is-invalid')
    }

    const age = document.getElementById('age').value

    if(!age){
        // alert("Age is nothing but a number")
        document.getElementById('age').classList.add('is-invalid')
        
    }
    try {
        const data = await fetch("http://localhost:5103/animals", 
        {
            method: "POST", 
            body:JSON.stringify({
                name: nameElement.value,
                breed: breedImport.value,
                age,

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const animal = await data.json()

        alert(`Created succesfully ${animal}`)

    } catch (error) {
        
    }

    // fetch("http://localhost:5103/animals", 
    // {
    //     method: "POST",
    //     body:JSON.stringity({
    //         name:nameElement.value,
    //         breed: breed.breedImport.value,
    //         age,
    //     }),
    //     headers: {
    //         'Content-type': 'application/jsaon'
    //     }
    // })
    // const animal = await data.json()
    // alert(`Created succesfully ${animal}`)
    // .then(response => {

//     })
 }