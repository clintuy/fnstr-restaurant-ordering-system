import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
} from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { clearCart } from "../redux/cartSlice";
export default function CheckoutPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((s: RootState) => s.cart);
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const service = subtotal * 0.1;
  const total = subtotal + service;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Checkout</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h2>Final Total: ₱{total.toFixed(2)}</h2>
        <p>Service Charge (10%): ₱{service.toFixed(2)}</p>

        <IonButton
          onClick={() => {
            alert(`Paid on ${new Date().toLocaleString()}`);
            dispatch(clearCart());
          }}
        >
          Done
        </IonButton>
      </IonContent>
    </IonPage>
  );
}
