
import css from "./Contact.module.css";
import { deleteContacts } from "../../redux/contact/operations";
import { useDispatch } from "react-redux";

export const Contact = ({ contact } ) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(deleteContacts(id));

  return (
    <li key={id} className={css.contactListItem}>
         <p>{name}</p>
          <p>{number}</p>

     <button type="button" onClick={deleteContact} className={css.contactBtn}>
       Delete
     </button>
   </li>
 );
}

