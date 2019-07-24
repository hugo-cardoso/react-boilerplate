import React, { useState } from 'react';
import { Button } from './style';

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      Count: { count }
      <br />
      <Button onClick={() => setCount(count + 1)}>ADD</Button>
    </>
  )
};

export default Example;