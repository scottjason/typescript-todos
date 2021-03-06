import userEvent from '@testing-library/user-event';
import { render, screen, RenderResult } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  let documentBody: RenderResult;
  beforeEach(() => {
    documentBody = render(<App />);
  });

  it('matches snapshot', () => {
    const { baseElement } = documentBody;
    expect(baseElement).toMatchSnapshot();
  });

  it('should start with correct todos marked checked and unchecked', () => {
    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
    const checkboxOne = screen.getByTestId('Walk the dog');
    expect(checkboxOne).not.toBeChecked();
    expect(screen.getByText('Build app')).toBeInTheDocument();
    const checkboxTwo = screen.getByTestId('Build app');
    expect(checkboxTwo).toBeChecked();
  });

  it('should be able to toggle between checked and unchecked', () => {
    const checkboxOne = screen.getByTestId('Walk the dog');
    expect(checkboxOne).not.toBeChecked();
    userEvent.click(checkboxOne);
    expect(checkboxOne).toBeChecked();
  });
});
