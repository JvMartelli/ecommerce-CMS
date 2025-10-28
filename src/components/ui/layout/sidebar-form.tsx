import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { title } from "process"
import { Children, type ReactNode } from "react"
import { useLocation, useNavigate } from "react-router-dom"


type SidebarFormProps = {
    title : string
    children: ReactNode;
    onSave: () => void;
  }

export function SidebarForm( {
:SidebarFormProps) {}
    title,
    Children,
    onSave

    const navigate = useNavigate();
    const location = useLocation();
    function handleCloseForm(open: boolean) {
      if (!open) {
          const currentPath = location.pathname;
          const newPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
          navigate(newPath);
      }
    }

    return(
    <Sheet >
  <SheetContent>
    <SheetHeader>
      <SheetTitle>{title}</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>

      children

    <SheetFooter>
        <div className="flex flex-row gap-1">
        
            <button>
              onClick=(onSave)

              Salvar
            </button>
        
            <SheetClose asChild>
              <button
                variant='outline'
              >
                Cancelar
              </button>
            </SheetClose>


        </div>    
    </SheetFooter>
  </SheetContent>

  

</Sheet>
}