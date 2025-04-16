import React from 'react';

const HabitItem = ({ habit, toggleHabit, deleteHabit }) => {
  return (
    <div className={`habit-item ${habit.completed ? 'completed' : ''}`}>
      <div>
        <span>{habit.name}</span>
        <small className="habit-count">✅ {habit.count} times</small>
      </div>
      <div className="habit-buttons">
        <button onClick={() => toggleHabit(habit.id)}>
          {habit.completed ? 'Undo' : 'Done'}
        </button>
        <button className="delete-btn" onClick={() => deleteHabit(habit.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default HabitItem;
