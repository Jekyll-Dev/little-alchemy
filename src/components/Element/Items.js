import React from 'react'
import '../style.css'
import { useDrag, useDrop } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid';
import { Library } from '../../Library/Library'
import getIdAfterCrash from './ListItems'

function Items({ left, right, iconId, iconItem, url, setList, setIcons }) {

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
                let coordinates = {
                    x: initial.x + differ.x,
                    y: initial.y + differ.y
                }
                const idAfterCrash = getIdAfterCrash(dragIconItem.name, iconItem.name);
                // if collision occurs
                if (idAfterCrash !== -1) {
                    if (setList) {
                        setList(prev => {
                            // add icon after collison to the board
                            const newBoard = [...prev, { ...Library[idAfterCrash], coordinates, iconId: uuidv4() }];
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
                    // will move drag icon to new coordinates
                    if (setList) {
                        setList(prev => {
                            const newBoard = [...prev].map(icon => {
                                if (icon.iconId === dragIconId) {
                                    const newIcon = { ...icon };
                                    // change old coordinates to new coordinates
                                    newIcon.coordinates = coordinates;
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