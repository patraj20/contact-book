import React, { useReducer } from 'react';

import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ramesh Patil',
        email: 'rapatil@gmail.com',
        phone: '111-111-1111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'James jonson',
        email: 'james@yahoo.com',
        phone: '222-222-2222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'jagga jasoss',
        email: 'jagga@gmail.com',
        phone: '333-333-3333',
        type: 'personal'
      },
      {
        id: 4,
        name: 'Ram prakash',
        email: 'ram@gmail.com',
        phone: '444-444-4444',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //ADD contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delte contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set current contact

  //Clear current contact

  //update contact

  //filter contact

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
