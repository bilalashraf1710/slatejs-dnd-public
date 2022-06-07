import React from 'react';
import './App.css';
import DropZone from './components/DropZone';
import Section from './components/Section';
import { useSlateContext } from './context/slateDataProvider/SlateDataProvider';

function App() {
  const { sections } = useSlateContext();
  return (
    <div className="App">
      {sections.map((section) => (
        <React.Fragment key={section.id}>
          <Section id={section.id} title={section.title} items={section.items} />
          <DropZone type="section" />
        </React.Fragment>
      ))}
    </div>
  );
}

export default App;
