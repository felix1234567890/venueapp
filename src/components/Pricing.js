import React, { Component } from "react";
import MyButton from "./utils/Button";
import Zoom from 'react-reveal/Zoom'
export default class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["balcony", "Medium", "Star"],
    desc: [
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, qui. Explicabo molestias architecto vel fugit libero nobis optio sunt in saepe eum voluptatem recusandae ipsa totam, cupiditate aliquam consequuntur. Repudiandae.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, qui. Explicabo molestias architecto vel fugit libero nobis optio sunt in saepe eum voluptatem recusandae ipsa totam, cupiditate aliquam consequuntur. Repudiandae.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, qui. Explicabo molestias architecto vel fugit libero nobis optio sunt in saepe eum voluptatem recusandae ipsa totam, cupiditate aliquam consequuntur. Repudiandae."
    ],
    linkto: ["http://sales/balcony", "http://sales/medium", "http://sales/star"]
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={500} key={i}>
        <div className="pricing_item" key={i}>
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
