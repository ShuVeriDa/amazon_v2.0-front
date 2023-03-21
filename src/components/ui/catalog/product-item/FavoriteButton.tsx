import {FC} from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import {useProfile} from "@/hooks/useProfile";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";

export const FavoriteButton: FC<{ productId: number }> = ({productId}) => {
  const {profile} = useProfile()

  // if (!profile) return null

  const {invalidateQueries} = useQueryClient()


  const {mutate} = useMutation(['toggle favorite'], () => UserService.toggleFavorite(productId), {
    onSuccess() {
      invalidateQueries(['get profile'])
    }
  })

  const isExist = profile?.favorites.some(favorite => favorite.id === productId)
  return (
    <div>
      <button onClick={() => mutate()}>
        {isExist ? <AiFillHeart/> : <AiOutlineHeart/>}
      </button>
    </div>
  );
};