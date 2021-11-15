import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/app/contact-selector";
import * as contactActions from "../../redux/app/contact-actions";

import s from "./ContactForm.module.css";

function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) =>
    dispatch(contactActions.addContact(name, number));
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // Метод на отправке формы. Формирует из стейта контакт и передает во внешний метод
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setNumber("");

    const nameList = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      []
    );
    const numberList = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      []
    );
    if (nameList.includes(name) ?? numberList.includes(number)) {
      alert(`${name}${number} alsoy yet in contacts`);
      return;
    }

    if (name === "" ?? number === "") {
      alert("Put something ");
    }

    onSubmit(name, number);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="input to you name"
          className={s.input}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          aria-label="input to you phone number"
          className={s.input}
          value={number}
          onChange={(e) => setNumber(e.currentTarget.value)}
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </label>
      <div className={s.button__wrapper}>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
