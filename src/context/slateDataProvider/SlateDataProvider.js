import React, { useContext } from 'react'
import sectionsData from '../../data/sections';
import useLocalStorage from '../../hooks/useLocalStorage';
import { SlateContext, SlateContextProvider } from './slateContext'


export const useSlateContext = () => useContext(SlateContext);

const SlateDataProvider = ({ children }) => {
    const [sections, setSections] = useLocalStorage("sections-data", sectionsData);

    const updateSectionItems = (itemId, newProps) => {
        const newSections = [...sections];
        const [item, currentSection] = (() => {
            for (const section of newSections) {
                const item = section.items.find(item => item.id === itemId);
                if (item) {
                    return [item, section];
                }
            }
        })();

        if (!item) {
            throw new Error("Item not found!")
        }

        if (
            newProps.sectionId !== undefined
            && newProps.position !== undefined
        ) {
            const targetSection = newSections.find(section => section.id === newProps.sectionId);

            if (!targetSection) {
                throw new Error("Target section not found.");
            }
            currentSection.items.splice(currentSection.items.indexOf(item), 1);
            targetSection.items.splice(newProps.position, 0, item);
        }

        setSections(newSections)
    }

    const updateSection = (sectionId, newPosition) => {
        const newSections = [...sections]
        const currentPosition = newSections.findIndex(section => section.id === sectionId);
        if (currentPosition !== newPosition) {
            const section = newSections.find(section => section.id === sectionId);
            const replaceSection = sections[newPosition];
            newSections.splice(newPosition, 1, section)
            newSections.splice(currentPosition, 1, replaceSection)
            setSections(newSections)
        }
    }

    const updateItemText = (value, itemId, sectionId) => {
        const newSections = [...sections];
        const targetSection = newSections.find((section) => section.id === sectionId);
        if (targetSection) {
            targetSection.items = targetSection.items.map((itemRecord) => {
                if (itemRecord.id === itemId) return { ...itemRecord, item: value[0] };
                return itemRecord;
            })
            setSections(newSections)
        }
    }

    return (
        <SlateContextProvider value={{
            sections,
            setSections,
            updateSectionItems,
            updateSection,
            updateItemText
        }}>{children}</SlateContextProvider>
    )
}

export default SlateDataProvider