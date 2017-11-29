import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class NgClient {
  // the token acquired from 1backend.com under your profile (eg. https://1backend.com/your-name)
  public token: string;
  // the path (eg. "/crufter/test-service/endpoint-path") will be appended to this
  public address = 'https://1backend.com:9993/app';
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
      const fullPath = author + "/" + projectName + "/" + path;
      if (method.toLowerCase() === 'get') {
        this.http.get<R>(this.address + fullPath, {params: params}).subscribe((data: R) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      }
      if (method.toLowerCase() === 'post') {
        this.http.post<R>(this.address + fullPath, input).subscribe((data: R) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      }
      if (method.toLowerCase() === 'put') {
        this.http.put<R>(this.address + fullPath, input).subscribe((data: R) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      }
      if (method.toLowerCase() === 'get') {
        this.http.delete<R>(this.address + fullPath, {params: params}).subscribe((data: R) => {
          resolve(data);
        }, error => {
          reject(error);
        });
      }
    });
  }
}
