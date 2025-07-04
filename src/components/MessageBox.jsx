import React from "react";

import {
  StyledMessageBox,
  MessageBoxText,
  MessageBoxCloseButton,
} from "./styles/MessageBoxStyles";

const MessageBox = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <StyledMessageBox type={type} role="alert">
      <MessageBoxText>{message}</MessageBoxText>
      <MessageBoxCloseButton onClick={onClose}>&times;</MessageBoxCloseButton>
    </StyledMessageBox>
  );
};

export default MessageBox;
