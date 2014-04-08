Rocks-See-Server
================

A web proxy that can run on a heroku dyno.

Install
-------
Install node
Clone this repo.
npm install

Test Locally
------------
```sh
PROXY_AUTH_USERNAME=user PROXY_AUTH_PASSWORD=pass node server.js
curl --proxy http://user:pass@localhost:8080 'https://google.com'
```

Deploy
------
```sh
heroku create
git push heroku master
heroku ps:scale web=1
```


*“The story so far: In the beginning the Universe was created. This has made
a lot of people very angry and been widely regarded as a bad move.”*

― **Douglas Adams**, The Restaurant at the End of the Universe
