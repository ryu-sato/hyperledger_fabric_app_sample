ryu-sato/hyperledger_fabric_app_sample は Hyperledger fabric のアプリケーションサンプルです。

# アプリケーションを実行する

実行する chaincode は [ryu-sato/hyperledger_fabric_chaincode_sample](https://github.com/ryu-sato/hyperledger_fabric_chaincode_sample) である前提とします。
別の chaincode を実行する場合は index.js 内の connectionProfile と wallet を transaction に合わせて変更してください。

1. chaincode を実行する
    * [ryu-sato/hyperledger_fabric_chaincode_sample](https://github.com/ryu-sato/hyperledger_fabric_chaincode_sample) を参考にして chaincode を実行する
2. 依存関係を解決する
```bash
$ yarn
```
3. アプリケーションを実行する
```bash
$ yarn start
```

# wallet を更新する

msp に保存された証明書と秘密鍵を wallet に登録する方法です。
(例として ryu-sato/hyperledger_fabric_app_sample に保存された admin ユーザーを wallet に登録する方法を紹介します)

```bash
$ export IDENTITY_CERTIFICATE=$(cat ryu-sato/hyperledger_fabric_chaincode_sample/msp/admincerts/admincert.pem)
$ export IDENTITY_PRIVATE_KEY=$(cat ryu-sato/hyperledger_fabric_chaincode_sample/msp/keystore/key.pem)
$ export MSP_ID=DEFAULT
$ export IDENTITY_NAME=admin
$ yarn run wallet:import
```

使用している環境変数名は次のとおりです。

| 環境変数名           | 説明              | Default値                     |
| -------------------- | ----------------- | ----------------------------- |
| IDENTITY_CERTIFICATE | 証明書 (X509形式) | "INVALID_CERT" (無効な証明書) |
| IDENTITY_PRIVATE_KEY | 秘密鍵            | "INVALID_KEY" (無効な秘密鍵)  |
| MSP_ID               | MSPのID           | "DEFAULT"                     |
| IDENTITY_NAME        | 識別子名          | "user"                        |
