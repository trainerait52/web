// import React, { useEffect, useState } from 'react';
// import BootstrapTable from 'react-bootstrap-table-next';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

// function DataList() {
//   const [userList, setUserList] = useState([]);

//   const columns = [
//     { dataField: 'id', text: 'Id' },
//     { dataField: 'name', text: 'Name', sort: true, filter: textFilter() },
//     { dataField: 'username', text: 'UserName', sort: true, filter: textFilter() },
//     { dataField: 'email', text: 'Email', sort: true },
//   ];

//   const pagination = paginationFactory({
//     page: 1,
//     sizePerPage: 5,
//     lastPageText: '>>',
//     firstPageText: '<<',
//     nextPageText: '>',
//     prePageText: '<',
//     showTotal: true,
//     alwaysShowAllBtns: true,
//     onPageChange: function (page, sizePerPage) {
//       console.log('page', page);
//       console.log('sizePerPage', sizePerPage);
//     },
//     onSizePerPageChange: function (page, sizePerPage) {
//       console.log('page', page);
//       console.log('sizePerPage', sizePerPage);
//     },
//   });

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((result) => setUserList(result))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <BootstrapTable bootstrap4 keyField='id' columns={columns} data={userList} pagination={pagination} filter={filterFactory()} />
//     </div>
//   );
// }

// export default DataList;
import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

function DataList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.error(error));
  }, []);

  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'name', text: 'Name', sort: true, filter: textFilter() },
    { dataField: 'username', text: 'Username', sort: true, filter: textFilter() },
    { dataField: 'email', text: 'Email', sort: true },
  ];     

  const paginationOptions = { 
    page: 1,
    sizePerPage: 5,
    sizePerPageList: [5, 10, 20], // Optional: Specify the available page sizes
    onPageChange: (page, sizePerPage) => {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
  };

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField='id'
        columns={columns}
        data={userList}
        pagination={paginationFactory(paginationOptions)}
        filter={filterFactory()}
      />
    </div>
  );
}

export default DataList;
// This is a React component named `DataList` that displays a table of user data fetched from a remote API and uses the `react-bootstrap-table-next` library to render the table. Here's a breakdown of the code:

// 1. Importing Dependencies:
//    - The code begins by importing the necessary dependencies from various libraries, including React, `useState`, `useEffect`, `BootstrapTable`, `paginationFactory`, and `filterFactory` from the `react-bootstrap-table-next` library.

// 2. Functional Component:
//    - `DataList` is a functional component defined using the `function` keyword.

// 3. State Management:
//    - It defines a state variable `userList` using the `useState` hook to store the user data that will be fetched from an API.

// 4. Fetching User Data:
//    - Inside the `useEffect` hook, the component makes an HTTP GET request to the 'https://jsonplaceholder.typicode.com/users' endpoint using the `fetch` function. This request retrieves a list of user data in JSON format.
//    - The response is processed with `.then()` and the resulting JSON data is set to the `userList` state using `setUserList(result)`.

// 5. Column Configuration:
//    - An array named `columns` is defined to configure the table columns. It specifies the fields from the user data to display, along with options like sorting and filtering.
//    - The table will have columns for 'ID', 'Name' (with sorting and text filtering), 'Username' (with sorting and text filtering), and 'Email' (with sorting).

// 6. Pagination Options:
//    - An object named `paginationOptions` is defined to configure pagination settings. It sets the initial page to 1 and the number of rows per page to 5.
//    - It also defines an `onPageChange` callback function that logs the current page and page size when the user interacts with the pagination controls.

// 7. Rendering the Component:
//    - In the `return` statement, the component returns a `div` containing a `BootstrapTable` component.
//    - The `BootstrapTable` component is configured with various properties and data:
//      - `bootstrap4`: Enables the use of Bootstrap 4 styling.
//      - `keyField`: Specifies the unique identifier for each row (in this case, it's 'id').
//      - `columns`: Uses the `columns` array defined earlier to configure the table columns.
//      - `data`: Uses the `userList` state as the data source for the table.
//      - `pagination`: Configures pagination with options specified in `paginationOptions`.
//      - `filter`: Configures column filtering using the `filterFactory()`.

// In summary, this component fetches user data from a remote API, displays it in a table with pagination and filtering features, and allows users to sort and filter the data based on various columns.