import {FC} from 'react';
import {IProduct} from "@/types/product.interface";
import {useActions} from "@/hooks/useActions";
import {useCart} from "@/hooks/useCart";
import {AiFillHeart, AiOutlineHeart} from "react-icons/all";
import {useProfile} from "@/hooks/useProfile";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";

export const FavoriteButton: FC<{ productId: number }> = ({productId}) => {
  const {profile} = useProfile()

  const {invalidateQueries} = useQueryClient()


  const {mutate} = useMutation(['toggle favorite'], () => UserService.toggleFavorite(productId), {
    onSuccess() {
      invalidateQueries(['get profile'])
    }
  })

  const isExist = profile.favorites.some(favorite => favorite.id === productId)
  return (
    <div>
      <button onClick={() => mutate()}>
        {isExist ? <AiFillHeart/> : <AiOutlineHeart/>}
      </button>
    </div>
  );
};