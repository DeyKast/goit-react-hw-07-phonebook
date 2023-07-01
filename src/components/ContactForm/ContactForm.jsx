import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations';
import { selectPhones } from '../redux/selector';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const phones = useSelector(selectPhones);

  const handleSubmit = event => {
    event.preventDefault();
    const existingName = phones.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = phones.find(item => item.number === Number(number));

    if (existingName) {
      return alert(`Contact "${name}" is already in contacts list`);
    } else if (existingNumber) {
      return alert(`Number "${number}" is already in contacts list`);
    }

    const newContact = {
      name,
      phone: number,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter number"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" disabled={!name || !number}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
