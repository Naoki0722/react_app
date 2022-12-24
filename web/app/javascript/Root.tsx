import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <header>ヘッダー</header>
      <p>コンテンツ</p>
      <Outlet />
      <footer>フッター</footer>
    </>
  );
}
