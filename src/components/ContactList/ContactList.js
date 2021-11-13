import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/app/contact-actions";
import { getVisibleContacts } from "../../redux/app/contact-selector";

import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map((id, name, number) => (
        <li className={s.item} key={id}>
          <span className={s.name}>{name}: </span>
          <a href={`tel:${number}`} className={s.number}>
            {number}
          </a>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.button}
          ></button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
