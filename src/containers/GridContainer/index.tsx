
import { Grid, GridProps } from '../../components/Grid';

type GridContainerProps = GridProps;

const GridContainer = (props: GridContainerProps) => {

  return (
      <Grid {...props} />
  );
};

export default GridContainer;
