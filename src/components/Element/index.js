import { Library } from '../../Library/Library'

const getIndex = (name) => {
    for (let index = 0; index < Library.length; index++) {
        if (Library[index].name === name)
            return index;
    }
    return -1;
}

export default getIndex