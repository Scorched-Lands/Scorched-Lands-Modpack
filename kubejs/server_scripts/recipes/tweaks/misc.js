ServerEvents.recipes((event) => {
  const apothRemovedIDs = (filters) =>
    filters.forEach((f) =>
      event.shapeless(Item.of("minecraft:barrier"), ["minecraft:barrier"]).id(f)
    );
  apothRemovedIDs([
    "apotheosis:hellshelf",
    "apotheosis:blazing_hellshelf",
    "apotheosis:glowing_hellshelf",
    "apotheosis:seashelf",
    "apotheosis:crystal_seashelf",
    "apotheosis:heart_seashelf",
    "apotheosis:dormant_deepshelf",
    "apotheosis:echoing_deepshelf",
    "apotheosis:soul_touched_deepshelf",
    "apotheosis:echoing_sculkshelf",
    "apotheosis:soul_touched_sculkshelf",
    "apotheosis:endshelf",
    "apotheosis:pearl_endshelf",
    "apotheosis:draconic_endshelf",
    "apotheosis:rectifier",
    "apotheosis:rectifier_t2",
    "apotheosis:rectifier_t3",
    "apotheosis:sightshelf",
    "apotheosis:sightshelf_t2",
    "apotheosis:filtering_shelf",
    "apotheosis:treasure_shelf",
    "apotheosis:library",
  ]);
  event.custom({
    type: "brewinandchewin:fermenting",
    basefluid: {
      count: 1000,
      fluid: "actuallyadditions:canola_oil",
    },
    experience: 5,
    fermentingtime: 9600,
    ingredients: [
      {item: "minecraft:sugar"},
      {item: "minecraft:sugar"},
      {item: "minecraft:sugar"},
      {item: "minecraft:sugar"}
    ],
    result: {
      count: 1000,
      fluid: "actuallyadditions:refined_canola_oil",
    },
  });
  event.recipes.create.item_application('create:railway_casing', ['create:andesite_alloy_block', '#forge:ingots/gold']),
  event.shapeless('create:controls', ['minecraft:lever', 'create:railway_casing'])
  event.shapeless('create_central_kitchen:cooking_guide', ['vintageimprovements:andesite_sheet', '#forge:crops'])
  event.shapeless('4x create:schedule', ['vintageimprovements:andesite_sheet', 'create:railway_casing'])
  event.shapeless('railways:fuel_tank', ['create:fluid_tank', 'create:railway_casing'])
  event.shaped('12x minecraft:string', ['AA', 'AA', 'AA'], {
    A: 'nirvana:hemp_cloth'
  })
  bullet_production(event, 'createbigcannons:machine_gun_round', 'createbigcannons:empty_machine_gun_round', 'scguns:gunpowder_dust', 'create:copper_nugget', 'createbigcannons:partially_assembled_machine_gun_round')
  bullet_production(event, 'createbigcannons:ap_autocannon_round', 'scguns:large_iron_casing', 'scguns:anthralite_nugget', 'scguns:anthralite_nugget', 'scguns:large_iron_casing')
  bullet_production(event, 'createbigcannons:flak_autocannon_round', 'scguns:large_iron_casing', 'minecraft:gunpowder', 'scguns:grapeshot', 'scguns:large_iron_casing')
  replaceitem(event, '#forge:ingots/silver', 'create:zinc_ingot')
  replaceitem(event, '#forge:plates/silver', 'vintageimprovements:zinc_sheet')
  replaceitem(event, '#forge:storage_blocks/silver', 'create:zinc_block')
});
