import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const LoadingIcon = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = (() => (
  <LoadingIcon>
    <ReactLoading
      type="spin"
      color="#fff"
      height="5%"
      width="5%"
    />
  </LoadingIcon>
));

export default Loading;
