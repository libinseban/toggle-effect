import React, { useState } from 'react';
import { BulbContainer, Button, Bulb, BulbBottom, BulbStyle } from "./Components/StyledBulb";

const App = () => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);

  const toggleBulb1 = () => {
    setIsOn1(!isOn1);
  };

  const toggleBulb2 = () => {
    setIsOn2(!isOn2);
  };

  return (
    <BulbContainer>

      <BulbStyle>
        <div>
          <Bulb isOn={isOn1} />
        </div>
        <BulbBottom>
        </BulbBottom>
        <Button onClick={toggleBulb1}>{isOn1 ? 'OFF' : 'ON'}</Button>
      </BulbStyle>
      <BulbStyle>
        <div>
          <Bulb isOn={isOn2} />
        </div>
        <BulbBottom>
        </BulbBottom>
        <Button onClick={toggleBulb2}>{isOn2 ? 'OFF' : 'ON'}</Button>
      </BulbStyle>
    </BulbContainer>
  );
};

export default App;
