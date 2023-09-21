import React from 'react';
import { ContactItem } from "components/ContactItem/ContactItem"
import PropTypes from 'prop-types';
import { ContactListStyle } from "./ContactsList.styled"


export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListStyle>
            {contacts.map(contact => (
              <ContactItem key={contact.id} name={contact.name} number={contact.number} id={contact.id} onDeleteContact={onDeleteContact} />
            ))}
        </ContactListStyle>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired,).isRequired).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};