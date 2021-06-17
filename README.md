# About

This is the sourcecide from my website [jannkias.com](https://jannkias.com/). You can start the developer server with:

``` bash
npm run dev
```

The server will be open at port 3000 on your localhost (http://localhost:3000). To build a optimized version you can run:

``` bash
npm run build
```

Afterwards you can run the optimized build with:

``` bash
npm run start -p PORT
```

Replace the PORT with the port you want. In this repo is also Dockerfile you can run, to build a Docker container. Note that you have to give the Container a port when you start it.

# Env

As you maybe notice, the .env.local file is missing. You have to make your own secret keys to run the contact form.

``` bash
H_CAPTCHA_KEY=""
SEND_GRID_KEY=""
FROM_EMAIL=""
TO_EMAIL=""
```

# To Do

## Home

  - [ ] Change Language to English
  - [ ] Change Pictures from Projects
  - [ ] Open CS Repo

## Tools
  - [ ] Adding JSON Tool
  - [ ] Adding Hash Tool