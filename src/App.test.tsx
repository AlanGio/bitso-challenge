import React from 'react';
import { render } from '@testing-library/react';
import App, { COL_INIT, ROW_INIT } from './App';

describe('<App />', () => {

  it('should render App component with default columns and rows', () => {
    const { container } = render(
      <App />
    );

    // Check ROWs quantity
    expect(container.querySelectorAll('.cell-row').length).toBe(ROW_INIT);
    // Check COLUMNS quantity
    expect(container.querySelectorAll('.cell-row:first-child > .cell').length).toBe(COL_INIT);
    // Check CELLs quantity
    expect(container.querySelectorAll('.cell').length).toBe(ROW_INIT * COL_INIT);

    expect(container).toMatchSnapshot();

  });

});
