import { useSelector } from 'react-redux';
import { Contact } from "../Contact/Contact";

import css from "./ContactList.module.css";
import { filtData } from "../../redux/contact/selector";

export const ContactList = () => {
  const filteredContacts = useSelector(filtData);  return (
    <div >
      {filteredContacts ? (<ul className={css.contactList}>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>) : <p>No contacts found</p> }
      
    </div>
  );
};

