import React from 'react';
import useDebounce from '../hooks/useDebounce'; // Default import

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  React.useEffect(() => {
    onSearchChange(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearchChange]);

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      <p className="mt-1 text-sm text-gray-500">
        Search matches titles and descriptions (case-insensitive)
      </p>
    </div>
  );
};

export default SearchBar;