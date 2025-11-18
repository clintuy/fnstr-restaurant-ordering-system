import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBadge,
} from "@ionic/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import type { AppDispatch } from "../redux/store";

interface Props {
  id: string;
  name: string;
  price: number;
  category: string;
}

export default function MenuItemCard({ id, name, price, category }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <IonCard className="menu-card">
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonBadge color="secondary">{category}</IonBadge>
        <p>₱{price.toFixed(2)}</p>
        <IonButton
          data-cy="add-to-cart"
          expand="block"
          color="primary"
          onClick={() =>
            dispatch(
              addToCart({ id, name, price, category, quantity: 1, addons: [] })
            )
          }
        >
          Add to Cart
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}
