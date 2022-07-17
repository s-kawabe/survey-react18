# React18 Playground
https://www.udemy.com/course/react18-suspense/learn/lecture/31907356#overview

## Overview
- Strict mode in React18
- Automatic batching
- Promise
- Suspense with react-query
- Nested suspense
- Transition
- New hooks

## Environment
`yarn create vite XXX --template react-ts`

# Strict mode in React18

# Concurent Rendering

# SSR Streaming
https://nextjs.org/docs/advanced-features/react-18/streaming

# Automatic batching
https://note.com/umotion/n/nadda0d47801c

https://ja.reactjs.org/blog/2022/03/29/react-v18.html#new-feature-automatic-batching

> 複数のステート更新が発生した時に、更新をまとめて1回の再描画で済ませることでより良いパフォーマンスを得る機能

しかし18以前でも、イベントハンドラ関数などのなかでのバッチ処理は有効になっていた。
今回でPromise, setTimeout, jsネイティブのイベントハンドラなどのコールバック関数内での複数状態更新
についても対応されるようになった。

https://ja.reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
Automatic batchingを有効にするためには、18からの新しい`ReactDOM.createRoot`を使用する。

```ts
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);

// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
```

## flushSync
`react-dom` のflushSync関数のコールバック内で発生するstate更新はbatchが効かなくなる。

```ts
flushSync(() => {
  setUsers(res.data)
})
```



# Promise

# Suspense with react-query

## Suspenseとは
https://qiita.com/uhyo/items/bbc22022fe846fd2b763

## 「サスペンドする」とは
Suspenseが、中身のComponent内でPromiseがthrowされたことを検知し、
中身のComponentはデータがまだないからレンダリングを中断している状態のこと。

# Nested suspense

# Transition
https://ja.reactjs.org/blog/2022/03/29/react-v18.html#new-feature-transitions

```ts
import { startTransition } from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
  // Transition: Show the results
  setSearchQuery(input);
});
```

→ startTransitionでラップした更新は緊急性が低いものとして扱われる
この更新の実行中に他の優先度の高い更新が発生した場合、transitionの更新は中断される。

# New hooks
https://qiita.com/uhyo/items/6be96c278c71b0ddb39b

- useTransition
- useDeferredValue
- useId
- useSyncExternalStore
- useInsertionEffect

