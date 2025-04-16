import React, { useState } from 'react';
import HabitList from './components/HabitList';
import { initialHabits } from './data';

function App() {
  const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState('');

  const toggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id
        ? {
            ...habit,
            completed: !habit.completed,
            count: habit.completed ? habit.count : habit.count + 1,
          }
        : habit
    ));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const addHabit = (e) => {
    e.preventDefault();
    if (newHabit.trim() === '') return;

    const newHabitObj = {
      id: Date.now(),
      name: newHabit.trim(),
      completed: false,
      count: 0,
    };

    setHabits([...habits, newHabitObj]);
    setNewHabit('');
  };

  return (
    <div className="app">
      <h1>Habit Tracker</h1>
      <form onSubmit={addHabit} className="habit-form">
        <input
          type="text"
          placeholder="Enter new habit"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <HabitList habits={habits} toggleHabit={toggleHabit} deleteHabit={deleteHabit} />
    </div>
  );
}

export default App;
