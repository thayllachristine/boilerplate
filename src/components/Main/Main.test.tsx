import { render } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the right heading', () => {
    const { getByText } = render(<Main />);
    expect(getByText(/boilerplate/i)).toBeInTheDocument();
  });

  it('should render the right subtitle/description', () => {
    const { getByTestId } = render(<Main />);
    expect(getByTestId(/subtitle/i)).toBeInTheDocument();
  });

  it('should render image with alt text', () => {
    const { getByAltText } = render(<Main />);
    expect(getByAltText(/star/i)).toBeInTheDocument();
  });

  it('should render the colors correctly', () => {
    const { container, debug } = render(<Main />);
    debug();
    expect(container.firstChild).toHaveStyle({ 'background-color': '#333333' });
    expect(container.firstChild).toHaveStyle({ color: '#fff' });
  });
});
