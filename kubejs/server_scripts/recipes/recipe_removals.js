ServerEvents.recipes((event) => {
  const removedTypes = [
    
  ];

  const removedIDs = [
    'scguns:macerator',
    'scguns:advanced_composter',
    'scguns:gun_bench',
    'scguns:mechanical_press',
    'minecraft:enchanting_table',
    'create:crafting/kinetics/fluid_tank',
  ];
  const removedInputs = [];
  const removedOutputs = [];

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
});
