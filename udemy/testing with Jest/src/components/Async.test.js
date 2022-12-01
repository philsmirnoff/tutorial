import { render, screen } from '@testing-library/react';
import Async from './Async';


describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 'p1',
          title: 'First post',
        },
      ],
    });

    render (<Async />);
    // Act
  // instead of getAllByRole('listitem') we can use findAllByRole('listitem') and sicne it returns a promise, we ll use async function
    // const listItemElements = screen.getAllByRole('listitem');
    const listItemElements = await screen.findAllByRole('listitem');

    // Assert
    expect(listItemElements).not.toHaveLength(0);
  })
}
)
