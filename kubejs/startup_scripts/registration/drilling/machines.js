let newItems = [];

let newBlocks = ["output_hatch"];

// StartupEvents.registry("item", (event) => {
//   newItems.forEach((item) => {
//     event.create(item);
//   });
// });

StartupEvents.registry("block", (event) => {
  newBlocks.forEach((block) => {
    event.create(block);
  });

  event.create("anthralite_drill");
  event.create("brass_drill");
  event.create("diamond_steel_drill");
  event.create("scorched_drill");
  
});
