import ApiHelper from './ApiHelper';

class QuirkLogicApi extends ApiHelper{
  constructor() {
    super();
  }

  initialize(config) {
    if (config.baseURL) {
      this.baseURL = config.baseURL;
    } }

  handleAPIError(error, options) {
    if (options.reject && typeof options.reject === QuirkLogicApi.Constants.ARGUMENT_TYPES.FUNCTION) {
      options.reject(error);
    }
  }

  get(config) {
    try {
        
      return super.get(...arguments);
    } catch (e) {
      throw new Error(e);
    }
  }

  delete(config) {
    try {
        
      return super.delete(...arguments);
    } catch (e) {
      throw new Error(e);
    }
  }

  post(config) {
    try {
      return super.post(...arguments);
    } catch (e) {
      throw new Error(e);
    }
  }

  put(config) {
    try {
      return super.put(...arguments);
    } catch (e) {
      throw new Error(e);
    }
  }

  patch(config) {
    try {
      return super.patch(...arguments);
    } catch (e) {
      throw new Error(e);
    }
  }
}

QuirkLogicApi.Constants = {
  ARGUMENT_TYPES: {
    FUNCTION: 'function',
  },
};

export default new QuirkLogicApi();
