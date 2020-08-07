const gitWebhook = require('git-webhook-ci');
const { spawn } = require('child_process');
const config = {
  "secret": "webhook_token",
//  "cmd": "./execShell.sh github"
cmd: (result, opt, ref) => {
  const e1 = spawn('./execShell.sh',[ref,result,opt ],opt);
}
};
/*
config provider default is github.
port default 8081
*/
const config_gitee = {
"secret": "webhook_token",
"path": "/webhook",
"provider": "gitee",
//"cmd": "./execShell.sh gitee"
cmd: (result, opt, ref) => {
  const e1 = spawn('./execShell.sh',[ref,result,opt ],opt);
}
}
const config_gitlab = {
"secret": "webhook_token",
"path": "/webhook",
"provider": "gitlab",
//"cmd": "./execShell.sh gitlab"
cmd: (result, opt, ref) => {
  const e1 = spawn('./execShell.sh',[ref,result,opt ],opt);
}
}
const config_wechat = {
  secret: 'webhook_token',
"path": "/webhook",
  provider: 'wechat',
  inited: false, // this is default
//"cmd": "./execShell.sh wechat"
cmd: (result, opt, ref) => {
  const e1 = spawn('./execShell.sh',[ref,result,opt ],opt);
}
}

if (process.env.HOOKTYPE === 'github'){
  gitWebhook(config);
} else if (process.env.HOOKTYPE === 'gitee'){
  gitWebhook(config_gitee);
} else if (process.env.HOOKTYPE === 'gitlab'){
  gitWebhook(config_gitlab);
} else if (process.env.HOOKTYPE === 'wechat'){
  gitWebhook(config_wechat);
} else {
  gitWebhook(config);
}
