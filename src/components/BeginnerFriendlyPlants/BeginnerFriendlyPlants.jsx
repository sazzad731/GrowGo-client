
const BeginnerFriendlyPlants = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-greenPrimary dark:text-lightGreen mb-10 text-center">
          Beginner-Friendly Plants
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: "Snake Plant",
              image:
                "https://finecity.ae/cdn/shop/products/133.1SansevieriaTrifasciata_700x700.jpg?v=1632757886",
            },
            {
              name: "Pothos",
              image:
                "https://www.planetnatural.com/wp-content/uploads/2023/01/Global-Green-Pothos-920x518.jpg",
            },
            {
              name: "ZZ Plant",
              image:
                "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1684789715-the_sill-variant-white_gloss-zz_plant.jpg?crop=1xw:0.966xh;center,top&resize=980:*",
            },
          ].map((plant, i) => (
            <div
              key={i}
              className="bg-green-100 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-900">
                  {plant.name}
                </h3>
                <p className="text-sm text-gray-700">
                  Low-maintenance, perfect for beginners and busy plant lovers.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeginnerFriendlyPlants;