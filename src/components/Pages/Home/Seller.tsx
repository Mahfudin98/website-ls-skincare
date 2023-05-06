import styles from "./home.module.css";
import MapsList from "../Seller/maps_list";
import Join from "../Seller/join";

export default function SellerHome() {
  return (
    <section className={styles["section-def"]}>
      <div className="w-full inline-flex justify-between items-center mb-3">
        <div>
          <h1>Our Seller</h1>
        </div>
      </div>
      <MapsList />
      <Join />
    </section>
  );
}
