import QuirkLogicApi from './QuirkLogicApi';

export default {
    /**
     * Initialize the tracking object with default data
     * @param {*} store
     */
    initialize() {
         QuirkLogicApi.initialize({
        baseURL: process.env.REACT_APP_PUBLIC_API_URL,
      });
    },
  
    DELETE: (url, queries, options) => {
        return {
          url,
          method: 'DELETE',
          queries,
          ...options,
        };
      },
    GET: (url, queries, options) => {
      return {
        url,
        method: 'GET',
        queries,
        ...options,
      };
    },
  
    POST: (url, request, options) => {
      return {
        url,
        method: 'POST',
        request,
        ...options,
      };
    },
    PUT: (url, request, options) => {
      return {
        url,
        method: 'PUT',
        request,
        ...options,
      };
    },
    PATCH: (url, request, options) => {
      return {
        url,
        method: 'PATCH',
        request,
        ...options,
      };
    },
  };