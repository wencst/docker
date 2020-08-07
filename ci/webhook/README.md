## Tools include

* git
* docker 17.05.0-ce
* node v14.7.0
* git-webhook-ci 1.0.0

## Usage

Start docker container like below:

```
docker run -d -p 8081:8081  wencst/webhook
```

then you can config your github webhook use the token `webhook_token` as default.

* Change git type to other git server

We use github as default.

If you use gitlab ,then

```
-e HOOKTYPE=gitlab
```

If you use gitee , then

```
-e HOOKTYPE=gitee
```

* Use docker in container

```
-v /var/run/docker.sock:/var/run/docker.sock
```

* Use git in container

You should add private key into `/root/.ssh/id_rsa` .

## Change hook script
* Change shell

You should add your shell script named `execShell.sh` into `/usr/local/web/`.

* change JS script

You should add your js script named `webhook.js` into `/usr/local/web/`.
