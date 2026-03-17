# Hotkey Translator Site Content Placeholder Guide

## 1. 概要
このドキュメントは、現在の GitHub Pages 用サイトに残っている「仮置きの内容」と、「次に実際に入れるべき情報」を整理したものです。

目的は次の 2 点です。

- サイトを見た人が「何のアプリか」「どう入れるか」を迷わず理解できるようにする
- 実装ファイルを開いたときに、どこを差し替えればよいかをすぐ判断できるようにする

## 2. 先に結論
今のサイトは、見た目と構成は公開できる状態です。  
ただし、内容面ではまだ以下が不足しています。

- 実際のアプリ画面スクリーンショット
- 実配布パッケージ名に合わせた導入手順
- 最低限必要なものと、上級機能でだけ必要なものの区別
- 利用者目線の「何ができるのか」の言い換え
- 配布時の注意事項を短く読める形での整理

## 3. 主な編集ポイント
実際の文言やリンクは、主に以下を編集します。

- `site/src/data/siteContent.ts`
- `site/src/App.tsx`
- `site/src/assets/hero.png`
- 必要になったら `site/public/` 配下に画像を追加

日本語で考えるなら、`site/src/data/siteContent.ts` は「サイトに出す文章やリンクの台本」です。  
最初にここを更新すると、見出しやカードの差し替えがやりやすいです。

## 4. プレースホルダー一覧

### 4.1 Hero 画像
対象:

- `site/src/assets/hero.png`

現状:

- 抽象的なプロジェクトマーク画像
- アプリの実画面ではない

問題:

- 初見ユーザーが「どんな見た目のアプリか」を理解できない
- 配布ページとしての説得力が弱い

入れるべき内容:

- 実際のオーバーレイ表示中のスクリーンショット
- 可能なら以下のどれか 1 枚
- キャプチャ対象のウィンドウ + 翻訳オーバーレイ
- ROI 選択中の画面
- 設定画面 + 実行結果が 1 枚で分かる合成画像

日本語メモ:

- Hero は「おしゃれな画像」より「何のアプリかが一目で分かる画像」を優先した方がよいです。
- まずは 1 枚で十分です。複数の凝った素材は後回しで構いません。

### 4.2 Hero キャッチコピー
対象:

- `site/src/App.tsx`
- `site/src/data/siteContent.ts`

現状:

- 技術方針寄りの表現が多い
- 「Release-first onboarding」や「Ship the app page your release process actually needs.」は開発者視点

問題:

- 一般ユーザーには価値が伝わりにくい
- 「何が便利なのか」が先に来ていない

入れるべき内容:

- 利用者の成果が分かる 1 行説明
- 例:
- Read on-screen Japanese text without leaving your game or app.
- Capture, OCR, translate, and read the result as an overlay with hotkeys.

日本語メモ:

- Hero の主見出しは「開発プロセス」ではなく「利用価値」に寄せた方が強いです。
- 配布サイトの 1 行目は、実装思想より使用体験を見せるべきです。

### 4.3 Hero 下の要点カード
対象:

- `heroFacts` in `site/src/data/siteContent.ts`

現状:

- 要点はあるが、やや抽象的

入れるべき内容:

- 対応 OS
- 基本機能
- 任意依存が必要な上級機能
- ダウンロード先が GitHub Releases であること

推奨例:

- Windows 10 / 11
- Hotkey OCR + translation overlay
- Works with a reduced feature set even without optional helpers
- Download builds from GitHub Releases

日本語メモ:

- ここは「読む説明」ではなく「一瞬で拾える事実」を置く欄です。
- 4 項目程度に絞るのがよいです。

### 4.4 Features セクション
対象:

- `featureHighlights` in `site/src/data/siteContent.ts`

現状:

- README の要点をまとめた段階
- まだ「ユーザーがどの場面で便利か」まで落とし切れていない

入れるべき内容:

- 利用シーンが見える言い換え
- 例:
- Game / visual novel / video / desktop app overlaid translation
- Fast re-run with hotkeys and ROI presets
- Choice of OCR / translation backends
- Experimental advanced capture paths for difficult rendering cases

日本語メモ:

- 機能名の羅列だけだと README と差が出ません。
- 「どういう場面で助かるか」を 1 文ずつ足すと、配布サイトらしくなります。

### 4.5 Install セクション
対象:

- `installSteps` in `site/src/data/siteContent.ts`

現状:

- 一般的な導入フローの仮置き

問題:

- 実際の配布物が `.zip` なのか、インストーラーなのかが分からない
- 初回起動時に何を設定するかが曖昧

入れるべき内容:

- 実際の Release 配布形式
- 解凍の有無
- 起動方法
- 最初に選ぶ設定
- 基本動作の最短手順

日本語メモ:

- ここは README の Build 手順ではなく、「配布版を受け取った人の導線」を書く場所です。
- ソースビルド利用者向け説明と混ぜない方が分かりやすいです。

### 4.6 Requirements / Notes セクション
対象:

- `optionalRequirements` in `site/src/data/siteContent.ts`
- `site/src/App.tsx` の Platform baseline / Distribution note

現状:

- Optional dependencies の整理はできている
- ただし最低限の動作条件がまだ弱い

入れるべき内容:

- 最低動作環境
- 追加で必要になる条件
- 機能ごとの依存関係

整理のしかた:

- Minimum requirements
- Optional for local AI / OCR services
- Optional for mirror fullscreen
- Optional for graphics hook

日本語メモ:

- 「全部必要そう」に見える書き方は避けるべきです。
- 最小構成で何ができるかを先に書くと、導入ハードルが下がります。

### 4.7 Build セクション
対象:

- `buildTracks` in `site/src/data/siteContent.ts`

現状:

- ソースビルド手順は載っている

判断ポイント:

- このセクションをトップ近くに強く出す必要はない
- 配布サイトとしてはやや開発者向け

入れるべき内容:

- 一般ユーザー向けなら短く保つ
- 詳細は README へ誘導する

日本語メモ:

- 配布サイトの主役は Release です。
- Build は「開発者向け補足」として残す程度で十分です。

### 4.8 Links セクション
対象:

- `resourceLinks` in `site/src/data/siteContent.ts`

現状:

- 必要な基本リンクは揃っている

追加候補:

- Changelog
- Known issues
- FAQ
- Third-party notices

日本語メモ:

- `Issues` 直リンクは useful ですが、一般ユーザー向けには FAQ があると親切です。
- FAQ が未作成なら、将来追加候補として残しておくとよいです。

## 5. これから用意すべき実素材

### 5.1 最低限必要
- Hero 用スクリーンショット 1 枚
- セクション用スクリーンショット 2〜4 枚
- Release 配布手順の確定文言
- 初回設定の最短手順
- よく使う機能の短い紹介文

### 5.2 あると良い
- ROI 選択画面
- 設定画面
- Overlay 表示例
- Graphics Hook の説明画像
- Mirror fullscreen の説明画像

### 5.3 後回しでよい
- 動画
- アニメーション GIF
- FAQ 専用ページ
- 多言語切り替え

## 6. 推奨スクリーンショット構成
最初は次の 3 枚で十分です。

1. 通常のオーバーレイ表示
2. ROI 選択または設定画面
3. 実験機能の例

日本語メモ:

- 3 枚で「通常利用」「設定」「上級機能」が見えれば、最初の公開には十分です。
- 画像が多すぎると、逆に何を見せたいサイトかがぼやけます。

## 7. 文言の置き換え優先順位
優先順位は以下を推奨します。

1. Hero 見出しと説明文
2. 実スクリーンショット
3. Install 手順
4. Requirements の最小構成説明
5. Features の利用シーン表現

日本語メモ:

- 見た人の理解に最も効くのは Hero とスクリーンショットです。
- 技術詳細の精密化より先に、トップビューの分かりやすさを上げるべきです。

## 8. 実装時の差し替えメモ
実際の差し替えは次の順で進めると安全です。

1. `site/src/assets/hero.png` を実画像に置き換える
2. `site/src/data/siteContent.ts` の文言を更新する
3. 必要なら `site/public/screenshots/` を追加する
4. `site/src/App.tsx` にスクリーンショット用セクションを追加する
5. `npm run build` で確認する

## 9. 未実装の追加候補
今のサイトにまだ入っていないが、今後追加しやすいもの:

- Screenshots 専用セクション
- FAQ セクション
- Known limitations セクション
- Third-party notices への導線
- Release ノートの要約

日本語メモ:

- 今すぐ全部入れる必要はありません。
- まずは「見た目」「導入」「ダウンロード」の 3 点を固めるのが先です。

## 10. おすすめの次アクション
次にやるなら、以下の順がよいです。

1. 実アプリ画面のスクリーンショットを 3 枚用意する
2. Hero の見出しを利用者向け表現に修正する
3. Release 配布形式に合わせて Install 手順を具体化する
4. Screenshots セクションを追加する
5. FAQ を必要に応じて `Doc/` から分離する
