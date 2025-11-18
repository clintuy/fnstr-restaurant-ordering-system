import {
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { search, sort } from "../redux/menuSlice";
import { text, list, cash } from "ionicons/icons";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    dispatch(search(value));
  };

  // Handle sorting
  const handleSort = (key: "name" | "category" | "price") => {
    dispatch(sort(key));
  };

  return (
    <IonGrid>
      {/* Search Bar */}
      <IonRow>
        <IonCol size="12">
          <IonSearchbar
            value={query}
            placeholder="Search menu..."
            debounce={300}
            onIonInput={(e) => handleSearch(e.detail.value!)}
          />
        </IonCol>
      </IonRow>

      {/* Sort Buttons */}
      <IonRow className="ion-align-items-center">
        <IonButton color="medium" onClick={() => handleSort("name")}>
          <IonIcon slot="start" icon={text} />
          Name
        </IonButton>

        <IonButton color="medium" onClick={() => handleSort("category")}>
          <IonIcon slot="start" icon={list} />
          Category
        </IonButton>

        <IonButton color="medium" onClick={() => handleSort("price")}>
          <IonIcon slot="start" icon={cash} />
          Price
        </IonButton>
      </IonRow>
    </IonGrid>
  );
}
