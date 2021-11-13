import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/app/contact-actions";
import { getVisibleContacts } from "../../redux/app/contact-selector";
import { ReactComponent as DeleteIcon } from "../../icons/remove.svg";

import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <p className={s.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            aria-label="Delete contact"
            className={s.button}
          >
            <DeleteIcon width="20px" height="20px" fill="#a9a1a1" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
