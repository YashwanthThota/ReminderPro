import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
}

const removeById = (state = [], id) => {
  //we are using filter function that returns the array excluding the array object with the passed id
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
    //...state is a spread operator, which copy one array or object to another array or object
      reminders = [...state, reminder(action)];
      bake_cookie('reminders', reminders);
      //console.log('reminders as state', reminders);
      return reminders;
    //we shouldn't delete the state object directly byt using splice etc.,
    // so we are using filter function that returns the array excluding the array object with the passed id
    case DELETE_REMINDER:
    reminders = removeById(state, action.id);
    bake_cookie('reminders', reminders);
    return reminders;
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders;
    default:
      return state;
  }
}

export default reminders;
