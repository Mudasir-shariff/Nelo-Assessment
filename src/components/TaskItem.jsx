import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const getPriorityBadge = (priority) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-red-100 text-red-800'
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[priority]}`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    );
  };

  const getStatusBadge = (completed) => {
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        completed ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
      }`}>
        {completed ? 'Completed' : 'Pending'}
      </span>
    );
  };

  const isOverdue = new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <div className={`bg-white p-4 rounded-lg shadow border-l-4 ${
      isOverdue ? 'border-red-400' : 
      task.priority === 'high' ? 'border-red-300' :
      task.priority === 'medium' ? 'border-yellow-300' : 'border-green-300'
    }`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {task.title}
        </h3>
        <div className="flex gap-2">
          {getPriorityBadge(task.priority)}
          {getStatusBadge(task.completed)}
        </div>
      </div>
      
      <p className="text-gray-600 mb-3">{task.description}</p>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Due: {new Date(task.dueDate).toLocaleDateString()}
          {isOverdue && <span className="ml-2 text-red-600 font-medium">(Overdue)</span>}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`px-3 py-1 text-xs rounded ${
              task.completed 
                ? 'bg-gray-500 hover:bg-gray-600 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {task.completed ? 'Mark Pending' : 'Mark Complete'}
          </button>
          
          <button
            onClick={() => onEdit(task)}
            className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
          
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this task?')) {
                onDelete(task.id);
              }
            }}
            className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;