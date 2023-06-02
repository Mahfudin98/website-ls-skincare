import CardAnalytic from "./card_analytic";
import CardBiodata from "./card_biodata";
import CardFilter from "./card_filter";

export default function CardLayout() {
  return (
    <section className="container mx-auto my-5">
      <div className="grid grid-cols-12 gap-6 pb-3">
        <div className="col-span-12 lg:col-span-4">
          <div className="flex flex-col">
            <CardBiodata />
            <CardFilter />
          </div>
        </div>
        <CardAnalytic />
      </div>
    </section>
  );
}
