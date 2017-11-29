import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Modal from "./Modal.js";
import "./ModalButton.css";

class ModalButton extends Component {
  static displayName = "Modal Button";
  state = {
    isModalShow: false
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };
  hideModal = () => {
    this.setState({ isModalShow: false });
  };
  render() {
    const { isModalShow } = this.state;
    return (
      <div>
        <button onClick={this.showModal}>Click me!</button>
        {isModalShow ? (
          <Modal isModalShow={this.state.isModalShow}>
            {" "}
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Модальное окно!</h1>
                  <button onClick={this.hideModal}>
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default ModalButton;
