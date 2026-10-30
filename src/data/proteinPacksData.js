
// import {
//   Sun,
//   CalendarDays,
//   CalendarRange,
// } from "lucide-react";

// export const PACK_CATEGORIES = [
//   { id: "all", label: "All" },
//   { id: "veg", label: "Veg" },
//   { id: "non-veg", label: "Non-Veg" },
//   { id: "restaurants", label: "Restaurants" },
//   { id: "eggs", label: "Eggs" },
//   { id: "dairy", label: "Dairy" },
//   { id: "fruits", label: "Fruits" },
//   { id: "bakery", label: "Bakery" },
//   { id: "home-foods", label: "Home Foods" },
//   { id: "diet", label: "Diet" },
// ];

// export const PACK_TYPES = [
//   {
//     id: "daily",
//     title: "Daily Protein Pack",
//     icon: Sun,
//     iconColor: "text-amber-500",
//     iconBg: "bg-amber-50",
//     badge: "",
//   },
//   {
//     id: "weekly",
//     title: "Weekly Protein Pack",
//     icon: CalendarDays,
//     iconColor: "text-green-700",
//     iconBg: "bg-green-50",
//     badge: "Most Popular",
//   },
//   {
//     id: "monthly",
//     title: "Monthly Protein Pack",
//     icon: CalendarRange,
//     iconColor: "text-orange-500",
//     iconBg: "bg-orange-50",
//     badge: "",
//   },
// ];

// // Replace these image URLs with your own project assets whenever needed.
// const FOOD_IMAGES = {
//   all: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=85",
//   veg: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=85",
//   "non-veg":
//     "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=85",
// };

// const makePack = (
//   category,
//   title,
//   description,
//   features,
//   image = FOOD_IMAGES[category],
// ) => ({
//   category,
//   title,
//   description,
//   features,
//   image,
//   buttonLabel: "View in App",
//   buttonLink: "#app-promo",
// });

// const dailyFeatures = [
//   "Balanced protein foods",
//   "Fresh and nutritious",
//   "Ideal for daily needs",
// ];

// const weeklyFeatures = [
//   "Variety of protein foods",
//   "Better value",
//   "Great for fitness & health goals",
// ];

// const monthlyFeatures = [
//   "Complete nutrition support",
//   "Ideal for families",
//   "Helps maintain healthy habits",
// ];

// export const PROTEIN_PACKS = {
//   all: [
//     makePack(
//       "all",
//       "Daily Protein Pack",
//       "A convenient way to start your protein journey.",
//       dailyFeatures,
//     ),
//     makePack(
//       "all",
//       "Weekly Protein Pack",
//       "Plan ahead with protein-rich foods for the week.",
//       weeklyFeatures,
//     ),
//     makePack(
//       "all",
//       "Monthly Protein Pack",
//       "Build a consistent protein-food routine.",
//       monthlyFeatures,
//     ),
//   ],

//   veg: [
//     makePack(
//       "veg",
//       "Daily Veg Protein Pack",
//       "Enjoy plant-powered protein in your everyday meals.",
//       ["Fresh vegetables and legumes", "Protein-rich pulses", "Easy daily nutrition"],
//     ),
//     makePack(
//       "veg",
//       "Weekly Veg Protein Pack",
//       "Plan a delicious week of vegetarian protein foods.",
//       ["Beans, lentils and paneer", "Weekly food variety", "Ideal for active lifestyles"],
//     ),
//     makePack(
//       "veg",
//       "Monthly Veg Protein Pack",
//       "Make vegetarian protein a regular part of your routine.",
//       ["Plant-based protein options", "Family-friendly choices", "Build healthy food habits"],
//     ),
//   ],

//   "non-veg": [
//     makePack(
//       "non-veg",
//       "Daily Non-Veg Protein Pack",
//       "Get started with protein-rich non-vegetarian foods.",
//       ["Eggs and lean meat options", "Fresh food choices", "Suitable for daily meals"],
//     ),
//     makePack(
//       "non-veg",
//       "Weekly Non-Veg Protein Pack",
//       "Plan your week with a variety of protein-rich foods.",
//       ["Chicken, fish and eggs", "Weekly meal variety", "Fitness-friendly options"],
//     ),
//     makePack(
//       "non-veg",
//       "Monthly Non-Veg Protein Pack",
//       "Build a consistent routine with non-vegetarian protein.",
//       ["Variety of protein sources", "Options for families", "Convenient meal planning"],
//     ),
//   ],
// };


import {
  Sun,
  CalendarDays,
  CalendarRange,
} from "lucide-react";

export const PACK_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "veg", label: "Veg" },
  { id: "non-veg", label: "Non-Veg" },
  { id: "restaurants", label: "Restaurants" },
  { id: "eggs", label: "Eggs" },
  { id: "dairy", label: "Dairy" },
  { id: "fruits", label: "Fruits" },
  { id: "bakery", label: "Bakery" },
  { id: "home-foods", label: "Home Foods" },
  { id: "diet", label: "Diet" },
];

// Pack types
export const PACK_TYPES = [
  {
    id: "daily",
    title: "Daily Protein Pack",
    icon: Sun,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    badge: "",
  },
  {
    id: "weekly",
    title: "Weekly Protein Pack",
    icon: CalendarDays,
    iconColor: "text-green-700",
    iconBg: "bg-green-50",
    badge: "Most Popular",
  },
  {
    id: "monthly",
    title: "Monthly Protein Pack",
    icon: CalendarRange,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    badge: "",
  },
];

// Separate images for Daily, Weekly and Monthly packs
export const FOOD_IMAGES = {
  all: {
    daily: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=85",
  },

  veg: {
    daily: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=600&q=85",
  },

  "non-veg": {
    daily: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=85",
  },

  restaurants: {
    daily: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=85",
  },

  eggs: {
    daily: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=85",
  },

  dairy: {
    daily: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=85",
  },

  fruits: {
    daily: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=85",
  },

  bakery: {
    daily: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=85",
  },

  "home-foods": {
    daily: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=85",
  },

  diet: {
    daily: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=85",
    weekly: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=85",
    monthly: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=85",
  },
};

// Create pack data
const makePack = (
  category,
  packType,
  title,
  description,
  features,
) => ({
  category,
  packType,
  title,
  description,
  features,
  image:
    FOOD_IMAGES[category]?.[packType] ??
    FOOD_IMAGES.all[packType],
  buttonLabel: "View in App",
  buttonLink: "#app-promo",
});

// Daily features
const dailyFeatures = [
  "Balanced protein foods",
  "Fresh and nutritious",
  "Ideal for daily needs",
];

// Weekly features
const weeklyFeatures = [
  "Variety of protein foods",
  "Better value",
  "Great for fitness & health goals",
];

// Monthly features
const monthlyFeatures = [
  "Complete nutrition support",
  "Ideal for families",
  "Helps maintain healthy habits",
];

// Protein packs by category
export const PROTEIN_PACKS = {
  // All categories
  all: [
    makePack(
      "all",
      "daily",
      "Daily Protein Pack",
      "A convenient way to start your protein journey.",
      dailyFeatures,
    ),
    makePack(
      "all",
      "weekly",
      "Weekly Protein Pack",
      "Plan ahead with protein-rich foods for the week.",
      weeklyFeatures,
    ),
    makePack(
      "all",
      "monthly",
      "Monthly Protein Pack",
      "Build a consistent protein-food routine.",
      monthlyFeatures,
    ),
  ],

  // Veg category
  veg: [
    makePack(
      "veg",
      "daily",
      "Daily Veg Protein Pack",
      "Enjoy plant-powered protein in your everyday meals.",
      [
        "Fresh vegetables and legumes",
        "Protein-rich pulses",
        "Easy daily nutrition",
      ],
    ),
    makePack(
      "veg",
      "weekly",
      "Weekly Veg Protein Pack",
      "Plan a delicious week of vegetarian protein foods.",
      [
        "Beans, lentils and paneer",
        "Weekly food variety",
        "Ideal for active lifestyles",
      ],
    ),
    makePack(
      "veg",
      "monthly",
      "Monthly Veg Protein Pack",
      "Make vegetarian protein a regular part of your routine.",
      [
        "Plant-based protein options",
        "Family-friendly choices",
        "Build healthy food habits",
      ],
    ),
  ],

  // Non-Veg category
  "non-veg": [
    makePack(
      "non-veg",
      "daily",
      "Daily Non-Veg Protein Pack",
      "Get started with protein-rich non-vegetarian foods.",
      [
        "Eggs and lean meat options",
        "Fresh food choices",
        "Suitable for daily meals",
      ],
    ),
    makePack(
      "non-veg",
      "weekly",
      "Weekly Non-Veg Protein Pack",
      "Plan your week with a variety of protein-rich foods.",
      [
        "Chicken, fish and eggs",
        "Weekly meal variety",
        "Fitness-friendly options",
      ],
    ),
    makePack(
      "non-veg",
      "monthly",
      "Monthly Non-Veg Protein Pack",
      "Build a consistent routine with non-vegetarian protein.",
      [
        "Variety of protein sources",
        "Options for families",
        "Convenient meal planning",
      ],
    ),
  ],


  // restaurant category
  restaurants: [
    makePack(
      "restaurants",
      "daily",
      "Daily Restaurants Protein Pack",
      "Discover protein-rich options at your favorite restaurants.",
      [
        "Diverse restaurant selections",
        "Convenient meal solutions",
        "Ideal for busy lifestyles",
      ],
    ),
    makePack(
      "restaurants",
      "weekly",
      "Weekly Restaurants Protein Pack",
      "Plan a delicious week of protein-rich restaurant meals.",
      [
        "Weekly dining variety",
        "Flexible meal options",
        "Great for social gatherings",
      ],
    ),
    makePack(
      "restaurants",
      "monthly",
      "Monthly Restaurants Protein Pack",
      "Make restaurant protein a regular part of your routine.",
      [
        "Monthly dining plans",
        "Family-friendly choices",
        "Build healthy eating habits",
      ],
    ),
  ],


     // Eggs category
  eggs: [
    makePack(
      "eggs",
      "daily",
      "Daily Eggs Protein Pack",
      "Start your day with a protein-rich egg-based meal.",
      [
        "Fresh eggs and egg products",
        "Quick and easy preparation",
        "Ideal for busy mornings",
      ],
    ),
    makePack(
      "eggs",
      "weekly",
      "Weekly Eggs Protein Pack",
      "Plan a delicious week of egg-based protein meals.",
      [
        "Fresh eggs and egg products",
        "Weekly meal variety",
        "Ideal for active lifestyles",
      ],
    ),
    makePack(
      "eggs",
      "monthly",
      "Monthly Eggs Protein Pack",
      "Make egg-based protein a regular part of your routine.",
      [
        "Fresh eggs and egg products",
        "Monthly meal planning",
        "Convenient nutrition",
        "Family-friendly choices",
        "Build healthy food habits",
      ],
    ),
  ],


  // Dairy category
  dairy: [
    makePack(
      "dairy",
      "daily",
      "Daily Dairy Protein Pack",
      "Enjoy plant-powered protein in your everyday meals.",
      [
        "Fresh vegetables and legumes",
        "Protein-rich pulses",
        "Easy daily nutrition",
      ],
    ),
    makePack(
      "dairy",
      "weekly",
      "Weekly Dairy Protein Pack",
      "Plan a delicious week of dairy-based protein meals.",
      [
        "Fresh dairy products",
        "Weekly meal variety",
        "Ideal for active lifestyles",
      ],
    ),
    makePack(
      "dairy",
      "monthly",
      "Monthly Dairy Protein Pack",
      "Make dairy-based protein a regular part of your routine.",
      [
        "Fresh dairy products",
        "Monthly meal planning",
        "Convenient nutrition",
        "Family-friendly choices",
        "Build healthy food habits",
      ],
    ),
  ],


  // Fruits category
  fruits: [
    makePack(
      "fruits",
      "daily",
      "Daily Fruits Protein Pack",
      "Enjoy plant-powered protein in your everyday meals.",
      [
        "Fresh vegetables and legumes",
        "Protein-rich pulses",
        "Easy daily nutrition",
      ],
    ),
    makePack(
      "fruits",
      "weekly",
      "Weekly Fruits Protein Pack",
      "Plan a delicious week of fruit-based protein meals.",
      [
        "Fresh fruits and fruit products",
        "Weekly food variety",
        "Ideal for active lifestyles",
      ],
    ),
    makePack(
      "fruits",
      "monthly",
      "Monthly Fruits Protein Pack",
      "Make fruit-based protein a regular part of your routine.",
      [
        "Fresh fruits and fruit products",
        "Monthly meal planning",
        "Convenient nutrition",
        "Family-friendly choices",
        "Build healthy food habits",
      ],
    ),
  ],


  // Bakery category
  bakery: [
    makePack(
      "bakery",
      "daily",
      "Daily Bakery Protein Pack",
      "Enjoy plant-powered protein in your everyday meals.",
      [
        "Fresh vegetables and legumes",
        "Protein-rich pulses",
        "Easy daily nutrition",
      ],
    ),
    makePack(
      "bakery",
      "weekly",
      "Weekly Bakery Protein Pack",
      "Plan a delicious week of bakery-based protein meals.",
      [
        "Fresh bakery products",
        "Weekly food variety",
        "Ideal for active lifestyles",
      ],
    ),
    makePack(
      "bakery",
      "monthly",
      "Monthly Bakery Protein Pack",
      "Make bakery-based protein a regular part of your routine.",
      [
        "Fresh bakery products",
        "Monthly meal planning",
        "Convenient nutrition",
        "Family-friendly choices",
        "Build healthy food habits",
      ],
    ),
  ],

    
    // Home foods category
    "home-foods": [
      makePack(
        "home-foods",
        "daily",
        "Daily Home Foods Protein Pack",
        "Enjoy plant-powered protein in your everyday meals.",
        [
          "Fresh vegetables and legumes",
          "Protein-rich pulses",
          "Easy daily nutrition",
        ],
      ),
      makePack(
        "home-foods",
        "weekly",
        "Weekly Home Foods Protein Pack",
        "Plan a delicious week of home-based protein meals.",
        [
          "Fresh home foods",
          "Weekly food variety",
          "Ideal for active lifestyles",
        ],
      ),
      makePack(
        "home-foods",
        "monthly",
        "Monthly Home Foods Protein Pack",
        "Make home-based protein a regular part of your routine.",
        [
          "Fresh home foods",
          "Monthly meal planning",
          "Convenient nutrition",
          "Family-friendly choices",
          "Build healthy food habits",
        ],
      ),
    ],


    // Diet category
    "diet": [
      makePack(
        "diet",
        "daily",
        "Daily Diet Protein Pack",
        "Enjoy plant-powered protein in your everyday meals.",
        [
          "Fresh vegetables and legumes",
          "Protein-rich pulses",
          "Easy daily nutrition",
        ],
      ),
      makePack(
        "diet",
        "weekly",
        "Weekly Diet Protein Pack",
        "Plan a delicious week of diet-based protein meals.",
        [
          "Fresh diet foods",
          "Weekly food variety",
          "Ideal for active lifestyles",
        ],
      ),
      makePack(
        "diet",
        "monthly",
        "Monthly Diet Protein Pack",
        "Make diet-based protein a regular part of your routine.",
        [
          "Fresh diet foods",
          "Monthly meal planning",
          "Convenient nutrition",
          "Family-friendly choices",
          "Build healthy food habits",
        ],
      ),
    ],

  };


  