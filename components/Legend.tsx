import React from 'react'

const categories = [
  { name: 'Alkali Metal', color: 'bg-red-600' },
  { name: 'Alkaline Earth Metal', color: 'bg-orange-500' },
  { name: 'Transition Metal', color: 'bg-blue-500' },
  { name: 'Post-transition Metal', color: 'bg-blue-300' },
  { name: 'Metalloid', color: 'bg-green-500' },
  { name: 'Polyatomic Nonmetal', color: 'bg-yellow-400' },
  { name: 'Diatomic Nonmetal', color: 'bg-yellow-300' },
  { name: 'Noble Gas', color: 'bg-purple-700' },
  { name: 'Lanthanide', color: 'bg-pink-400' },
  { name: 'Actinide', color: 'bg-pink-600' },
  { name: 'Unknown', color: 'bg-gray-300' },
]

const Legend: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4 bg-gray-800 rounded-lg shadow-lg">
      {categories.map((category) => (
        <div key={category.name} className="flex items-center space-x-2">
          <div className={`w-4 h-4 ${category.color} rounded`}></div>
          <span className="text-sm text-white">{category.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Legend

