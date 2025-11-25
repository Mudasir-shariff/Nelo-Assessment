import { useEffect, useRef } from 'react';

const useTaskNotification = (tasks) => {
  const intervalRef = useRef();

  useEffect(() => {
    const checkPendingTasks = () => {
      const pendingTasks = tasks.filter(task => 
        !task.completed && new Date(task.dueDate) < new Date()
      );
      
      if (pendingTasks.length > 0) {
        console.log(`🔔 Notification: You have ${pendingTasks.length} overdue tasks!`);
        pendingTasks.forEach(task => {
          console.log(`📧 Mock Email: Task "${task.title}" is overdue!`);
        });
      }
    };

    intervalRef.current = setInterval(checkPendingTasks, 20000);
    checkPendingTasks();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [tasks]);
};

export default useTaskNotification;