import actions from './contacts-actions';
import { combineReducers, createReducer } from '@reduxjs/toolkit';

const initialItems = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

console.dir(actions);
const items = createReducer(initialItems, {
  [actions.addItem]: (state, { payload }) =>
    isUnique(state, payload)
      ? [...state, payload]
      : alert('THIS NAME IS ALREADY PRESENT IN A PHONEBOOK'),
  [actions.deleteItem]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});


const filter = createReducer('', {
  [actions.filterItems]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });

function isUnique (phonebookRecords, newRecord) {
  const normalizedNewName = newRecord.name.toLowerCase();
  return !phonebookRecords.some(
    ({ name }) => name.toLowerCase() === normalizedNewName,
  );
}



