import React from 'react';
import './App.css';
import { TestPage } from './components/pages/test1';
import { Header } from './components/molecules/Header';
import { SideMenu } from './components/organisms/sideMenu';

function App() {
  return (
    <div className='App'>
        {/* ヘッダー */}
        <Header />
        {/* サイドメニュー */}
        <SideMenu />
        {/* ページ */}
        <TestPage />
    </div>
  );
}

export default App;
