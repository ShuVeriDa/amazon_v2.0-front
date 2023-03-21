import {FC} from 'react';
import Meta from "@/ui/Meta";
import {Heading} from "@/ui/Heading";
import {Catalog} from "@/ui/catalog/Catalog";
import {TypePaginationProducts} from "@/types/product.interface";
import {useAuth} from "@/hooks/useAuth";
import {useActions} from "@/hooks/useActions";
import {Layout} from "@/ui/layout/Layout";

export const Home: FC<TypePaginationProducts> = ({products, length}) => {
  const {user} = useAuth()
  const {logout} = useActions()
  return (
    <Meta title={'Home'}>
      <Layout >
        {!!user && <button onClick={() => logout()}>Logout</button>}
        <Catalog title={'Freshed products'} products={products || []} />
      </Layout>
    </Meta>
  );
};
