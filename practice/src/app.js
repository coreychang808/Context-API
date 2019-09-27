import React from 'react';

//dont need to specify file, index is automatically found
import Count from './components/count';
import Increment from './components/increment';
import Decrement from './components/decrement';

import CounterContextProvider from './context/counter-context.js'


const App = () => {

  const AppStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '40%',
  }

  return (
    <CounterContextProvider>
      <div style ={AppStyle}>
      <Decrement />
      <Count />
      <Increment />
      </div>
    </CounterContextProvider>
  )
}

export default App;


// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <Counter />
//       </>
//     );
//   }
// }
