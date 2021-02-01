import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { ThemeProvider } from 'styled-components';
import { theme } from 'globalStyles';

const mockToggle = jest.fn();

const setup = ({ children, toggle, open }: React.ComponentProps<typeof Modal>) =>
  render(
    <Modal toggle={toggle} open={open}>
      {children}
    </Modal>,
    {
      wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
    }
  );

describe('Modal component', () => {
  it('Should render correctly', () => {
    const { getByTestId } = setup({ toggle: mockToggle, open: true, children: 'Test!' });
    expect(getByTestId(/modal-dialog/i)).toBeTruthy();
  });

  it('Should render null if closed', () => {
    const { queryByTestId } = setup({ toggle: mockToggle, open: false, children: 'Test!' });
    expect(queryByTestId(/modal-dialog/i)).toBeNull();
  });

  it('Should call toggle on close click', () => {
    const { getByTestId } = setup({ toggle: mockToggle, open: true, children: 'Test!' });
    fireEvent.click(getByTestId(/modal-close/i));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });

  it('Should call toggle on overlay click', () => {
    const { getByTestId } = setup({ toggle: mockToggle, open: true, children: 'Test!' });
    fireEvent.click(getByTestId(/modal-overlay/i));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
