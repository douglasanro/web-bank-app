import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rootStore from './rootStore';

const setup = () => render(<Provider store={rootStore}></Provider>);

describe('rootStore Provider', () => {
  it('Should render correctly', () => {
    const { container } = setup();
    expect(container).toBeInTheDocument();
  });
});
