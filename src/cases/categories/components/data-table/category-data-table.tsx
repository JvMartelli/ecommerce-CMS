import { DataTable } from "@/components/ui/data-table";

import { useCategories } from "../../hooks/use-categories";
import { CategoryColumns } from "./category-column";

export function CategoryDataTable() {

    const{data:categories, isLoading} = useCategories();

    return(
        <div>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                <DataTable columns={CategoryColumns} data={categories!}/>
            )}
        </div>
    )
}