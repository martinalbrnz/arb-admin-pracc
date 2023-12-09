import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { HttpOptions } from '@interfaces/http-options.interface'
import { PaginationResponse } from '@interfaces/paginated-response.interface'
import { Observable, catchError, of } from 'rxjs'
import { ApiRoutes } from 'src/app/constants/apiRoutes'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _http = inject(HttpClient)

  /**
   * Retrieves a paginated list of a given resource
   * @param endpoint One of the api resources, enumerated
   * @param options params, extra headers or http options
   * @returns an object with paginated data array and a pagination info object
   */
  getResource<T>(
    endpoint: ApiRoutes,
    options?: Partial<HttpOptions>
  ): Observable<PaginationResponse<T>> {
    return this._http
      .get<PaginationResponse<T>>(
        `${environment.API_URL}/${endpoint}`,
        options
      )
      .pipe(
        catchError(err => {
          console.error(`[GET_${endpoint}]: ${err}`)
          return of()
        })
      )
  }

  /**
   * Retrieve a specific object according to id and resource
   * @param endpoint One of the api resources, enumerated
   * @param id Object's id
   * @param options params, extra headers or http options
   * @returns an object with the specified type
   */
  getOne<T>(
    endpoint: ApiRoutes,
    id: string,
    options?: Partial<HttpOptions>
  ): Observable<PaginationResponse<T>> {
    return this._http
      .get<PaginationResponse<T>>(
        `${environment.API_URL}/${endpoint}/${id}`,
        options
      )
      .pipe(
        catchError(err => {
          console.error(`[GET_ONE_${endpoint}]: ${err}`)
          return of()
        })
      )
  }

  /**
   * Create a new resource with a given type
   * @param endpoint One of the api resources enumerated
   * @param body Object that satisfies the DTO or T interface, used to create a new db entry
   * @param options params, extra headers or http options
   * @returns The created object with complete data
   */
  createOne<T, DTO>(
    endpoint: ApiRoutes,
    body: DTO | T,
    options?: Partial<HttpOptions>
  ): Observable<T> {
    return this._http
      .post<T>(
        `${environment.API_URL}/${endpoint}`,
        body,
        options
      )
      .pipe(
        catchError(err => {
          console.error(`[POST_${endpoint}]: ${err}`)
          return of()
        })
      )
  }

  /**
   * Edit one or more fields of an object
   * @param endpoint One of the api resources enumerated
   * @param body Object that satisfies the Partial<T> interface, used to create a new db entry
   * @param id Object's id
   * @param options params, extra headers or http options
   * @returns The new version of the edited object
   */
  editOne<T>(
    endpoint: ApiRoutes,
    body: Partial<T>,
    id: string,
    options?: Partial<HttpOptions>
  ): Observable<T> {
    return this._http
      .patch<T>(
        `${environment.API_URL}/${endpoint}/${id}`,
        body,
        options
      )
      .pipe(
        catchError(err => {
          console.error(`[PATCH_${endpoint}]: ${err}`)
          return of()
        })
      )
  }

  /**
   * Deletes a given object by id
   * @param endpoint One of the api resources enumerated
   * @param id Object's id
   * @param options params, extra headers or http options
   * @returns The deleted object
   */
  deleteOne(
    endpoint: ApiRoutes,
    id: string,
    options?: Partial<HttpOptions>
  ): Observable<unknown> {
    return this._http.delete(
      `${environment.API_URL}/${endpoint}/${id}`,
      options
    ).pipe(
      catchError(err => {
        console.error(`[DELETE_${endpoint}]: ${err}`)
        return of()
      })
    )
  }
}
