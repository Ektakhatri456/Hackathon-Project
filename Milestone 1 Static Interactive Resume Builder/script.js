/*Funtionality to toggle education button*/
var toggle_button = document.getElementById('toggle-education');
var education = document.getElementById('education');
toggle_button.addEventListener('click', function () {
    if (education.style.display === 'none') {
        education.style.display = 'block';
    }
    else {
        education.style.display = 'none';
    }
});
/*Funtionality to toggle skills button*/
var skillsButton = document.getElementById('toggle-skills');
var skills = document.getElementById('skills');
skillsButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
/*Funtionality to toggle work experience button*/
var experienceButton = document.getElementById('toggle-work-experience');
var workExperience = document.getElementById('work-experience');
experienceButton.addEventListener('click', function () {
    if (workExperience.style.display === 'none') {
        workExperience.style.display = 'block';
    }
    else {
        workExperience.style.display = 'none';
    }
});
