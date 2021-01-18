import { Container, Row, Col } from "react-bootstrap";
import { uniqueId } from "lodash";

import classnames from "classnames";

import "./Grid.scss";

export type GridProps = {
  cells: boolean[][];
  onClickCell: (row: number, column: number) => void;
};

export const Grid = ({ cells, onClickCell }: GridProps) => {
  return (
    <div className="component-grid">
      <Container className="grid-container" fluid>
        {cells.map((_, indexRow) => (
          <Row key={uniqueId("row_")} className="cell-row">
            {cells[indexRow].map((cell, indexColumn) => (
              <Col
                key={uniqueId("col_")}
                className={classnames("cell", { land: cell })}
                onClick={() => onClickCell(indexRow, indexColumn)}
              ></Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};
