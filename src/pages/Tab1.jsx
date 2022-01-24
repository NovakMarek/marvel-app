//import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  IonImg,
  IonIcon,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonItem,
  } from '@ionic/react';


import { logoIonic, logoReact, logoJavascript, analytics } from 'ionicons/icons';

function Tab1() {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="tab-name">About</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="ion-padding">
        <IonImg src="assets/img/logo.png"></IonImg>
        <IonText color="medium">
          <p id="content-text">This mobile app is one of my final project at university. Assigment of this project was to creat mobile app for Android or iOS using external or our own API.</p>
        </IonText>

          <IonItemGroup>
                <IonItemDivider>
                  <IonLabel id="desc-title">Tech Stack</IonLabel>
                </IonItemDivider>

                <IonItem href="https://www.ionicframework.com">
                  <IonLabel id="list-text">Ionic Framework</IonLabel>
                  <IonIcon id="ionic-logo" icon={logoIonic} />
                </IonItem>
                <IonItem href="https://reactjs.org/">
                  <IonLabel id="list-text">ReactJS</IonLabel>
                  <IonIcon id="react-logo" icon={logoReact} />
                </IonItem>
                <IonItem href="https://www.javascript.com/">
                  <IonLabel id="list-text">JavaScript</IonLabel>
                  <IonIcon id="javascript-logo" icon={logoJavascript} />
                </IonItem>
          </IonItemGroup>

          <IonItemGroup id="about-api">
                <IonItemDivider>
                  <IonLabel id="desc-title">Used API</IonLabel>
                </IonItemDivider>

                <IonItem href="https://developer.marvel.com/">
                  <IonLabel id="list-text">Marvel API</IonLabel>
                  <IonIcon id="marvel-api-logo" icon={analytics} />
                </IonItem>
          </IonItemGroup>
          <IonText color="medium">
            <p id="content-text">This API is provided by The Walt Disney Company. They reserve all the right for this API and it's data. For more information on how to use this API visit <IonText color="secondary"><a href="https://developer.marvel.com/">Marvel site for developers</a></IonText> or read <IonText color="secondary"><a href="https://disneytermsofuse.com/">Terms of Use.</a></IonText></p>
          </IonText>

        </IonContent>
    
    </IonPage>
  );
};

export default Tab1;
