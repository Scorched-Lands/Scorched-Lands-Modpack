ServerEvents.recipes((event) => {
  const pneumaticcraft = definePneumaticcraftRecipes(event);
  event.recipes.industrialforegoing.dissolution_chamber(
    [
      "#forge:plates/brass",
      "#forge:plates/brass",
      "#forge:plates/brass",
      "pneumaticcraft:small_tank",
      "pneumaticcraft:small_tank",
      "#forge:plates/brass",
      "#forge:plates/brass",
      "#forge:plates/brass",
    ],
    Fluid.of("minecraft:water", 1000),
    "pneumaticcraft:medium_tank",
    200
  );
  event.recipes.industrialforegoing.dissolution_chamber(
    [
      "#forge:plates/treated_iron",
      "#forge:gears/brass",
      "#forge:plates/treated_iron",
      "pneumaticcraft:medium_tank",
      "pneumaticcraft:medium_tank",
      "pneumaticcraft:pressure_tube",
      "scguns:treated_brass_blueprint",
      "pneumaticcraft:pressure_tube",
    ],
    Fluid.of("embers:molten_lead", 4000),
    "pneumaticcraft:thermopneumatic_processing_plant",
    300
  );
});
