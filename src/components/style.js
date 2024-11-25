
// https://www.robinwieruch.de/styled-components/

import styled, { css } from 'styled-components';

const CaptureButton =styled.button`
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 20px;

    &:hover {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
`

const SelectButton = styled.button`

  padding: 15px;
  /* border: 2px solid transparent; */
  background-color: #008000;
  color :#fff;
  font-size: 25px;
  font-weight: 500;
  outline: none;
  //margin-top: 2em;
  margin-left: 1em;
  cursor: pointer;
  transition: all 260ms ease-in-out;
  padding: 15px 20px;
  border: none;
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;

  &:hover {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
`;

const DetectionContainer = styled.div`
  min-width: 200px;
  height: 500px;
  border: 3px solid #fff;
  border-radius: 5px;
  left :80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
const TargetImg = styled.img`
  height: 50%;
  width: 50%;
`;



export { SelectButton ,CaptureButton,HiddenFileInput,TargetImg,DetectionContainer};

