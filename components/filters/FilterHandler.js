import { ingredientColumnDefs } from '@/constants/ingredientColumnDefs';
import { useEffect, useMemo } from 'react';
import DropDown from '@/components/DropDown';
const FilterHandler = ({ data, table, filter, setFilter }) => {
    const filterableColumns = useMemo(() => {
        let x = table.getAllColumns().filter((x) => {
            return x.getCanFilter();
        });
        return x;
    }, [table]);

    const uniqueValuesByColumn = useMemo(() => {
        try {
            let res = filterableColumns.reduce((acc, column) => {
                const uniqueValues = [
                    ...new Set(data.items.map((item) => item[column.id])),
                ];
                acc[column.id] = ['all', ...uniqueValues];
                return acc;
            }, {});
            return res;
        } catch (e) {
            console.log(e);
            console.log(data);
        }
    }, [filterableColumns, data]);

    const isDataEmpty = useMemo(
        () => !data || !data.items || data.length === 0,
        [data],
    );

    return (
        <div className='flex flex-row w-8/12 justify-around '>
            {filterableColumns.map((column, index) => (
                <div
                    className='flex flex-row w-6/12 align-middle'
                    key={column.id || '' + '_' + index}
                >
                    <span className='flex flex-row   items-center pr-3'>
                        {column.columnDef.header().props.children}
                    </span>
                    <DropDown
                        column={column}
                        uniqueValues={uniqueValuesByColumn[column.id]}
                        isDisabled={isDataEmpty}
                    />
                </div>
            ))}
        </div>
    );
};

export default FilterHandler;
