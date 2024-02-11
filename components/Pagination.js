import React from 'react';
export const Pagination = ({ table }) => {
    const state = table.getState().pagination;

    const goLastPage = () => table.setPageIndex(table.getPageCount() - 1);
    return (
        <div className='my-2'>
            <div className='flex items-center gap-2'>
                <div className='btn-group btn-sm'>
                    <button
                        className='btn btn-sm'
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<<'}
                    </button>
                    <button
                        className='btn btn-sm'
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {'<'}
                    </button>
                    <button
                        className='btn btn-sm'
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>'}
                    </button>
                    <button
                        className='btn btn-sm'
                        onClick={goLastPage}
                        disabled={!table.getCanNextPage()}
                    >
                        {'>>'}
                    </button>
                </div>
                <span className='flex items-center gap-1'>
                    <div>Page</div>
                    <strong>
                        {state.pageIndex + 1} of {table.getPageCount()}
                    </strong>
                </span>
            </div>
        </div>
    );
};
