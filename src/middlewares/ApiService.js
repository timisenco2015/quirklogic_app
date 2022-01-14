import QuirkLogicApi from './QuirkLogicApi';

const handleResponse = (res, action, next) => {
    return next({
      type: `${action.type}_COMPLETED`,
      payload: res,
      meta: action.payload,
    });
  };
  
  const handleErrors = (err, action, next) => {
    return next({
      type: `${action.type}_FAILED`,
      payload: err,
      meta: action.payload,
    });
  };
  
  const apiService = () => (next) => (action) => {
    if (!action.payload) {
      return next(action);
    }
  
    if (!action.payload.method) {
      throw new Error(`'method' not specified for async action ${action.type}`);
    }
  
    action.payload.resolve = (res) => handleResponse(res, action, next);
    action.payload.reject = (err) => handleErrors(err, action, next);
  
    switch (action.payload.method) {
      case 'GET':
        return QuirkLogicApi.get(action.payload);
      case 'POST':
        return QuirkLogicApi.post(action.payload);
      case 'DELETE':
        return QuirkLogicApi.delete(action.payload);
      default:
        return next(action);
    }
  };
  
  export default apiService;
  