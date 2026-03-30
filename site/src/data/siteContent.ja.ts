import { externalLinks, type SiteContent } from './siteContentShared'

export const jaSiteContent: SiteContent = {
  meta: {
    title: 'Hotkey Translator | Windows 向け OCR・翻訳オーバーレイ',
    description:
      'Hotkey Translator は、Windows 向けの OCR・翻訳オーバーレイです。配布版のダウンロード、セットアップ情報、関連ドキュメントを確認できます。',
    ogTitle: 'Hotkey Translator',
    ogDescription:
      'Windows 向け OCR・翻訳オーバーレイ。配布版、セットアップ情報、関連リンクをまとめて確認できます。',
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
    title: '使っているアプリを離れずに、画面上の文字を読めます。',
    description:
      'Hotkey Translator は、ホットキーで文字を取り込み、OCR と翻訳を実行し、その結果をオーバーレイで表示できます。まずは標準のデスクトップ向けワークフローから始め、ローカルモデル、Python OCR サービス、高度なフルスクリーンキャプチャが必要な場合だけ追加の補助機能を使う構成です。',
    downloadLabel: '最新リリースをダウンロード',
    osLabel: 'Windows 10 / 11',
    imageAlt: {
      original: '翻訳オーバーレイを表示する前の元画面',
      overlay: '元画面の上に翻訳オーバーレイを表示した状態',
    },
  },
  workflow: {
    eyebrow: '使い方',
    title: 'ワークフローを 3 つの画面で確認できます。',
    description: 'Original、ROI、Overlay の流れです。',
    items: [
      {
        id: 'original',
        label: 'Original',
        title: 'まず元の画面をそのまま確認',
        description: 'ゲームやアプリの表示を維持したまま使えます。',
      },
      {
        id: 'roi',
        label: 'ROI',
        title: '文字がある範囲だけを切り取る',
        description: '読み取りたいテキスト領域だけを選択します。',
      },
      {
        id: 'overlay',
        label: 'Overlay',
        title: '結果を元画面の上に重ねて読む',
        description: 'ウィンドウを切り替えずに翻訳結果を確認できます。',
      },
    ],
  },
  features: {
    eyebrow: '主な強み',
    title: 'ダウンロード前に、このデスクトップワークフローでできることを把握できます。',
    description:
      '重要なのは利用者側の結果です。すばやい再実行、読みやすいオーバーレイ表示、柔軟な OCR / 翻訳エンジンの選択、そして標準フローで足りない時だけ使う追加キャプチャ経路に絞っています。',
    itemLabel: '特徴',
    items: [
      {
        title: '作業の流れを止めずに画面上の文字を読める',
        description:
          'ゲーム、動画、デスクトップアプリ上の文字を取り込み、その結果をオーバーレイ上でそのまま確認できます。',
      },
      {
        title: 'ホットキー、ROI プリセット、ウィンドウ固定で繰り返しが速い',
        description:
          '対象範囲を決めた後は、ホットキーと保存済みの領域設定で同じ流れを素早く再実行できます。',
      },
      {
        title: '環境に合わせて OCR と翻訳の構成を選べる',
        description:
          'まずは軽量な構成から始め、速度、品質、ローカル推論の要件に応じて別の OCR / 翻訳エンジンへ広げられます。',
      },
      {
        title: '標準キャプチャで足りない場合だけ高度な経路を使える',
        description:
          '基本は標準キャプチャで進めつつ、難しいケースでは Graphics Hook や mirror fullscreen を追加できます。',
      },
    ],
  },
  links: {
    eyebrow: '関連リンク',
    title: 'ダウンロード、ドキュメント、Issue 報告を 1 クリックで開けます。',
    description:
      'ランディングページは要点だけに絞り、詳しいセットアップ手順、Issue 管理、リリース情報は必要な時にリポジトリ側へ移動できる構成にしています。',
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
        description: 'ソースコードとプロジェクト全体の文脈を確認できます。',
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
