import HomeImg from "../assets/images/undraw_medical_care_movn.png";
import DrugSearch from "../Components/SearchDrugs";

const HomePage = () => {
  return (
    <section className="mt-20 mb-8">
      <div className="custom-width">
        <div className="flex flex-col items-center gap-8 md:flex-row justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-4">Welcome to PharmaCheck</h1>
            <p>
              The Pharm Check API contains a total of 50 Pharmaceutical drugs.
              The experimental phase of the Pharm Check Project aims at sorting
              out drugs as recommendation based on various criteria while still
              providing information about the drug.
            </p>
          </div>
          <div>
            <img
              src={HomeImg}
              alt="photo of nurses"
              className="w-full object-cover block"
            />
          </div>
        </div>
      </div>

      <DrugSearch />
    </section>
  );
};

export default HomePage;
