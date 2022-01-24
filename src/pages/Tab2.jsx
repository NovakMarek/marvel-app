import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ComicsTable from '../components/ComicsTable';
import Search from '../components/Search';
import './Tab2.css';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  } from '@ionic/react';

function Tab2() {
  const[items, setItems] = useState([]);

  const [query, setQuery] = useState('');


  useEffect(() =>{
    const fetch = async()=>{
      if(query == ''){ 
        const result = await axios(`https://mnovak-api.herokuapp.com/api/all`)
        console.log(result.data)
        setItems(result.data)
      }else{
        const result = await axios(`https://mnovak-api.herokuapp.com/api/all?title=${query}`)
        console.log(result.data)
        setItems(result.data)
      }
    }

    fetch()
  }, [query])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="tab-name">Search for Comics</IonTitle>
        </IonToolbar>
        <Search search={(q)=>setQuery(q)}/>
      </IonHeader>
      <IonContent fullscreen>

      <ComicsTable items={items} />

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
