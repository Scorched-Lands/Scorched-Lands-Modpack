ServerEvents.recipes(event => {
  const pneumaticcraft = definePneumaticcraftRecipes(event)
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
  infusion(event, "mininggadgets:upgrade_fortune_3", "minecraft:diamond_block", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_freezing", "minecraft:blue_ice", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_silk", "minecraft:feather", 15, 20, 0);
  infusion(event, "mininggadgets:upgrade_void_junk", "minecraft:obsidian", 15, 20, 0);
  pneumaticcraft.pressure_chamber('scguns:treated_brass_ingot', 'create:zinc_ingot', 4)
});
