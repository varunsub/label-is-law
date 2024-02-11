'use client';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
} from '@tanstack/react-table';
import { ingredientColumnDefs } from '@/constants/ingredientColumnDefs';

const compareDates = (a, b, id) => {
    const difference = new Date(a.original[id]) - new Date(b.original[id]);
    if (difference < 0) return -1;
    if (difference > 0) return 1;
    return 0;
};

export const useReactTableWrapper = (
    syncedData,
    sorting,
    setSorting,
    filter,
    setFilter,
) => {
    return useReactTable({
        columns: ingredientColumnDefs,
        data: syncedData,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
            columnFilters: filter,
        },
        onSortingChange: setSorting,
        initialState: {
            pagination: {
                pageSize: 20,
            },
            columnFilters: filter,
        },
        onColumnFiltersChange: setFilter,
        getFilteredRowModel: getFilteredRowModel(),
        sortingFns: {
            compareDates: compareDates,
        },
    });
};
