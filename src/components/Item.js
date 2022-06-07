import React from 'react';
import { useSlateContext } from '../context/slateDataProvider/SlateDataProvider';
import DropZone from './DropZone';
import EditText from './EditText';
import "./Item.css"

const Item = ({ item, id, sectionId }) => {
    const { updateItemText } = useSlateContext()
    const handleDragStart = e => {
        e.stopPropagation()
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData("text/plain", id);
    }

    const handleTextChange = (value, editor) => {
        const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
        )
        if (isAstChange) {
            updateItemText(value, id, sectionId)
        }
    }

    return (
        <div onDragStart={handleDragStart} className="section-item" draggable={true}>
            <div className="section-item__container">
                <span className="material-symbols-outlined">
                    drag_handle
                </span>
                <div className="section-item__content">
                    <EditText item={item} itemId={id} sectionId={sectionId} onChange={handleTextChange} />
                </div>
            </div>
            <DropZone type="item" />
        </div>
    )
}

export default Item