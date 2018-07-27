import styled from 'styled-components';

import Style from 'style';

const Input = styled.input`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin: 0;
  outline: 0;
  -webkit-appearance: none;
  line-height: 1.2em;
  padding: 0.7em 1em;
  font-size: 1em;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: ${Style.borderRadius};
  box-shadow: 0 0 0 0 transparent inset;
  width: 100%;
`;

export default Input;
