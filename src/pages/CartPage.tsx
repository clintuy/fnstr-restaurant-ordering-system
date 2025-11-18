import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonButton,
} from "@ionic/react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import CartItemCard from "../components/CartItemCard";
export default function CartPage() {
  const { items } = useSelector((s: RootState) => s.cart);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <IonGrid>
              {items.map((item) => (
                <IonRow key={item.id}>
                  <IonCol>
                    <CartItemCard item={item} />
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>

            <IonCard>
              <IonCardContent>
                <h2>Subtotal: ₱{subtotal.toFixed(2)}</h2>
                <IonButton
                  data-cy="checkout-button"
                  expand="block"
                  routerLink="/checkout"
                  color="primary"
                >
                  Checkout
                </IonButton>
              </IonCardContent>
            </IonCard>
          </>
        )}
      </IonContent>
    </IonPage>
  );
}
