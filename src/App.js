import { useState } from 'react';
import styled from 'styled-components';
import data from './data'

import List from './List';


function App() {

  const [people, setPeople] = useState(data)


  return (
    <Container>
      <h1>{people.length} birthdays today</h1>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
    </Container>
  );
}

const Container = styled.main`
  background-color: #f1f1f1;
  min-width: 380px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  h1 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    padding: 8px;
    border: none;
    background-color: #5592a7;
    border-radius: 4px;
    color: #f1f1f1;
    font-size: 16px;
    font-weight: 500;
    transition: all .6s ease-in;
    cursor: pointer;
    margin-top: 16px;

    &:hover {
      background-color: #31535f;
    }
  }


  
`

export default App;
