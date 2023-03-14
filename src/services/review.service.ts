import {instance} from "@/api/api.interceptor";
import {IReview} from "@/types/category.interface";

const REVIEWS = 'reviews'

type TypeData = {
  rating: number
  text: string
}
export const CategoryService = {

  async getAll() {
    return await instance<IReview[]>({
      url: REVIEWS,
      method: 'GET',
    })
  },


  async create(productId: string | number, data: TypeData) {
    return instance<IReview>({
      url: `${REVIEWS}/leave/${productId}`,
      method: "POST",
      data
    })
  },


}