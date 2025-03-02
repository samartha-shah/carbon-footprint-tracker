import React from 'react';

function Suggestions() {
  const suggestions = [
    "Use public transport instead of driving.",
    "Install energy-efficient light bulbs.",
    "Reduce, reuse, and recycle.",
    "Plant trees in your community.",
    "Limit meat consumption and opt for plant-based meals.",
    "Conserve water by fixing leaks and using water-saving fixtures.",
    "Opt for renewable energy sources where possible.",
    "Use reusable bags, bottles, and containers.",
    "Compost organic waste to reduce landfill emissions.",
    "Support local and sustainable businesses."
  ];

  return (
    <div>
      <h2>Eco-Friendly Suggestions</h2>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;
