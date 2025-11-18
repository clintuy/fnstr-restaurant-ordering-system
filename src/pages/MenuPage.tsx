import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import MenuItemCard from "../components/MenuItemCard";

export default function CheckoutPage() {
  const sampleItem = {
    id: "1",
    name: "Sample Item",
    price: 99.99,
    category: "Sample Category",
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* Search Bar */}
        <IonSearchbar
          className="max-w-[300px] mx-auto"
          placeholder="Search menu..."
          debounce={300}
        />

        {/* Menu Grid */}
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="6" size-lg="4">
              <MenuItemCard {...sampleItem} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
