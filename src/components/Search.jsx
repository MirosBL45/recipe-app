import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FormStyle } from '../components/styles/styles';

function Search() {
  const [input_out, setInput_out] = useState('');
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate('/searched/' + input_out);
    setInput_out('');
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput_out(e.target.value)}
          type="text"
          value={input_out}
        />
        {/* <p>{input_out}</p> */}
      </div>
    </FormStyle>
  );
}

export default Search;
