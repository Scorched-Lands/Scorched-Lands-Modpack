ServerEvents.recipes((event) => {
    event.shaped('scguns:macerator', ['A A', 'BCB', 'BBB'], {
        A: '#forge:storage_blocks/iron',
        B: '#minecraft:stone_crafting_materials',
        C: 'minecraft:furnace'
    })
    event.shaped('scguns:gun_bench', ['AAA', 'B B', 'B B'], {
        A: 'scguns:treated_iron_ingot',
        B: '#minecraft:planks'
    })
    event.shaped('scguns:mechanical_press', ['ABA', 'BCB', 'AAA'], {
        A: '#minecraft:stone_tool_materials',
        B: 'scguns:treated_iron_ingot',
        C: 'minecraft:furnace'
    })
    event.shaped('scguns:advanced_composter', ['AAA', 'B B', 'CCC'], {
        A: '#minecraft:planks',
        B: '#forge:storage_blocks/copper',
        C: '#minecraft:logs'
    })
    event.shaped(Item.of('gateways:gate_pearl', '{gateway:"scorched_lands:progression/treated_iron_gate"}'), ['ABA', 'B B', 'ABA'], {
        A: 'scguns:treated_iron_ingot',
        B: '#forge:ingots/copper'
    })
    maceratorBuilder(event, '4x scguns:pebbles', ['minecraft:gravel'])
})