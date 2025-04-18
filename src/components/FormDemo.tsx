import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Card } from 'primereact/card';

function FormDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthdate: null,
    country: null
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const countries = [
    { name: '日本', code: 'JP' },
    { name: 'アメリカ', code: 'US' },
    { name: 'イギリス', code: 'GB' },
    { name: 'ドイツ', code: 'DE' },
    { name: 'フランス', code: 'FR' }
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if (formData.name && formData.email && formData.password && formData.birthdate && formData.country) {
      // 成功時の処理
      console.log('フォーム送信成功:', formData);
    }
  };
  
  return (
    <div className="card">
      <h2>フォームとバリデーションの例</h2>
      <Card>
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="field">
            <label htmlFor="name" className={classNames({ 'p-error': submitted && !formData.name })}>
              名前*
            </label>
            <InputText 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              className={classNames({ 'p-invalid': submitted && !formData.name })}
            />
            {submitted && !formData.name && <small className="p-error">名前は必須です。</small>}
          </div>
          
          <div className="field">
            <label htmlFor="email" className={classNames({ 'p-error': submitted && !formData.email })}>
              メールアドレス*
            </label>
            <InputText 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              className={classNames({ 'p-invalid': submitted && !formData.email })}
            />
            {submitted && !formData.email && <small className="p-error">メールアドレスは必須です。</small>}
          </div>
          
          <div className="field">
            <label htmlFor="password" className={classNames({ 'p-error': submitted && !formData.password })}>
              パスワード*
            </label>
            <Password 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleInputChange} 
              className={classNames({ 'p-invalid': submitted && !formData.password })}
              toggleMask
              feedback={true}
            />
            {submitted && !formData.password && <small className="p-error">パスワードは必須です。</small>}
          </div>
          
          <div className="field">
            <label htmlFor="birthdate" className={classNames({ 'p-error': submitted && !formData.birthdate })}>
              生年月日*
            </label>
            <Calendar 
              id="birthdate" 
              name="birthdate" 
              value={formData.birthdate} 
              onChange={(e) => setFormData({...formData, birthdate: e.value})} 
              dateFormat="yy/mm/dd"
              showIcon
              className={classNames({ 'p-invalid': submitted && !formData.birthdate })}
            />
            {submitted && !formData.birthdate && <small className="p-error">生年月日は必須です。</small>}
          </div>
          
          <div className="field">
            <label htmlFor="country" className={classNames({ 'p-error': submitted && !formData.country })}>
              国*
            </label>
            <Dropdown 
              id="country" 
              name="country" 
              value={formData.country} 
              onChange={(e) => setFormData({...formData, country: e.value})} 
              options={countries} 
              optionLabel="name" 
              placeholder="国を選択"
              className={classNames({ 'p-invalid': submitted && !formData.country })}
            />
            {submitted && !formData.country && <small className="p-error">国は必須です。</small>}
          </div>
          
          <Button type="submit" label="送信" className="mt-2" />
        </form>
      </Card>
    </div>
  );
}

export default FormDemo;