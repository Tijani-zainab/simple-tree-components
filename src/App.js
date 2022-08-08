import React from 'react';
import Tree from './Tree/Tree';
import './App.css';
import { data } from './treeData';

function App() {
  return (
    <div className="App">
      <Tree data={data} />
    </div>
  );
}

export default App;
