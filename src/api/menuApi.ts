import axios from "axios";

/* Define the Open Food Facts product type (only fields we care about) */
interface OpenFoodProduct {
  id?: string;
  code?: string;
  product_name?: string;
  categories_tags?: string[];
  image_front_small_url?: string;
}

/* API search response type */
interface OpenFoodSearchResponse {
  products: OpenFoodProduct[];
}

/* Our restaurant menu item type */
export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image?: string;
}

/* Fetch multiple products and map to MenuItem */
export const fetchMenu = async (searchTerm = "pizza"): Promise<MenuItem[]> => {
  try {
    const res = await axios.get<OpenFoodSearchResponse>(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&page_size=5&json=true`
    );

    return res.data.products.map((product) => ({
      id: product.id || product.code || "unknown",
      name: product.product_name || "Unknown Food",
      price: Math.floor(Math.random() * 10) + 5, // mock price $5-$15
      category:
        product.categories_tags?.[0]?.replace("en:", "") || "Uncategorized",
      image: product.image_front_small_url,
    }));
  } catch (err) {
    console.error("Failed to fetch menu:", err);
    return [];
  }
};
