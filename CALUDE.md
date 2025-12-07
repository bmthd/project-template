# Claude Code 開発ガイドライン

## AI原則

### タスク完了時の作業

必ず`pnpm check:all`を実行し、これが成功することを確認する。
これには以下が含まれる：
- Lintチェック
- フォーマットチェック
- 型チェック
もし`pnpm check:all`が失敗した場合、エラーメッセージに従ってコードを修正し、再度`pnpm check:all`を実行する。

### 原則の読み上げ

タスク開始時にこの原則の内容を改変せずそのまま出力すること。

## プロジェクトについて

TODO: プロジェクトの概要をここに記載してください。

## Yamada UIについて

Yamada UIのコンポーネントが`@/ui`から再エクスポートされています。
全てのコンポーネントはここから使用すること。
また、ユーティリティについてもここから使用できます。

例:
```tsx
import { Button, Card, useDisclosure, useWindowEvent } from "@/ui";
```

詳細なドキュメントを確認する場合は、[Yamada UIのドキュメント](https://yamada-ui.com/)を参照してください。
公式ドキュメントのディレクトリ構造は以下です。
コンポーネントは`docs/components/comp-name`、hooksは`docs/hooks/hook-name`にあります。
lucideアイコンは同名のものが`@/ui`からエクスポートされています。
suffix無しでは使用できないので、`ActivityIcon`のように必ずsuffixを付けてください。

ほとんどのコンポーネントはnamespaceがexportされており、以下のように使用します。
```tsx
import { Card } from "@/ui";

function MyComponent() {
  return (
    <Card.Root>
      <Card.Header>Header</Card.Header>
      <Card.Body>Body</Card.Body>
      <Card.Footer>Footer</Card.Footer>
    </Card.Root>
  );
}
```

CardRootやCardHeaderでインポートすることも可能ですが、namespaceに必ず置き換えてください。

Rechartsの代わりにYamada UIのチャートコンポーネントを使用してください。

## 開発について

- YamadaUIの設計を尊重してください。
具体的には、bool値は`isOpen`や`isDisabled`のように`is`で始まる名前にしないでください。
HTMLに習い、`disabled`や`open`のように命名してください。

&&演算子を使用して条件付きレンダリングを行わないでください。
代わりに三項演算子を使用してください。
```tsx
open ? <Box /> : null
```

- 動作確認が必要な場合はplaywright mcpを使用してください。
開発URLは`http://localhost:3000`です。

- Linkコンポーネントの使い分け
  - TextLinkまたはButtonLinkを使用してください。
  - 独自のスタイルのリンク: `<Box as={Link}>`のようにas Propを使用してください。 
    Linkは`react-router`からインポートしてください。

## 禁則事項
- コメントや不要なコードは残さないこと。
  情報を残す必要がある場合は.claude/配下にドキュメントを作成してください。
- `<div>`などの生のHTML要素を直接使用しないこと。
  代わりに<Box>や、<Flex>などのYamada UIコンポーネントを使用してください。
  要素を変更したい場合は`as`propsが利用できます。

- classNameは指定できません。
  スタイルのカスタマイズは必ずYamada UIのStyle Propを使用してください。
- devコマンドは実行しないでください。
  開発者がdevを立ち上げずに開発を始めることは基本的にありません。
