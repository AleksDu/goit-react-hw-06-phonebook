// import React, { useState, useEffect, useCallback, useMemo } from "react";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { getVisibleContacts } from "./redux/app/contact-selector";
import { useSelector } from "react-redux";
import s from "./App.module.css";

function App() {
  const contacts = useSelector(getVisibleContacts);
  const allContacts = contacts.length;
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <p>Всего:{allContacts}</p>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;

// const mapStateToProps = (state) => ({
//   contacts: state.app.contacts,
//   filter: state.app.filter,
// });
// const mapDispatchToProrps = (dispatch) => ({
//   formSubmitHandler: (contactData) =>
//     dispatch(appActions.addContact(contactData)),
//   contactDelete: (contactId) => dispatch(appActions.deleteContact(contactId)),
//   filterSet: (str) => dispatch(appActions.filterSet(str)),
// });
// export default connect(mapStateToProps, mapDispatchToProrps)(App);
