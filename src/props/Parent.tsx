import { Child } from './Child';

const Parent = () => {
  return (
    <Child color="blue" onClick={() => console.log('Clicked')}>
      Hello World
    </Child>
  );
};

export default Parent;
