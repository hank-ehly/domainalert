# domainalert

An application that sends a notification when a domain name of ones choice is available for purchase.

### Models

#### users
#### domains
- fields
  - name
- CRUD
  - created after search
#### watched_domains
- fields
  - user_id cascade delete
  - domain_id cascade delete
- CRUD
  - created after search
  - read when showing user which domains they’re watching
  - read when checking domain name availability
  - deleted when user deletes account
  - deleted when user stops watching domain

### Todo

- Allow API users to specify response fields

### License

The MIT License (MIT)

Copyright (c) 2018 Hank Ehly

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
