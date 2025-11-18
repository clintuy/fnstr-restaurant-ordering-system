import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBadge,
} from "@ionic/react";

interface Props {
  id: string;
  name: string;
  price: number;
  category: string;
}

export default function MenuItemCard({ id, name, price, category }: Props) {
  return (
    <IonCard className="menu-card">
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        <IonBadge color="secondary">{category}</IonBadge>
        <p>
          ₱{price.toFixed(2)} {id}
        </p>
        <IonButton expand="block" color="primary">
          Add to Cart
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
}
