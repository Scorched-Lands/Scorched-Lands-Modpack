let newItems = ["building_coupon"];

let newBlocks = [];

let newFluids = [
  "molten_netherite",
  "molten_diamond_steel",
  "molten_scorched",
  "molten_treated_iron",
]

var newAspecti = [
  ["zinc", "#B7E6BF"],
  ["netherite", "#4C484C"],
  ["diamond_steel", "#7AA5A5"],
  ["pink_slime", "#FCBA76"],
  ["scorched", "#F25455"],
  ["treated_iron", "#66616B"],
];

var newSheets = [
  // ["diamond_steel", "#7AA5A5"],
  // ["pink_slime", "#FCBA76"],
  // ["scorched", "#F25455"],
  ["treated_iron", "#66616B"],
]

var newGears = [
  // ["anthralite", "#57473C"],
  // ["zinc", "#B7E6BF"],
  // ["diamond_steel", "#7AA5A5"],
  // ["scorched", "#F25455"],
  ["brass", "#FCBA76"]
]

StartupEvents.registry("item", (event) => {
  newItems.forEach((item) => {
    event.create(item);
  });

  newAspecti.forEach(function (pair) {
    var aspectus = pair[0];
    var color = pair[1];

    event
      .create(`${aspectus}_aspectus`)
      .texture('kubejs:item/blank/blank_aspectus')
      .color(color)
      .tag(`embers:aspectus`)
      .tag(`embers:aspectus/${aspectus}`);
  });

  newSheets.forEach(function (pair) {
    var sheet = pair[0];
    var color = pair[1];

    event
      .create(`${sheet}_sheet`)
      .texture('kubejs:item/blank/blank_sheet')
      .color(color)
      .tag(`forge:plates`)
      .tag(`forge:plates/${sheet}`);
  });

    newGears.forEach(function (pair) {
    var gear = pair[0];
    var color = pair[1];

    event
      .create(`${gear}_gear`)
      .texture('kubejs:item/blank/blank_gear')
      .color(color)
      .tag(`forge:gears`)
      .tag(`forge:gears/${gear}`);
  });

});

StartupEvents.registry("block", (event) => {
  newBlocks.forEach((block) => {
    event.create(block);
  });
});

StartupEvents.registry("fluid", (event) => {
  newFluids.forEach((fluid) => {
    event.create(fluid);
  });
});