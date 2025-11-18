import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBadge,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { type CartItem } from "../redux/cartSlice";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  return (
    <IonCard className="cart-item-card">
      <IonCardHeader>
        <IonCardTitle>{item.name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonGrid>
          <IonRow>
            {/* Add-ons badge full width */}
            <IonCol size="12">
              <IonBadge
                color="secondary"
                style={{ width: "100%", textAlign: "center" }}
              >
                {item.addons.length > 0 ? item.addons.join(", ") : "No Add-ons"}
              </IonBadge>
            </IonCol>
          </IonRow>

          <IonRow className="ion-align-items-center ion-justify-content-between">
            {/* Price & Total */}
            <IonCol size="12" sizeMd="4">
              <p>Price: ₱{item.price.toFixed(2)}</p>
              <p>Total: ₱{(item.price * item.quantity).toFixed(2)}</p>
            </IonCol>

            {/* Quantity controls */}
            <IonCol size="12" sizeMd="4">
              <IonItem lines="none">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <IonLabel>Qty</IonLabel>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IonButton size="small" disabled={item.quantity <= 1}>
                      -
                    </IonButton>

                    <IonInput
                      data-cy="cart-quantity"
                      type="number"
                      min={1}
                      value={item.quantity}
                      style={{
                        width: "50px",
                        textAlign: "center",
                        margin: "0 5px",
                      }}
                    />

                    <IonButton size="small">+</IonButton>
                  </div>
                </div>
              </IonItem>
            </IonCol>

            {/* Remove button */}
            <IonCol size="12" sizeMd="4">
              <IonButton data-cy="remove-item" color="danger" expand="block">
                Remove
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default CartItemCard;
