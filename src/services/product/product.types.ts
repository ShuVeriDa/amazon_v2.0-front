export const PRODUCTS = 'products'

export type TypeProductData = {
  name: string
  price: number
  description?: string
  images: string[]
  categoryId: number
}

export type TypeProductDataFilters = {
  sort?: EnumProductSort
  search?: string
  page?: string | number
  perPage?: string
}

export enum EnumProductSort {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST= ' oldest'
}