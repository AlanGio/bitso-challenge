import React from 'react';
import { render } from '@testing-library/react';
import { Grid } from './index';

describe('<Grid />', () => {

  it('should render Grid component with 4 rows, 4 columns and islands empty', () => {

    const mockOnlySeaMap = [
      [false, false, false, false], [false, false, false, false],
      [false, false, false, false], [false, false, false, false]
    ];

    const { container } = render(
      <Grid cells={mockOnlySeaMap} onClickCell={() => {}} />
    );

    // Check if Grid hasn't any island
    expect(container.querySelectorAll('.cell.land.col').length).toBe(0);

    // Check if has the right rows length
    expect(container.querySelectorAll('.cell-row').length).toBe(mockOnlySeaMap.length);

    // Check if has the right columns length
    expect(container.querySelectorAll('.cell-row:first-child > .cell').length).toBe(mockOnlySeaMap[0].length);

    expect(container).toMatchSnapshot();

  });

});
