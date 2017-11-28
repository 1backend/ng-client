1Backend Angular Client
===

This package is can be used directly to call any service 1Backend from any Angular 2 package.

Ideally, you would use the generated type safe clients that's tailored exactly to the API of your service, but this is here to rely on in any case.

Installation:
```
npm install --save @1backend/ng-client
```

Usage
```typescript
import { Component, OnInit } from '@angular/core';
import { NgClient } from '@1backend/ng-client';

// This is a working test token.
// You can get your own tokens from 1Backend from your profile page (eg. https://1backend.com/your-name)
const token = '1c61722e-9e0b-461b-9e27-193464b081f9';

@Component({
  selector: 'app-example',
  template: `Response: {{response}} Error: {{error}}`,
  providers: [NgClient]
})
export class ExampleComponent implements OnInit {
  response: string;
  error: any;

  constructor(private ngClient: NgClient) {
    this.ngClient.call<string>('crufter', 'test', 'get', '/sql-example', {}).then(rsp => {
        this.response = rsp;
      })
      .catch(err => {
        this.error = err;
      });
  }

  ngOnInit() {}
}
```