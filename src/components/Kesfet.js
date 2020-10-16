import React from 'react';
import { Link } from 'react-router-dom';


export default class Kesfet extends React.Component {

  render() {
    return (
      <div>
        <Link to="#" className="main-option-ara" >En az yakan modeller</Link>
        <Link to="#" className="main-option-kesfet" >Az yakar çok kaçanlar</Link>
        <Link to="#" className="main-option-kesfet" >Performans canavarları</Link>
        <Link to="#" className="main-option-kesfet" >Kendi aramanı oluştur</Link>
      </div>
    );
  }
}
