import { useMutation, useQuery } from "@tanstack/react-query";
import { CategoryService } from "../services/category.service";
import type { CategoryDTO } from "../dtos/category.dto";


export function useCategories(){ 
    return useQuery<CategoryDTO[]>({ 
        queryKey: ['categories'], 
        queryFn: CategoryService.list 
    });
}

export function useCategory(id: string){ 
    return useQuery<CategoryDTO>({
        queryKey:['category', id],
        queryFn: () => CategoryService.getById(id),
        enabled: !id 
    });    
}

export function userCreateCategory(){
    return useMutation<CategoryDTO, Error, Omit<CategoryDTO, 'id'>>({
        mutationFn: (category: Omit<CategoryDTO, 'id'>) => CategoryService.create(category)
    });
}

export function userUpdateCategory(){
    return useMutation<CategoryDTO, Error, {id: string, category: CategoryDTO}>({
        mutationFn: ({id, category}) => CategoryService.update(id, category)
    });
}

export function userDeleteCategory(){
    return useMutation<void, Error, string>({
        mutationFn: (id: string) => CategoryService.delete(id)
    });
}