1Backend Angular Client
===

This package can be used to call any service on 1Backend.

Please also check the typesafe autogenerated APIs for your 1Backend services, you might find them more pleasant to use.

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
    this.ngClient.token = token;
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