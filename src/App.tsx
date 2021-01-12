import React from 'react';
import './App.scss';
import LatestPosts from './view/components/LatestPosts/LatestPosts';

const App : React.FunctionComponent = props => {
  return (
    <div className={`App`}>
        <LatestPosts />
    </div>
  )
}
export default App;
