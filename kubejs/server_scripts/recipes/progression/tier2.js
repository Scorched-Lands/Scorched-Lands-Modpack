ServerEvents.recipes((event) => {
  const pneumaticcraft = definePneumaticcraftRecipes(event);
  event.shaped("4x create:fluid_tank", ["AAA", "ABA", "AAA"], {
    A: "#forge:plates/copper",
    B: "scguns:copper_blueprint",
  });
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
  event.shaped("mininggadgets:mininggadget_simple", ["AAD", "ABC", "A  "], {
    A: "scguns:treated_iron_ingot",
    B: "#forge:storage_blocks/redstone",
    C: 'scguns:energy_core',
    D: "scguns:iron_blueprint",
  });
  event.shaped("mininggadgets:mininggadget_fancy", ["AAD", "ACB", "A  "], {
    A: "scguns:treated_iron_ingot",
    B: "#forge:storage_blocks/redstone",
    C: 'scguns:energy_core',
    D: "scguns:iron_blueprint",
  });
  event.shaped("mininggadgets:mininggadget", ["AAD", "BCA", "A  "], {
    A: "scguns:treated_iron_ingot",
    B: "#forge:storage_blocks/redstone",
    C: 'scguns:energy_core',
    D: "scguns:iron_blueprint",
  });
  event.shaped("actuallyadditions:coal_generator", ["ABA", "ACA", "AAA"], {
    A: "pneumaticcraft:reinforced_stone",
    B: "#forge:dusts/redstone",
    C: "minecraft:furnace",
  });
  event.shaped('mininggadgets:modificationtable', ['AAA', 'BCB', 'BBB'], {
    A: '#forge:gems/quartz',
    B: '#forge:ingots/iron',
    C: '#forge:dusts/redstone'
  });
  event.shaped('immersive_aircraft:boiler', ['AAA', 'ABA', 'CDC'], {
    A: '#forge:ingots/copper',
    B: 'scguns:copper_blueprint',
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
  event.recipes.create.compacting(Fluid.of('actuallyadditions:canola_oil', 100), '#forge:crops/canola')
  maceratorBuilder(event, '2x create:andesite_alloy', ['#forge:stone', '#forge:nuggets', '#forge:nuggets', '#forge:stone'])
  infusion(event, "mininggadgets:upgrade_fortune_3", "minecraft:diamond_block", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_freezing", "minecraft:blue_ice", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_silk", "minecraft:feather", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_void_junk", "minecraft:obsidian", 15, 20, 0);
  bullet_production(event, 'scguns:energy_core', 'scguns:empty_core', 'minecraft:redstone_block', 'rubinated_nether:ruby', 'scguns:unfinished_plasma_core')
  pneumaticcraft.pressure_chamber("2x scguns:treated_brass_ingot", ["3x create:zinc_ingot", "4x minecraft:copper_ingot", "minecraft:blaze_powder", "#rubinated_nether:low_ruby"], 4);
  replaceitem(event, 'immersive_aircraft:propeller', 'create:propeller')
  // amadron(event, '2x kubejs:building_coupon', '3x minecraft:coal_block')
});

