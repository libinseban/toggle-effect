import styled from 'styled-components';

const MobileMaxWidth = '650px';
const TabletMaxWidth = '1024px';


export const BulbContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  background-color: #b7dafa;

  @media (max-width: ${TabletMaxWidth}) {
    justify-content: center; 
    align-items: center;
    height: 100vh; 
    width: 100%; 
  }

  @media (max-width: ${MobileMaxWidth}) {
    flex-direction: column;
    padding: 20px;
    width: 100%;
  }
`;

export const BulbStyle = styled.div`
  flex-direction: column;
  display: flex;
  margin: 50px;

  @media (max-width: ${MobileMaxWidth}) {
    margin: 10px;
  }
`;

// Styles for the bulb
export const Bulb = styled.div`
  margin-top: 20px;
  width: 100px;
  height: 150px;
  border-radius: 50% 50% 20% 20%; 
  background: radial-gradient(${props => props.isOn ? '#fff 0%, rgba(255, 255, 255, 0) 70%' : '#fff'}); /* Radial gradient for bulb effect */
  background-color: ${props => props.isOn ? '#ffd001' : '#333'}; 
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2); 
  position: relative;
  overflow: hidden;

  @media (max-width: ${MobileMaxWidth}) {
    width: 80px;
    height: 120px;
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  margin-left: 14px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: ${MobileMaxWidth}) {
    margin-top: 10px;
    margin-right: 10px;
  }
`;

export const BulbBottom = styled.div`
  height: 59px;
  width: 70px;
  background-color: #5c5a5a;
  border-radius: 0 0 10px 10px; 
  position: relative;
  overflow: hidden;
  margin-left: 15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #fff;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }


  &::before {
    margin-top: -10px;
  }

  &::after {
    margin-top: 10px;
  }

  @media (max-width: ${MobileMaxWidth}) {
    margin-left: 7px;
    height: 45px;
    width: 65px;
  }
`;