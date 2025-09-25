// move these to mbd2 machine multiparts instead, with recipe modifiers
//  in the future, if they're intended for that.. 
StartupEvents.registry("block", (event) => {
  event.create("anthralite_drill");
  event.create("brass_drill");
  event.create("diamond_steel_drill");
  event.create("scorched_drill");
});
