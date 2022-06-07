import React from 'react';
import DropZone from './DropZone';
import Item from './Item';
import "./Section.css"

const Section = ({ title, items, id }) => {
    const handleDragStart = e => {
        e.stopPropagation()
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData("text/plain", id);
    }
    return (
        <div onDragStart={handleDragStart} data-id={id} className="section" draggable={true}>
            <div className="section__header">
                <span className="material-symbols-outlined">
                    drag_handle
                </span>
                <h2>{title}</h2>
            </div>
            <div className="section__items">
                <DropZone type="item" />
                {items.map((item) => (
                    <Item key={item.id} sectionId={id} id={item.id} item={item.item} />
                ))}
            </div>
        </div>
    )
}

export default Section