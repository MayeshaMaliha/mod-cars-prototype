export interface Modification {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  compatibility: number;
}

const allModifications: Modification[] = [
  // Performance - Engine
  {
    id: 'mod-001',
    name: 'Cold Air Intake System',
    category: 'Engine',
    description: 'High-flow air filter and intake pipe to increase airflow to the engine for better performance.',
    price: 350,
    rating: 4.5,
    reviews: 128,
    compatibility: 98,
  },
  {
    id: 'mod-002',
    name: 'Turbo Upgrade',
    category: 'Engine',
    description: 'Larger turbocharger upgrade for increased boost and horsepower.',
    price: 2800,
    rating: 4.8,
    reviews: 76,
    compatibility: 85,
  },
  {
    id: 'mod-003',
    name: 'Performance ECU Tune',
    category: 'Engine',
    description: 'Custom engine computer programming to optimize power output and throttle response.',
    price: 650,
    rating: 4.7,
    reviews: 203,
    compatibility: 95,
  },
  {
    id: 'mod-004',
    name: 'High-Flow Exhaust System',
    category: 'Engine',
    description: 'Larger diameter, less restrictive exhaust for better engine breathing and sound.',
    price: 1200,
    rating: 4.6,
    reviews: 154,
    compatibility: 92,
  },
  {
    id: 'mod-005',
    name: 'Intercooler Upgrade',
    category: 'Engine',
    description: 'Larger intercooler for better cooling of the charged air from the turbocharger.',
    price: 900,
    rating: 4.4,
    reviews: 87,
    compatibility: 90,
  },
  
  // Performance - Suspension
  {
    id: 'mod-006',
    name: 'Coilover Suspension Kit',
    category: 'Suspension',
    description: 'Adjustable height and damping suspension system for improved handling and stance.',
    price: 1800,
    rating: 4.6,
    reviews: 132,
    compatibility: 96,
  },
  {
    id: 'mod-007',
    name: 'Performance Sway Bars',
    category: 'Suspension',
    description: 'Thicker anti-roll bars to reduce body roll in corners for better handling.',
    price: 450,
    rating: 4.3,
    reviews: 95,
    compatibility: 97,
  },
  {
    id: 'mod-008',
    name: 'Chassis Bracing Kit',
    category: 'Suspension',
    description: 'Additional structural braces to increase chassis rigidity for improved handling.',
    price: 550,
    rating: 4.5,
    reviews: 64,
    compatibility: 94,
  },
  {
    id: 'mod-009',
    name: 'Performance Brake Kit',
    category: 'Suspension',
    description: 'Larger brake rotors and high-performance calipers for improved stopping power.',
    price: 2200,
    rating: 4.9,
    reviews: 108,
    compatibility: 93,
  },
  
  // Exterior
  {
    id: 'mod-010',
    name: 'Aero Body Kit',
    category: 'Exterior',
    description: 'Front lip, side skirts, and rear diffuser for improved aerodynamics and aggressive look.',
    price: 1650,
    rating: 4.7,
    reviews: 97,
    compatibility: 89,
  },
  {
    id: 'mod-011',
    name: 'Performance Wheels',
    category: 'Exterior',
    description: 'Lightweight forged wheels in larger size for improved looks and handling.',
    price: 2400,
    rating: 4.8,
    reviews: 185,
    compatibility: 96,
  },
  {
    id: 'mod-012',
    name: 'Carbon Fiber Hood',
    category: 'Exterior',
    description: 'Lightweight carbon fiber hood with vents for weight reduction and engine cooling.',
    price: 1200,
    rating: 4.6,
    reviews: 73,
    compatibility: 88,
  },
  {
    id: 'mod-013',
    name: 'Performance Lighting',
    category: 'Exterior',
    description: 'LED/HID headlight and taillight upgrade for improved visibility and modern look.',
    price: 750,
    rating: 4.5,
    reviews: 126,
    compatibility: 95,
  },
  {
    id: 'mod-014',
    name: 'Rear Wing Spoiler',
    category: 'Exterior',
    description: 'GT-style wing spoiler for downforce and aggressive racing appearance.',
    price: 550,
    rating: 4.4,
    reviews: 142,
    compatibility: 92,
  },
  
  // Interior
  {
    id: 'mod-015',
    name: 'Racing Seats',
    category: 'Interior',
    description: 'Bucket-style sport seats with enhanced bolstering for better support during spirited driving.',
    price: 1400,
    rating: 4.6,
    reviews: 89,
    compatibility: 94,
  },
  {
    id: 'mod-016',
    name: 'Carbon Fiber Interior Trim',
    category: 'Interior',
    description: 'Real carbon fiber interior panels and trim pieces for a premium sporty look.',
    price: 800,
    rating: 4.3,
    reviews: 67,
    compatibility: 98,
  },
  {
    id: 'mod-017',
    name: 'Digital Display Upgrade',
    category: 'Interior',
    description: 'Advanced digital gauge cluster with performance metrics and customizable displays.',
    price: 1100,
    rating: 4.7,
    reviews: 58,
    compatibility: 87,
  },
  {
    id: 'mod-018',
    name: 'Racing Steering Wheel',
    category: 'Interior',
    description: 'Smaller diameter steering wheel with premium materials and additional control buttons.',
    price: 450,
    rating: 4.5,
    reviews: 97,
    compatibility: 93,
  },
];

// Filter modifications based on type and budget
export const getModifications = (type: string, budget: number): Modification[] => {
  // Determine which categories to include based on modification type
  let categories: string[] = [];
  
  switch (type) {
    case 'performance':
      categories = ['Engine', 'Suspension'];
      break;
    case 'exterior':
      categories = ['Exterior'];
      break;
    case 'interior':
      categories = ['Interior'];
      break;
    case 'balanced':
    default:
      categories = ['Engine', 'Suspension', 'Exterior', 'Interior'];
      break;
  }
  
  // Filter by categories
  const filteredByType = allModifications.filter(mod => categories.includes(mod.category));
  
  // Sort by best value (highest compatibility and rating)
  const sortedMods = [...filteredByType].sort((a, b) => {
    const scoreA = a.compatibility * 0.6 + a.rating * 20;
    const scoreB = b.compatibility * 0.6 + b.rating * 20;
    return scoreB - scoreA;
  });
  
  // Select mods based on budget
  const selectedMods: Modification[] = [];
  let remainingBudget = budget;
  
  // First pass - select high-priority items
  for (const mod of sortedMods) {
    if (mod.price <= remainingBudget) {
      selectedMods.push(mod);
      remainingBudget -= mod.price;
    }
    
    // If we've selected enough mods or used up the budget, stop
    if (selectedMods.length >= 10 || remainingBudget < 200) {
      break;
    }
  }
  
  return selectedMods;
};