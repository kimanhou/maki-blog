import React from 'react';
import './App.scss';
import Article from './view/components/Article/Article';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
        <Article />
    </div>
  )
}
export default App;
