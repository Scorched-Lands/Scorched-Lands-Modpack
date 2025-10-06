let newItems = ["building_coupon"];

let newBlocks = [];

var newAspecti = [
  ["zinc", "#B7E6BF"],
  ["netherite", "#4C484C"],
  ["diamond_steel", "#7AA5A5"],
  ["pink_slime", "#C078B4"],
  ["scorched", "#F25455"],
  ["treated_iron", "#66616B"],
];

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
});

StartupEvents.registry("block", (event) => {
  newBlocks.forEach((block) => {
    event.create(block);
  });
});
