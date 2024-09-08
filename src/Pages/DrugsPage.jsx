import DrugSearch from "../Components/SearchDrugs";
import CategoryList from "../Components/CategoryList";
import DrugList from "../Components/DrugList";

const DrugsPage = () => {
  return (
    <section className="mt-20 mb-8">
      {/* <DrugSearch /> */}
      <CategoryList />
      <DrugList />
    </section>
  );
};

export default DrugsPage;
