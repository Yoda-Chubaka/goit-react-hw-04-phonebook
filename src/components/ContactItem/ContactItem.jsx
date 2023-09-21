import { ContactItemStyle } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { ButtonStyle } from 'components/App.styled';

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
return (<ContactItemStyle key={id}>
        <p>{name}: {number}</p>
        <ButtonStyle type="button" onClick={() => onDeleteContact(id)}>
            Delete
        </ButtonStyle>
    </ContactItemStyle>);
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};