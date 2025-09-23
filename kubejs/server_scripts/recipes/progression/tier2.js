ServerEvents.recipes((event) => {
  const pneumaticcraft = definePneumaticcraftRecipes(event);
  event.shaped("4x create:fluid_tank", ["AAA", "ABA", "AAA"], {
    A: "#forge:plates/copper",
    B: "scguns:copper_blueprint",
  });
  event.shapeless('create:fluid_tank', ["scguns:copper_blueprint", "2x #forge:plates/copper"])
  event.shaped("minecraft:enchanting_table", [" A ", "BCB", "CCC"], {
    A: "minecraft:book",
    B: "compressedcreativity:brass_gilded_lapis_lazuli",
    C: "#forge:obsidian",
  });
  event.shaped("apotheosis:simple_reforging_table", [" A ", "BCB", "CCC"], {
    A: "apotheosis:common_material",
    B: "scguns:treated_iron_ingot",
    C: "pneumaticcraft:reinforced_stone",
  });
  event.shaped('mininggadgets:modificationtable', ['AAA', 'BCB', 'BBB'], {
    A: '#forge:gems/quartz',
    B: '#forge:ingots/iron',
    C: '#forge:dusts/redstone'
  });
  event.shaped('immersive_aircraft:boiler', ['AAA', 'ABA', 'CDC'], {
    A: '#forge:ingots/copper',
    B: 'create:fluid_tank',
    C: '#forge:storage_blocks/copper',
    D: 'minecraft:furnace'
  });
  event.shaped('create:brass_hand', [' A ', 'AAA', ' B '], {
    A: '#minecraft:planks',
    B: 'vintageimprovements:andesite_sheet'
  })
  event.shaped('immersive_aircraft:engine', ['AAA', 'BCB', 'DED'], {
    A: 'scguns:treated_iron_ingot',
    B: 'scguns:treated_iron_block',
    C: 'minecraft:furnace',
    D: '#forge:storage_blocks/copper',
    E: 'immersive_aircraft:boiler'
  })
  event.shaped('immersive_aircraft:hull', ['AAA', 'BBB', 'AAA'], {
    A: '#minecraft:logs',
    B: 'create:andesite_alloy'
  })
  event.shaped('actuallyadditions:energizer', ['AAA', 'ABA', 'AAA'], {
    A: 'pneumaticcraft:reinforced_stone',
    B: 'scguns:energy_core'
  })
  stackShaped(event, Item.of('gateways:gate_pearl', '{gateway:"scorched_lands:progression/treated_brass_gate"}'), ['ABA'], {
    "A": '8x create:electron_tube',
    "B": '16x scguns:treated_brass_ingot'
})
event.shaped('immersive_aircraft:enhanced_propeller', [' A ', 'ABA', ' A '], {
  A: '#forge:plates/brass',
  B: 'create:propeller'
})
event.shaped('immersive_aircraft:steel_boiler', ['ABA', 'ACA', 'DDD'], {
  A: '#forge:plates/brass',
  B: 'scguns:treated_brass_blueprint',
  C: 'immersive_aircraft:boiler',
  D: '#forge:storage_blocks/brass'
})
  event.recipes.create.compacting(Fluid.of('actuallyadditions:canola_oil', 100), '#forge:crops/canola')
  maceratorBuilder(event, '2x create:andesite_alloy', ['#forge:stone', '#forge:nuggets', '#forge:nuggets', '#forge:stone'])
  infusion(event, "mininggadgets:upgrade_fortune_3", "minecraft:diamond_block", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_freezing", "minecraft:blue_ice", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_silk", "minecraft:feather", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_void_junk", "minecraft:obsidian", 15, 20, 0);
  bullet_production(event, 'scguns:energy_core', 'scguns:empty_core', 'minecraft:redstone_block', 'rubinated_nether:ruby', 'scguns:unfinished_plasma_core')
  pneumaticcraft.pressure_chamber("2x scguns:treated_brass_ingot", ["4x minecraft:copper_ingot", "3x create:zinc_ingot", '2x scguns:sheol', "#rubinated_nether:low_ruby"], 4);
  replaceitem(event, 'immersive_aircraft:propeller', 'create:propeller')
  // amadron(event, '2x kubejs:building_coupon', '3x minecraft:coal_block')
});

