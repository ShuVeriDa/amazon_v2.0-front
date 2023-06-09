import {instance} from "@/api/api.interceptor";
import {IOrder} from "@/types/order.interfact";

const ORDERS = 'orders'

export const OrderService = {

  async getAll() {
    return await instance<IOrder[]>({
      url: ORDERS,
      method: 'GET',
    })
  },


}