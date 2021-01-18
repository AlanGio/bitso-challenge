import React, { ChangeEvent } from "react";
import { isMobile } from "react-device-detect";
import { Badge, Container, Col, Form, Row } from "react-bootstrap";

import "./Controls.scss";

export type ControlsProps = {
  columns: number;
  onChangeColumns: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRows: (event: ChangeEvent<HTMLInputElement>) => void;
  rows: number;
  islands: number;
};

const COLS_MAX = isMobile ? 10 : 50;
const COLS_MIN = 2;
const ROWS_MAX = COLS_MAX;
const ROWS_MIN = COLS_MIN;

export const Controls = ({
  columns,
  onChangeColumns,
  onChangeRows,
  rows,
  islands,
}: ControlsProps) => {
  return (
    <div className="component-controls">
      <Container className="controls-container" fluid>
        <Form>
          <Row className="align-items-center">
            <Col sm={5} xs={12}>
              <Form.Group controlId="columnsRange">
                <Form.Label>Columns {columns}</Form.Label>
                <Form.Control
                  type="range"
                  onChange={onChangeColumns}
                  min={COLS_MIN}
                  max={COLS_MAX}
                  value={columns}
                />
              </Form.Group>
            </Col>
            <Col sm={5} xs={8}>
              <Form.Group controlId="rowsRange">
                <Form.Label>Rows {rows}</Form.Label>
                <Form.Control
                  type="range"
                  onChange={onChangeRows}
                  min={ROWS_MIN}
                  max={ROWS_MAX}
                  value={rows}
                />
              </Form.Group>
            </Col>

            <Col sm={2} xs={4}>
              <h5>
                <Badge variant="secondary">Islands: {islands}</Badge>
              </h5>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Controls;
