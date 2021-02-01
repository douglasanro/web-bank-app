import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type TModalProps = {
  children: React.ReactNode;
  toggle: () => void;
  open: boolean;
};

const Dialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  margin: auto;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoint.sm};
  min-height: 300px;
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mineShaft};
  transform: translate(-50%, -50%);
  z-index: 999;

  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding-right: ${({ theme }) => theme.spacing(5)};
    padding-left: ${({ theme }) => theme.spacing(5)};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.mineShaft};
  opacity: 0.5;
  z-index: 99;
`;

const Close = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing(2)};
  top: ${({ theme }) => theme.spacing(2)};
  width: 24px;
  height: 24px;
  opacity: 0.5;
  border: none;
  background: none;
  outline: none;
  appearance: none;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background: none;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 11px;
    height: 25px;
    width: 2px;
    background-color: ${({ theme }) => theme.color.mineShaft};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

const Modal: React.FC<TModalProps> = ({ children, toggle, open }) => {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Dialog role="dialog" aria-modal="true" data-testid="modal-dialog">
        <Close onClick={toggle} data-testid="modal-close" />
        {children}
      </Dialog>
      <Overlay onClick={toggle} data-testid="modal-overlay" />
    </>,
    document.body
  );
};

export default Modal;
