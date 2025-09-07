let newItems = [
  'building_coupon'
];

let newBlocks = [
 'output_hatch'
];


StartupEvents.registry("item", (event) => {
  newItems.forEach((item) => {
    event.create(item);
  });
});

StartupEvents.registry("block", (event) => {
  newBlocks.forEach((block) => {
    event.create(block);
  });
  });