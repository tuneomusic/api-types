<h1 align="center">Tuneo API types</h1>
<p align="center">Official package for Tuneo API types. Always ahead.</p>

```bash
bun add @tuneo/types
npm install @tuneo/types
```

<h2 align="center">Using Tuneo API Types</h2>

Our types are always prefixed with `REST` or `API`. `REST` for any type that comes directly from a request and always have the method after the `REST` prefix, and `API` for any type from the API.

```ts
import type { RESTPatchUpdateCurrentUser, RESTPatchUpdateCurrentUserJSONBody } from '@tuneo/types'

function updateUser(data: RESTPatchUpdateCurrentUserJSONBody): RESTPatchUpdateCurrentUser {
    // ...
}
```

Import types with the suffix `JSONBody` when you need to type a route the needs a body in the request.

Types exported as `never` are when the API response is NO CONTENT.
