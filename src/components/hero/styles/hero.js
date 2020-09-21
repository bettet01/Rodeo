import styled from 'styled-components/macro'


export const Container = styled.div`
  background-image: url(${({background}) => background});

  /* Control the height of the image */
  min-height: 380px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 200px;
  padding-bottom: 200px;
`;

export const FormContainer = styled.form`
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