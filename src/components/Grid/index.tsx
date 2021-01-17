
import { Container, Row, Col } from 'react-bootstrap';

import './Grid.scss';

export type GridProps = {
  columns: number,
  rows: number,
}

export const Grid = ({ columns, rows }: GridProps) => {

  return (
    <div className="component-grid">
    <Container className="grid-container" fluid>
     {Array.from({ length: rows }, () => (
        <Row className="cell-row">
          {Array.from({ length: columns }, () => (
            <Col className="cell"></Col>
          ))}
        </Row> 
     ))}
    </Container>
    </div>
  );
};