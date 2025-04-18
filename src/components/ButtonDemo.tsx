import React from 'react';
import { Button } from 'primereact/button';

function ButtonDemo() {
  return (
    <div className="card">
      <h2>ボタンの例</h2>
      <div className="flex flex-wrap gap-2">

      <Button label="Primary" />
      <Button label="Secondary" severity="secondary" />
      <Button label="Success" severity="success" />
      <Button label="Info" severity="info" />
      <Button label="Warning" severity="warning" />
      <Button label="Help" severity="help" />
      <Button label="Danger" severity="danger" />
      </div>
      
      <h3>アイコン付きボタン</h3>
      <div className="flex flex-wrap gap-2">
        <Button icon="pi pi-check" label="確認" />
        <Button icon="pi pi-bookmark" label="ブックマーク" severity="secondary" />
        <Button icon="pi pi-search" label="検索" severity="success" />
      </div>
    </div>
  );
}

export default ButtonDemo;