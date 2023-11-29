import React from 'react';
import { useTable } from 'react-table';
import { useSelector } from 'react-redux';

function DataTable() {
    const data = useSelector(state => state.form.formData);
    console.log("dd", data);
    const columns = React.useMemo(
        () => [
            { Header: 'First Name', accessor: 'firstName' },
            { Header: 'Last Name', accessor: 'lastName' },
            { Header: 'Date of Birth', accessor: 'dateOfBirth' },
            { Header: 'Start Date', accessor: 'dateStart' },
            { Header: 'Street', accessor: 'address.street' },
            { Header: 'City', accessor: 'address.city' },
            { Header: 'State', accessor: 'address.state' },
            { Header: 'Zip Code', accessor: 'address.zipCode' },
            { Header: 'Department', accessor: 'department' },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className="tableContainer">
            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} className="th">{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()} className="td">{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
