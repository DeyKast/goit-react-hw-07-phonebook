import { useDispatch } from 'react-redux';
import { setFiler } from '../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Find contacts name</h3>
      <input
        type="text"
        name="filter"
        onChange={event => dispatch(setFiler(event.target.value))}
      />
    </div>
  );
};

export default Filter;
