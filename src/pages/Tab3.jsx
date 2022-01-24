import { IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
  IonList,
  IonIcon,
  IonFab,
  IonFabButton } from '@ionic/react';

import './Tab3.css';
import { closeOutline, refreshOutline } from 'ionicons/icons';


function Tab3() {

  var json = JSON.parse(localStorage.getItem('favorite'));
    
  const reptiles = json;

  function del(what){

    var myIndex = reptiles.indexOf(what);
    if (myIndex !== -1) {
      reptiles.splice(myIndex, 1);
    }

    console.log(reptiles);
    localStorage.setItem('favorite', JSON.stringify(reptiles));
    window.location.reload()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="tab-name">Owned Comics</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen class="ion-padding">

      <IonList>
        {reptiles.map((reptile) => (
          <IonItem className="favo">{reptile} <IonButton slot="end" color="danger" onClick={()=>del(reptile)}><IonIcon icon={closeOutline} /></IonButton></IonItem>
          ))}
      </IonList>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={()=>window.location.reload()} color='success'>
          <IonIcon icon={refreshOutline}/>
        </IonFabButton>
      </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
