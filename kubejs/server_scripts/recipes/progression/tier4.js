ServerEvents.recipes((event) => {
  const pneumaticcraft = definePneumaticcraftRecipes(event);
  event.recipes.industrialforegoing.dissolution_chamber(
    [
      "scguns:diamond_steel_block",
      "#forge:glass",
      "scguns:diamond_steel_block",
      "pneumaticcraft:medium_tank",
      "pneumaticcraft:medium_tank",
      "scguns:diamond_steel_block",
      "#forge:glass",
      "scguns:diamond_steel_block",
    ],
    Fluid.of("create_enchantment_industry:hyper_experience", 4000),
    "pneumaticcraft:large_tank",
    300
  );
});
