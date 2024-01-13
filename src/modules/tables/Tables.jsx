import React, { useState, useMemo } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { useSelector } from 'react-redux';
import Arrows from "./arrows/Arrows";

const DataTable = () => {
    const data = useSelector(state => state.form.formData);
    const [filterInput, setFilterInput] = useState('');

    const columns = useMemo(() => [
        { Header: 'First Name', accessor: 'firstName' },
        { Header: 'Last Name', accessor: 'lastName' },
        { Header: 'Start Date', accessor: 'startDate', sortType: (a, b) => new Date(a.values.startDate) - new Date(b.values.startDate) },
        { Header: 'Department', accessor: 'department' },
        { Header: 'Date of Birth', accessor: 'dateOfBirth', sortType: (a, b) => new Date(a.values.dateOfBirth) - new Date(b.values.dateOfBirth) },
        { Header: 'Street', accessor: 'street' },
        { Header: 'City', accessor: 'city' },
        { Header: 'State', accessor: 'state' },
        { Header: 'Zip Code', accessor: 'zipCode' }
    ], []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        setGlobalFilter,
        state: { pageIndex, pageSize },
    } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setGlobalFilter(value);
        setFilterInput(value);
    };

    const PaginationButton = ({ page, text }) => (
        <button className="page-button" onClick={() => gotoPage(page)}>
            {text}
        </button>
    );

    const generatePageButtons = useMemo(() => {
        let buttons = [];
        for (let i = 0; i < pageCount; i++) {
            buttons.push(
                <PaginationButton key={i} page={i} text={i + 1} />
            );
        }
        return buttons;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageCount, gotoPage]);

    return (
        <div className="table-container">
            <div className="table-content-head">
                <div className="show-entries">
                    <span>Show </span>
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {[10, 25, 50, 100].map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                    <span> entries</span>
                </div>
                <div className="table-filter">
                    <input value={filterInput} onChange={handleFilterChange} placeholder={"Search"} />
                </div>
            </div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? <Arrows direction="down" /> : <Arrows direction="up" />) : <Arrows direction="neutral" />}
                                    </span>
                                </th>
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
                                    <td {...cell.getCellProps()} data-label={cell.column.Header}>
                                        <p>{cell.render('Cell')}</p>
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="table-content-foot">
                <div className="pagination-info">
                    Showing {pageSize * pageIndex + 1} to {pageSize * pageIndex + page.length} of {data.length} entries
                </div>
                <div className="pagination-controls">
                    <button className="page-button" onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    {generatePageButtons}
                    <button className="page-button" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default DataTable;
