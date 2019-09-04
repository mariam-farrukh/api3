# Notes

## Steps

- Create repo
- Clone repo
- cd into folder
- npm init -y
- npx gitignore node or npm i -g gitignore and then gitignore node
- git add .
- git commit -m "message"
- git push -u origin master (same as --set-upstream)

### Steps to get Code snipets
- File--> Preferences --> code snipets and then search for js and add in this code that's in js.json.

## React Apps
- Are broken up into components
- Express APIs are broken down into Express Routers

### Client server architecture
[client] <network (JSON)> [api] <> [data source]

### Request/response cycle
- Client makes a request to a server
- Server produces a response and sends it to the client

[client] > request > [mw > mw > mw] > responds [client]

## Middleware
- can see the request and do something with the information from the request
- can stop the request and procude a response (just like a route handler!)
    - Route handlers are also middleware
- can do nothing
- can do the same with the respone object
- **can modify the request or response object**
### Three Types of MiddleWare
-  built-in: not need to npm install
- Third party: need ot install it using yarn or npm
- Custom: we build it

### How middleware can be used:
- globally with server.use()
- 
