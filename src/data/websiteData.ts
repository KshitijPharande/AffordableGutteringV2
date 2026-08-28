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

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export const COMPANY_INFO = {
  name: "Affordable Guttering & Roof Maintenance",
  shortName: "Affordable Guttering",
  tagline: "We keep it affordable without compromising on quality.",
  quoteOffer: "Free On-Site Assessments & Honest Fixed Quotes Across Canterbury",
  warranties: [
    { title: "10-Year Guarantee Against Leaks", desc: "Comprehensive leak-free guarantee on all gutters & downpipes" },
    { title: "15-Year Marine-Grade Colorsteel", desc: "For all new guttering, spouting & downpipe installations" },
    { title: "30-Year Roof Replacement", desc: "Long-life heavy-gauge Colorsteel & membrane roofing warranty" }
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

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: "lichen-cleaning",
    title: "Lichen & Moss Treatment and Clean",
    category: "Lichen & Moss Removal",
    description: "Heavy lichen colonies and moss infestation treated, pressure-washed clean, and prepared for long-lasting protection.",
    beforeImage: "/images/thumbnail_IMG_7099.jpg",
    afterImage: "/images/thumbnail_IMG_7101.jpg",
    beforeLabel: "Before: Heavy Lichen & Moss",
    afterLabel: "After: Stripped & Cleaned Roof"
  },
  {
    id: "gutter-overhaul",
    title: "Fascia Prep & Continuous Colorsteel Gutter Installation",
    category: "Continuous Guttering",
    description: "Old failing gutters removed, timber fascia patched and sealed, followed by seamless marine-grade Colorsteel gutters installation.",
    beforeImage: "/images/IMG_8259.JPG",
    afterImage: "/images/thumbnail_IMG_4397 - Copy.jpg",
    beforeLabel: "Old Gutters Removed & Fascia Prepped",
    afterLabel: "Seamless Colorsteel Gutters Fitted"
  }
];

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
    pricingHint: "Free on-site assessment & transparent fixed quotes",
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
    image: "/images/IMG_8186.JPG",
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
    pricingHint: "Competitive pricing with honest upfront quotes",
    iconName: "Building"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-branded-installer",
    title: "Branded Team On-Site Downpipe Fitting",
    category: "guttering",
    image: "/images/IMG_0553.JPG",
    description: "Our certified installer in official Affordable Guttering Ltd gear fitting Colorsteel downpipes on a Kiwi home."
  },
  {
    id: "gal-porch-gutter",
    title: "Seamless Porch Colorsteel Spouting",
    category: "guttering",
    image: "/images/IMG_0573.JPG",
    description: "Continuous dark Colorsteel spouting with precision joins installed along residential veranda."
  },
  {
    id: "gal-downpipe-assembly",
    title: "On-Site Downpipe Assembly & Custom Fabrication",
    category: "guttering",
    image: "/images/IMG_6406.JPG",
    description: "Custom measuring, cutting, and bracket assembly of round Colorsteel downpipes on sawhorses on site."
  },
  {
    id: "gal-pergola-spouting",
    title: "Pergola Roofline & Colorsteel Guttering",
    category: "fascia",
    image: "/images/IMG_8487.JPG",
    description: "Continuous Colorsteel spouting fitted to freshly painted timber pergola and fascia."
  },
  {
    id: "gal-pergola-install",
    title: "Continuous Gutter Alignment Along Eaves",
    category: "guttering",
    image: "/images/IMG_0104.JPG",
    description: "Installer carefully securing continuous spouting along the timber pergola roofline."
  },
  {
    id: "gal-mitred-corner-ext",
    title: "Precision External Mitred Corner Join",
    category: "guttering",
    image: "/images/IMG_0113.JPG",
    description: "Hand-crafted seamless external corner join on dark Colorsteel spouting."
  },
  {
    id: "gal-mitred-corner-int",
    title: "Seamless Internal Corner & Fascia Fit",
    category: "guttering",
    image: "/images/IMG_0115.JPG",
    description: "Clean internal mitre joint with reinforced internal brackets and watertight seal."
  },
  {
    id: "gal-roofline-prep",
    title: "Roof Edge & Spouting Alignment Inspection",
    category: "roofing",
    image: "/images/IMG_6491.JPG",
    description: "Checking metal roof overhang, screw fastenings, and fall alignment into new spouting."
  },
  {
    id: "gal-screw-sealing-prep",
    title: "Roof Screw & Ridge Sealing Preparation",
    category: "roofing",
    image: "/images/IMG_7058.JPG",
    description: "Treating corrugated roof screw fixings and ridge cap flashings with protective sealant prior to coating."
  },
  {
    id: "gal-gutter-mesh-flashing",
    title: "Gutter Guard Mesh & Flashing Maintenance",
    category: "guttering",
    image: "/images/IMG_7825.JPG",
    description: "Protective gutter mesh barrier and flashing seal installed on corrugated roofing to prevent leaf buildup."
  },
  {
    id: "gal-valley-clearing",
    title: "Heavy Roof Valley Debris & Blockage Clearing",
    category: "cleaning",
    image: "/images/IMG_7993 - Copy - Copy.JPG",
    description: "Clearing thick leaf mulch, pine needles, and organic dams accumulated in corrugated roof valleys."
  },
  {
    id: "gal-roofline-maintenance",
    title: "Roofline Inspection & Eaves Maintenance",
    category: "roofing",
    image: "/images/IMG_8186.JPG",
    description: "Installer conducting on-site roofline inspection, leak checking, and spouting maintenance on ladder."
  },
  {
    id: "gal-fascia-prep",
    title: "Fascia Board Sealing & Prep for New Spouting",
    category: "fascia",
    image: "/images/IMG_8259.JPG",
    description: "Timber fascia prepared, repaired, and weatherproofed after old rusty gutters were removed."
  },
  {
    id: "gal-full-home-transformation",
    title: "Complete Canterbury Home Gutter Renewal",
    category: "guttering",
    image: "/images/IMG_8488.JPG",
    description: "Finished residential home fitted with continuous marine-grade Colorsteel gutters and downpipes."
  },
  {
    id: "gal-seamless-finish",
    title: "Continuous Guttering Profile & Downpipe Outlet",
    category: "guttering",
    image: "/images/thumbnail_IMG_4397 - Copy.jpg",
    description: "Finished Colorsteel continuous spouting with high-capacity storm flow into downpipe."
  },
  {
    id: "gal-gutter-profile-fall",
    title: "Continuous Spouting Gradient & Clean Line",
    category: "guttering",
    image: "/images/thumbnail_IMG_4401.jpg",
    description: "Precision-leveled gutter run ensuring smooth water flow without pooling or sagging."
  },
  {
    id: "gal-lichen-before",
    title: "Severe Lichen & Moss Growth Before Treatment",
    category: "cleaning",
    image: "/images/thumbnail_IMG_7099.jpg",
    description: "Heavy organic lichen and moss buildup across weathered concrete roof tiles before treatment."
  },
  {
    id: "gal-lichen-after",
    title: "Restored Tile Roof After Moss & Lichen Wash",
    category: "cleaning",
    image: "/images/thumbnail_IMG_7101.jpg",
    description: "Completely clean, lichen-free roof tiles following our gentle biocidal treatment and soft wash."
  },
  {
    id: "gal-moss-inspection",
    title: "Pre-Treatment Roof Moss & Grime Assessment",
    category: "cleaning",
    image: "/images/thumbnail_IMG_7099.jpg",
    description: "Detailed roof inspection assessing biological growth across Canterbury tile roof."
  },
  {
    id: "gal-metal-reroof-grey",
    title: "New Long-Run Colorsteel Roof Installation",
    category: "roofing",
    image: "/images/thumbnail_IMG_7117.jpg",
    description: "Complete metal roof replacement with crisp ridgelines, modern profile, and 30-year warranty."
  },
  {
    id: "gal-airless-spray-finish",
    title: "Airless Spray Protective Membrane Recoat",
    category: "roofing",
    image: "/images/thumbnail_IMG_7124.jpg",
    description: "High-build acrylic roof membrane applied via airless spray gun for deep, even coverage."
  },
  {
    id: "gal-restored-metal-roof",
    title: "Completed Corrugated Roof Restoration",
    category: "roofing",
    image: "/images/thumbnail_IMG_7125.jpg",
    description: "Weatherproofed corrugated iron roof renewed with anti-corrosion protective finish."
  },
  {
    id: "gal-commercial-box-gutter",
    title: "Commercial Internal Box Gutter & Parapet Flashing",
    category: "roofing",
    image: "/images/thumbnail_image (1).png",
    description: "Heavy-duty commercial box gutter and Colorsteel roof replacement with full site scaffolding."
  },
  {
    id: "gal-commercial-skylight",
    title: "Skylight & Hip Flashing Installation",
    category: "roofing",
    image: "/images/thumbnail_image (2).png",
    description: "Precision-flashed skylight integration on new long-run trapezoidal metal roofing."
  },
  {
    id: "gal-commercial-ridge-view",
    title: "Commercial Colorsteel Roof Replacement",
    category: "roofing",
    image: "/images/thumbnail_image (4).png",
    description: "Full wide-angle view of completed industrial roof replacement engineered for Canterbury weather."
  },
  {
    id: "gal-commercial-scaffold-exterior",
    title: "Commercial Building Re-Roofing Project",
    category: "roofing",
    image: "/images/thumbnail_image (7).png",
    description: "Full exterior view of commercial re-roofing project with certified safety scaffolding."
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
    feature: "Pricing & Transparency",
    ourQuality: "Honest Fair Upfront Quotes with Zero Hidden Costs",
    competitors: "Inflated retail markups & unexpected extras"
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
    quote: "The vacuum gutter cleaning was fast, mess-free and unblocked two jammed downpipes. Prompt, friendly and very fair pricing.",
    service: "Vacuum Gutter Cleaning & Downpipes",
    date: "Just recently"
  }
];

export const FAQS = [
  {
    question: "What specific warranties do you provide on gutters, downpipes, and roofs?",
    answer: "We provide upfront, written guarantees: a 10-Year Guarantee Against Leaks for gutters & downpipes, a 15-Year Marine-Grade Colorsteel Warranty on all new installations, and a 30-Year Warranty on Roof Replacements."
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
    question: "How do you provide quotes for Canterbury jobs?",
    answer: "We provide 100% free, no-obligation on-site assessments across Christchurch, Rangiora, Rolleston, and wider Canterbury with transparent, fixed pricing and no hidden costs."
  },
  {
    question: "What areas of Canterbury do you service?",
    answer: "We cover Greater Christchurch, Rangiora, Rolleston, Kaiapoi, Riccarton, Fendalton, Selwyn, Sumner, Pegasus, and surrounding Canterbury rural districts."
  }
];
