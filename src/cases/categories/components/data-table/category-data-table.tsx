import { DataTable } from "@/components/ui/data-table";
import { useCategories } from "../../hooks/use-categories";
import { categoryColumns } from "./category-columns";


export function CategoryDataTable() {

    const{data:categories, isLoading} = useCategories();

    return(
        <div>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                <DataTable columns={categoryColumns} data={categories!}/>
            )}
        </div>
    )
}