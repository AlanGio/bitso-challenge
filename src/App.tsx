import React, { ChangeEvent, useCallback, useState } from 'react';

import ControlsContainer from './containers/ControlsContainer';
import GridContainer from './containers/GridContainer';

import './App.scss';

const COL_INIT = 10;
const ROW_INIT = COL_INIT;

const loadItems = (columns: number, rows: number, cells: boolean[][] = []) => {
  let newCells = [...cells];
  const deltaRows = rows - newCells.length;
  const deltaColumns = rows === deltaRows ? columns : (columns - newCells[0].length);
  
  for(let i=0;i<Math.abs(deltaRows);i++){
  	deltaRows < 0 ? newCells.pop() : newCells.push(newRow(columns - deltaColumns));
  }

  for(let x=0; x<Math.abs(deltaColumns); x++){
  	for(let rowNum = 0; rowNum < newCells.length; rowNum++){
  		deltaColumns < 0 ? newCells[rowNum].pop() : newCells[rowNum].push(false);	
  	}
  }
  return newCells;
}

const newRow = (columns: number) => {
	let row = []
	for(let y = 0; y < columns; y++) {
      row[y] = false;
    }
    return row;
}

const App = () => {
  const [columns, setColumns] = useState<number>(COL_INIT);
  const [rows, setRows] = useState<number>(ROW_INIT);
  const [cells, setCells] = useState<boolean[][]>(loadItems(columns, rows));

  const handleChangeColumns = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setColumns(+event.target.value);
      setCells(loadItems(columns, rows, cells));
    },
    [cells, columns, rows],
  );

  const handleChangeRows = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setRows(+event.target.value);
      setCells(loadItems(columns, rows, cells));
    },
    [cells, columns, rows],
  );

  const handleOnClickCell = useCallback(
    (row: number, column: number)  => {
      let selectedCells = [...cells]
      selectedCells[row][column] = !selectedCells[row][column];
      setCells(selectedCells);
    },
    [cells],
  );

  return (
    <div className="App">
      <ControlsContainer
        columns={columns}
        onChangeColumns={handleChangeColumns}
        onChangeRows={handleChangeRows}
        rows={rows}
      />
      <GridContainer
        cells={cells}
        onClickCell={handleOnClickCell}
      />
    </div>
  );
}

export default App;
