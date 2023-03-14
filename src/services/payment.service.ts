import {instance} from "@/api/api.interceptor";
import {IReview} from "@/types/review.interface";

const PAYMENT = 'reviews'

type TypeData = {
  rating: number
  text: string
}
export const PaymentService = {
  async createPayment(amount: number) {
    return instance.post<IReview>(PAYMENT, {amount})
  },
}