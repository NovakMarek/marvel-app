import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonBadge,
  IonButton,
} from '@ionic/react';

import "./ComicsItem.css"



function ComicsItem({item}) {

  function saveData(){

    var dataArray=JSON.parse(localStorage.getItem('favorite') || "[]");
    var data = item.title;
    

    dataArray.push(data);
    localStorage.setItem('favorite',JSON.stringify(dataArray));
  };

  return (
    <IonCard class="card">
            <IonImg src={item.thumbnail.path + "/landscape_amazing.jpg"} />
          <IonCardHeader>
          <IonBadge color="secondary">{item.format}</IonBadge>
            <IonCardTitle class="card-title">{item.title}</IonCardTitle>
          </IonCardHeader>
          
          <IonCardContent class="card-desc">{item.description}</IonCardContent>

          <IonButton onClick={saveData} class="ion-margin-horizontal ion-margin-vertical">Owned</IonButton>

    </IonCard>
  )
}

export default ComicsItem


/**<IonItem>
  <IonLabel>{item.title}</IonLabel>
</IonItem>**/
