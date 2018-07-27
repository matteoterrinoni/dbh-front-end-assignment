import styled from 'styled-components';

import Style from 'style';

const Page = styled.div`
  font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  padding-top: 20px;
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
  width: 100%;
  padding-bottom: 100px;

  .page-error {
    background: ${Style.danger};
    color: white;
    padding: 10px;
    border-radius: ${Style.borderRadius};
    margin-bottom: 20px;
  }
`;

export default Page;
