
$(document).ready(readyNow);
let classes = 
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
Blink Arrow
Blood Rage
Burning Arrow
Caustic Arrow
Charged Dash
Cobra Lash
Cremation
Cyclone
Dash
Desecrate
Detonate Dead
Double Strike
Dual Strike
Elemental Hit
Ensnaring Arrow
Ethereal Knives
Explosive Arrow
Explosive Trap
Fire Trap
Flamethrower Trap
Flicker Strike
Frenzy
Frost Blades
Galvanic Arrow
Grace
Haste
Hatred
Herald of Agony
Herald of Ice
Ice Shot
Ice Trap
Lacerate
Lancing Steel
Lightning Arrow
Lightning Strike
Mirror Arrow
Pestilent Strike
Phase Run
Plague Bearer
Poacher's Mark
Precision
Puncture
Purity of Ice
Rain of Arrows
Reave
Riposte
Scourge Arrow
Seismic Trap
Shattering Steel
Shrapnel Ballista
Siege Ballista
Smoke Mine
Sniper's Mark
Spectral Shield Throw
Spectral Throw
Split Arrow
Summon Ice Golem
Temporal Chains
Tornado Shot
Toxic Rain
Unearth
Vaal Blade Vortex
Vaal Burning Arrow
Vaal Cyclone
Vaal Detonate Dead
Vaal Double Strike
Vaal Grace
Vaal Haste
Vaal Impurity of Ice
Vaal Lightning Strike
Vaal Rain of Arrows
Vaal Reave
Vaal Spectral Throw
Venom Gyre
Viper Strike
Volatile Dead
Whirling Blades
Wild Strike
Withering Step
Ancestral Protector
Ancestral Warchief
Anger
Animate Guardian
Berserk
Bladestorm
Blood and Sand
Chain Hook
Cleave
Consecrated Path
Decoy Totem
Determination
Devouring Totem
Dominating Blow
Dread Banner
Earthquake
Earthshatter
Enduring Cry
Flesh and Stone
General's Cry
Glacial Hammer
Ground Slam
Heavy Strike
Herald of Ash
Herald of Purity
Holy Flame Totem
Ice Crash
Immortal Call
Infernal Blow
Infernal Cry
Intimidating Cry
Leap Slam
Molten Shell
Molten Strike
Perforate
Pride
Punishment
Purity of Fire
Rallying Cry
Reckoning
Rejuvenation Totem
Searing Bond
Seismic Cry
Shield Charge
Shockwave Totem
Smite
Splitting Steel
Static Strike
Steelskin
Summon Flame Golem
Summon Stone Golem
Sunder
Sweep
Tectonic Slam
Vaal Ancestral Warchief
Vaal Earthquake
Vaal Glacial Hammer
Vaal Ground Slam
Vaal Impurity of Fire
Vaal Molten Shell
Vengeance
Vigilant Strike
Vitality
Vulnerability
War Banner
Warlord's Mark
Arc
Arcane Cloak
Arcanist Brand
Armageddon Brand
Assassin's Mark
Ball Lightning
Bane
Blazing Salvo
Blight
Bodyswap
Bone Offering
Brand Recall
Clarity
Cold Snap
Conductivity
Contagion
Conversion Trap
Convocation
Crackling Lance
Creeping Frost
Dark Pact
Despair
Discharge
Discipline
Divine Ire
Elemental Weakness
Enfeeble
Essence Drain
Fireball
Firestorm
Flame Dash
Flame Surge
Flame Wall
Flameblast
Flammability
Flesh Offering
Freezing Pulse
Frost Bomb
Frost Shield
Frost Wall
Frostbite
Frostblink
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
Malevolence
Orb of Storms
Penance Brand
Power Siphon
Purifying Flame
Purity of Elements
Purity of Lightning
Pyroclast Mine
Raise Spectre
Raise Zombie
Righteous Fire
Scorching Ray
Shock Nova
Sigil of Power
Siphoning Trap
Soulrend
Spark
Spellslinger
Spirit Offering
Storm Brand
Storm Burst
Storm Call
Stormbind
Stormblast Mine
Summon Carrion Golem
Summon Chaos Golem
Summon Holy Relic
Summon Lightning Golem
Summon Raging Spirit
Summon Skeletons
Summon Skitterbots
Tempest Shield
Vaal Arc
Vaal Blight
Vaal Clarity
Vaal Cold Snap
Vaal Discipline
Vaal Fireball
Vaal Flameblast
Vaal Ice Nova
Vaal Impurity of Lightning
Vaal Lightning Trap
Vaal Power Siphon
Vaal Righteous Fire
Vaal Spark
Vaal Storm Call
Vaal Summon Skeletons
Void Sphere
Vortex
Wave of Conviction
Winter Orb
Wintertide Brand
Wither
Wrath
Zealotry`;
let ascendencies = `Slayer, Champion, Gladiator, Assasin, Trickster, Saboteur, Juggernaut, Berserker, Chieftain, Necromancer, Occultist, Elementalist, Deadeye, Raider, Pathfinder, Inquisitor, Heirophant, Guardian, Ascendant`;

function readyNow() {
  $('#getClasses').on('click', getClasses);
    
}

function openInfo(evt, infotype) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(infotype).style.display = "block";
    evt.currentTarget.className += " active";
  }

function getClasses(evt) {
  let number = $('#numberOfClasses').val();
  for(let i=0; i< number; i++){
    let randomClass = classes[Math.floor(Math.random() * classes.length)]
    $('#classResults').append(`${randomClass}<br>`)
  }
}
