import React from 'react';
import Jax from '../components/Jax/Jax'
import classes from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={classes.App}>
        <Jax />
      </div>
    )}
}

export default App;
