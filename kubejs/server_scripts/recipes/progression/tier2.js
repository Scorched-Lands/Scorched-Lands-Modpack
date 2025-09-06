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
    C: "#forge:gems/ruby",
    D: "scguns:iron_blueprint",
  });
  event.shaped("mininggadgets:mininggadget_fancy", ["AAD", "ACB", "A  "], {
    A: "scguns:treated_iron_ingot",
    B: "#forge:storage_blocks/redstone",
    C: "#forge:gems/ruby",
    D: "scguns:iron_blueprint",
  });
  event.shaped("mininggadgets:mininggadget", ["AAD", "BCA", "A  "], {
    A: "scguns:treated_iron_ingot",
    B: "#forge:storage_blocks/redstone",
    C: "#forge:gems/ruby",
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
  event.shaped('2x create:white_sail', ['AB', 'BC'], {
    A: 'nirvana:hemp_cloth',
    B: '#forge:rods/wooden',
    C: 'create:andesite_alloy'
  });
  event.shaped('immersive_aircraft:boiler', ['AAA', 'ABA', 'CDC'], {
    A: '#forge:ingots/copper',
    B: 'scguns:copper_blueprint',
    C: '#forge:storage_blocks/copper',
    D: 'minecraft:furnace'
  })
  event.recipes.create.compacting(Fluid.of('actuallyadditions:canola_oil', 100), '#forge:crops/canola')
  maceratorBuilder(event, '2x create:andesite_alloy', ['#forge:stone', '#forge:nuggets', '#forge:nuggets', '#forge:stone'])
  infusion(event, "mininggadgets:upgrade_fortune_3", "minecraft:diamond_block", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_freezing", "minecraft:blue_ice", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_silk", "minecraft:feather", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_void_junk", "minecraft:obsidian", 15, 20, 0);
  pneumaticcraft.pressure_chamber(
    "scguns:treated_brass_ingot",
    [
      "3x create:zinc_ingot",
      "4x minecraft:copper_ingot",
      "minecraft:blaze_powder",
      "#rubinated_nether:low_ruby",
    ],
    4
  );
});
