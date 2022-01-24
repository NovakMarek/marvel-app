import React from 'react'
import { IonContent, IonList } from '@ionic/react';
import ComicsItem from './ComicsItem';


function ComicsTable({items}) {
  return(
    <IonContent>
      {
        items.map(item=>(
          <ComicsItem key={item.id} item={item} />
        ))
      }
    </IonContent>
  )
}

export default ComicsTable
