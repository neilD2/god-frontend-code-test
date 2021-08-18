import * as React from 'react';
import './App.css';
import {Logo, Block, Flex, Spacer} from 'vcc-ui';
import GetCarsCarousel from "./data/GetCarsCarousel";

function App() {
  return (
      <div className="App">
        <Block
            as="h1"
            extend={{
              fontSize: 24,
              padding: 20,
              margin: 0,
              color: "black",
              fontFamily: "Helvetica Neue, Arial",
              background: "white"
            }}
        >
          <Flex>
            <Logo type="spreadmark" height={46}/>
            <Spacer/>
          </Flex>
          Volvo Cars (Global Online Digital)
        </Block>
        <div>
          <GetCarsCarousel/>
        </div>
      </div>
  );
}

export default App;
