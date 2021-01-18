import { detectIslands, loadItems, newRow } from "./utils";

const mockOnlySeaMap = [
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
  [false, false, false, false],
];

const mockMapWithIslandsMap = [
  [true, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, true],
];

describe("Util tests", () => {
  describe("loadItems function", () => {
    it("should return an only sea 4x4 map", () => {
      const mockedParametersData = {
        columns: 4,
        rows: 4,
      };
      const loadedItems = loadItems(
        mockedParametersData.columns,
        mockedParametersData.rows,
        []
      );

      expect(loadedItems).toEqual(mockOnlySeaMap);
      expect(loadedItems.length).toEqual(4);
    });

    it("should return a two islands 5x5 map", () => {
      const mockedParametersData = {
        columns: 5,
        rows: 5,
        grid: mockMapWithIslandsMap,
      };
      const loadedItems = loadItems(
        mockedParametersData.columns,
        mockedParametersData.rows,
        mockedParametersData.grid
      );

      expect(loadedItems).toEqual(mockMapWithIslandsMap);
      expect(loadedItems.length).toEqual(5);
    });
  });

  describe("newRow function", () => {
    it("should return a 5 columns row", () => {
      const mockedColumns = 5;

      const newRowReturn = newRow(mockedColumns);
      expect(newRowReturn.length).toEqual(mockedColumns);
    });
  });

  describe("detectIslands function", () => {
    it("should count 0 islands", () => {
      const mockedColumns = 4;
      const mockedRows = 4;

      const newRowReturn = detectIslands(
        mockedColumns,
        mockedRows,
        mockOnlySeaMap
      );
      expect(newRowReturn).toEqual(0);
    });

    it("should count 2 islands", () => {
      const mockedColumns = 5;
      const mockedRows = 5;

      const newRowReturn = detectIslands(
        mockedColumns,
        mockedRows,
        mockMapWithIslandsMap
      );
      expect(newRowReturn).toEqual(2);
    });
  });
});
