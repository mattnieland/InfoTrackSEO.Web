/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DynamicSearch {
  /** @format int32 */
  offset?: number | null;
  /** @format int32 */
  limit?: number | null;
  sort?: Sort[] | null;
  filter?: Filter;
}

export interface Filter {
  field?: string | null;
  operator?: string | null;
  value?: string | null;
}

export interface Sort {
  field?: string | null;
  dir?: string | null;
}

export interface TrackedSearchData {
  /** @format int32 */
  id?: number;
  /** @format uuid */
  uuid?: string;
  /** @format int32 */
  urlId?: number;
  url?: TrackedUrls;
  /** @format int32 */
  termId?: number;
  searchTerms?: TrackedSearchTerms;
  ranks?: string | null;
  source?: string | null;
  /** @format int32 */
  captureSize?: number;
  /** @format date-time */
  searchDate?: string;
}

export interface TrackedSearchTerms {
  /** @format int32 */
  id?: number;
  /** @format uuid */
  uuid?: string;
  /** @format int32 */
  urlId?: number;
  url?: TrackedUrls;
  term?: string | null;
  searchData?: TrackedSearchData[] | null;
}

export interface TrackedUrls {
  /** @format int32 */
  id?: number;
  /** @format uuid */
  uuid?: string;
  url?: string | null;
  searchTerms?: TrackedSearchTerms[] | null;
  searchData?: TrackedSearchData[] | null;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title InfoTrackSEO Api
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags SearchData
     * @name SearchdataList
     * @summary Retrieve all search data
     * @request GET:/api/searchdata
     * @secure
     */
    searchdataList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 50
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackedSearchData[], void>({
        path: `/api/searchdata`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SearchData
     * @name SearchdataCursorList
     * @summary Retrieve all search data
     * @request GET:/api/searchdata/cursor
     * @secure
     */
    searchdataCursorList: (
      query?: {
        /** @format uuid */
        after?: string;
        /**
         * @format int32
         * @default 50
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackedSearchData[], void>({
        path: `/api/searchdata/cursor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SearchData
     * @name SearchdataSearchCreate
     * @summary Advanced search for search data
     * @request POST:/api/searchdata/search
     * @secure
     */
    searchdataSearchCreate: (data: DynamicSearch, params: RequestParams = {}) =>
      this.request<TrackedSearchData[], void>({
        path: `/api/searchdata/search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name TermsDelete
     * @summary Delete a search terms
     * @request DELETE:/api/terms
     * @secure
     */
    termsDelete: (
      query?: {
        /**
         * The unique GUID for the search terms
         * @format uuid
         */
        uuid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/terms`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name TermsList
     * @summary Retrieve all search terms
     * @request GET:/api/terms
     * @secure
     */
    termsList: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 50
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackedSearchTerms[], void>({
        path: `/api/terms`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name TermsCreate
     * @summary Create a search terms
     * @request POST:/api/terms
     * @secure
     */
    termsCreate: (data: TrackedSearchTerms, params: RequestParams = {}) =>
      this.request<TrackedSearchTerms, void>({
        path: `/api/terms`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name TermsDetail
     * @summary Get a specific search terms
     * @request GET:/api/terms/{uuid}
     * @secure
     */
    termsDetail: (uuid: string, params: RequestParams = {}) =>
      this.request<TrackedSearchTerms, void>({
        path: `/api/terms/${uuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name TermsUpdate
     * @summary Update an term object
     * @request PUT:/api/terms/{uuid}
     * @secure
     */
    termsUpdate: (uuid: string, data: TrackedSearchTerms, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/terms/${uuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name TermsCursorList
     * @summary Retrieve all search terms
     * @request GET:/api/terms/cursor
     * @secure
     */
    termsCursorList: (
      query?: {
        /** @format uuid */
        after?: string;
        /**
         * @format int32
         * @default 50
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackedSearchTerms[], void>({
        path: `/api/terms/cursor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Terms
     * @name TermsSearchCreate
     * @summary Advanced search for terms
     * @request POST:/api/terms/search
     * @secure
     */
    termsSearchCreate: (data: DynamicSearch, params: RequestParams = {}) =>
      this.request<TrackedSearchTerms[], void>({
        path: `/api/terms/search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Url
     * @name DeleteApi
     * @summary Delete an URL
     * @request DELETE:/api/url
     * @secure
     */
    deleteApi: (
      query?: {
        /**
         * The unique GUID for the URL
         * @format uuid
         */
        uuid?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/api/url`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Url
     * @name GetApi
     * @summary Retrieve all URLs
     * @request GET:/api/url
     * @secure
     */
    getApi: (
      query?: {
        /**
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * @format int32
         * @default 50
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackedUrls[], void>({
        path: `/api/url`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Url
     * @name PostApi
     * @summary Create a URL
     * @request POST:/api/url
     * @secure
     */
    postApi: (data: TrackedUrls, params: RequestParams = {}) =>
      this.request<TrackedUrls, void>({
        path: `/api/url`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Url
     * @name GetApi2
     * @summary Get a specific URL
     * @request GET:/api/url/{uuid}
     * @originalName getApi
     * @duplicate
     * @secure
     */
    getApi2: (uuid: string, params: RequestParams = {}) =>
      this.request<TrackedUrls, void>({
        path: `/api/url/${uuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Url
     * @name PutApi
     * @summary Update an URL object
     * @request PUT:/api/url/{uuid}
     * @secure
     */
    putApi: (uuid: string, data: TrackedUrls, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/url/${uuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Url
     * @name UrlCursorList
     * @summary Retrieve all URLs
     * @request GET:/api/url/cursor
     * @secure
     */
    urlCursorList: (
      query?: {
        /** @format uuid */
        after?: string;
        /**
         * @format int32
         * @default 50
         */
        size?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TrackedUrls[], void>({
        path: `/api/url/cursor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Url
     * @name UrlSearchCreate
     * @summary Advanced search for urls
     * @request POST:/api/url/search
     * @secure
     */
    urlSearchCreate: (data: DynamicSearch, params: RequestParams = {}) =>
      this.request<TrackedUrls[], void>({
        path: `/api/url/search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
