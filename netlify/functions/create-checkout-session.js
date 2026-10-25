// BABALUX Stripe Checkout — test-mode only until shipping, taxes and fulfilment are confirmed.
const PRODUCTS = {
  "marmara-barber-cologne-graffiti-no24-150ml": {
    "name": "Marmara Barber Cologne Graffiti No24 150 ml",
    "pricePence": 399
  },
  "babalux-oxicream": {
    "name": "BABALUX PROFESSIONAL OXICREAM",
    "pricePence": 399
  },
  "studio-techno": {
    "name": "STUDIO TECHNO",
    "pricePence": 2299
  },
  "pro-cut": {
    "name": "PRO CUT",
    "pricePence": 499
  },
  "pet-scissors": {
    "name": "PROFESSIONAL HAIRDRESSING SCISSORS",
    "pricePence": 6999
  },
  "sonic-plastic-handle": {
    "name": "SONIC PLASTIC HANDLE SERIES",
    "pricePence": 999
  },
  "studio-techno-relax-th": {
    "name": "STUDIO TECHNO RELAX-TH",
    "pricePence": 2699
  },
  "standard-272": {
    "name": "STANDARD HAIR SCISSORS 272",
    "pricePence": 2699
  },
  "standard-2127": {
    "name": "STANDARD HAIR SCISSORS 2127",
    "pricePence": 1699
  },
  "studio-style-2433": {
    "name": "STUDIO STYLE 2433",
    "pricePence": 2699
  },
  "studio-style-2431": {
    "name": "STUDIO STYLE 2431",
    "pricePence": 2699
  },
  "standard-set": {
    "name": "STANDARD HAIR SCISSORS SET",
    "pricePence": 4199
  },
  "standard-hair-scissors": {
    "name": "STANDARD HAIR SCISSORS",
    "pricePence": 2599
  },
  "gold-series-2471": {
    "name": "GOLD SERIES",
    "pricePence": 6499
  },
  "pro-cut-comb": {
    "name": "PRO CUT",
    "pricePence": 499
  },
  "babalux-hair-wax-04": {
    "name": "BABALUX BARBER 04 AQUA STRONG WAX",
    "pricePence": 899
  },
  "babalux-spider-hair-wax": {
    "name": "BABALUX SPIDER HAIR WAX",
    "pricePence": 799
  },
  "babalux-hair-wax-03": {
    "name": "BABALUX BARBER 03 AQUA STRONG WAX",
    "pricePence": 799
  },
  "babalux-hair-wax-01": {
    "name": "BABALUX BARBER 01 AQUA STRONG WAX",
    "pricePence": 799
  },
  "babalux-hair-wax-cream-01": {
    "name": "BABALUX HAIR WAX CREAM 01",
    "pricePence": 799
  },
  "babalux-hair-gel-n4": {
    "name": "BABALUX HAIR GEL N4",
    "pricePence": 599
  },
  "babalux-solid-wax": {
    "name": "BABALUX SOLID WAX",
    "pricePence": 599
  },
  "babalux-shaving-gel": {
    "name": "BABALUX SHAVING GEL",
    "pricePence": 499
  },
  "fashionblades-professional": {
    "name": "FASHIONBLADES PROFESSIONAL",
    "pricePence": 699
  },
  "nano-tech-5815": {
    "name": "NANO-TECH 5815",
    "pricePence": 1099
  },
  "nano-tech-5810": {
    "name": "NANO-TECH 5810",
    "pricePence": 999
  },
  "pet-scissors-11041": {
    "name": "PET SCISSORS",
    "pricePence": 9499
  },
  "slim": {
    "name": "SLIM",
    "pricePence": 399
  },
  "excellence-brushes": {
    "name": "EXCELLENCE BRUSHES",
    "pricePence": 499
  },
  "active-carbon-fibre-513": {
    "name": "ACTIVE CARBON FIBRE 513",
    "pricePence": 399
  },
  "nano-tech-5919": {
    "name": "NANO-TECH 5919",
    "pricePence": 999
  },
  "nano-tech-5925": {
    "name": "NANO-TECH 5925",
    "pricePence": 1099
  },
  "nano-tech-5932": {
    "name": "NANO-TECH 5932",
    "pricePence": 1199
  },
  "nano-tech-5943": {
    "name": "NANO-TECH 5943",
    "pricePence": 1299
  },
  "eco-line-545": {
    "name": "ECO-LINE 545",
    "pricePence": 399
  },
  "eco-line-541": {
    "name": "ECO-LINE 541",
    "pricePence": 399
  },
  "eco-line-534": {
    "name": "ECO-LINE 534",
    "pricePence": 399
  },
  "eco-line-533": {
    "name": "ECO-LINE 533",
    "pricePence": 399
  },
  "eco-line-535": {
    "name": "ECO-LINE 535",
    "pricePence": 399
  },
  "eco-line-563": {
    "name": "ECO-LINE 563",
    "pricePence": 399
  },
  "eco-line-561": {
    "name": "ECO-LINE 561",
    "pricePence": 399
  },
  "eco-line-547": {
    "name": "ECO-LINE 547",
    "pricePence": 399
  },
  "eco-line-565": {
    "name": "ECO-LINE 565",
    "pricePence": 399
  },
  "active-carbon-fibre-510": {
    "name": "ACTIVE CARBON FIBRE 510",
    "pricePence": 399
  },
  "active-carbon-fibre-521": {
    "name": "ACTIVE CARBON FIBRE 521",
    "pricePence": 399
  },
  "active-carbon-fibre-507": {
    "name": "ACTIVE CARBON FIBRE 507",
    "pricePence": 399
  },
  "active-carbon-fibre-505": {
    "name": "ACTIVE CARBON FIBRE 505",
    "pricePence": 399
  },
  "pure-rose-gold-m": {
    "name": "PURE ROSE GOLD M",
    "pricePence": 5499
  },
  "pure-rose-gold-small": {
    "name": "PURE ROSE GOLD SMALL",
    "pricePence": 5499
  },
  "pure-rose-gold-large": {
    "name": "PURE ROSE GOLD LARGE",
    "pricePence": 5499
  },
  "dr-rashel-beard-oil": {
    "name": "DR. RASHEL BEARD OIL FOR MEN",
    "pricePence": 599
  },
  "adjustable-aluminium-tripod-with-carry-bag": {
    "name": "ADJUSTABLE ALUMINIUM TRIPOD WITH CARRY BAG",
    "pricePence": 3099
  },
  "training-head-man-beard-and-moustache": {
    "name": "TRAINING HEAD MAN BEARD AND MOUSTACHE",
    "pricePence": 8399
  },
  "aluminium-foil": {
    "name": "ALUMINIUM FOIL",
    "pricePence": 599
  },
  "cap-for-streak": {
    "name": "CAP FOR STREAK",
    "pricePence": 799
  },
  "kiepe-barber-apron": {
    "name": "KIEPE PROFESSIONAL BARBER APRON",
    "pricePence": 1899
  },
  "kiepe-blade-oil-400ml": {
    "name": "KIEPE BLADE OIL 400ML",
    "pricePence": 699
  },
  "wax-heater-500cc": {
    "name": "WAX HEATER 500 CC",
    "pricePence": 2899
  },
  "arko-men-shaving-cream-100g": {
    "name": "ARKO MEN SHAVING CREAM 100G",
    "pricePence": 299
  },
  "perma-sharp-super-single-edge-100": {
    "name": "PERMA-SHARP SUPER SINGLE EDGE RAZOR BLADES x100",
    "pricePence": 599
  },
  "astra-superior-platinum-100er-pack": {
    "name": "ASTRA SUPERIOR PLATINUM 100er PACK",
    "pricePence": 899
  },
  "dorco-hq-for-barber": {
    "name": "DORCO HQ FOR BARBER",
    "pricePence": 599
  },
  "beard-wax": {
    "name": "BEARD WAX",
    "pricePence": 399
  },
  "placentrix-plus-intensive-action-10-ampullen": {
    "name": "FARMAGAN PLACENTRIX PLUS INTENSIVE ACTION - 10 AMPOULLEN",
    "pricePence": 2699
  },
  "impala-metal-cleaning-spray-300ml": {
    "name": "IMPALA METAL CLEANING SPRAY 300ML",
    "pricePence": 799
  },
  "mefapo-hair-color-spray-120ml": {
    "name": "MEFAPO HAIR COLOR SPRAY 120ML",
    "pricePence": 299
  },
  "adult-hair-cape-salon-barber-cape": {
    "name": "ADULT HAIR CAPE SALON BARBER CAPE",
    "pricePence": 799
  },
  "barber-cutting-cape-american-flag": {
    "name": "BARBER CUTTING CAPE",
    "pricePence": 899
  },
  "yellow-scissors-hair-cutting-cloth": {
    "name": "YELLOW SCISSORS HAIR CUTTING CLOTH",
    "pricePence": 899
  },
  "bioactive-naturalis-nutritive-mask-cashmere-keratin": {
    "name": "FARMAGAN BIOACTIVE NATURALIS NUTRITIVE MASK WITH CASHMERE KERATIN",
    "pricePence": 2499
  },
  "farmagan-bioactive-repair-mk-250ml": {
    "name": "FARMAGAN BIOACTIVE HAIR CARE REPAIR MK 250ML",
    "pricePence": 1199
  },
  "farmagan-bioactive-repair-ampoules": {
    "name": "FARMAGAN BIOACTIVE REPAIR AMPOULES",
    "pricePence": 2699
  },
  "bioactive-naturalis-botanic-shampoo": {
    "name": "BIOACTIVE NATURALIS BOTANIC SHAMPOO",
    "pricePence": 2299
  },
  "bioactive-naturalis-nutritive-fluid": {
    "name": "BIOACTIVE NATURALIS NUTRITIVE FLUID",
    "pricePence": 2299
  },
  "bioactive-hydra-elixir-booster-100ml": {
    "name": "BIOACTIVE HYDRA ELIXIR BOOSTER 100ML",
    "pricePence": 1099
  },
  "double-edge-blade-mat": {
    "name": "DOUBLE EDGE BLADE MAT",
    "pricePence": 1199
  },
  "bioactive-hydra-oil": {
    "name": "FARMAGAN BIOACTIVE HAIR CARE HYDRA OIL",
    "pricePence": 999
  },
  "farmagan-placentrix-classic-10-ampoules": {
    "name": "FARMAGAN PLACENTRIX CLASSIC FIALE COADIUVANTI ANTICADUTA - 10 AMPOULES",
    "pricePence": 2699
  },
  "farmagan-bioactive-hair-care-hydra-mk": {
    "name": "FARMAGAN BIOACTIVE HAIR CARE HYDRA MK",
    "pricePence": 1199
  },
  "more-for-you-barber-shaving-soap-140g": {
    "name": "MORE FOR YOU BARBER SHAVING SOAP 140G",
    "pricePence": 299
  },
  "hairstyles-photo-book": {
    "name": "HAIRSTYLES PHOTO BOOK",
    "pricePence": 1499
  },
  "professional-case-box-salon-hair-tool": {
    "name": "PROFESSIONAL CASE BOX SALON HAIR TOOL",
    "pricePence": 799
  },
  "apron-with-pockets-fashion-hairdressing-barber": {
    "name": "APRON WITH POCKETS FASHION HAIRDRESSING BARBER HAIR DYE",
    "pricePence": 3199
  },
  "haircut-cape-hairdresser-cape-for-womens": {
    "name": "HAIRCUT CAPE HAIRDRESSER CAPE FOR WOMENS",
    "pricePence": 799
  },
  "black-barber-apron-wella": {
    "name": "BLACK BARBER APRON WELLA – WATERPROOF FIBER",
    "pricePence": 2299
  },
  "barber-pro-cape": {
    "name": "BARBER PRO CAPE",
    "pricePence": 899
  },
  "gentlemans-barber-cape": {
    "name": "GENTLEMAN'S BARBER CAPE",
    "pricePence": 899
  },
  "skull-barber-cape": {
    "name": "SKULL BARBER CAPE",
    "pricePence": 899
  },
  "barber-pole-hairdressing-cape": {
    "name": "BARBER POLE HAIRDRESSING CAPE",
    "pricePence": 899
  },
  "fresh-cut-barber-cape": {
    "name": "FRESH CUT BARBER CAPE",
    "pricePence": 899
  },
  "striped-barber-salon-cape": {
    "name": "HAIRDRESSING CAPE BARBER SALON",
    "pricePence": 899
  },
  "afro-twist-hair-sponge": {
    "name": "AFRO TWIST HAIR SPONGE OVAL DOUBLE MAGIC HAIR BRUSH",
    "pricePence": 399
  },
  "bioactive-hs3-argan-serum": {
    "name": "FARMAGAN BIOACTIVE HS3 ARGAN SERUM",
    "pricePence": 1599
  },
  "eurostar-scissor-brush-holder-box": {
    "name": "EUROSTAR SCISSOR BRUSH HOLDER BOX",
    "pricePence": 799
  },
  "barber-scissors-storage-holder": {
    "name": "BARBER SCISSORS STORAGE HOLDER",
    "pricePence": 999
  },
  "more-for-you-professional-disposable-towels": {
    "name": "MORE FOR YOU PROFESSIONAL DISPOSABLE TOWELS",
    "pricePence": 1899
  },
  "magiccap-reusable-hair-coloring-cap": {
    "name": "MAGICAP REUSABLE HAIR COLORING HIGHLIGHTING CAP",
    "pricePence": 699
  },
  "milisten-choctaek-professional-foil-roll": {
    "name": "MILISTEN ALUMINIUM FOIL ROLL PROFESSIONAL 700X15CM",
    "pricePence": 799
  },
  "high-spray-bottle-barber-water-sprayer-200ml": {
    "name": "HIGH SPRAY BOTTLE BARBER WATER SPRAYER BOTTLE 200ML",
    "pricePence": 499
  },
  "barber-scissors-holder-skull-salon": {
    "name": "BARBER SCISSORS HOLDER SKULL SALON HAIRDRESSING TOOLS SILVER",
    "pricePence": 2099
  },
  "jytop-1-piece-extra-large-black-donut-maker": {
    "name": "JYTOP 1 PIECE EXTRA LARGE BLACK DONUT MAKER",
    "pricePence": 199
  },
  "aichun-beauty-charcoal-snake-oil-peel-off-mask": {
    "name": "AICHUN BEAUTY CHARCOAL SNAKE OIL PEEL-OFF MASK",
    "pricePence": 599
  },
  "dr-rashel-black-head-remover-mask": {
    "name": "DR. RASHEL BLACK HEAD REMOVER AND BLACK PEEL-OFF MASK",
    "pricePence": 599
  },
  "argan-oil-keratin-hair-serum-80ml": {
    "name": "ARGAN OIL SULFATE-FREE KERATIN NUTRITION HAIR SERUM 80ML",
    "pricePence": 899
  },
  "leather-retro-large-barber-scissors-pouch-holster": {
    "name": "LEATHER RETRO LARGE PROFESSIONAL BARBER SALON SCISSORS POUCH HOLSTER HOLDER",
    "pricePence": 1499
  },
  "barber-disinfecting-glass-jar": {
    "name": "BARBER DISINFECTING GLASS JAR",
    "pricePence": 1599
  },
  "toppik-hair-perfecting-tool-kit": {
    "name": "TOPPIK HAIR PERFECTING TOOL KIT",
    "pricePence": 1499
  },
  "caboki-hair-loss-concealer-25g": {
    "name": "CABOKI HAIR LOSS CONCEALER 25G",
    "pricePence": 799
  },
  "kingyes-instant-hair-thickener-spray-130ml": {
    "name": "KINGYES INSTANT HAIR THICKENER SPRAY 130ML",
    "pricePence": 699
  },
  "hard-wax-beans-beauty-salon-chocolate-500g": {
    "name": "HARD WAX BEANS FOR BEAUTY SALON (CHOCOLATE) 500G",
    "pricePence": 699
  },
  "barber-pro-hair-fiber-applicator": {
    "name": "BARBER PRO HAIR FIBER APPLICATOR",
    "pricePence": 899
  },
  "men-grooming-barber-pro-finger-brush": {
    "name": "MEN GROOMING BARBER PRO FINGER BRUSH",
    "pricePence": 399
  },
  "didiseaon-shaving-brush": {
    "name": "DIDISEAON SHAVING BRUSH",
    "pricePence": 799
  },
  "baby-whisperer-honey-maize-germ-powder-120g": {
    "name": "BABY WHISPERER HONEY MAIZE GERM POWDER 120G",
    "pricePence": 299
  },
  "ayala-solomon-barber-chair": {
    "name": "AYALA SOLOMON BARBER CHAIR IN BLACK",
    "pricePence": 84426
  },
  "gabbiano-president-barber-chair": {
    "name": "GABBIANO PRESIDENT BARBER CHAIR WITH A VINTAGE DESIGN",
    "pricePence": 84426
  },
  "barber-neck-duster-black": {
    "name": "BARBER BRUSH OR NECK DUSTER",
    "pricePence": 499
  },
  "barber-neck-duster-gold": {
    "name": "BARBER NECK DUSTER BRUSH",
    "pricePence": 499
  },
  "kiepe-pro-booster-hair-trimmer": {
    "name": "KIEPE PRO BOOSTER MINI HAIR TRIMMER",
    "pricePence": 8999
  },
  "threads-for-hair-fluted-500g": {
    "name": "Hair Clips box 500g",
    "pricePence": 599
  },
  "american-line-bobby-pins-500g": {
    "name": "AMERICAN LINE",
    "pricePence": 599
  },
  "thread-for-hair-removal": {
    "name": "THREAD FOR HAIR REMOVAL",
    "pricePence": 499
  },
  "babalux-barber-hair-styling-powder-wax": {
    "name": "BABALUX BARBER HAIR STYLING POWDER WAX – STRONG HOLD (20G)",
    "pricePence": 899
  },
  "modern-black-barber-chair": {
    "name": "MODERN BLACK BARBER CHAIR",
    "pricePence": 31999
  },
  "modern-black-salon-styling-chair": {
    "name": "MODERN BLACK SALON STYLING CHAIR",
    "pricePence": 21999
  },
  "hair-salon-chair-premium": {
    "name": "HAIR SALON CHAIR PREMIUM",
    "pricePence": 76099
  },
  "babalux-scissors-2015-6-blue": {
    "name": "BABALUX SCISSORS 2015-6 BLUE 6.0 INCH",
    "pricePence": 1199
  },
  "babalux-thinning-scissors-2012-7": {
    "name": "BABALUX THINNING SCISSORS 2012-7 BLACK INSERTS 7.0 INCH",
    "pricePence": 1499
  },
  "babalux-shavette-1975-red": {
    "name": "BABALUX SHAVETTE 1975 RED HANDLE",
    "pricePence": 499
  },
  "babalux-shavette-1971-wood": {
    "name": "BABALUX SHAVETTE 1971 WOODEN HANDLE",
    "pricePence": 999
  },
  "babalux-shavette-1972-black-gold": {
    "name": "BABALUX SHAVETTE 1972 BLACK HANDLE GOLD DETAIL",
    "pricePence": 999
  },
  "babalux-straight-razor-1974-black": {
    "name": "BABALUX STRAIGHT RAZOR 1974 BLACK HANDLE",
    "pricePence": 399
  },
  "babalux-scissors-2014-6-black": {
    "name": "BABALUX SCISSORS 2014-6 BLACK HANDLES 6.0 INCH",
    "pricePence": 899
  },
  "babalux-scissors-2016-6-5-black": {
    "name": "BABALUX SCISSORS 2016-6.5 BLACK HANDLES 6.5 INCH",
    "pricePence": 1499
  },
  "babalux-thinning-scissors-2017-5-5-black": {
    "name": "BABALUX THINNING SCISSORS 2017-5.5 BLACK HANDLES 5.5 INCH",
    "pricePence": 899
  },
  "babalux-scissors-2010-7-grey": {
    "name": "BABALUX SCISSORS 2010-7 GREY 7.0 INCH",
    "pricePence": 1199
  },
  "babalux-thinning-scissors-2016-5-5-blue": {
    "name": "BABALUX THINNING SCISSORS 2016-5.5 BLUE 5.5 INCH",
    "pricePence": 1499
  },
  "babalux-scissors-2010-6-black": {
    "name": "BABALUX SCISSORS 2010-6 BLACK INSERTS 6.0 INCH",
    "pricePence": 1199
  },
  "babalux-hair-wax-02": {
    "name": "BABALUX HAIR WAX 02 AQUA STRONG WAX",
    "pricePence": 799
  }
};

const VARIANTS = {
  "studio-techno": {
    "size-5.5": {
      "label": "Size 5.5 inches"
    },
    "size-6.0": {
      "label": "Size 6.0 inches"
    }
  },
  "sonic-plastic-handle": {
    "size-5.5": {
      "label": "Size 5.5 inches"
    },
    "size-6.0": {
      "label": "Size 6.0 inches"
    }
  },
  "standard-272": {
    "size-5.5": { "label": "Size 5.5 inches" },
    "size-6.5": { "label": "Size 6.5 inches" }
  },
  "standard-2127": {
    "size-6.0": {
      "label": "Size 6.0 inches"
    },
    "size-6.5": {
      "label": "Size 6.5 inches"
    }
  },
  "standard-hair-scissors": {
    "size-6.0": {
      "label": "Size 6.0 inches"
    },
    "size-6.5": {
      "label": "Size 6.5 inches"
    },
    "size-7.0": {
      "label": "Size 7.0 inches"
    }
  },
  "threads-for-hair-fluted-500g": {
    "size-5.0": { "label": "Size 5.0" },
    "size-7.0": { "label": "Size 7.0" }
  },
  "excellence-brushes": {
    "colour-gold": {
      "label": "Colour: Gold"
    },
    "colour-bronze": {
      "label": "Colour: Bronze"
    },
    "colour-sand": {
      "label": "Colour: Sand"
    },
    "colour-black": {
      "label": "Colour: Black"
    }
  },
  "marmara-barber-cologne-graffiti-no24-150ml": {
    "fragrance-0": {
      "label": "No. 24 (150 ml)",
      "pricePence": 399
    },
    "fragrance-1": {
      "label": "No. 21 (400 ml)",
      "pricePence": 399
    },
    "fragrance-2": {
      "label": "No. 22 (400 ml • Red)",
      "pricePence": 399
    },
    "fragrance-3": {
      "label": "No. 22 (400 ml • Blue)",
      "pricePence": 399
    },
    "fragrance-4": {
      "label": "No. 25 (150 ml)",
      "pricePence": 399
    }
  },
  "babalux-solid-wax": {
    "colour-black": {
      "label": "Colour: Black"
    },
    "colour-azulen": {
      "label": "Colour: Azulen"
    },
    "colour-natural": {
      "label": "Colour: Natural"
    }
  },
  "wax-heater-500cc": {
    "colour-orange": {
      "label": "Colour: Orange"
    },
    "colour-green": {
      "label": "Colour: Green"
    },
    "colour-grey": {
      "label": "Colour: Grey"
    },
    "colour-purple": {
      "label": "Colour: Purple"
    },
    "colour-pink": {
      "label": "Colour: Pink"
    }
  },
  "arko-men-shaving-cream-100g": {
    "option-sensitive": {
      "label": "Option: Sensitive"
    },
    "option-hydrate": {
      "label": "Option: Hydrate"
    }
  },
  "babalux-oxicream": {
    "strength-9%": {
      "label": "Strength: 9% (30 VOL)"
    },
    "strength-6%": {
      "label": "Strength: 6% (20 VOL)"
    },
    "strength-3%": {
      "label": "Strength: 3% (10 VOL)"
    },
    "strength-12%": {
      "label": "Strength: 12% (40 VOL)"
    }
  },
  "babalux-barber-hair-styling-powder-wax": {
    "colour-blue": {
      "label": "Colour: Blue"
    },
    "colour-red": {
      "label": "Colour: Red"
    },
    "colour-green": {
      "label": "Colour: Green"
    }
  },
  "threads-for-hair-fluted-500g": {
    "size-5.0": {
      "label": "Size 5.0"
    },
    "size-7.0": {
      "label": "Size 7.0"
    }
  },
  "babalux-hair-gel-n4": {
    "size-n4": { "label": "Keratin Complex 4 — Ultra Hold" },
    "size-n5": { "label": "Gum Effect Plus 5 — Ultra Hold" }
  },
  "jytop-1-piece-extra-large-black-donut-maker": {
    "size-small": { "label": "Size: Small" },
    "size-medium": { "label": "Size: Medium" },
    "size-large": { "label": "Size: Large" }
  }
};

const NETLIFY_FUNCTION_HOST = "premium-grooming-preview-uk.netlify.app";
const ALLOWED_ORIGINS = new Set([
  "https://premium-grooming-preview-uk.netlify.app",
  "https://babalux.uk",
  "https://www.babalux.uk"
]);

function reply(statusCode, payload, origin) {
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }
  return {
    statusCode,
    headers,
    body: JSON.stringify(payload)
  };
}

function getRequestOrigin(event) {
  // Netlify may normalize or omit the Host header for function events.
  // Validate the browser Origin against the explicit allow-list instead of relying on Host.
  const originHeader = event.headers?.origin || event.headers?.Origin || "";
  if (!originHeader) return null;

  try {
    const parsed = new URL(originHeader);
    if (parsed.protocol !== "https:" || parsed.origin !== originHeader || !ALLOWED_ORIGINS.has(parsed.origin)) {
      return null;
    }
    return parsed.origin;
  } catch {
    return null;
  }
}

function parseCart(rawBody) {
  let body;
  try {
    body = JSON.parse(rawBody || "{}");
  } catch {
    throw new Error("The cart could not be read. Please refresh and try again.");
  }

  if (!Array.isArray(body.items) || body.items.length < 1 || body.items.length > 50) {
    throw new Error("Your cart is empty or contains too many separate items.");
  }

  return body.items.map((item) => {
    const id = String(item?.id || "");
    const product = PRODUCTS[id];
    if (!product) throw new Error("A product in your cart could not be verified. Remove it and add it again.");

    const qty = Number(item.quantity);
    if (!Number.isInteger(qty) || qty < 1 || qty > 99) {
      throw new Error("A product quantity is invalid. Please update your cart and try again.");
    }

    const prefix = id + "::";
    const compositeKey = String(item.key || "");
    if (!compositeKey.startsWith(prefix)) throw new Error("A product selection could not be verified. Please add it again.");
    const variantKey = compositeKey.slice(prefix.length);
    const variantSet = VARIANTS[id];
    let variantLabel = "";
    let unitAmount = product.pricePence;

    if (variantSet) {
      const variant = variantSet[variantKey];
      if (!variant) throw new Error("Please choose an available option for " + product.name + " and add it to your cart again.");
      variantLabel = variant.label;
      if (Object.prototype.hasOwnProperty.call(variant, "pricePence")) {
        if (variant.pricePence === null) {
          throw new Error("The price for " + variant.label + " has not been confirmed by BABALUX yet. Please remove that option from your cart before checkout.");
        }
        unitAmount = variant.pricePence;
      }
    } else if (variantKey !== "standard") {
      throw new Error("A product selection could not be verified. Please remove it and add the product again.");
    }

    if (!Number.isInteger(unitAmount) || unitAmount < 1) throw new Error("A product price is not ready for checkout.");
    return {
      id,
      name: product.name,
      variantLabel,
      quantity: qty,
      unitAmount
    };
  });
}

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    const origin = getRequestOrigin(event);
    // Return a regular 200 response for browser CORS preflight, with no special 204-body handling.
    return reply(origin ? 200 : 403, {ok: Boolean(origin)}, origin);
  }
  if (event.httpMethod !== "POST") return reply(405, {error:"Use POST to create a checkout session."});

  const origin = getRequestOrigin(event);
  if (!origin) return reply(403, {error:"This checkout request was not recognised. Please refresh the BABALUX site."});

  if (String(event.body || "").length > 30000) return reply(413, {error:"Your cart is too large to process."}, origin);

  // Test checkout remains the default. Live checkout requires an explicit environment flag
  // and a separate live secret key; never overwrite the working test key to enable live payments.
  const liveCheckoutEnabled = process.env.STRIPE_LIVE_CHECKOUT_ENABLED === "true";
  const stripeSecret = liveCheckoutEnabled
    ? (process.env.STRIPE_SECRET_KEY_LIVE || "")
    : (process.env.STRIPE_SECRET_KEY_TEST || process.env.STRIPE_SECRET_KEY || "");
  const isLiveSecret = stripeSecret.startsWith("sk_live_") || stripeSecret.startsWith("rk_live_");
  const isTestSecret = stripeSecret.startsWith("sk_test_") || stripeSecret.startsWith("rk_test_");

  if (liveCheckoutEnabled && !isLiveSecret) {
    return reply(503, {error:"Live checkout is enabled, but a valid live Stripe key is not configured."}, origin);
  }
  if (!liveCheckoutEnabled && !isTestSecret) {
    return reply(503, {error:"Stripe test mode is not configured yet. Please try again after setup is complete."}, origin);
  }

  let items;
  try {
    items = parseCart(event.body);
  } catch (error) {
    return reply(400, {error:error.message}, origin);
  }

  const form = new URLSearchParams();
  form.set("mode", "payment");
  form.set("billing_address_collection", "auto");
  form.set("shipping_address_collection[allowed_countries][0]", "GB");
  form.set("success_url", origin + "/checkout-success.html?session_id={CHECKOUT_SESSION_ID}&mode=" + (liveCheckoutEnabled ? "live" : "test"));
  form.set("cancel_url", origin + "/cart.html?checkout=cancelled");
  form.set("submit_type", "pay");
  form.set("metadata[store]", "BABALUX");
  form.set("metadata[checkout_environment]", liveCheckoutEnabled ? "live" : "test");

  items.forEach((item, index) => {
    form.set("line_items[" + index + "][quantity]", String(item.quantity));
    form.set("line_items[" + index + "][price_data][currency]", "gbp");
    form.set("line_items[" + index + "][price_data][unit_amount]", String(item.unitAmount));
    form.set("line_items[" + index + "][price_data][product_data][name]", item.name);
    if (item.variantLabel) {
      form.set("line_items[" + index + "][price_data][product_data][description]", item.variantLabel);
    }
  });

  try {
    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + stripeSecret,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: form.toString()
    });

    const stripeBody = await stripeResponse.json();
    if (!stripeResponse.ok) {
      console.error("Stripe Checkout Session creation failed:", stripeBody?.error?.type || "unknown error", stripeBody?.error?.message || "");
      return reply(502, {error:"Stripe could not start checkout. Please check the test account setup and try again."}, origin);
    }
    if (!stripeBody.url) {
      return reply(502, {error:"Stripe did not return a checkout link. Please try again."}, origin);
    }

    return reply(200, {url:stripeBody.url}, origin);
  } catch (error) {
    console.error("Checkout request failed:", error?.message || "unknown error");
    return reply(502, {error:"We could not reach Stripe. Please try again in a moment."}, origin);
  }
};
