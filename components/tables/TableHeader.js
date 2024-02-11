import { flexRender } from "@tanstack/react-table";
import { useMemo } from "react";
export const TableHeader = ({ headers }) => {
    const arrow = useMemo(() => {
        return {
            asc: "🔼",
            desc: "🔽",
        };
    }, [headers]);

    if (headers && headers.length > 0) {
        return headers.map((header) => {
            const direction = header.column.getIsSorted();
            const sort_indicator = direction && arrow[direction];

            return (
                <th key={header.id}>
                    {header.isPlaceholder ? null : (
                        <div
                            onClick={header.column.getToggleSortingHandler()}
                            className="cursor-pointer flex gap-4"
                        >
                            {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                            {direction && <span>{sort_indicator}</span>}
                        </div>
                    )}
                </th>
            );
        });
    }
    return null;
};
