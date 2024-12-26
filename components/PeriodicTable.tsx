import React from 'react'
import Element from './Element'
import Legend from './Legend'
import { elements } from '../data/elements'

const PeriodicTable: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-screen bg-gray-900 text-white p-4 overflow-x-auto">
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      <h1 className="text-4xl font-bold text-center mb-8 relative z-10">Space-Themed Periodic Table</h1>
      <div className="mb-8 relative z-10">
        <Legend />
      </div>
      <div className="grid grid-cols-18 gap-1 relative z-10">
        {elements.map((element) => {
          if ((element.atomicNumber >= 57 && element.atomicNumber <= 71) ||
              (element.atomicNumber >= 89 && element.atomicNumber <= 103)) {
            return null; // These will be rendered in the separate sections below
          }
          
          let column = element.group;
          let row = element.period;
          
          // Adjust for the gap left by lanthanides and actinides
          if (element.period > 7 || (element.period > 6 && element.group > 3)) {
            row += 2;
          } else if (element.period > 6) {
            row += 1;
          }

          return (
            <div
              key={element.atomicNumber}
              style={{
                gridColumn: column,
                gridRow: row,
              }}
            >
              <Element
                symbol={element.symbol}
                name={element.name}
                atomicNumber={element.atomicNumber}
                category={element.category}
              />
            </div>
          );
        })}
      </div>
      <div className="mt-4 grid grid-cols-15 gap-1 relative z-10">
        <div className="col-span-15 text-center font-bold mb-1">Lanthanides</div>
        {elements
          .filter((element) => element.atomicNumber >= 57 && element.atomicNumber <= 71)
          .map((element) => (
            <div key={element.atomicNumber}>
              <Element
                symbol={element.symbol}
                name={element.name}
                atomicNumber={element.atomicNumber}
                category={element.category}
              />
            </div>
          ))}
      </div>
      <div className="mt-4 grid grid-cols-15 gap-1 relative z-10">
        <div className="col-span-15 text-center font-bold mb-1">Actinides</div>
        {elements
          .filter((element) => element.atomicNumber >= 89 && element.atomicNumber <= 103)
          .map((element) => (
            <div key={element.atomicNumber}>
              <Element
                symbol={element.symbol}
                name={element.name}
                atomicNumber={element.atomicNumber}
                category={element.category}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default PeriodicTable

