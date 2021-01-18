# Welcome to Small Sea Word

## Setup

After clone this Repo, you should run:
### `yarn install`

To run the project locally, you can use:
### `yarn start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### You can also see a DEMO here: [http://bitso-challenge.herokuapp.com/](http://bitso-challenge.herokuapp.com/).


### `yarn test`
Launches the test runner in the interactive watch mode.\


## Code Components:

### App.tsx
It's the main component, will render the main screen and load Grid and Controls Components.
This component has the logic to handle the three posible user actions (Click on Cell elements, Move Columns or Rows Bar).

### components/Controls/index.tsx
This is a Presentational Component, shows the Controls to modify the quantity of Columns and Rows what we want to have in our Grid.
Receives the next Props:

columns: number (Quantity of columns)
onChangeColumns: function (Callback of user columns bar action)
onChangeRows: function (Callback of user rows bar action)
rows: number (Quantity of rows)
islands: number (Quantity of islands)

### components/Grid/index.tsx
This is a Presentational Component, shows the Grid with the Sea and Land Cells.
Receives the next props:

cells: array (A multidimentional booleans array with the cells. false value represents sea and true represents land)
onClickCell: function (Callback of user cell click)

### utils/utils.tsx
This is a utils file with the different functions used in App Component to handle and draw the grid and detect islands if exists

## Libraries used:
- typescript
- react
- react-dom
- bootstrap and react-bootstrap
- lodash
- react-device-detect
- classnames
- node-sass

Testing Library:
- jest






