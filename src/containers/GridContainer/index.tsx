
import { useEffect } from 'react';
import { Grid, GridProps } from '../../components/Grid';

type GridContainerProps = Pick<GridProps, 'columns' | 'rows'>;

const GridContainer = ({columns, rows}: GridContainerProps) => {

  return (
    <>
      <Grid columns={columns} rows={rows} />
    </>
  );
};

export default GridContainer;
