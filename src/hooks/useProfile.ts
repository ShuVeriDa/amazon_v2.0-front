import {useQuery} from "@tanstack/react-query";
import {UserService} from "@/services/user.service";
import {IFullUser} from "@/types/user.interface";
import {errorCatch} from "@/api/api.helper";

export const useProfile = () => {
  const {data} = useQuery(['get profile'], () => UserService.getProfile(), {
    select: ({data}) => data,
    onError: (error) => {
      console.log(errorCatch(error))
    }
  })

  return {profile: data}
}