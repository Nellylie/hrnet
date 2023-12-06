import React from 'react';
import { useTable, usePagination } from 'react-table';
import { useSelector } from 'react-redux';

function DataTable() {
    const data = useSelector(state => state.form.formData);

    const columns = React.useMemo(
        () => [
            { Header: 'First Name', accessor: 'firstName' },
            { Header: 'Last Name', accessor: 'lastName' },
            { Header: 'Start Date', accessor: 'dateStart' },
            { Header: 'Department', accessor: 'department'},
            { Header: 'Date of Birth', accessor: 'dateOfBirth' },
            { Header: 'Street', accessor: 'street'},
            {Header:'City', accessor : 'city' },
            {Header: 'State', accessor:'state'},
            {Header: 'Zip Code', accessor:'zipCode'}
        ],  
        [data]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, 
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data }, usePagination);

    return (
        <div className="tableContainer">
            <div className="show-entries">
                <select
                    value={pageSize}
                    onChange={e => setPageSize(Number(e.target.value))}
                >
                    {[10, 25, 50, 100].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Afficher {pageSize}
                        </option>
                    ))}
                </select>
            </div>

            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <div className="pagination-controls">
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'Previous'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'Next'}
                </button>
            </div>
        </div>
    );
}

export default DataTable;
