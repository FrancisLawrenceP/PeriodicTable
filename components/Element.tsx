import React from 'react'

interface ElementProps {
  symbol: string
  name: string
  atomicNumber: number
  category: string
}

const Element: React.FC<ElementProps> = ({ symbol, name, atomicNumber, category }) => {
  return (
    <div className={`p-2 border rounded-lg text-center transition-all duration-300 hover:scale-110 hover:z-10 ${getCategoryColor(category)}`}>
      <div className="text-xs">{atomicNumber}</div>
      <div className="text-2xl font-bold">{symbol}</div>
      <div className="text-xs truncate">{name}</div>
    </div>
  )
}

function getCategoryColor(category: string): string {
  switch (category) {
    case 'noble gas':
      return 'bg-purple-700 text-white'
    case 'alkali metal':
      return 'bg-red-600 text-white'
    case 'alkaline earth metal':
      return 'bg-orange-500 text-white'
    case 'metalloid':
      return 'bg-green-500 text-white'
    case 'polyatomic nonmetal':
      return 'bg-yellow-400'
    case 'diatomic nonmetal':
      return 'bg-yellow-300'
    case 'post-transition metal':
      return 'bg-blue-300'
    case 'transition metal':
      return 'bg-blue-500 text-white'
    case 'lanthanide':
      return 'bg-pink-400'
    case 'actinide':
      return 'bg-pink-600 text-white'
    default:
      return 'bg-gray-300'
  }
}

export default Element

