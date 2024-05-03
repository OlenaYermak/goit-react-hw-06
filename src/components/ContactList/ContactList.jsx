import Contact from "../Contact/Contact"

import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilteredName } from "../../redux/filterSlice";

import css from "./ContactList.module.css"

export default function ContactList() {
 const contacts = useSelector(selectContacts);
    const value = useSelector(selectFilteredName);
    
    const showContacts = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(value.toLowerCase())
  )

    return (
        <ul className={css.contactList}>
            {showContacts.map((contact) => (
                <li className={css.contactContainer} key={contact.id}>
                    <Contact nameContact={contact.name} numberContact={contact.number} id={contact.id} />
                </li>
            ))}
        </ul>
    );
}



