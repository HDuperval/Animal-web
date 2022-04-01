function handleNameInput(event) {
    const name =  event.target.value;
    // const nameElement = document.getElementById('name');
    alert("The animal name is"  + name)
}

function handleSubmit(event) {
    event.preventDefault()
    const nameElement = document.getElementById('name')

    if(!nameElement.value){
        alert("The name isrequired")
        return;
    }

    const breedImport = document.getElementById('breed')

    if(!breedImport.value){
        alert("Please provide the breed")
        return;
    }

    const age = document.getElementById('age').value

    if(!age){
        alert("Age is nothing but a number")
        return;
    }
    // try{
    //  //Get all animals in server
    //     const data = await fetch("http:/localhost:300/animals")
    //     const animals = await data.json()
    // }catch (error){

    // }
    // fetch("http://localhost:3000/animals", {
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
    // .then(response => {

    //})
}