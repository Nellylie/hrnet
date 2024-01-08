import React, { useState } from 'react';
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table';
import { useSelector } from 'react-redux';
import Arrows from "./arrows/Arrows";

const dateSortMethod = (rowA, rowB, columnId, desc) => {
    const dateA = new Date(rowA.values[columnId]);
    const dateB = new Date(rowB.values[columnId]);
    return dateA > dateB ? 1 : -1;
};

function DataTable() {
    const data = useSelector(state => state.form.formData);
    const [filterInput, setFilterInput] = useState('');

    const columns = React.useMemo(
        () => [
            { Header: 'First Name', accessor: 'firstName' },
            { Header: 'Last Name', accessor: 'lastName' },
            { Header: 'Start Date', accessor: 'startDate', sortType: dateSortMethod },
            { Header: 'Department', accessor: 'department' },
            { Header: 'Date of Birth', accessor: 'dateOfBirth', sortType: dateSortMethod },
            { Header: 'Street', accessor: 'street' },
            { Header: 'City', accessor: 'city' },
            { Header: 'State', accessor: 'state' },
            { Header: 'Zip Code', accessor: 'zipCode' }
        ],
        []
    );

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

    const generatePageButtons = () => {
        let startPage = Math.max(pageIndex - 2, 0);
        let endPage = Math.min(startPage + 4, pageCount - 1);

        if (endPage - startPage < 4) {
            startPage = Math.max(endPage - 4, 0);
        }

        const pages = [];
        if (startPage > 0) {
            pages.push(
                <button className="page-button" key="first" onClick={() => gotoPage(0)}>
                    1
                </button>
            );
            if (startPage > 1) {
                pages.push(<span key="firstEllipsis">...</span>);
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => gotoPage(i)}
                    disabled={pageIndex === i}
                    className={`page-button ${pageIndex === i ? 'active' : ''}`}>
                    {i + 1}
                </button>
            );
        }
        if (endPage < pageCount - 1) {
            if (endPage < pageCount - 2) {
                pages.push(<span key="lastEllipsis">...</span>);
            }
            pages.push(
                <button className="page-button" key="last" onClick={() => gotoPage(pageCount - 1)}>
                    {pageCount}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="table-container">
            <div className="table-content-head">

                <div className="show-entries">
                    <span>Show </span>
                    <select
                        value={pageSize}
                        onChange={e => setPageSize(Number(e.target.value))}
                    >
                        {[10, 25, 50, 100].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </select>
                    <span> entries</span>
                </div>
                <div className="table-filter">
                    <input
                        value={filterInput}
                        onChange={handleFilterChange}
                        placeholder={"Search"}
                    />
                </div>
            </div>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
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
                    <button className="page-button" onClick={() => previousPage()} disabled={!canPreviousPage}>
                        {'Previous'}
                    </button>
                    {generatePageButtons()}
                    <button className="page-button" onClick={() => nextPage()} disabled={!canNextPage}>
                        {'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DataTable;
