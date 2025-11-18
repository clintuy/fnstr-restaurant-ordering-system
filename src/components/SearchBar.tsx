import { IonSearchbar } from "@ionic/react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { search } from "../redux/menuSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    dispatch(search(value));
  };
  return (
    <IonSearchbar
      value={query}
      placeholder="Search menu..."
      debounce={300}
      onIonInput={(e) => handleSearch(e.detail.value!)}
    />
  );
}
