# RPC.TokenService

Takes an Command Packet and HTML and Inject Tokens into the vfVars in the html. 


## Quick Start

To run the service locally:

```bash
npm install
npm start -- --debug
```

For automatic code reloading in development:

```bash
npm install -g nodemon
nodemon -- --debug
```

To run on __AMQP__, omit the ```--debug``` option from either command.

<sup>_Note: You will need a running [RabbitMQ and ETCD2](https://github.com/nsnsolutions/rpcfw.env) environment._</sup>

# Interface

This section outlines the details you will need to use this service.

- [Methods](#methods)
- [Representations](#representations)

## Methods

- [Tokenize Document (v1)](#tokenize-document-v1) - Fill document with appropriate token values.
- [Tokenize Document By URL (v1)](#tokenize-document-by-url-v1) - Fill document referenced by the url with appropriate token values.
- [Tokenize Document (v2)](#tokenize-document-v2) - Fill document with appropriate token values.
- [Tokenize Document By URL (v2)](#tokenize-document-by-url-v2) - Fill document referenced by the url with appropriate token values.
- [Get Manifest (v2)](#get-manifest-v2) - Identify the tokens used in the given document.
- [Get Manifest By URL (v2)](#get-manifest-by-url-v2) - Identify the tokens used in the given document.


### Tokenize Document (v1)

Fill document with appropriate token values.

#### RPC Execution

- Role: tokenService.Pub
- Cmd: tokenize.v1

```javascript
var args = { ... }
seneca.act('role:tokenService.Pub,cmd:tokenize.v1', args, (err, dat) => {
    /* Handle result */
});
```

#### HTTP Execution

- Service Name: tokenService
- Method Name: tokenize
- Version: v1

```
POST /amqp/exec/tokenService/tokenize?version=v1 HTTP/1.1
Host: devel.rpc.velma.com
Content-Type: application/json
x-repr-format: RPC
Cache-Control: no-cache

{ ... }
```

#### Arguments

This method accepts the following arguments.

| Param     | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| cp | Object | N/A | A json object used to provided data for the template. |
| html | String | N/A | An html template with VFS Variables that will be rendered. |
| encoding | String | utf8 | Optional: The encoding used to transfer the html template. |
| token | String | N/A | The token data. |

#### Returns

This method returns the following information.

- [Error Response (v1)](#error-response-v1)
- [Tokenize (v1)](#tokenize-v1)

### Tokenize Document By URL (v1)

Fill document referenced by the url with appropriate token values.

#### RPC Execution

- Role: tokenService.Pub
- Cmd: tokenizeUrl.v1

```javascript
var args = { ... }
seneca.act('role:tokenService.Pub,cmd:tokenizeUrl.v1', args, (err, dat) => {
    /* Handle result */
});
```

#### HTTP Execution

- Service Name: tokenService
- Method Name: tokenizeUrl
- Version: v1

```
POST /amqp/exec/tokenService/tokenizeUrl?version=v1 HTTP/1.1
Host: devel.rpc.velma.com
Content-Type: application/json
x-repr-format: RPC
Cache-Control: no-cache

{ ... }
```

#### Arguments

This method accepts the following arguments.

| Param     | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| cp | Object | N/A | A json object used to provided data for the template. |
| url | String | N/A | A http resource locator pointing to a valid VFS Template. |
| token | String | N/A | The token data. |

#### Returns

This method returns the following information.

- [Error Response (v1)](#error-response-v1)
- [Tokenize (v1)](#tokenize-v1)

### Tokenize Document (v2)

Fill document with appropriate token values.

#### RPC Execution

- Role: tokenService.Pub
- Cmd: tokenize.v2

```javascript
var args = { ... }
seneca.act('role:tokenService.Pub,cmd:tokenize.v2', args, (err, dat) => {
    /* Handle result */
});
```

#### HTTP Execution

- Service Name: tokenService
- Method Name: tokenize
- Version: v2

```
POST /amqp/exec/tokenService/tokenize?version=v2 HTTP/1.1
Host: devel.rpc.velma.com
Content-Type: application/json
x-repr-format: RPC
Cache-Control: no-cache

{ ... }
```

#### Arguments

This method accepts the following arguments.

| Param     | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| cp | Object | N/A | A json object used to provided data for the template. |
| html | String | N/A | An html template with VFS Variables that will be rendered. |
| encoding | String | utf8 | Optional: The encoding used to transfer the html template. |
| token | String | N/A | The token data. |

#### Returns

This method returns the following information.

- [Error Response (v1)](#error-response-v1)
- [Tokenize (v2)](#tokenize-v2)

### Tokenize Document By URL (v2)

Fill document referenced by the url with appropriate token values.

#### RPC Execution

- Role: tokenService.Pub
- Cmd: tokenizeUrl.v2

```javascript
var args = { ... }
seneca.act('role:tokenService.Pub,cmd:tokenizeUrl.v2', args, (err, dat) => {
    /* Handle result */
});
```

#### HTTP Execution

- Service Name: tokenService
- Method Name: tokenizeUrl
- Version: v2

```
POST /amqp/exec/tokenService/tokenizeUrl?version=v2 HTTP/1.1
Host: devel.rpc.velma.com
Content-Type: application/json
x-repr-format: RPC
Cache-Control: no-cache

{ ... }
```

#### Arguments

This method accepts the following arguments.

| Param     | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| cp | Object | N/A | A json object used to provided data for the template. |
| url | String | N/A | A http resource locator pointing to a valid VFS Template. |
| token | String | N/A | The token data. |

#### Returns

This method returns the following information.

- [Error Response (v1)](#error-response-v1)
- [Tokenize (v2)](#tokenize-v2)

### Get Manifest (v2)

Identify the tokens used in the given document.

#### RPC Execution

- Role: tokenService.Pub
- Cmd: getManifest.v2

```javascript
var args = { ... }
seneca.act('role:tokenService.Pub,cmd:getManifest.v2', args, (err, dat) => {
    /* Handle result */
});
```

#### HTTP Execution

- Service Name: tokenService
- Method Name: getManifest
- Version: v2

```
POST /amqp/exec/tokenService/getManifest?version=v2 HTTP/1.1
Host: devel.rpc.velma.com
Content-Type: application/json
x-repr-format: RPC
Cache-Control: no-cache

{ ... }
```

#### Arguments

This method accepts the following arguments.

| Param     | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| html | String | N/A | An html template with VFS Variables that will be read. |
| encoding | String | utf8 | Optional: The encoding used to transfer the html template. |
| token | String | N/A | The token data. |

#### Returns

This method returns the following information.

- [Error Response (v1)](#error-response-v1)
- [Manifest List (v1)](#manifest list-v1)

### Get Manifest By URL (v2)

Identify the tokens used in the given document.

#### RPC Execution

- Role: tokenService.Pub
- Cmd: getManifestByUrl.v2

```javascript
var args = { ... }
seneca.act('role:tokenService.Pub,cmd:getManifestByUrl.v2', args, (err, dat) => {
    /* Handle result */
});
```

#### HTTP Execution

- Service Name: tokenService
- Method Name: getManifestByUrl
- Version: v2

```
POST /amqp/exec/tokenService/getManifestByUrl?version=v2 HTTP/1.1
Host: devel.rpc.velma.com
Content-Type: application/json
x-repr-format: RPC
Cache-Control: no-cache

{ ... }
```

#### Arguments

This method accepts the following arguments.

| Param     | Type   | Default | Description |
| --------- | ------ | ------- | ----------- |
| url | String | N/A | A http resource locator pointing to a valid VFS Template. |
| token | String | N/A | The token data. |

#### Returns

This method returns the following information.

- [Error Response (v1)](#error-response-v1)
- [Manifest List (v1)](#manifest list-v1)


## Representations

All response sent by this service will differ depending on the protocal used
and the control headers set on the request. You can read more about how this
output is create in the [RPC Interface Response Model](https://github.com/nsnsolutions/RPC.Interface#response-object)
documentation.

Excluding [Error Response (v1)](#error-response-v1), this documentation will
only show the result body details.

- [Error Response (v1)](#error-response-v1)
- [Tokenize (v1)] (#tokenize-v1)
- [Tokenize (v2)] (#tokenize-v2)
- [Meta (v1)] (#meta-v1)
- [Manifest List (v1)] (#manifest-list-v1)
- [Manifest Item (v1)] (#manifest-item-v1)

### Error Response (v1)

Represents an execution failure. Details about the failure are placed in
`message` and a numeric value is placed in `code` that is specific to the type
of error.

This response uses the standard
[rpcfw](https://github.com/nsnsolutions/rpcfw/blob/devel/README.md#errors)
error model and codes.

```json
{
    "hasError": true,
    "code": 000,
    "message": "Description of error"
}
```

For more information on workflow error codes:
[RPC-Utils.Executor](https://github.com/nsnsolutions/RPC.Utils/blob/devel/README.md#executor)

<sup>_Note: This detail level is not always returnes. Please see the [RPC Interface Response Model](https://github.com/nsnsolutions/RPC.Interface#response-object) documentation for more information._</sup>


### Tokenize (v1)

Represents a tokenized document with details as to the success of the 
tokenization operation.


| Field | Type | Description |
| ----- | ---- | ----------- |
| hasError | Boolean | Boolean value indicating if the operation has any errors. |
| result | String | The filled and encoded HTML result of the template tokenization. |
| message | String | A user-friendly message indicating if the operation has errors. |
| encoding | String | Identifies the encoding of _result_. |
| meta | [Meta (v1)](#meta-v1) | Details about the tokenization operation. |


### Tokenize (v2)

Represents a tokenized document with details as to the success of the 
tokenization operation.


| Field | Type | Description |
| ----- | ---- | ----------- |
| html | String | The filled and encoded HTML result of the template tokenization. |
| encoding | String | Identifies the encoding of _result_. |
| missing | Array | A list of all tokens that could not be found during tokenization. |
| message | String | String description of the operations completed durning tokenization. |


### Meta (v1)

Details about a tokenization operation.


| Field | Type | Description |
| ----- | ---- | ----------- |
| missing | Array | A list of all tokens that could not be found during tokenization. |
| message | String | String description of the operations completed durning tokenization. |


### Manifest List (v1)

Represents a list of required tokens to populate the given document.

| Field | Type | Description |
| ----- | ---- | ----------- |
| _ROOT_ | Array | The result set is returned as an array of [Manifest Items (v1)](#manifest-item-v1). |


### Manifest Item (v1)

Represents a single path refrence in a command packet that is epxected
by the given document.


| Field | Type | Description |
| ----- | ---- | ----------- |
| path | String | The path referenced in the command packet that would be used to populate data. |
| type | String | The expected data used to populate the node. e.g. Email, text, url. |
| refs | Array | A list of references in the given document that used this token. |



---

<sup>_This documentation was generated by Ian's handy template engine. If you find errors, please let hime know._</sup>