import React from 'react';
import {List,ListItem,DeleteButton} from './ContactList.styled'
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'components/redux/contactSlice';

export const ContactList = () =>{


  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
    return (
        <List>
        {contacts.map(contact => (
          <ListItem key={contact.id}>
            {contact.name} : {contact.number}
            <DeleteButton onClick={() => dispatch(removeContact(contact.id))}>delete</DeleteButton>
          </ListItem>
        ))}
      </List>
    )
}
