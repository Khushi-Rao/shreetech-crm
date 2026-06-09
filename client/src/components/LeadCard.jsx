import { useState } from 'react'

function LeadCard(props) {
  const [count, setCount] = useState(props.initialCount)

  function handleAddLead() {
    setCount(count + 1)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-3 border border-gray-100 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {props.title}
        </h3>
        <span className="text-2xl">{props.icon}</span>
      </div>
      <p className="text-4xl font-bold text-gray-800">{count}</p>
      <p className="text-xs text-gray-400">{props.subtitle}</p>
      <button
        onClick={handleAddLead}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        + Add Lead
      </button>
    </div>
  )
}

export default LeadCard