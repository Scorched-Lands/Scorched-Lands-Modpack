ServerEvents.recipes(function (event) {
  var stampingRecipes = [
    ["minecraft:copper_ingot", "create:copper_sheet"],
    ["minecraft:iron_ingot", "create:iron_sheet"],
    ['scguns:anthralite_ingot', 'vintageimprovements:lead_sheet'],
    ['create:andesite_alloy', 'vintageimprovements:andesite_sheet'],
    ['create:zinc_ingot', 'vintageimprovements:zinc_sheet'],
    ['scguns:treated_brass_ingot', 'create:brass_sheet'],
    ['embers:dawnstone_ingot', 'embers:dawnstone_plate'],
    ['minecraft:gold_ingot', 'create:golden_sheet']
  ];

  stampingRecipes.forEach(function (pair) {
    var input = pair[0];
    var output = pair[1];

    event.remove({ not: { type: 'embers:stamping' }, output: output });

    event
      .shapeless(output, [input, input, "embers:tinker_hammer"])
      .keepIngredient("embers:tinker_hammer");

    // event.recipes.create.pressing(output, input);
    event.recipes.create
      .sequenced_assembly(
        [output],
        [input],
        event.recipes.create.pressing(input, input)
      )
      .transitionalItem(input)
      .loops(2);

    event.custom({
      type: "scguns:mechanical_pressing",
      processingTime: 200,
      ingredients: [{ item: input }],
      // mold: { item: "embers:plate_stamp" },
      result: { item: output, count: 1 },
    });

    event.custom({
      type: "scguns:powered_mechanical_pressing",
      processingTime: 100,
      energyUse: 500,
      ingredients: [{ item: input }],
      // mold: { item: "embers:plate_stamp" },
      result: { item: output, count: 1 },
    });
  });
});
