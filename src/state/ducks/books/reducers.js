import { createReducer } from '@reduxjs/toolkit';
import * as types from './types';

const booksReducer = createReducer(
    {
      allCatalogBooks:null,
      savedCatalogBook:null,
      deleteCatalogBooksByBookId :null,
      isSavedCatalogBookInternalError:false,
      isDeleteCatalogBooksInternalError:false,
      isAllCatalogBooksInternalError:false
    },
    {
[types.SAVE_BOOK_COMPLETED]: (state, action) => {
  if(action.payload){
    state.savedCatalogBook = action.payload;
    return;
  }
  state.savedCatalogBook=null;
  state.isSavedCatalogBookInternalError =false;
  },
  [types.SAVE_BOOK_FAILED]: (state, action) => {
    state.savedCatalogBook = null;
    state.isSavedCatalogBookInternalError=true;
  },
  [types.GET_ALL_BOOKS_COMPLETED]: (state, action) => {
    if(action.payload && action.payload.data && action.payload.data.Books){
      state.allCatalogBooks = action.payload.data.Books;
      return;
    }
    state.isAllCatalogBooksInternalError=false;
    state.allCatalogBooks=null;
  },
  [types.GET_ALL_BOOKS_FAILED]: (state, action) => {
    state.allCatalogBooks = null;
    state.isAllCatalogBooksInternalError=true;
  },
  [types.DELETE_BOOK_COMPLETED]: (state, action) => {
    if(action.payload){
      state.deleteCatalogBooksByBookId = action.payload;
      return;
    }
    state.deleteCatalogBooksByBookId = null;
    state.isDeleteCatalogBooksInternalError=false;
  },
  [types.DELETE_BOOK_FAILED]: (state, action) => {
    state.deleteCatalogBooksByBookId = null;
    state.isDeleteCatalogBooksInternalError=true;
  },
  [types.RESET_SAVED_CATALOG_BOOK]: (state, action) => {
    state.savedCatalogBook = null;
  },
});

export default booksReducer;
