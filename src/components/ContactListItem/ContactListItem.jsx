import PropTypes from 'prop-types';

const ContactListItem = ({ contactName, contactNumber, onClick }) => {
  return (
    <li>
      {contactName}: {contactNumber}
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
