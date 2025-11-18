import { restaurant, cart, receipt } from "ionicons/icons";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import { Route, Redirect } from "react-router";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckOutPage";
import MenuPage from "./pages/MenuPage";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* v5 Route syntax */}
            <Route exact path="/" component={MenuPage} />
            <Route exact path="/cart" component={CartPage} />
            <Route exact path="/checkout" component={CheckoutPage} />

            {/* Optional: redirect unknown paths */}
            <Route render={() => <Redirect to="/" />} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="menu" href="/">
              <IonIcon icon={restaurant} />
              <IonLabel>Menu</IonLabel>
            </IonTabButton>

            <IonTabButton tab="cart" href="/cart">
              <IonIcon icon={cart} />
              <IonLabel>Cart</IonLabel>
            </IonTabButton>

            <IonTabButton tab="checkout" href="/checkout">
              <IonIcon icon={receipt} />
              <IonLabel>Checkout</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
