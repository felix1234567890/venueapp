import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from './utils/Button'

export default class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 30
  }
  porcentage = () => {
    if(this.state.discountStart < this.state.discountEnd){
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }
  componentDidUpdate(){
    setTimeout(() => {
      this.porcentage()
    }, 30)
  }
  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade right onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
            <div className="discount_description">
              <h3>Purchase tickets in advance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
                iste sed ab nesciunt architecto, repellendus, ut officia quo
                voluptates quisquam fuga placeat obcaecati laudantium? Ratione.
              </p>
              <MyButton text="Purchase tickets" bck="#ffa800" color="#ffffff" link="#"/>
              <div />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
