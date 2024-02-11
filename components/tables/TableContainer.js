'use client';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { Pagination } from '@/components/Pagination';
export default function TableContainer({ table }) {
    const headers = table.getFlatHeaders();

    const rows = table.getRowModel().rows;

    return (
        <div className='overflow-x-auto'>
            <table className='table table-zebra my-4 w-full'>
                <thead>
                    <tr>
                        <TableHeader headers={headers} />
                    </tr>
                </thead>
                <tbody>
                    <TableBody rows={rows} />
                </tbody>
            </table>
            <Pagination table={table} />
        </div>
    );
}
