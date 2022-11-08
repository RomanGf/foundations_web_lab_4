function changeColorById(){
    const elementId = document.getElementById('education')
    const elementId_2 = document.getElementById('hobbi')
    elementId.style.color = 'yellow'
    elementId.style.backgroundColor = 'green'
    elementId_2.style.color = 'yellow'
    elementId_2.style.backgroundColor = 'green'
    
}


function changeColorBySelector(){
    const elementSelector = document.querySelector('#hobbi')
    const elementSelector_2 = document.querySelector('#education')
    elementSelector.style.color = 'green'
    elementSelector.style.backgroundColor = 'yellow'
    elementSelector_2.style.color = 'green'
    elementSelector_2.style.backgroundColor = 'yellow'
}

function zoom_in_images(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.width = '660px' 
}

function diminish_images(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.width = '550px' 
}

function deleteImage(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.display = 'none';
}

function addImage(){
    const imageLviv = document.getElementById('image_Lviv')
    imageLviv.style.display = 'block';
}