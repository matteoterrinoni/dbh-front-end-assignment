import styled from 'styled-components';
import Style from 'style';

const bg = Style.gray;
const bgDarken = Style.grayDarker;

const Button = styled.button`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  padding: 0.7em 1em;
  border-radius: ${Style.borderRadius};
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: 0;
  border: none;
  vertical-align: baseline;
  background: ${bg} none;
  margin: 0 0.25em 0 0;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;

  &:hover {
    background: ${bgDarken} none;
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export default Button;
