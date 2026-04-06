import { externalLinks, type SiteContent } from './siteContentShared'

export const jaSiteContent: SiteContent = {
  meta: {
    title: 'Hotkey Translator | Windows 向け OCR・翻訳オーバーレイ',
    description:
      'Hotkey Translator は、Windows 向けの OCR・翻訳オーバーレイです。このサイトで配布版のダウンロード、セットアップ情報、関連ドキュメントを紹介します。',
    ogTitle: 'Hotkey Translator',
    ogDescription:
      'Windows 向け OCR・翻訳オーバーレイ。配布版、セットアップ情報、関連リンクを紹介します。',
  },
  localeToggle: {
    label: '言語',
    options: {
      en: 'EN',
      ja: '日本語',
    },
  },
  hero: {
    productName: 'Hotkey Translator',
    title: '未翻訳ゲームをそのまま日本語で遊べる',
    description:
      'ホットキーでテキストをキャプチャし、瞬時に翻訳してシームレスなオーバーレイとして表示します。標準機能が足りない場合はローカルモデルや高度なOCRエンジンを簡単に追加できます',
    downloadLabel: '最新リリースをダウンロード',
    osLabel: 'Windows 10 / 11',
    imageAlt: {
      original: '翻訳オーバーレイを表示する前の元画面',
      overlay: '元画面の上に翻訳オーバーレイを表示した状態',
    },
  },
  workflow: {
    eyebrow: '使い方',
    title: '以下で使用方法を簡単に紹介します。',
    description: 'Original、ROI、Overlay の流れです。',
    items: [
      {
        id: 'original',
        label: 'Original',
        title: '元の画面のまま',
        description: 'ゲームやアプリの表示を維持したまま使えます。',
      },
      {
        id: 'roi',
        label: 'Select the text area',
        title: '文字がある範囲だけを囲む',
        description: '読み取りたいテキスト領域だけを選択します。',
      },
      {
        id: 'overlay',
        label: 'Overlay',
        title: '画面にオーバーレイが表示されます',
        description: 'ウィンドウを切り替えずに翻訳結果を確認できます。',
      },
    ],
  },
  features: {
    eyebrow: '主な強み',
    title: 'アプリの主な機能を紹介します。',
    description:
      'ワンキーで実行、読みやすいオーバーレイ表示、柔軟な OCR / 翻訳エンジンが選択でき、標準機能が足りない場合はさらに高度なOCRと翻訳エンジンを追加ダウンロードできます。',
    itemLabel: '特徴',
    items: [
      {
        title: '作業の流れを止めずに画面上で翻訳結果を確認できる',
        description:
          'ゲーム、動画、デスクトップアプリ上の文字を取り込み、その結果をオーバーレイ上でそのまま確認できます。',
      },
      {
        title: 'ホットキー、選択領域プリセット、ウィンドウ固定で簡単実行',
        description:
          '対象範囲を決めた後は、ホットキーと保存済みの領域設定で同じ流れを簡単に実行できます。',
      },
      {
        title: '環境に合わせて OCR と翻訳の構成を選べる',
        description:
          'まずは軽量な構成から始め、速度、品質、ローカル推論の要件に応じて別の OCR / 翻訳エンジンをダウンロードできます。',
      },
      {
        title: '標準キャプチャで足りない場合はさらに高度な経路を使える',
        description:
          '標準キャプチャで画面取得が難しいケースでは Graphics Hook や mirror fullscreen も選択できます。',
      },
    ],
  },
  links: {
    eyebrow: '関連リンク',
    title: 'ダウンロード、ドキュメント、Issue 報告リンク',
    description:
      '詳しいセットアップ手順、Issue 管理、リリース情報は必要な時にリポジトリを参照してください。',
    itemEyebrow: '外部リンク',
    openLabel: 'リンクを開く',
    items: [
      {
        title: 'リリース一覧を開く',
        href: externalLinks.releases,
        description: '公開済みパッケージとリリースノートを確認できます。',
      },
      {
        title: '英語版 README を読む',
        href: externalLinks.readmeEn,
        description: '英語で機能一覧と補足事項を確認できます。',
      },
      {
        title: '日本語 README を読む',
        href: externalLinks.readmeJa,
        description: '日本語のリポジトリ文書を確認できます。',
      },
      {
        title: 'ソースコードのリポジトリを見る',
        href: externalLinks.sourceRepository,
        description: 'ソースコードとプロジェクト全体を確認できます。',
      },
      {
        title: 'Issue を報告する',
        href: externalLinks.issues,
        description: '不具合報告やフィードバックはこちらです。',
      },
      {
        title: 'MIT ライセンスを確認する',
        href: externalLinks.license,
        description: 'このリポジトリに適用される MIT ライセンスです。',
      },
    ],
  },
  footer: {
    eyebrow: 'ライセンスと配布',
    title:
      'このリポジトリ自体は MIT ライセンスですが、上流由来のコンポーネントには個別の通知が必要です。',
    description:
      '現在のリポジトリには MIT ライセンスを含めています。一方で、Magpie 由来の fullscreen 統合、Dear ImGui、MinHook、モデルファイル、OCR / 推論ランタイムなどのサードパーティ要素は、それぞれ独自のライセンスと再配布条件に従います。',
    links: {
      license: 'MIT ライセンス',
      releases: 'リリース',
      issues: 'Issues',
    },
  },
}
