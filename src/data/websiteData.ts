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

export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "guttering" | "fascia" | "cleaning" | "roofing";
  image: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "Affordable Guttering & Roof Maintenance",
  shortName: "Affordable Guttering",
  tagline: "We keep it affordable without compromising on quality.",
  quoteOffer: "We will beat any genuine quote by 15%!",
  warranties: [
    { title: "30-Year Roof Replacement", desc: "Long-life heavy-gauge Colorsteel & membrane roofing warranty" },
    { title: "15-Year Marine-Grade Colorsteel", desc: "For all new guttering, spouting & downpipe installations" },
    { title: "10-Year Guarantee Against Leaks", desc: "Comprehensive leak-free guarantee on all gutters & downpipes" },
    { title: "15% Price Beat Guarantee", desc: "We beat any written competitor quote across Canterbury" }
  ],
  roofWarranty: "30-Year Roof Replacement Warranty",
  gutterWarranty: "15-Year Marine-Grade Colorsteel & Downpipe Warranty",
  leakWarranty: "10-Year Guarantee Against Leaks for Gutters & Downpipes",
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
    id: "gutter-cleaning",
    slug: "vacuum-gutter-cleaning",
    title: "GUTTER VACUUMING & CLEANING",
    shortDesc: "High-power industrial vacuum extraction, downpipe flushing & anti-moss maintenance.",
    fullDesc: "Our high-power industrial vacuum gutter cleaning system extracts wet sludge, leaves, pine needles, and mud from the safety of the ground up to 3 storeys. We flush downpipes and prevent blockages that cause interior flooding.",
    image: "/images/service-gutter-cleaning.jpg",
    features: [
      "High-power commercial vacuum extraction – no mess",
      "Full downpipe unblocking & flow testing",
      "Safe multi-storey reach without damaging roof tiles",
      "Essential maintenance to keep gutters flowing freely"
    ],
    pricingHint: "Fast booking across Christchurch, Rangiora & Rolleston",
    iconName: "Sparkles"
  },
  {
    id: "guttering-spouting",
    slug: "gutter-installation-spouting",
    title: "GUTTERING & DOWNPIPES",
    shortDesc: "15-year marine-grade Colorsteel gutters & downpipes with a 10-year guarantee against leaks.",
    fullDesc: "Don't settle for flimsy, thin continuous gutters sold at high competitor markups. We supply and install heavy-gauge marine-grade Colorsteel and commercial aluminium Box, Quad, and Half Round profiles engineered for Canterbury storms.",
    image: "/images/real-job-gutter-finish.jpg",
    features: [
      "15-Year Marine-Grade Colorsteel & Downpipe Warranty",
      "10-Year Guarantee Against Leaks for Gutters & Downpipes",
      "Heavy-gauge Box, Quad & Half Round profiles",
      "Heavy-duty internal/external reinforced brackets"
    ],
    pricingHint: "Free on-site assessment & 15% price beat guarantee",
    iconName: "Shield"
  },
  {
    id: "fascia-spouting",
    slug: "fascia-spouting-repairs",
    title: "FASCIA REPAIRS & COLORSTEEL PANELS",
    shortDesc: "Repainting all roof fascias, repairs and replacement, plus affordable Colorsteel fascia cover panels.",
    fullDesc: "Complete fascia care: we repair and repaint all timber roof fascias, and install affordable Colorsteel fascia cover panels to encapsulate rotten timber or rusty sections, giving your home a brand new weatherproof exterior.",
    image: "/images/real-job-fascia-roofline.jpg",
    features: [
      "Affordable Colorsteel fascia panels to cover rotten timber or rust",
      "Complete repainting and sealing of all roof fascias",
      "Full timber fascia repairs, realignment and replacements",
      "Seamless integration with new marine-grade Colorsteel gutters"
    ],
    pricingHint: "Cost-effective alternative to costly full timber rebuilds",
    iconName: "Home"
  },
  {
    id: "roof-repairs",
    slug: "roof-repairs-restoration",
    title: "ROOF REPAIRS & MAINTENANCE",
    shortDesc: "Tile replacements, leak repairs, flashing sealing, and ridge capping restoration.",
    fullDesc: "Specialized Canterbury roof maintenance. From emergency storm leaks and cracked concrete tiles to re-pointing mortar ridge caps and flashing renewals, we deliver permanent repairs.",
    image: "/images/service-roof-repairs.jpg",
    features: [
      "Emergency leak detection & rapid storm sealing",
      "Concrete tile replacement & flexible ridge pointing",
      "Valley iron, chimney & skylight flashing renewal",
      "Backed by our Canterbury workmanship guarantee"
    ],
    pricingHint: "Fast emergency response across Canterbury",
    iconName: "Wrench"
  },
  {
    id: "roof-painting",
    slug: "roof-painting-spray",
    title: "ROOF SPRAY PAINTING & RESTORATION",
    shortDesc: "Airless spray gun application with multi-coat weatherproof Colorsteel protective membrane.",
    fullDesc: "We use professional high-pressure airless spray painting guns (never messy rollers) to achieve an even, high-build protective coating across corrugated iron and tile roofs. Includes anti-corrosion rust inhibitors and UV barrier technology.",
    image: "/images/service-roof-painting.jpg",
    features: [
      "Professional high-pressure airless spray gun application",
      "Rust-converting primers & anti-corrosion barrier coats",
      "Dual-coat 100% acrylic Colorsteel protective membrane",
      "Extends roof lifespan by 20+ years with stunning curb appeal"
    ],
    pricingHint: "Premium factory-like finish at a fraction of re-roofing cost",
    iconName: "Paintbrush"
  },
  {
    id: "roof-washing",
    slug: "roof-washing-moss-treatment",
    title: "ROOF WASHING & MOSS TREATMENT",
    shortDesc: "Soft-wash chemical treatment eliminating moss, lichen, black mold and South Island grime.",
    fullDesc: "Gentle yet lethal moss and lichen eradication. We apply biodegradable biocidal treatments and low-pressure soft washing that clean your roof without lifting tiles or stripping factory coatings.",
    image: "/images/about-gutter-water.jpg",
    features: [
      "Targeted moss, lichen & fungal spore elimination",
      "Low-pressure soft wash protecting roof integrity",
      "Pre-paint preparation & standalone maintenance",
      "Prevents gutter damming and water capillary backup"
    ],
    pricingHint: "Recommended every 2–3 years for Canterbury roofs",
    iconName: "Droplets"
  },
  {
    id: "roof-replacement",
    slug: "roof-replacement",
    title: "ROOF REPLACEMENT (30-YEAR WARRANTY)",
    shortDesc: "Full roof replacements with premium Colorsteel backed by an unmatched 30-year warranty.",
    fullDesc: "Complete re-roofing solutions for residential Canterbury homes. We strip old corroded iron or brittle concrete tiles and install modern, insulated long-run Colorsteel roofing engineered to last generations.",
    image: "/images/service-roof-replacement.jpg",
    features: [
      "30-Year Roof Replacement Warranty",
      "Genuine NZ Colorsteel heavy-gauge profiles",
      "Building code compliant insulation & underlay",
      "Comprehensive warranty transferability"
    ],
    pricingHint: "Competitive quotes with 15% price beat promise",
    iconName: "Building"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Official Branded Team On-Site Installation",
    category: "guttering",
    image: "/images/real-job-branded-installer.jpg",
    description: "Our certified installer in official Affordable Guttering Ltd gear fitting Colorsteel downpipes and spouting on a Kiwi home."
  },
  {
    id: "gal-2",
    title: "Seamless Veranda Colorsteel Guttering",
    category: "guttering",
    image: "/images/real-job-gutter-finish.jpg",
    description: "Heavy-gauge dark Colorsteel gutters with precision mitred external corners on veranda roofline."
  },
  {
    id: "gal-3",
    title: "Roofline, Timber Pergola & Fascia Restoration",
    category: "fascia",
    image: "/images/real-job-fascia-roofline.jpg",
    description: "Complete fascia repairs, timber restoration, and new Colorsteel spouting integration."
  },
  {
    id: "gal-4",
    title: "Marine-Grade Round Downpipe Preparation",
    category: "guttering",
    image: "/images/real-job-downpipe-prep.jpg",
    description: "Custom on-site assembly and precision cutting of heavy-gauge Colorsteel round downpipes."
  },
  {
    id: "gal-5",
    title: "Residential Gutter Replacement & Box Profile",
    category: "guttering",
    image: "/images/IMG_0104.JPG",
    description: "Traditional high-capacity Box profile installation handling high-volume storm runoff."
  },
  {
    id: "gal-6",
    title: "Precision Downpipe Fitting & Sealing",
    category: "guttering",
    image: "/images/IMG_0113.JPG",
    description: "Sealed Colorsteel downpipe connection with leak-free 10-year guarantee."
  },
  {
    id: "gal-7",
    title: "Custom Colorsteel Mitred Corner Craftsmanship",
    category: "guttering",
    image: "/images/IMG_0115.JPG",
    description: "Hand-crafted seamless corner joins eliminating typical weak points and leaks."
  },
  {
    id: "gal-8",
    title: "Full Spouting & Fascia Board Overhaul",
    category: "fascia",
    image: "/images/IMG_0553.JPG",
    description: "Rotten timber fascia encapsulated with affordable Colorsteel cover panels."
  },
  {
    id: "gal-9",
    title: "South Island Quad Profile Spouting",
    category: "guttering",
    image: "/images/IMG_0573.JPG",
    description: "Classic South Island Quad profile with built-in overflow slots."
  },
  {
    id: "gal-10",
    title: "High-Reach Vacuum Gutter Extraction",
    category: "cleaning",
    image: "/images/IMG_6406.JPG",
    description: "Safe ground-to-roof industrial vacuum cleaning removing compacted sludge and debris."
  },
  {
    id: "gal-11",
    title: "Residential Roofline & Gutter Renewal",
    category: "guttering",
    image: "/images/IMG_6491.JPG",
    description: "Complete spouting replacement protecting home foundations from water ingress."
  },
  {
    id: "gal-12",
    title: "Fascia Board Repainting & Colorsteel Panels",
    category: "fascia",
    image: "/images/IMG_7058.JPG",
    description: "Clean Colorsteel panel cladding over weathered timber fascias."
  },
  {
    id: "gal-13",
    title: "Airless Spray Gun Roof Membrane Coating",
    category: "roofing",
    image: "/images/IMG_7825.JPG",
    description: "High-pressure airless spray gun coating providing thick, even weatherproofing across corrugated roofing."
  },
  {
    id: "gal-14",
    title: "Roof Tile & Ridge Capping Mortar Restoration",
    category: "roofing",
    image: "/images/IMG_7993 - Copy - Copy.JPG",
    description: "Re-pointing fractured mortar ridge caps and replacing damaged concrete tiles."
  },
  {
    id: "gal-15",
    title: "Roof Valley & Spouting Maintenance",
    category: "roofing",
    image: "/images/IMG_8003 - Copy.JPG",
    description: "Valley iron inspection, clearing, and flashing resealing."
  },
  {
    id: "gal-16",
    title: "Commercial Vacuum Gutter Cleaning & Flow Test",
    category: "cleaning",
    image: "/images/IMG_8186.JPG",
    description: "Downpipe flushed and certified 100% free of debris and blockages."
  },
  {
    id: "gal-17",
    title: "Heavy-Gauge Box Profile Colorsteel Installation",
    category: "guttering",
    image: "/images/IMG_8259.JPG",
    description: "Traditional Box profile handling heavy rainfall intensity with fewer downpipes."
  },
  {
    id: "gal-18",
    title: "Pre-Paint Roof Soft Wash & Moss Treatment",
    category: "roofing",
    image: "/images/IMG_8487.JPG",
    description: "Biodegradable biocidal moss and lichen elimination preserving roof integrity."
  },
  {
    id: "gal-19",
    title: "Full Canterbury Home Spouting Transformation",
    category: "guttering",
    image: "/images/IMG_8488.JPG",
    description: "Complete guttering, downpipe replacement, and fascia protection package."
  },
  {
    id: "gal-20",
    title: "Eaves Spouting & Downpipe Drainage Connection",
    category: "guttering",
    image: "/images/thumbnail_IMG_4397 - Copy.jpg",
    description: "Clean connection to stormwater drainage with reinforced downpipe brackets."
  },
  {
    id: "gal-21",
    title: "Colorsteel Valley Iron & Gutter Alignment",
    category: "guttering",
    image: "/images/thumbnail_IMG_4401.jpg",
    description: "Laser-leveled gutter fall ensuring zero standing water or sagging."
  },
  {
    id: "gal-22",
    title: "Fascia Board Timber Repair & Preparation",
    category: "fascia",
    image: "/images/thumbnail_IMG_7099.jpg",
    description: "Treating and restoring timber fascia before fitting Colorsteel protective capping."
  },
  {
    id: "gal-23",
    title: "Gutter Vacuum Clean Inspection",
    category: "cleaning",
    image: "/images/thumbnail_IMG_7101.jpg",
    description: "Spotless gutter channels and clear drain outlets after industrial vacuuming."
  },
  {
    id: "gal-24",
    title: "Multi-Storey Vacuum Gutter Clean",
    category: "cleaning",
    image: "/images/thumbnail_IMG_7102.jpg",
    description: "Reaching high gutters safely without heavy ladders leaning on fragile spouting."
  },
  {
    id: "gal-25",
    title: "Downpipe Sludge & Root Extraction",
    category: "cleaning",
    image: "/images/thumbnail_IMG_7117.jpg",
    description: "Removing stubborn downpipe clogs and restoring maximum storm flow."
  },
  {
    id: "gal-26",
    title: "Airless Spray Coating Coverage on Metal Roof",
    category: "roofing",
    image: "/images/thumbnail_IMG_7124.jpg",
    description: "Thick, even acrylic membrane coverage with UV sun blockers."
  },
  {
    id: "gal-27",
    title: "Completed Colorsteel Roof Restoration Finish",
    category: "roofing",
    image: "/images/thumbnail_IMG_7125.jpg",
    description: "Flawless factory-smooth roof finish with 30-year long-life protection."
  },
  {
    id: "gal-28",
    title: "Colorsteel Gutter Corner Jointing",
    category: "guttering",
    image: "/images/thumbnail_image.png",
    description: "Riveted and sealed internal bracket corner construction."
  },
  {
    id: "gal-29",
    title: "Timber Fascia Replacement & Paint Finish",
    category: "fascia",
    image: "/images/thumbnail_image (2).png",
    description: "Repainted and sealed timber fascia boards matching window joinery."
  },
  {
    id: "gal-30",
    title: "Full Spouting System & Downpipe Installation",
    category: "guttering",
    image: "/images/thumbnail_image (4).png",
    description: "New marine-grade Colorsteel spouting with 15-year warranty."
  },
  {
    id: "gal-31",
    title: "Colorsteel Corrugated Roof & Gutter Synergy",
    category: "roofing",
    image: "/images/thumbnail_image (7).png",
    description: "Architectural corrugated Colorsteel roof and gutter synergy."
  },
  {
    id: "gal-32",
    title: "Airless Spray Gun Roof Painting In Progress",
    category: "roofing",
    image: "/images/service-roof-painting.jpg",
    description: "Tradesperson in harness applying protective weatherproof membrane with airless spray gun."
  },
  {
    id: "gal-33",
    title: "Long-Run Colorsteel Roof Replacement (30-Yr Warranty)",
    category: "roofing",
    image: "/images/service-roof-replacement.jpg",
    description: "Brand new dark charcoal Colorsteel corrugated long-run roofline with 30-year warranty."
  }
];

export const QUALITY_COMPARISON = [
  {
    feature: "Roof Replacement Warranty",
    ourQuality: "30-Year Roof Replacement Warranty",
    competitors: "Standard 5 to 10 years"
  },
  {
    feature: "Gutter Material & Warranty",
    ourQuality: "15-Year Marine-Grade Colorsteel & Downpipes",
    competitors: "Thin 0.40mm coil with limited 2–5 years"
  },
  {
    feature: "Leak Guarantee",
    ourQuality: "10-Year Guarantee Against Leaks for Gutters & Downpipes",
    competitors: "No specific leak guarantee"
  },
  {
    feature: "Roof Painting Application",
    ourQuality: "High-Pressure Airless Spray Gun (Even Factory Coating)",
    competitors: "Rollers or uneven brush coats"
  },
  {
    feature: "Fascia Care & Solutions",
    ourQuality: "Repainting + Affordable Colorsteel Panels for Rotten/Rusty Timber",
    competitors: "Expensive total rebuilds or quick caulk fixes"
  },
  {
    feature: "Gutter Cleaning",
    ourQuality: "Commercial Vacuum System + Downpipe Flushing",
    competitors: "Manual hand scooping (leaves sludge behind)"
  },
  {
    feature: "Pricing & Value",
    ourQuality: "Honest Fair Pricing + We Beat Any Quote by 15%",
    competitors: "Inflated retail markups"
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
    durability: "15-Year Marine-Grade Colorsteel & 10-Year Leak-Free Guarantee",
    features: [
      "Traditional Box shape for maximum water-carrying capacity",
      "Specifically engineered where fewer downpipes are desired",
      "Handles heavy rainfall intensity without overflowing",
      "15-Year Marine-Grade Colorsteel & 10-Year Leak Guarantee"
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
      "15-Year Marine-Grade Colorsteel & 10-Year Leak Guarantee"
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
      "15-Year Marine-Grade Colorsteel & 10-Year Leak Guarantee"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    location: "Christchurch",
    stars: 5,
    quote: "Great service, on time and very professional. Our new marine-grade Colorsteel gutters look amazing and handled the storm with zero issues. 10-year leak guarantee gives great peace of mind!",
    service: "Full Gutter Replacement & Box Profile",
    date: "2 weeks ago"
  },
  {
    id: "2",
    name: "Mark T.",
    location: "Rolleston",
    stars: 5,
    quote: "They fitted Colorsteel fascia panels over our rotten timber fascias and painted the remaining trim. Saved us thousands compared to replacing all the timber! Brilliant job.",
    service: "Colorsteel Fascia Panels & Spouting",
    date: "1 month ago"
  },
  {
    id: "3",
    name: "James K.",
    location: "Rangiora",
    stars: 5,
    quote: "Spray painted our tired corrugated roof with an airless spray gun. The finish is immaculate, like a brand new Colorsteel roof. Highly recommend Affordable Guttering.",
    service: "Roof Spray Painting & Restoration",
    date: "3 weeks ago"
  },
  {
    id: "4",
    name: "David & Linda P.",
    location: "Riccarton, Christchurch",
    stars: 5,
    quote: "The vacuum gutter cleaning was fast, mess-free and unblocked two jammed downpipes. Honoured their 15% price beat offer without hesitation.",
    service: "Vacuum Gutter Cleaning & Downpipes",
    date: "Just recently"
  }
];

export const FAQS = [
  {
    question: "What specific warranties do you provide on gutters, downpipes, and roofs?",
    answer: "We provide upfront, written guarantees: a 30-Year Warranty on Roof Replacements, a 15-Year Marine-Grade Colorsteel Warranty on new Gutters & Downpipes, and a 10-Year Guarantee Against Leaks for all gutters and downpipes."
  },
  {
    question: "How do you repair rotten or rusty roof fascias?",
    answer: "We offer complete fascia restoration including repainting all timber roof fascias, structural repairs, and our popular affordable Colorsteel fascia cover panels that neatly encapsulate rotten timber or rusty sections for a permanent, low-maintenance finish without rebuilding the whole roof line."
  },
  {
    question: "Why do you use spray painting instead of rollers for roof painting?",
    answer: "We use professional high-pressure airless spray painting guns because spray application provides an even, thick, factory-grade membrane over corrugated ridges and tile profiles that rollers cannot achieve. It eliminates roller lap marks and ensures complete weatherproofing."
  },
  {
    question: "Why is vacuum gutter cleaning better than manual cleaning?",
    answer: "Our industrial-strength vacuum equipment sucks up heavy wet sludge, moss, and pine needles safely from the ground up to 3 storeys without risking roof damage. We also flush downpipes to ensure 100% unimpeded flow."
  },
  {
    question: "How does your 'Beat any quote by 15%' offer work?",
    answer: "If you have received a written, itemized quote from any registered local Canterbury roofing or guttering company, show it to us. We will beat the total price by 15% guaranteed!"
  },
  {
    question: "What areas of Canterbury do you service?",
    answer: "We cover Greater Christchurch, Rangiora, Rolleston, Kaiapoi, Riccarton, Fendalton, Selwyn, Sumner, Pegasus, and surrounding Canterbury rural districts."
  }
];
