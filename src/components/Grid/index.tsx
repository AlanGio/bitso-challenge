
import { Container, Row, Col } from 'react-bootstrap';
import classnames from 'classnames';

import './Grid.scss';

export type GridProps = {
  cells: boolean[][],
  onClickCell: (row: number, column: number) => void;
}

export const Grid = ({ cells, onClickCell }: GridProps) => {

  console.log(cells, 'cellsongrid');

  return (
    <div className="component-grid">
    <Container className="grid-container" fluid>
     {cells.map((_, indexRow) => (
        <Row className="cell-row">
          {cells[indexRow].map((cell, indexColumn) => (
            <Col className={classnames('cell', { 'land': cell })} onClick={() => onClickCell(indexRow, indexColumn)}></Col>
          ))}
        </Row> 
     ))}
    </Container>
    </div>
  );
};