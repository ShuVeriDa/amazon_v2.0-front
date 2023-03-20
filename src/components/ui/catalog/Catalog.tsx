import {FC} from 'react';
import {IProduct} from "@/types/product.interface";
import {ProductItem} from "@/ui/catalog/product-item/ProductItem";
import Loader from "@/ui/Loader";

interface ICatalogProps {
}

export const Catalog: FC<{ products: IProduct[], isLoading?: boolean }> = ({products, isLoading}) => {

  if(isLoading) return <Loader />

  return (
    <section>
      {products.length
        ? products.map(product => <ProductItem product={product} key={product.id}/>)
        : <div>There are no products</div>
      }
    </section>
  );
};