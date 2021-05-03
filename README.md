# js_call_ifttt_webhook_api
IFTTTのwebHook APIをコールするリポジトリ

## 使い方

### 前提

- nodeがインストールされていること(v12.22.1推奨)
- npmがインストールされていること(v6.14.12推奨)

### 準備(IFTTT上で行う)

1. IFTTTのアカウントを作成し、webhookをトリガーにしたアプレットを作成する
1. webhookのサービスをクリックし、DocumentsページにあるAPIキーをコピーする

### 準備(このリポジトリのディレクトリ上で行う)

1. conf.jsonのwebhookApiKeyにコピーしたAPIキーを入力する
1. conf.jsonのexecuteEventNameに1で作成したときに入力したイベント名を入力する

### 実行(このリポジトリのディレクトリ上で行う)

1. コマンドラインで以下を入力する
  ```
  npm run start
  ```