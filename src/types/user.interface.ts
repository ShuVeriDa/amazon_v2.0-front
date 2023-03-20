
import { IProduct } from './product.interface'
import {IOrder} from "@/types/order.interfact";

export interface IUser {
	id: number
	email: string
	name: string
	avatarPath: string
	phone: string
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrder[]
}
