import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class NgClient {
  public token: string;
  public address = 'https://1backend.com:9993';
  constructor(private http: HttpClient) {}

  // Call enables you to access any endpoint of any service on 1Backend
  call<R>(
    author: string,
    projectName: string,
    method: string,
    path: string,
    input: any
  ): Promise<R> {
    return new Promise<R>((resolve, reject) => {
      let params = new HttpParams();
      for (let key in input) {
        let value = input[key];
        params = params.set(key, value);
      }
      if (method.toLowerCase() === 'get') {
        this.http.get<R>(this.address + path, {params: params}).subscribe((data: R) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      }
      if (method.toLowerCase() === 'post') {
        this.http.post<R>(this.address + path, input).subscribe((data: R) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      }
      if (method.toLowerCase() === 'put') {
        this.http.put<R>(this.address + path, input).subscribe((data: R) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      }
      if (method.toLowerCase() === 'get') {
        this.http.delete<R>(this.address + path, {params: params}).subscribe((data: R) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      }
    });
  }
}
