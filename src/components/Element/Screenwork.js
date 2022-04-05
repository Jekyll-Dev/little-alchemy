import React from 'react'
import './screen.css'
import { useDrop } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid';
import { Library } from '../../Library/Library'
import Items from './Items'

function Screenwork({ list, setList, setIcons }) {

    const [, drop] = useDrop(() => ({
        accept: 'images',
        drop: ({ left, right, dragIconItem, dragIconId }, monitor) => {
            const iconId = dragIconId;
            const iconItem = dragIconItem;
            const initial = monitor.getInitialSourceClientOffset()
            const differ = monitor.getDifferenceFromInitialOffset()
            if (initial) {
                let coordinates = {
                    x: initial.x + differ.x,
                    y: initial.y + differ.y
                }
                addImageToBoard(iconItem, coordinates, iconId, left, right)
            }
        }
    }))

    const addImageToBoard = (iconItem, coordinates, iconId, left, right) => {
        setList(prev => {
            // if drag from left => will move
            if (left) {
                const newBoard = [...prev].map(icon => {
                    if (icon.iconId === iconId) {
                        const newIcon = { ...icon };
                        // change old coordinates to new coordinates
                        newIcon.coordinates = coordinates;
                        return newIcon;
                    }
                    return icon;
                });
                return newBoard;
            }
            // if drag from right => will add
            if (right) {
                // increase range of this range for more correct
                const newBoard = [...prev, { ...Library[iconItem.id], coordinates, iconId: uuidv4() }];
                return newBoard
            }
            return prev;
        })
    }

    return (
        <div className='container' ref={drop}>
            <div>
                {
                    list.map((icon, index) => {
                        return <div key={index} className='icon-img2' style={{ left: icon.coordinates.x, top: icon.coordinates.y }}>
                            <Items left={true} iconId={icon.iconId} iconItem={icon} url={icon.images} setList={setList} setIcons={setIcons} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Screenwork