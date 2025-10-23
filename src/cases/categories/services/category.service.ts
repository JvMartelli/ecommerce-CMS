import { api } from "../../../lib/axios.ts";
import type { CategoryDTO } from "../dtos/category.dto.ts";

const _ENDPOINT = "/categories";

export const CategoryService = {

    async list(): Promise<CategoryDTO[]>{
        const result = await api.get<CategoryDTO[]>(_ENDPOINT);
        return result.data;
    },

    async create(category: CategoryDTO): Promise<CategoryDTO>{
        const result = await api.post<CategoryDTO>(_ENDPOINT, category);
        return result.data;
    },

    async getById(id: string): Promise<CategoryDTO>{
        const result = await api.get<CategoryDTO>(`${_ENDPOINT}/${id}`);
        return result.data;
    },

    async update(id: string, category: CategoryDTO): Promise<CategoryDTO>{
        const result = await api.put<CategoryDTO>(`${_ENDPOINT}/${id}`, category);
        return result.data;
    },

    async delete(id: string): Promise<void>{
        return Promise.resolve();
    },
}