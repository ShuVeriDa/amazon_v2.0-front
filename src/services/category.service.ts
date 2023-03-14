import {instance} from "@/api/api.interceptor";
import {IReview} from "@/types/category.interface";

const CATEGORIES = 'categories'

export const CategoryService = {

  async getAll() {
    return await instance<IReview[]>({
      url: CATEGORIES,
      method: 'GET',
    })
  },


  async create() {
    return instance<IReview>({
      url: CATEGORIES,
      method: "POST"
    })
  },

  async update(id: string | number, name: string ) {
    return instance<IReview>({
      url: `${CATEGORIES}/${id}`,
      method: "PUT",
      data: {name}
    })
  },

  async delete(id: string | number) {
    return instance<IReview>({
      url: `${CATEGORIES}/${id}`,
      method: "DELETE",
    })
  },


}