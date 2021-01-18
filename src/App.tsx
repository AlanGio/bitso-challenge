import React, { ChangeEvent, useCallback, useState } from "react";

import { Controls } from "./components/Controls";
import { Grid } from "./components/Grid";

import { loadItems, detectIslands } from "./utils/utils";

import "./App.scss";

export const COL_INIT = 4;
export const ROW_INIT = COL_INIT;

const App = () => {
  const [columns, setColumns] = useState<number>(COL_INIT);
  const [rows, setRows] = useState<number>(ROW_INIT);
  const [cells, setCells] = useState<boolean[][]>(loadItems(columns, rows));

  const handleChangeColumns = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const columnsQty = +event.target.value;
      setColumns(columnsQty);
      setCells(loadItems(columnsQty, rows, cells));
    },
    [cells, rows]
  );

  const handleChangeRows = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const rowsQty = +event.target.value;
      setRows(rowsQty);
      setCells(loadItems(columns, rowsQty, cells));
    },
    [cells, columns]
  );

  const handleOnClickCell = useCallback(
    (row: number, column: number) => {
      let selectedCells = [...cells];
      selectedCells[row][column] = !selectedCells[row][column];
      setCells(selectedCells);
    },
    [cells]
  );

  const islands = detectIslands(columns, rows, cells);

  return (
    <div className="App">
      <Controls
        columns={columns}
        onChangeColumns={handleChangeColumns}
        onChangeRows={handleChangeRows}
        rows={rows}
        islands={islands}
      />
      <Grid cells={cells} onClickCell={handleOnClickCell} />
    </div>
  );
};

export default App;
