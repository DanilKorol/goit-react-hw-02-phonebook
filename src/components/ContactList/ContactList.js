import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { FaUserAstronaut } from 'react-icons/fa';
import { Btn, Icon, Item } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <Item key={id}>
            <p>
              <Icon>
                <FaUserAstronaut />
              </Icon>
              {name} : {number}{' '}
            </p>
            <Btn type="button" onClick={() => onDelete(id)}>
              <MdDelete />
            </Btn>
          </Item>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
