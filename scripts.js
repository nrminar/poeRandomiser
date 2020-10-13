
$(document).ready(readyNow);
let skills = 
`Animate Weapon
Arctic Armour
Artillery Ballista
Barrage
Bear Trap
Blade Blast
Blade Flurry
Blade Vortex
Bladefall
Blast Rain
Burning Arrow
Caustic Arrow
Charged Dash
Cobra Lash
Cremation
Cyclone
Desecrate
Detonate Dead
Double Strike
Dual Strike
Elemental Hit
Ethereal Knives
Explosive Arrow
Explosive Trap
Fire Trap
Flamethrower Trap
Flicker Strike
Frenzy
Frost Blades
Galvanic Arrow
Herald of Agony
Ice Shot
Ice Trap
Lacerate
Lancing Steel
Lightning Arrow
Lightning Strike
Pestilent Strike
Puncture
Rain of Arrows
Reave
Riposte
Scourge Arrow
Seismic Trap
Shattering Steel
Shrapnel Ballista
Siege Ballista
Smoke Mine
Spectral Shield Throw
Spectral Throw
Split Arrow
Tornado Shot
Toxic Rain
Unearth
Venom Gyre
Viper Strike
Volatile Dead
Wild Strike
Withering Step
Ancestral Protector
Ancestral Warchief
Animate Guardian
Bladestorm
Chain Hook
Cleave
Consecrated Path
Devouring Totem
Dominating Blow
Earthquake
Earthshatter
Glacial Hammer
Ground Slam
Heavy Strike
Herald of Purity
Holy Flame Totem
Ice Crash
Infernal Blow
Molten Strike
Perforate
Reckoning
Searing Bond
Shockwave Totem
Smite
Splitting Steel
Static Strike
Sunder
Sweep
Tectonic Slam
Vengeance
Vigilant Strike
Arc
Arcanist Brand
Armageddon Brand
Ball Lightning
Bane
Blazing Salvo
Blight
Bodyswap
Cold Snap
Contagion
Conversion Trap
Crackling Lance
Creeping Frost
Dark Pact
Discharge
Divine Ire
Essence Drain
Fireball
Firestorm
Flame Surge
Flame Wall
Flameblast
Freezing Pulse
Frost Bomb
Frostbolt
Glacial Cascade
Herald of Thunder
Hexblast
Ice Nova
Ice Spear
Icicle Mine
Incinerate
Kinetic Blast
Kinetic Bolt
Lightning Spire Trap
Lightning Tendrils
Lightning Trap
Lightning Warp
Magma Orb
Orb of Storms
Penance Brand
Power Siphon
Pyroclast Mine
Raise Spectre
Raise Zombie
Righteous Fire
Scorching Ray
Shock Nova
Siphoning Trap
Soulrend
Spark
Storm Brand
Storm Burst
Storm Call
Stormbind
Stormblast Mine
Summon Carrion Golem
Summon Raging Spirit
Summon Skeletons
Void Sphere
Vortex
Wave of Conviction
Winter Orb
Wintertide Brand`.split('\n')
let ascendencies = 
`Slayer
Champion
Gladiator
Assasin
Trickster
Saboteur
Juggernaut
Berserker
Chieftain
Necromancer
Occultist
Elementalist
Deadeye
Raider
Pathfinder
Inquisitor
Heirophant
Guardian
Ascendant`.split('\n');

function readyNow() {
  $('#randomSkills').on('click', getSkills);
  $('#randomClass').on('click', getClass);
  $('#numberOfSkills').val('1')
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
  $('#classResults').append(`<div id="class">${ascendencies[Math.floor(Math.random() * ascendencies.length)]}</div>`);
}
