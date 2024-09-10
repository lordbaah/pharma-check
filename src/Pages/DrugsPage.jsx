import CategoryList from "../Components/CategoryList";
import DrugList from "../Components/DrugList";

const DrugsPage = () => {
  return (
    <section className="mt-20 mb-20">
      <h2 className="font-bold text-2xl text-center">Find Drugs by type</h2>
      <CategoryList />
      <DrugList />
    </section>
  );
};

export default DrugsPage;
