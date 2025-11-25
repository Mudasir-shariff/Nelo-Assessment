import React from 'react';

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'All Tasks' },
    { key: 'completed', label: 'Completed' },
    { key: 'pending', label: 'Pending' },
    { key: 'high', label: 'High Priority' },
    { key: 'medium', label: 'Medium Priority' },
    { key: 'low', label: 'Low Priority' }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            currentFilter === filter.key
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;