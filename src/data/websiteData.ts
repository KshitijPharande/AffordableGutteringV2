export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  pricingHint: string;
  iconName: string;
}

export interface GutterProfile {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  bestFor: string;
  waterCapacity: string;
  durability: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  stars: number;
  quote: string;
  service: string;
  date: string;
}

export const COMPANY_INFO = {
  name: "Affordable Guttering & Roof Maintenance",
  shortName: "Affordable Guttering",
  tagline: "We keep it affordable without compromising on quality.",
  quoteOffer: "We will beat any genuine quote by 15%!",
  gutterWarranty: "15-Year Comprehensive Gutter & Downpipe Warranty",
  roofWarranty: "30-Year Long-Life Roof Warranty",
  experience: "20+ Years Local Canterbury Experience",
  phone: "0508 11 33 99",
  phoneRaw: "0508113399",
  email: "affordablegutteringltd@live.com",
  hours: "Mon - Sun: 7:00 AM - 7:00 PM (Emergency Callouts Anytime)",
  serviceAreas: [
    "Christchurch Central",
    "Rangiora & North Canterbury",
    "Rolleston & Selwyn",
    "Riccarton & Fendalton",
    "Papanui & Merivale",
    "Halswell & Wigram",
    "Sumner & Ferrymead",
    "Kaiapoi & Pegasus",
    "Ashburton & Wider Canterbury"
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "guttering-spouting",
    slug: "gutter-installation-spouting",
    title: "GUTTERING & SPOUTING",
    shortDesc: "Heavy-duty Box, Quad & Half Round gutter replacements and precision spouting repairs.",
    fullDesc: "Don't settle for flimsy, thin continuous gutters sold at inflated competitor markups. We supply and install heavy-gauge Colorsteel and commercial-grade aluminium profiles engineered to withstand Canterbury's torrential downpours and fierce winds.",
    image: "/images/service-guttering.jpg",
    features: [
      "Heavy-gauge Box, Quad & Half Round profiles",
      "Reinforced heavy-duty internal/external brackets",
      "Optimal downpipe positioning for storm capacity",
      "Backed by our 15-Year Gutter & Downpipe Warranty"
    ],
    pricingHint: "Free on-site assessment & 15% price beat guarantee",
    iconName: "Shield"
  },
  {
    id: "gutter-cleaning",
    slug: "vacuum-gutter-cleaning",
    title: "PROFESSIONAL GUTTER CLEANING",
    shortDesc: "High-power vacuum extraction removing leaves, pine needles, and heavy mud without mess.",
    fullDesc: "Our industrial-strength vacuum gutter cleaning reaches up to 3 storeys safely from the ground. We remove compacted sludge and flush downpipes, protecting your foundation from overflow damage.",
    image: "/images/service-gutter-cleaning.jpg",
    features: [
      "High-reach vacuum system – no roof walk damage",
      "Full downpipe flush & drainage flow testing",
      "Before & after photographic proof provided",
      "Preventative maintenance to preserve your 15-yr warranty"
    ],
    pricingHint: "Fast booking across Christchurch, Rangiora & Rolleston",
    iconName: "Sparkles"
  },
  {
    id: "fascia-spouting",
    slug: "fascia-spouting-repairs",
    title: "FASCIA & SPOUTING REPAIRS",
    shortDesc: "Fascia board repair, timber rot replacement, and heavy-duty spouting realignment.",
    fullDesc: "Rotten, sagging, or unlevel fascia causes water pooling and overflow. We restore timber fascia boards or install Colorsteel fascia capping for a durable, clean finish.",
    image: "/images/service-fascia.jpg",
    features: [
      "Timber fascia repair & anti-rot treatments",
      "Colorsteel fascia capping conversions",
      "Laser-leveled fall for zero standing water",
      "Complete soffit & barge board inspection"
    ],
    pricingHint: "Custom quotes with bundle discount for full replacement",
    iconName: "Home"
  },
  {
    id: "roof-repairs",
    slug: "roof-repairs-restoration",
    title: "ROOF REPAIRS & MAINTENANCE",
    shortDesc: "Tile replacements, leak repairs, flashing resealing, and ridge capping restoration.",
    fullDesc: "Protect your home with specialized roof maintenance. From storm leaks and fractured concrete tiles to re-pointing ridge caps, we deliver durable fixes backed by our 30-Year Roof Warranty.",
    image: "/images/service-roof-repairs.jpg",
    features: [
      "Emergency leak detection & rapid storm sealing",
      "Mortar re-bedding & flexible ridge pointing",
      "Valley iron, chimney & skylight flashing renewal",
      "Backed by our 30-Year Long-Life Roof Warranty"
    ],
    pricingHint: "Fast emergency response across Canterbury",
    iconName: "Wrench"
  },
  {
    id: "roof-painting",
    slug: "roof-painting-coating",
    title: "ROOF PAINTING & RESTORATION",
    shortDesc: "High-pressure wash, rust inhibition, and multi-coat weatherproof membrane restoration.",
    fullDesc: "Revitalize your tired Colorsteel or concrete tile roof. Our multi-coat protective membrane protects against extreme South Island UV rays, moss growth, and coastal weather.",
    image: "/images/service-roof-painting.jpg",
    features: [
      "Moss/lichen kill wash & high-pressure cleaning",
      "Anti-corrosive rust-converting primers",
      "Dual-coat 100% acrylic protective membrane",
      "30-Year Roof Warranty protection"
    ],
    pricingHint: "Extends roof life by 20+ years at a fraction of replacement cost",
    iconName: "Paintbrush"
  }
];

export const QUALITY_COMPARISON = [
  {
    feature: "Material Gauge / Thickness",
    ourQuality: "Heavy-Gauge 0.55mm+ Colorsteel & Thick Aluminium",
    competitors: "Thin 0.40mm continuous coil (prone to denting & warping)"
  },
  {
    feature: "Gutter & Downpipe Warranty",
    ourQuality: "15-Year Comprehensive Warranty",
    competitors: "Typically 2 to 5 years limited"
  },
  {
    feature: "Roofing Workmanship Warranty",
    ourQuality: "30-Year Long-Life Warranty",
    competitors: "Standard 5 to 10 years"
  },
  {
    feature: "Profile Options",
    ourQuality: "High-Capacity Box, South Island Quad & Architectural Half Round",
    competitors: "Only standard thin continuous style"
  },
  {
    feature: "Storm & Heavy Rain Handling",
    ourQuality: "Engineered high volumetric capacity & external overflow slots",
    competitors: "Low volume capacity with frequent overflow into eaves"
  },
  {
    feature: "Pricing & Value",
    ourQuality: "Honest Fair Pricing + We Beat Any Quote by 15%",
    competitors: "Inflated retail markups on cheap thin materials"
  }
];

export const GUTTER_PROFILES: GutterProfile[] = [
  {
    id: "box-profile",
    name: "Box Profile",
    subtitle: "Heavy Rainfall Intensity & Fewer Downpipes",
    description: "Traditional Box shape specifically designed for heavy rainfall intensity, where fewer downpipes are desired.",
    image: "/images/roof.jpg",
    bestFor: "Heavy rainfall intensity, modern architectural homes & low-pitch roofs",
    waterCapacity: "Maximum volumetric capacity for high-volume storm flow",
    durability: "Heavy-gauge Colorsteel & marine-grade aluminium",
    features: [
      "Traditional Box shape for maximum water-carrying capacity",
      "Specifically engineered where fewer downpipes are desired",
      "Handles heavy rainfall intensity without overflowing",
      "15-Year Comprehensive Gutter & Downpipe Warranty"
    ]
  },
  {
    id: "quad-profile",
    name: "Quad Profile",
    subtitle: "South Island Tested & Proven",
    description: "Quad Profile has been specifically designed, made and tested for the South Island environment.",
    image: "/images/quad.jpg",
    bestFor: "Classic & contemporary residential homes across Canterbury",
    waterCapacity: "Engineered flow with built-in external overflow slots",
    durability: "Tested for South Island freeze-thaw cycles & high wind zones",
    features: [
      "Specifically designed, made and tested for the South Island environment",
      "Classic profile aesthetic with built-in overflow protection",
      "Seamless roll-formed on-site for custom fit",
      "15-Year Comprehensive Gutter & Downpipe Warranty"
    ]
  },
  {
    id: "half-round-profile",
    name: "Half Round Profile",
    subtitle: "Classic Kiwi Homes & Architectural Builds",
    description: "Half Round is perfect for the classic kiwi home through to a unique architectural design.",
    image: "/images/products.jpg",
    bestFor: "Classic Kiwi homes through to high-end unique architectural designs",
    waterCapacity: "Superior self-cleaning hydraulic curve",
    durability: "Ultra-rigid curved shape with heavy-duty brackets",
    features: [
      "Perfect for the classic kiwi home through to unique architectural designs",
      "Natural self-flushing contour reduces debris accumulation",
      "Architectural external bracket styling",
      "15-Year Comprehensive Gutter & Downpipe Warranty"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    location: "Christchurch",
    stars: 5,
    quote: "Great service, on time and very professional. Our new gutters look amazing and handled the recent storm with zero issues. Highly recommended!",
    service: "Full Gutter Replacement & Box Profile",
    date: "2 weeks ago"
  },
  {
    id: "2",
    name: "Mark T.",
    location: "Rolleston",
    stars: 5,
    quote: "Replaced our old spouting and fascia boards. Excellent workmanship, polite crew, and the price was significantly cheaper than two other quotes we received.",
    service: "Fascia & Spouting Repair",
    date: "1 month ago"
  },
  {
    id: "3",
    name: "James K.",
    location: "Rangiora",
    stars: 5,
    quote: "Quick response and did a fantastic job on our roof leak and ridge tile repairs. Wouldn't hesitate to use Affordable Guttering again.",
    service: "Roof Tile & Ridge Capping Repairs",
    date: "3 weeks ago"
  },
  {
    id: "4",
    name: "David & Linda P.",
    location: "Riccarton, Christchurch",
    stars: 5,
    quote: "They honoured their 15% price beat pledge without any hassle! The vacuum gutter cleaning and new downpipe install was prompt and spotless.",
    service: "Vacuum Gutter Cleaning & Downpipes",
    date: "Just recently"
  }
];

export const FAQS = [
  {
    question: "What warranties do you provide on gutters and roofs?",
    answer: "We provide an industry-leading 15-Year Comprehensive Warranty on all new gutter and downpipe installations, and an exceptional 30-Year Long-Life Warranty on all our roofing work and restorations."
  },
  {
    question: "Why are your gutter profiles better than the thin continuous style sold by competitors?",
    answer: "Many competitors install cheap, thin 0.40mm continuous coil at high markups. In Canterbury's strong winds, frost, and storms, thin gutters buckle, warp, and overflow easily. We install heavy-gauge (0.55mm+) Box, Quad, and Half Round profiles with reinforced brackets that will never sag and handle maximum water volume."
  },
  {
    question: "How does your 'Beat any quote by 15%' offer work?",
    answer: "If you have received a written, itemized quote from any registered local Canterbury roofing or guttering company, simply show it to us. We will beat the total price by 15% guaranteed!"
  },
  {
    question: "What areas of Canterbury do you service?",
    answer: "We cover Greater Christchurch, Rangiora, Rolleston, Kaiapoi, Riccarton, Fendalton, Selwyn, Sumner, Pegasus, and surrounding Canterbury rural districts."
  },
  {
    question: "Do you specialize in gutter cleaning and maintenance?",
    answer: "Yes! Professional vacuum gutter cleaning, downpipe flushing, and spouting repairs are our primary expertise. We keep your gutters free of blockages and prevent costly internal water damage."
  },
  {
    question: "What is the difference between Box, Quad, and Half Round gutters?",
    answer: "Quad is the South Island standard with overflow slots. Box profile provides maximum volumetric capacity for heavy rainfall on large roofs. Half Round offers superior self-cleaning flow and an elegant architectural heritage look."
  }
];
