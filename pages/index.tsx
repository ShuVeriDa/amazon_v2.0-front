import {GetStaticProps, NextPage} from "next";
import {Home} from "@/screens/home/Home";
import {IProduct, TypePaginationProducts, TypeProducts} from "@/types/product.interface";
import {ProductService} from "@/services/product/product.service";

const HomePage: NextPage<TypePaginationProducts> = ({products, length}) => {
  return <div className='text-3xl font-bold underline'>
    <Home products={products} length={length}/>
  </div>
}

export const getStaticProps: GetStaticProps<TypePaginationProducts> = async () => {
  const {data} = await ProductService.getAll({
    page: 1,
    perPage: 4,
  })

  return {
    props: data

  }
}

export default  HomePage