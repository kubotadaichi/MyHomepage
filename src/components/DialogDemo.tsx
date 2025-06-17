import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function DialogDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card">
      <h2>ダイアログの例</h2>
      <Button 
        label="ダイアログを表示" 
        icon="pi pi-external-link" 
        onClick={() => setVisible(true)} 
      />
      
      <Dialog 
        header="ダイアログタイトル" 
        visible={visible} 
        style={{ width: '50vw' }} 
        onHide={() => setVisible(false)}
        footer={
          <div>
            <Button label="閉じる" icon="pi pi-times" onClick={() => setVisible(false)} severity="secondary" />
            <Button label="保存" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
          </div>
        }
      >
        <p>
          これはPrimeReactのダイアログコンポーネントの例です。
          ダイアログは、ユーザーとのインタラクションのためのオーバーレイパネルです。
        </p>
      </Dialog>
    </div>
  );
}

export default DialogDemo;