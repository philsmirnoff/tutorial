import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders Hello World!', () => {
    // Arrange ⇒ Set up the test data, test conditions and test environment
    render(<Greeting />);

    // Act ⇒ Run logic that should be tested (e.g. execute function)
    // ... nothing to do here

    // Assert ⇒ Compare execution results with expected results
    const helloWorldElement = screen.getByText('Hello, World!', { exact: false});
    expect(helloWorldElement).toBeInTheDocument();
  })

  test('renders "It\'s good to see you!" if the button was NOT clicked', () => {
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see you!", { exact: false});
    expect(outputElement).toBeInTheDocument();
  }
  )

  test('renders "Changed!" if the button was clicked', () => {

    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    // buttonElement.click();
    userEvent.click(buttonElement);
    const outputElement = screen.getByText('Changed!', { exact: false});
    expect(outputElement).toBeInTheDocument();
  }
  )

  test('does not render "It\'s good to see you!" if the button was clicked', () => {
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    // Assert
    const outputElement = screen.queryByText("It's good to see you!", { exact: false});
    expect(outputElement).toBeNull();
  }
  )
})

