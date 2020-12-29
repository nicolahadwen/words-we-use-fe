import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core';

const columns = [
    { field: 'city', headerName: 'City'},
    { field: 'country', headerName: 'Country' },
    { field: 'votes', headerName: 'Votes'},
];

const rows = [
    { id: "124", city: 'Toronto', country: 'Canada', votes: 2000 },
];

const useStyles = makeStyles((theme) => ({
    table: {
        [theme.breakpoints.down('sm')]: {
            height: '200px',
            width: '100%'
        },
        [theme.breakpoints.up('md')]: {
            height: '300px',
            width: '100%'
        },
        [theme.breakpoints.up('lg')]: {
            height: '300px',
            width: '50%'
        },
    },
}));

export default function LocationsBreakdown() {
    console.log("LocationsBreakdown");
    const classNames = useStyles();
    return (
        <div className={classNames.table}>
            <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
    );
}