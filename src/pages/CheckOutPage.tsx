import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
export default function CheckoutPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Checkout</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div>Checkout Page</div>
      </IonContent>
    </IonPage>
  );
}
