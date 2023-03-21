import {FC} from 'react';
import {IProduct} from "@/types/product.interface";
import {ProductItem} from "@/ui/catalog/product-item/ProductItem";
import Loader from "@/ui/Loader";
import {Heading} from "@/ui/Heading";

interface ICatalogProps {
  products: IProduct[],
  isLoading?: boolean,
  title?: string
}

export const Catalog: FC<ICatalogProps> = (
  {products, isLoading, title}
) => {

  if (isLoading) return <Loader/>

  return (
    <section>
      {title && <Heading>{title}</Heading>}
      {products.length
        ? <div className='grid grid-cols-4 gap-10 p-12'>
          {products.map(product => <ProductItem product={product} key={product.id}/>)}
        </div>
        : <div>There are no products</div>
      }
    </section>
  );
};