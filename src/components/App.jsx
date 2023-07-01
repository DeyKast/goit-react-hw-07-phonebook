import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getError, getIsLoading, selectPhones } from './redux/selector';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const phones = useSelector(selectPhones);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && (
        <>
          <h1>LOADNIG...</h1>
        </>
      )}
      {error && (
        <>
          <h1>error</h1>
        </>
      )}
      {phones.length < 1 && (
        <>
          <h1>No contacts yet</h1>
        </>
      )}
      <ContactList />
    </div>
  );
};

export default App;
