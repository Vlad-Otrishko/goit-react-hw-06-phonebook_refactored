import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const visibleList = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter));

    return (
      <ul className={s.list}>
        {visibleList.map(item => (
          <li key={item.id} className={s.line}>
            <Contact
              name={item.name}
              number={item.number}
            />
            <button
              type="button"
              className={s.deleteButton}
              onClick={() => dispatch(actions.deleteItem(item.id))}
            ></button>
          </li>
        ))}
      </ul>
    );

};

export default ContactList;

