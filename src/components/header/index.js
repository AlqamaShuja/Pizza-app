import React, { Component } from "react";
import Burger from "../../icons/burger";

class Header extends Component {
  state = { burgerAnimation: true };

  render() {
    const { burgerAnimation } = this.state;
    const changeBurgerAnimation = () => {
      this.setState({
        burgerAnimation: !burgerAnimation
      })
    }
    return (
      <React.Fragment>
        <Burger doAnimation={burgerAnimation} onChangeSt={changeBurgerAnimation}/>
      </React.Fragment>
    );
  }
}

export default Header;