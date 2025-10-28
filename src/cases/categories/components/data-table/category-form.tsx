import { SidebarForm } from "@/components/ui/layout/sidebar-form";
import { useParams } from "react-router-dom";
import { useCategory } from "../../hooks/use-categories";

export function CategoryForm() {
    const {id} = useParams<{id: string}>();
    const { data, isLoading } = useCategory(id ?? '')

    function handleSave() {

    }

    return(
        <SidebarForm title="Cadastro de Categoria">
        onSave= {handleSave}

            {isLoading ? ( 
                <h1>Carregando</h1>
            ) : }
        <p>
            {JSON.stringify(data)}
        </p>
            
        </SidebarForm>
    )
}