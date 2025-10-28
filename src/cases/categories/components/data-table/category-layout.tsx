
import { CategoryDataTable } from "@/cases/categories/components/data-table/category-data-table"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../../../components/ui/input-group"
import { Plus, Search } from "lucide-react"
import { BreadCrumb } from "../../../../components/ui/layout/bread-crumb"
import { Button } from "@/components/ui/button"
import { Outlet, useNavigate } from "react-router-dom"

export function CategoryLayout() {

    const navigate = useNavigate();

    function handleCreate() {
        navigate('/categories/new')
    }

    return (
        <div className="p-4">

        <BreadCrumb title="Categorias" />

        <div className="flex flex-col gap-4 py-4">
           
            <div className="flex flex-row justify-end gap-4 my-4">
                <InputGroup className="max-v-96">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <Button
        onclick={handleCreate}
        >
        <Plus />
        Adicionar
      </Button>
            </div>


            <div>
                <CategoryDataTable />
                <Outlet />
            </div>


         </div>

        </div>
    )
}