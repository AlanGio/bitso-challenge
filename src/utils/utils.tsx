
export const loadItems = (columns: number, rows: number, cells: boolean[][] = []) => {

  const newCells = [...cells];
  const deltaRows = rows - newCells.length;
  const deltaColumns = rows === deltaRows ? columns : (columns - newCells[0].length);
  
  for (let i = 0; i < Math.abs(deltaRows); i++) {
  	deltaRows < 0 ? newCells.pop() : newCells.push(newRow(columns - deltaColumns));
  }

  for (let x = 0; x < Math.abs(deltaColumns); x++) {
  	for (let rowNum = 0; rowNum < newCells.length; rowNum++) {
  		deltaColumns < 0 ? newCells[rowNum].pop() : newCells[rowNum].push(false);	
  	}
	}
	return newCells;
}

export const newRow = (columns: number) => {
	const row = []
	for (let y = 0; y < columns; y++) {
		row[y] = false;
	}
  return row;
}

export const detectIslands = (columns: number, rows: number, cells: boolean[][]) => {

	const visitMap:boolean[][] = []
	for (let rowNum = 0; rowNum < rows; rowNum++){
		visitMap.push([])
		for (let colNum = 0; colNum < columns; colNum++){
			visitMap[rowNum].push(false);
		}
	}

	let count = 0;
	for (let rowNum = 0; rowNum < rows; rowNum++){
		for (let colNum = 0; colNum < columns; colNum++){
			if (cells[rowNum][colNum] && !visitMap[rowNum][colNum]){
				walkIsland(cells, visitMap, rowNum, colNum);
				count++;
			}
		}
	}

	return count;
}

export const walkIsland = (cells: boolean[][], visitMap: boolean[][], rowNum: number, colNum: number) => {
	const rowNbr = [ -1, 0, 0, 1 ]; 
  const colNbr = [ 0, -1, 1, 0 ]; 
  visitMap[rowNum][colNum] = true; 

  for (let n = 0; n < rowNbr.length; n++){
    if (withinBounds(cells, visitMap, rowNum + rowNbr[n], colNum + colNbr[n])){
      walkIsland(cells, visitMap, rowNum + rowNbr[n], colNum + colNbr[n]);	
    }
  }
}

export const withinBounds = (cells: boolean[][], visitMap: boolean[][], rowNum: number, colNum: number) =>
	(rowNum >= 0) && (rowNum < cells.length) && (colNum >= 0) && (colNum < cells[0].length) && (cells[rowNum][colNum] && !visitMap[rowNum][colNum]); 
;
