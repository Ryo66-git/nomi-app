# GitHubへのプッシュ手順

GitHubのnomi-appリポジトリにフォルダを表示させるには、以下の手順を実行してください。

## 1. リモートリポジトリの設定

ターミナルで以下のコマンドを実行してください：

```bash
cd /Users/shimamuraryo/nomi-app

# リモートリポジトリを追加（GitHubのユーザー名に合わせて変更してください）
git remote add origin https://github.com/shimamuraryo/nomi-app.git

# または、既にリモートが設定されている場合は削除してから再追加
git remote remove origin
git remote add origin https://github.com/shimamuraryo/nomi-app.git
```

## 2. リモートリポジトリの確認

```bash
git remote -v
```

以下のように表示されれば成功です：
```
origin  https://github.com/shimamuraryo/nomi-app.git (fetch)
origin  https://github.com/shimamuraryo/nomi-app.git (push)
```

## 3. GitHubにプッシュ

```bash
# メインブランチをプッシュ
git push -u origin main
```

初回プッシュの場合は、GitHubの認証情報を求められる場合があります。

## 4. 問題が発生した場合

### リモートリポジトリが既に存在する場合

GitHubで既にリポジトリが作成されている場合、以下のコマンドで強制プッシュ（注意：既存の内容が上書きされます）：

```bash
git push -u origin main --force
```

### 認証エラーが発生する場合

GitHubのPersonal Access Tokenを使用する必要がある場合があります：

```bash
# HTTPSの代わりにSSHを使用する場合
git remote set-url origin git@github.com:shimamuraryo/nomi-app.git
git push -u origin main
```

### ブランチ名が異なる場合

GitHubのデフォルトブランチが`master`の場合：

```bash
git push -u origin main:master
```

または、ローカルのブランチ名を変更：

```bash
git branch -M master
git push -u origin master
```

## 5. 確認

プッシュが成功したら、GitHubのリポジトリページをリロードして、フォルダとファイルが表示されることを確認してください。

