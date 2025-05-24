import React from 'react';

const PlantCareMistakes = () => {
  return (
    <section className="bg-green-50 dark:glass py-16 rounded-2xl my-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-greenPrimary dark:text-lightGreen mb-10 text-center">
          Top Plant Care Mistakes to Avoid
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-lightGreen list-disc list-inside">
          <li>
            <strong>Overwatering:</strong> Most houseplants prefer to dry out
            between watering. Learn your plant's specific needs.
          </li>
          <li>
            <strong>Wrong lighting:</strong> Not all plants love sunlight. Some
            thrive in shade — research before placing.
          </li>
          <li>
            <strong>Ignoring drainage:</strong> Pots without drainage holes can
            cause root rot — always ensure proper drainage.
          </li>
          <li>
            <strong>Skipping pruning:</strong> Regular trimming encourages
            healthy growth and prevents disease spread.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlantCareMistakes;