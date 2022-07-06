function pickAnAnimal() {
    fetch("https://zoo-animal-api.herokuapp.com/animals/rand") 
        .then(response => response.json())
        .then(zoo => {
            const animalName = zoo.name //DECLARE AND INITIALIZE VARIABLE (ONLY ONCE AT THE BEGINNING)
            const cardElement = document.createElement('div') //DO THESE TWO LINES OF CODE TO FLEX THE API
            cardElement.classList.add('card')
            
           

            const nameElement = document.createElement('h1') //SECOND - CREATE ELEMENT
            nameElement.textContent = (`Name of animal: ${zoo.name}`) //THIRD - PUT TEXT INSIDE THE DIV
            cardElement.appendChild(nameElement) //FOURTH - ADD IT TO THE REST OF THE EXISTING INFO IN HTML
            console.log(nameElement) //FIFTH - PRINT IT OUT

            //ANIMAL TYPE ADDED
            const typeElement = document.createElement('h2')
            typeElement.textContent = (`Type of animal: ${zoo.animal_type}`)
            cardElement.appendChild(typeElement) 
            console.log(typeElement) 
            
            //HABITAT ADDED
            const habitatElement = document.createElement('p')
            habitatElement.textContent = (`Animal habitat: ${zoo.habitat }`)
            cardElement.appendChild(habitatElement) 
            console.log(habitatElement) 
            
            //DIET ADDED
            const dietElement = document.createElement('p')
            dietElement.textContent = (`Animal diet: ${zoo.diet}`)
            cardElement.appendChild(dietElement) 
            console.log(dietElement) 

            //ADDING TITLE FOR IMAGE:
            const titleForImgElement = document.createElement('div')
            titleForImgElement.textContent = 'Image of Animal:'
            cardElement.appendChild(titleForImgElement) 
            console.log(titleForImgElement) 


            //IMAGE ADDED
            const imageElement = document.createElement('img')
            imageElement.src = zoo.image_link
            cardElement.appendChild(imageElement) 
            console.log(imageElement) 

            document.querySelector('#zoo').appendChild(cardElement)

        })
    }
    
