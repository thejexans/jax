import React from 'react';
import classes from './Jax.module.css';
import JaxBackground from './Jax.svg';
import JaxIris from './Iris.svg';

class Jax extends React.Component {
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

    const x = (iris.getBoundingClientRect().left) + (iris.offsetWidth / 2);
    const y = (iris.getBoundingClientRect().top) + (iris.offsetHeight / 2);
    const rad = Math.atan2(event.pageX - x, event.pageY - y);
    const rot = (rad * (180 / Math.PI) * -1) + 180;

    iris.style.setProperty('transform', 'rotate(' + rot + 'deg)');
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
