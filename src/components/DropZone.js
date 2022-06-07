import React, { useRef } from 'react';
import { useSlateContext } from '../context/slateDataProvider/SlateDataProvider';
import "./DropZone.css"

const DropZone = ({ type }) => {
    const dropZoneRef = useRef(null);
    const { updateSectionItems, updateSection } = useSlateContext();
    const handleDragOver = e => {
        e.preventDefault();
        dropZoneRef.current.classList.add("dropzone--active");
    }

    const handleDragLeave = () => {
        dropZoneRef.current.classList.remove("dropzone--active");
    }

    const handleDrop = (e) => {
        dropZoneRef.current.classList.remove("dropzone--active");
        if (type === "item") {
            handleItemDrop(e);
        } else {
            handleSectionDrop(e);
        }
    }

    const handleSectionDrop = (e) => {
        const sectionId = e.dataTransfer.getData("text/plain")
        const appContainer = document.querySelector('.App')
        const dropZonesInTodos = Array.from(appContainer.querySelectorAll('.dropzone-section'));
        const droppedIndex = dropZonesInTodos.indexOf(dropZoneRef.current);
        updateSection(sectionId, droppedIndex);
    }


    const handleItemDrop = (e) => {
        const currentSection = dropZoneRef.current.closest('.section')
        const sectionId = currentSection.dataset.id;
        const dropZonesInSection = Array.from(currentSection.querySelectorAll(".dropzone-item"));
        const droppedIndex = dropZonesInSection.indexOf(dropZoneRef.current);
        const itemId = e.dataTransfer.getData("text/plain");
        updateSectionItems(itemId, {
            sectionId,
            position: droppedIndex
        })
    }

    return (
        <div onDrop={handleDrop} onDragLeave={handleDragLeave} onDragOver={handleDragOver} ref={dropZoneRef} className={`dropzone-${type}`} />
    )
}

export default DropZone