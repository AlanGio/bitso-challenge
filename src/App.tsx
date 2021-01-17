import React, { ChangeEvent, useCallback, useState } from 'react';

import ControlsContainer from './containers/ControlsContainer';
import GridContainer from './containers/GridContainer';

import './App.scss';

const App = () => {
  const [columns, setColumns] = useState<number>(10);
  const [rows, setRows] = useState<number>(10);

  const onSetColumns = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setColumns(+event.target.value);
    },
    [],
  );

  const onSetRows = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setRows(+event.target.value);
    },
    [],
  );

  return (
    <div className="App">
      <ControlsContainer
        columns={columns}
        setColumns={onSetColumns}
        setRows={onSetRows}
        rows={rows}
      />
      <GridContainer
        columns={columns}
        rows={rows}
      />
    </div>
  );
}

export default App;
