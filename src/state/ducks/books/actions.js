import * as types from './types';
import ApiRequest from '../../../middlewares/ApiRequest';

export const saveBooks = (book) => ({
   type: types.SAVE_BOOK,
    payload: ApiRequest.POST(`api/books`,book),
  });

  export const getAllBooks = () => ({
    type: types.GET_ALL_BOOKS,
     payload: ApiRequest.GET(`api/books`),
   });


   export const deleteSpecificBook= (bookId)=> ({
    type: types.DELETE_BOOK,
     payload: ApiRequest.DELETE(`api/books/${bookId}`),
   });

   export const resetSavedCatalogBook =(key)=>({
    type: types.RESET_SAVED_CATALOG_BOOK,
     payload: key,
   });