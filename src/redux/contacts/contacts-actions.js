import { createAction } from '@reduxjs/toolkit';


const addItem = createAction('contacts/add');
const deleteItem = createAction('contacts/delete');
const filterItems = createAction('contacts/changeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default {addItem, deleteItem, filterItems};
