/*Funtionality to toggle education button*/

const toggle_button = document.getElementById('toggle-education') as HTMLButtonElement
const education = document.getElementById('education') as HTMLElement

toggle_button.addEventListener('click', ()=>{
    if(education.style.display === 'none'){
        education.style.display = 'block'
    }
    else{
        education.style.display = 'none'
    }
});

/*Funtionality to toggle skills button*/

const skillsButton = document.getElementById('toggle-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

skillsButton.addEventListener('click', ()=>{
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    }
    else{
        skills.style.display = 'none'
    }
});


/*Funtionality to toggle work experience button*/

const experienceButton = document.getElementById('toggle-work-experience') as HTMLButtonElement
const workExperience = document.getElementById('work-experience') as HTMLElement

experienceButton.addEventListener('click', ()=>{
    if(workExperience.style.display === 'none'){
        workExperience.style.display = 'block'
    }
    else{
        workExperience.style.display = 'none'
    }
});