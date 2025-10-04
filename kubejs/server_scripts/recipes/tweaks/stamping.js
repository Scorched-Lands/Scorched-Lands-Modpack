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

  function fluidTagForOutput(outputId) {
    var parts = String(outputId).split(":");
    var path = (parts.length > 1 ? parts[1] : parts[0]) || "";
    var material = path;
    var SUFFIXES = ["_plate", "_sheet"];

    for (var i = 0; i < SUFFIXES.length; i++) {
      var s = SUFFIXES[i];
      if (material.lastIndexOf(s) === material.length - s.length) {
        material = material.substring(0, material.length - s.length);
        break;
      }
    }
    return "forge:molten_" + material;
  }

  stampingRecipes.forEach(function (pair) {
    var input = pair[0];
    var output = pair[1];

    event.remove({ output: output });

    event
      .shapeless(output, [input, input, "embers:tinker_hammer"])
      .keepIngredient("embers:tinker_hammer");

    event.recipes.create.pressing(output, input);

    var tag = fluidTagForOutput(output);
    event.custom({
      type: "embers:stamping",
      fluid: {
        amount: 90,
        tag: tag,
      },
      output: { item: output },
      stamp: { item: "embers:plate_stamp" },
    });

    event.custom({
      type: "scguns:mechanical_pressing",
      processingTime: 200,
      ingredients: [{ item: input }],
      mold: { item: "embers:plate_stamp" },
      result: { item: output, count: 1 },
    });

    event.custom({
      type: "scguns:powered_mechanical_pressing",
      processingTime: 100,
      energyUse: 500,
      ingredients: [{ item: input }],
      mold: { item: "embers:plate_stamp" },
      result: { item: output, count: 1 },
    });
  });
});
