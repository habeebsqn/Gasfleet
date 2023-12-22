// use-POST/useRequestOrder.js
import {useMutation} from '@tanstack/react-query';
import {postOrder} from '../../../config/api';

const useRequestOrder = () => {
  return useMutation({mutationFn: postOrder});
};

export default useRequestOrder;
