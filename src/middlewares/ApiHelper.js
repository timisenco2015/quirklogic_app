import axios from 'axios';

class ApiHelper {
  constructor(options) {
    if (options) {
      this.baseURL = options.baseURL;
    }
  }

  getCompleteUrl(options) {
    let path;
    if (!this.baseURL) {
        throw new Error(ApiHelper.Constants.ERRORS.BASE_URL, this.baseURL);
      }
      path = `${this.baseURL}${options.url}`;
    if (options.queryParams) {
      path += options.queryParams;
    }
    return path;
  }

  setQueryParams(config, options) {
    if (options.queries) {
      config.params = options.queries;
    }
    return config;
  }

  validateOptions(options) {
    if (typeof options !== ApiHelper.Constants.ARGUMENT_TYPES.OBJECT) {
       
      throw new Error(ApiHelper.Constants.ERRORS.OPTIONS_TYPE_OBJ);
    }
    if (options && typeof options.url !== ApiHelper.Constants.ARGUMENT_TYPES.STRING) {
      throw new Error(ApiHelper.Constants.ERRORS.URL_TYPE_STRING);
    }
  }

  handleAPISuccess(response, options) {
    response = response.data;

    if (options.resolve && typeof options.resolve === ApiHelper.Constants.ARGUMENT_TYPES.FUNCTION) {
      options.resolve(response);
    }
  }

  handleAPIError(error, options) {
    if (options.reject && typeof options.reject === ApiHelper.Constants.ARGUMENT_TYPES.FUNCTION) {
      options.reject(error);
    }
    throw new Error(error);
  }

  setHeader(contentType) {
      var headers={};
      if (contentType) {
        headers[ApiHelper.Constants.HEADERS.KEYS.CONTENT_TYPE] = contentType;
      } else {
        
        headers[ApiHelper.Constants.HEADERS.KEYS.CONTENT_TYPE] = ApiHelper.Constants.HEADERS.VALS.APPLICATION_JSON;
      }
      return headers;
    }
  
  createHeadersObj(options) {
    if (options.ignoreHeaders) {
      return {};
    }
    if (options.headers) {
       
      return { headers: options.headers };
    }
    return { headers: this.setHeader(options.authenticated) };
  }

  /**
   * Axios GET handler
   * @param {*} options
   */

  get(options = {}) {
    
    this.validateOptions(options);
    const path = this.getCompleteUrl(options);
    let config = this.createHeadersObj(options);
    config = this.setQueryParams(config, options);

    return axios
      .get(path, config)
      .then((response) => this.handleAPISuccess(response, options))
      .catch((error) => this.handleAPIError(error, options));
  }

   /**
   * Axios DELETE handler
   * @param {*} options
   */

    delete(options = {}) {
    
      this.validateOptions(options);
      const path = this.getCompleteUrl(options);
      let config = this.createHeadersObj(options);
      config = this.setQueryParams(config, options);

      return axios
        .delete(path, config)
        .then((response) => this.handleAPISuccess(response, options))
        .catch((error) => this.handleAPIError(error, options));
    }

  /**
   * Axios POST handler
   * @param {*} options
   */

  post(options = {}) {
    this.validateOptions(options);
    const path = this.getCompleteUrl(options);
    const config = this.createHeadersObj(options);
    const payload = options.request ? options.request : null;

    return axios
      .post(path, payload, config)
      .then((response) => this.handleAPISuccess(response, options))
      .catch((error) => this.handleAPIError(error, options));
  }

}

ApiHelper.Constants = {
    HEADERS: {
        KEYS: {
          AUTHORIZATION: 'Authorization',
          CONTENT_TYPE: 'Content-Type',
        },
        VALS: {
          APPLICATION_JSON: 'application/json',
        },
      },
  ERRORS: {
    BASE_URL: 'You have not initialized the API with a baseUrl. Please pass in an object with baseUrl value set.',
    HEADER_FN:
      'You have not initialized this class with an Authorization header. Create a "getRequestHeaders" function that will set the Headers',
    URL_TYPE_STRING: 'URL must be present as an argument',
    OPTIONS_TYPE_OBJ: 'Options must be passed as an object!',
  },
  ARGUMENT_TYPES: {
    STRING: 'string',
    OBJECT: 'object',
    FUNCTION: 'function',
  }
};

export default ApiHelper;
