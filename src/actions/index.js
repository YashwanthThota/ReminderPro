import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {

const action = {
  //import this from constants
  type: ADD_REMINDER,
  //if key = value in es 6 we can write key only
  text,
  dueDate
}
console.log('action in addReminder', action);
return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action);
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}
