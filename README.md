# About

This is the sourcode of my website [jannkias.com](https://jannkias.com/). You can start the developer server with:

```bash
yarn dev
```

The server will be open at port 3000 on your localhost (http://localhost:3000). To build a optimized version you can run:

```bash
yarn build
```

Afterwards you can run the optimized build with:

```bash
yarn start PORT
```

Replace the PORT with the port you want. In this repo is also a Dockerfile you can run, to build a Docker container. Note that you have to give the Container a port when you start it.

# Env

As you maybe notice, the .env.local file is missing. You have to make your own secret keys to run the contact form.

``` bash
H_CAPTCHA_KEY=""
SEND_GRID_KEY=""
FROM_EMAIL=""
TO_EMAIL=""
```
And you have to change your Sitekey in the contact.js file to your own Sitekey
