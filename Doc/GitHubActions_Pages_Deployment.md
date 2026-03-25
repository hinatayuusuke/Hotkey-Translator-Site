# GitHub Actions でこのサイトを公開する手順

## 概要
このリポジトリは、`site/` 配下の Vite サイトを GitHub Pages へ公開する構成です。  
公開ワークフロー自体はすでに [`deploy-pages.yml`](../.github/workflows/deploy-pages.yml) に入っているため、主な作業は **GitHub 側で Pages を GitHub Actions に切り替えること** と **`main` へ push すること** です。

## 前提
- GitHub リポジトリが `hinatayuusuke/Hotkey-Translator-Site` として存在している
- GitHub Pages の公開先をこのリポジトリで使う
- `site/` の依存関係が `npm ci` で解決できる

## このリポの現在設定
- ワークフロー: [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml)
- ビルド対象: `site/`
- 出力先: `site/dist`
- 公開ブランチ条件: `main` への push、または手動実行
- 公開 URL 想定: `https://hinatayuusuke.github.io/Hotkey-Translator-Site/`

`site/vite.config.ts` では、本番時の `base` を `/Hotkey-Translator-Site/` に固定しています。  
そのため、この手順は **GitHub Pages の project site** として公開する前提です。

## 手順

### 1. リポジトリの Pages 設定を開く
GitHub で対象リポジトリを開き、以下へ進みます。

`Settings` → `Pages`

### 2. Source を GitHub Actions にする
`Build and deployment` セクションで以下を設定します。

- `Source`: `GitHub Actions`

ここが `Deploy from a branch` のままだと、既存の workflow では公開されません。

### 3. `main` ブランチへ変更を push する
このリポジトリの公開 workflow は、`main` への push をトリガーに動きます。

```powershell
git add .
git commit -m "docs: add GitHub Pages deployment guide"
git push origin main
```

コード変更がなくても、GitHub の Actions 画面から `Deploy GitHub Pages` を手動実行できます。

### 4. Actions の実行結果を確認する
GitHub の以下を開きます。

`Actions` → `Deploy GitHub Pages`

正常系では、workflow が次の順で進みます。

1. `actions/checkout@v4`
2. `actions/setup-node@v4`
3. `npm ci`
4. `npm run build`
5. `actions/configure-pages@v5`
6. `actions/upload-pages-artifact@v3`
7. `actions/deploy-pages@v4`

### 5. 公開 URL を確認する
デプロイ成功後、以下へアクセスします。

`https://hinatayuusuke.github.io/Hotkey-Translator-Site/`

確認ポイント:
- 画面が 404 にならない
- CSS と JS が読み込まれている
- 画像が欠けていない
- Release / README へのリンク先が正しい

## 手動実行する場合
ワークフローには `workflow_dispatch` が入っているため、GitHub UI から手動実行できます。

手順:
1. `Actions` を開く
2. `Deploy GitHub Pages` を選ぶ
3. `Run workflow` を押す

## リポジトリ名を変える場合の修正箇所
このサイトはリポジトリ名を URL パスに使っています。  
リポジトリ名を変えたら、少なくとも次を合わせて修正してください。

- [`site/vite.config.ts`](../site/vite.config.ts)
  - `repositoryName`
- [`site/src/data/siteContent.ts`](../site/src/data/siteContent.ts)
  - `repository.owner`
  - `repository.name`

`vite.config.ts` の `base` と実際の Pages URL がずれると、公開後に CSS / JS が 404 になります。

## ローカル確認
公開前に最低限、`site/` でビルドが通ることを確認します。

```powershell
cd site
npm ci
npm run build
```

## トラブルシュート

### Pages が公開されない
- `Settings` → `Pages` の `Source` が `GitHub Actions` になっているか確認する
- `main` へ push しているか確認する
- `Actions` タブで `Deploy GitHub Pages` が失敗していないか確認する

### 画面は出るが CSS / JS が 404 になる
- [`site/vite.config.ts`](../site/vite.config.ts) の `repositoryName` と GitHub のリポジトリ名が一致しているか確認する
- 公開 URL が project site になっているか確認する

### リンク先が別リポジトリを向く
- [`site/src/data/siteContent.ts`](../site/src/data/siteContent.ts) の `repository.owner` と `repository.name` を見直す

## 補足
- この workflow は `gh-pages` ブランチへ手動配置する方式ではありません
- Pages 用 artifact を Actions から直接 deploy する構成です
- まずは `main` を公開ソースとして固定し、複雑なフォールバックは入れない運用にしています
