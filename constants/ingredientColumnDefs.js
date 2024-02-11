import { createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();
export const ingredientColumnDefs = [
    columnHelper.accessor((row) => row.productname, {
        id: 'productname',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Product Name</span>,
        enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.ingredientname, {
        id: 'ingredientname',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Ingredient Name</span>,
        enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.casnumber, {
        id: 'casnumber',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>CAS Number</span>,
        enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.eparegnumber, {
        id: 'eparegnumber',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>EPA Reg. Number</span>,
        enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.pccode, {
        id: 'pccode',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>PC Code</span>,
        enableColumnFilter: false,
    }),
    columnHelper.accessor((row) => row.registrationstatus, {
        id: 'registrationstatus',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Registration Status</span>,
        enableColumnFilter: true,
        filterFn: (row, _columnId, value) => {
            if (value === 'all') return true;
            if (value === 'null') return row.original.registrationstatus === '';
            return row.original.registrationstatus === value;
        },
    }),
    columnHelper.accessor((row) => row.productnamestatus, {
        id: 'productnamestatus',
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Product Name Status</span>,
        enableColumnFilter: true,
        filterFn: (row, _columnId, value) => {
            if (value === 'all') return true;
            if (value === 'N/A') return row.original.productnamestatus === null;
            return row.original.productnamestatus === value;
        },
    }),
    columnHelper.accessor((row) => row.productstatusdate, {
        id: 'productstatusdate',
        // cell: (info) => (
        //     <span>{format(new Date(info.getValue()), 'MMMM c, yyyy')}</span>
        // ),
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Product Status Date</span>,
        enableColumnFilter: false,
        sortingFn: 'compareDates',
    }),
];
