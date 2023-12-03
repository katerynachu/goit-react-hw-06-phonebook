import React from 'react';
import { FilterInput, FilterTitle } from './Flter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateContacts } from 'components/redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleInputChange = event => {
    const { value } = event.target;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );

    dispatch(updateContacts(filteredContacts));
    
  };

  return (
    <>
      <FilterTitle>Find contact by name</FilterTitle>
      <FilterInput onChange={handleInputChange} type="text" name="filter" />
    </>
  );
};
