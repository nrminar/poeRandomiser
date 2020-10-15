
$(document).ready(readyNow);

function readyNow() {
  $('#randomSkills').on('click', getSkills);
  $('#randomClass').on('click', getClass);
  $('#numberOfSkills').val('1')

  for(a of ascendencies) {
    // $('#classOptions').append(`<button type="checkbox" id="${a}" class="classSelections">${a}</button>`)
    $('#classOptions').append(`<img src="./assets/images/${a}.webp" id="${a}" style="max-width: 150px;" />`);
    $(`#${a}`).on('click', selectDeselectClass);
  }
}

function getSkills(evt) {
  let number = $('#numberOfSkills').val();
  if(number && typeof parseInt(number) === "number"){
    $('#skillResults').empty();
    for(let i=0; i< number; i++){
      let randomSkill = skills[Math.floor(Math.random() * skills.length)]
      $('#skillResults').append(`<div class="skills">${randomSkill} <a class="skillLink" href="https://pathofexile.gamepedia.com/${randomSkill.replace(" ", "_")}" target="_blank">Wiki<a></div>`);
    }
  }
}
function getClass(evt) {
  $('#classResults').empty();
  let randomClass = ascendencies[Math.floor(Math.random() * ascendencies.length)];
  $('#classResults').append(`<div id="class">${randomClass} <a class="skillLink" href="https://pathofexile.gamepedia.com/${randomClass.replace(" ", "_")}" target="_blank">Wiki<a></div><img style="max-width: 400px;" src="./assets/images/${randomClass}.webp">`);
}
function selectDeselectClass(evt) {
  $(evt.target).toggleClass('skillSelection');
  let name = evt.target.id;

  if(ascendencies.includes(name)){
    ascendencies.splice(ascendencies.indexOf(name), 1);
  } else {
    ascendencies.push(name)
  }
}
