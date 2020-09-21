import styled from 'styled-components/macro'


export const Container = styled.div`
  background-image: url(${({background}) => background});

  /* Control the height of the image */
  min-height: 380px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

export const Form = styled.form`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  margin: 20px;
  max-width: 300px;
  padding: 16px;
`;

export const Text = styled.div`
  font-size: 36px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #222;
  margin: 20px;
  max-width: 300px;
  padding: 16px;
`;