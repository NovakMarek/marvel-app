import React, { useState, useEffect } from 'react';
import { IonContent, IonSearchbar } from '@ionic/react';

import "./Search.css"

function Search({search}) {

  const[text, setText] = useState('')

  const onSearch = (q) =>{
    setText(q)
    search(q)
  }

  return (
    <IonContent class="input-container">
      <IonSearchbar class="search-bar" value={text} onIonChange={(e)=>onSearch(e.target.value)}></IonSearchbar>
  </IonContent>
  )
}

export default Search
