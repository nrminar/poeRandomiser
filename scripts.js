
$(document).ready(readyNow);

function readyNow() {
  $('#randomSkills').on('click', getSkills);
  $('#randomClass').on('click', getClass);
  $('#numberOfSkills').val('1')

  for(a of ascendencies) {
    $('#classOptions').append(`<button type="checkbox" id="${a}" class="classSelections">${a}</button>`)
    $(`#${a}`).on('click', selectDeselectClass);
  }
}

function getSkills(evt) {
  let number = $('#numberOfSkills').val();
  if(number && typeof parseInt(number) === "number"){
    $('#skillResults').empty();
    for(let i=0; i< number; i++){
      let randomSkill = skills[Math.floor(Math.random() * skills.length)]
      $('#skillResults').append(`<div class="skills">${randomSkill}</div>`);
    }
  }
}
function getClass(evt) {
  $('#classResults').empty();
  $('#classResults').append(`<div id="class">${ascendencies[Math.floor(Math.random() * ascendencies.length)]}</div><img src="https://i.imgflip.com/4ie36w.jpg">`);
}
function selectDeselectClass(evt) {  
  $(evt.target).toggleClass('classDeSelections');
  $(evt.target).toggleClass('classSelections');
  let name = evt.target.id;

  if(ascendencies.includes(name)){
    ascendencies.splice(ascendencies.indexOf(name), 1);
  } else {
    ascendencies.push(name)
  }
}
