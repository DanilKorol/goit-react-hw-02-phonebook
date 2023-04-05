import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <form>
      <Label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange} />
      </Label>
    </form>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
