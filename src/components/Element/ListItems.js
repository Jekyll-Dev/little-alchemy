/* eslint-disable no-useless-concat */
import getIndex from './index'
// recipe list
const getIdAfterCrash = (dragName, dropName) => {
    const obj = {}
    obj['fire' + 'air'] = 'energy'; obj['air' + 'fire'] = 'energy';
    obj['fire' + 'water'] = 'steam'; obj['water' + 'fire'] = 'steam';
    obj['fire' + 'earth'] = 'lava'; obj['earth' + 'fire'] = 'lava';
    obj['water' + 'earth'] = 'mud'; obj['earth' + 'water'] = 'mud';
    obj['water' + 'lava'] = 'obsidian'; obj['lava' + 'water'] = 'obsidian';
    obj['water' + 'air'] = 'rain'; obj['air' + 'water'] = 'rain';
    obj['air' + 'earth'] = 'dust'; obj['air' + 'earth'] = 'dust';
    const newName = obj[dragName + dropName];
    if (!newName) return -1;
    return getIndex(newName);
}

export default getIdAfterCrash