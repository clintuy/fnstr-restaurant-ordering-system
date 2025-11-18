import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { loadMenu } from "../redux/menuSlice";
import type { RootState, AppDispatch } from "../redux/store";

export default function CheckoutPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { filtered, status } = useSelector((s: RootState) => s.menu);
  useEffect(() => {
    dispatch(loadMenu());
  }, [dispatch]);

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

        {/* Loading */}
        {status === "loading" && <p>Loading menu...</p>}

        {/* Menu Grid */}
        <IonGrid>
          <IonRow>
            {filtered.map((item) => (
              <IonCol size="12" size-md="6" size-lg="4" key={item.id}>
                <MenuItemCard {...item} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}
