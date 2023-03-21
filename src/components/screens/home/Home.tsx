import {FC} from 'react';
import Meta from "@/ui/Meta";
import {Heading} from "@/ui/Heading";
import {Catalog} from "@/ui/catalog/Catalog";
import {TypePaginationProducts} from "@/types/product.interface";

export const Home: FC<TypePaginationProducts> = ({products, length}) => {
  return (
    <Meta title={'Home'}>
      <Heading>Hello world</Heading>

      <Catalog products={products || []} />
    </Meta>
  );
};
