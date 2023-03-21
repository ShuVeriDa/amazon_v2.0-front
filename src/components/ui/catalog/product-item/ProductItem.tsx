import {FC} from 'react';
import {IProduct} from "@/types/product.interface";
import Image from "next/image";
import {AddToCartButton} from "@/ui/catalog/product-item/AddToCartButton";

import {ProductRating} from "@/ui/catalog/product-item/ProductRating";
import dynamic from "next/dynamic";
import Link from "next/link";
import {convertPrice} from "@/utils/convertPrict";

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
  ssr: false
})

export const ProductItem: FC<{ product: IProduct }> = ({product}) => {
  return (
    <div>
      <div className='bg-white rounded-xl relative overflow-hidden'>
        <div className='absolute top-2 right-3 z-10'>
          <DynamicFavoriteButton productId={product.id}/>
          <AddToCartButton product={product}/>
        </div>
        <Link href={`/product/${product.slug}`}>
          <Image width={306}
                 height={306}
                 src={product.images[0]}
                 alt={product.name}
          />
        </Link>
      </div>
      <Link href={`/product/${product.slug}`}>
        <h3 className='mt-2 font-semibold'>{product.name}</h3>
      </Link>
      <Link href={`/category/${product.category.slug}`} className='text-aqua text-xs mb-2'>
        {product.category.name}
      </Link>
      <ProductRating product={product}/>
      <div className='text-1xl font-semibold'>{convertPrice(product.price)}</div>
    </div>
  );
};