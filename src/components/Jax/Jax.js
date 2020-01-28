import React, { Component } from 'react';
import classes from './Jax.module.css';
import JaxBackground from './Jax.svg';
import JaxIris from './Iris.svg';

class Jax extends Component {
  constructor(props) {
    super(props);
    this.iris = React.createRef();
  }

  /**
   * Move the iris with the mouse
   *
   * @param object event Mouse move event.
   */
  moveIris = (event) => {
    const iris = this.iris.current;
    let left = (event.clientX - (iris.offsetWidth * 2)) / 80;
    let top = (event.clientY - (iris.offsetHeight * 2)) / 80;

    if (top < -7) {
      top = -10;
    }

    if (top >= 12.5) {
      top = 12.5;
    }

    if (left <= -9) {
      left = -9;
    }

    if (left >= 12) {
      left = 12;
    }

    iris.style.transform = 'translate(' + left + '%, ' + top + '%)';
  }

  render() {
    return(
      <div className={classes.Jax} onMouseMove={(event) => this.moveIris(event)}>
        <div className={classes.JaxWrapper}>
          <img src={JaxBackground} className={classes.JaxBackground} alt="Jax"/>
          <img src={JaxIris} className={classes.JaxIris} alt="Jax" ref={this.iris}/>
        </div>
      </div>
    );
  }
}

export default Jax;
