/* eslint-disable no-useless-concat */
import React from 'react'
import '../style.css'
import { useDrag, useDrop } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid';
import { Library } from '../../Library/Library'

const getIndex = (name) => {
    for (let index = 0; index < Library.length; index++) {
        if (Library[index].name === name)
            return index;
    }
    return -1;
}

function Items({ left, right, iconId, iconItem, url, setBoard, setIcons }) {

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

    const [, dragSourceRef] = useDrag(() => ({
        type: 'images',
        item: { left, right, dragIconItem: iconItem, dragIconId: iconId },
    }), [iconId]);

    const [, drop] = useDrop(() => ({
        accept: 'images',
        drop: ({ dragIconId, dragIconItem }, monitor) => {
            const initial = monitor.getInitialSourceClientOffset()
            const differ = monitor.getDifferenceFromInitialOffset()
            if (initial) {
                let toado = {
                    x: initial.x + differ.x,
                    y: initial.y + differ.y
                }
                const idAfterCrash = getIdAfterCrash(dragIconItem.name, iconItem.name);
                // if collision occurs
                if (idAfterCrash !== -1) {
                    if (setBoard) {
                        setBoard(prev => {
                            // add icon after collison to the board
                            const newBoard = [...prev, { ...Library[idAfterCrash], toado, iconId: uuidv4() }];
                            // remove `drag icon` and remove `drop icon`
                            const newBoardAfter = newBoard.filter(icon => icon.iconId !== dragIconId && icon.iconId !== iconId);
                            return newBoardAfter;
                        });
                    }
                    if (setIcons) {
                        setIcons(prev => [...prev, Library[idAfterCrash].name])
                    }
                } else {
                    // if collison not occur
                    // will move drag icon to new toado
                    if (setBoard) {
                        setBoard(prev => {
                            const newBoard = [...prev].map(icon => {
                                if (icon.iconId === dragIconId) {
                                    const newIcon = { ...icon };
                                    // change old toado to new toado
                                    newIcon.toado = toado;
                                    return newIcon;
                                }
                                return icon;
                            });
                            return newBoard;
                        })
                    }
                }
            }
        }
    }), [iconId]);

    return (
        <div ref={drop}>
            <img
                ref={dragSourceRef}
                src={url}
                alt=''
            />
        </div>
    )
}

export default Items