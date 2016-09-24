# 微信应用号官方IDE破解

helper for https://github.com/gavinkwoe/weapp-ide-crack

## Install

```
$ [sudo] npm i -g weide
```

## Usages

- 下载微信web开发者工具0.9(百度: https://pan.baidu.com/s/1pLxqFzH （密码: bwt9）) 位置 /Applications/微信web开发者工具.app/
- 下载微信web开发者工具0.7(百度: https://pan.baidu.com/s/1pLTKIqJ （密码: iswg）) 位置 /Applications/微信web开发者工具0.7.app/

如果开发工具安装目录是/Applications/微信web开发者工具.app/，无需配置，一条命令即可

```
$ weide
```

否则需要配置环境变量

```
$ export WECHAT_IDE=/Applications/微信web开发者工具0.9.app/
$ weide
```

## 一键美化压缩js代码

会读取默认安装位置，或环境变量里的WECHAT_IDE下的所有js都会梅花

```
$ allb
```

## 调试

```
$ DEBUG=weide weide
```