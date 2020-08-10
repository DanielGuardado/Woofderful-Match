import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import LoginFormContainer from "../session/login_form_container";
import SignupFormContainer from "../session/signup_form_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const msp = (state) => {
  return {
    modal: state.modal,
  };
};

const mdp = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(Modal);
