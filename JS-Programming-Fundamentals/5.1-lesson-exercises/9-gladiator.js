function gladiator(equipment) {
    let inventory = equipment[0].split(' ')

    for (let i = 1; i < equipment.length; i++) {
        let element = equipment[i].split(' ')
        let command = element[0]
        let newEquipment = element[1]

        if (command == 'Buy') {
            if (inventory.includes(newEquipment) == true) {
                break;
            }
            else {
                inventory.push(newEquipment)
            }
        }

        else if (command == 'Trash') {
            for (let j = 0; j < inventory.length; j++) {
                if (inventory.includes(newEquipment) == true) {
                    let index = inventory.indexOf(newEquipment)
                    inventory.splice(index, 1)
                    j = -1
                }
                else {
                    break;
                }
            }
        }

        else if (command == 'Repair') {

            let count = 0

            if (inventory.includes(newEquipment) == true) {
                for (let z = 0; z < inventory.length; z++) {
                    if (inventory[z] == newEquipment) {
                        inventory.splice(inventory.indexOf(newEquipment), 1)
                        count++
                        z = -1
                    }
                }
                for (let k = 0; k < count; k++) {
                    inventory.push(newEquipment)
                }
            }
            else {
                break;
            }
        }

        else if (command == 'Upgrade') {
            upgradetElement = element[1].split('-')
            if (inventory.includes(upgradetElement[0]) == true) {
                inventory.splice(inventory.indexOf(upgradetElement[0]) + 1, 0, `${upgradetElement[0]}:${upgradetElement[1]}`)
            }
            else {
                break;
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiator(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
)