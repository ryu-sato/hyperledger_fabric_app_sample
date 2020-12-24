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

