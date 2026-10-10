/**
 * SPECIALTY CHEESE & CHARCUTERIE SHOP
 * Master Product, Pairing & Article Database (Clear, Understandable English)
 */

const GOURMET_DATABASE = {
  products: [
    {
      id: "comte-36m",
      name: "36-Month Aged French Comté Cheese",
      subName: "Cave-Aged Mountain Raw Cow Milk Cheese",
      category: "cheese",
      type: "Hard Mountain Cheese",
      origin: "Jura Mountains, France",
      country: "France",
      milk: "100% Raw Mountain Cow Milk",
      texture: "Firm, rich, with crunchy aged crystals",
      aging: "Aged 36 Months in Natural Stone Caves",
      price: 24.50,
      weight: "250g Wedge",
      rating: 4.95,
      reviewsCount: 128,
      inStock: true,
      badge: "Master Reserve",
      badgeColor: "gold",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
      description: "Aged for a full three years deep inside underground mountain stone caves. Every wheel is tapped by hand to ensure perfect maturity. Features rich, deep flavors of melted brown butter, toasted hazelnuts, and warm cream, dotted with sweet, crunchy aged cheese crystals.",
      tastingNotes: ["Brown Butter", "Roasted Hazelnuts", "Toasted Brioche", "Crunchy Aged Crystals"],
      sensory: {
        intensity: 85,
        creaminess: 60,
        saltiness: 70,
        earthiness: 90
      },
      pairings: {
        wines: ["Dry White Burgundy (Chardonnay)", "Vintage Champagne", "Dry French Jura White"],
        accoutrements: ["Black Cherry Preserves", "Salted Marcona Almonds", "Artisan Sourdough Crackers"]
      },
      producer: {
        name: "Marcel Petite Cave Fromagerie",
        region: "Jura, France",
        established: 1966
      }
    },
    {
      id: "brillat-savarin-truffle",
      name: "Black Truffle Triple-Cream Brie",
      subName: "Soft French Cream Cheese Layered with Périgord Truffles",
      category: "cheese",
      type: "Soft Cream Cheese",
      origin: "Burgundy, France",
      country: "France",
      milk: "Fresh Cow Milk & Farmhouse Cream",
      texture: "Ultra-creamy, buttery, melts instantly",
      aging: "Matured 5 Weeks",
      price: 28.00,
      weight: "200g Wheel",
      rating: 4.98,
      reviewsCount: 94,
      inStock: true,
      badge: "Best Seller",
      badgeColor: "gold",
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=800&q=80",
      description: "An indulgent French triple-cream cheese cut across the middle and filled generously with real black winter truffles. Spreadable and luxurious like whipped butter, with an unforgettable aroma of fresh cream and wild forest truffles.",
      tastingNotes: ["Black Winter Truffle", "Whipped Sweet Butter", "Fresh Cream", "Earthy Mushrooms"],
      sensory: {
        intensity: 80,
        creaminess: 98,
        saltiness: 55,
        earthiness: 95
      },
      pairings: {
        wines: ["Chilled Brut Champagne", "Crisp Chablis", "Sparkling Prosecco"],
        accoutrements: ["Raw Truffle Honey", "Dried Sweet Figs", "Crisp Water Crackers"]
      },
      producer: {
        name: "Fromagerie Delin Burgundy",
        region: "Burgundy, France",
        established: 1969
      }
    },
    {
      id: "jamon-iberico-bellota",
      name: "100% Acorn-Fed Jamón Ibérico (Pata Negra)",
      subName: "Hand-Carved Spanish Cured Ham (Aged 48 Months)",
      category: "charcuterie",
      type: "Air-Cured Spanish Ham",
      origin: "Jabugo, Spain",
      country: "Spain",
      milk: "100% Pure Iberian Acorn-Fed Pork",
      texture: "Delicate, silky ribbons that melt in your mouth",
      aging: "Naturally Air-Cured 48 Months",
      price: 36.00,
      weight: "100g Sliced",
      rating: 5.0,
      reviewsCount: 210,
      inStock: true,
      badge: "World Famous",
      badgeColor: "burgundy",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      description: "The crown jewel of cured meats. Free-range Iberian pigs roam ancient oak forests in Spain eating sweet acorns. Cured naturally in mountain air for four years and sliced by master carvers into paper-thin slices with healthy, buttery marbling.",
      tastingNotes: ["Sweet Acorn", "Savory Umami", "Oak Wood", "Melt-In-Mouth Fat"],
      sensory: {
        intensity: 95,
        creaminess: 90,
        saltiness: 75,
        earthiness: 88
      },
      pairings: {
        wines: ["Spanish Rioja Red", "Dry Sherry (Manzanilla)", "Vintage Tempranillo"],
        accoutrements: ["Crisp Breadsticks (Picos)", "Spanish Green Olives", "Rosemary Almonds"]
      },
      producer: {
        name: "Jabugo Artisan Bodegas",
        region: "Andalusia, Spain",
        established: 1889
      }
    },
    {
      id: "roquefort-papillon",
      name: "Traditional French Roquefort Blue Cheese",
      subName: "Cave-Matured Raw Sheep Milk Blue Cheese",
      category: "cheese",
      type: "Blue Cheese",
      origin: "Roquefort-sur-Soulzon, France",
      country: "France",
      milk: "100% Raw Sheep Milk",
      texture: "Crumbly yet creamy with emerald blue veins",
      aging: "Matured 5 Months in Natural Caves",
      price: 19.50,
      weight: "200g Wedge",
      rating: 4.88,
      reviewsCount: 76,
      inStock: true,
      badge: "Authentic AOP",
      badgeColor: "olive",
      image: "https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?auto=format&fit=crop&w=800&q=80",
      description: "The legendary French 'King of Cheeses', ripened exclusively inside the damp limestone caves of Mount Combalou. Sharp, savory, creamy, and wonderfully balanced with bold blue cheese veins.",
      tastingNotes: ["Bold Blue Vein", "Sweet Sheep Cream", "Rich Sea Salt", "Floral Herbs"],
      sensory: {
        intensity: 95,
        creaminess: 70,
        saltiness: 88,
        earthiness: 85
      },
      pairings: {
        wines: ["Sweet Sauternes Dessert Wine", "Vintage Tawny Port", "Riesling"],
        accoutrements: ["Wildflower Honeycomb", "Toasted Walnuts", "Fresh Sliced Pears"]
      },
      producer: {
        name: "Maison Papillon",
        region: "Occitanie, France",
        established: 1906
      }
    },
    {
      id: "prosciutto-san-daniele",
      name: "Prosciutto di San Daniele (Aged 24 Months)",
      subName: "Italian Alpine & Sea Breeze Cured Ham",
      category: "charcuterie",
      type: "Air-Cured Italian Ham",
      origin: "San Daniele, Italy",
      country: "Italy",
      milk: "Heritage Italian Pork",
      texture: "Whisper-thin, delicate, sweet slices",
      aging: "Air-Cured 24 Months",
      price: 22.50,
      weight: "150g Sliced Pack",
      rating: 4.92,
      reviewsCount: 88,
      inStock: true,
      badge: "Italian DOP",
      badgeColor: "burgundy",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      description: "Renowned for its natural sweetness and delicate texture. Cured where cool breezes from the Italian Alps meet warm winds from the Adriatic Sea, using only natural sea salt and patience.",
      tastingNotes: ["Sweet Cured Ham", "Honeydew Melon", "Delicate Salt", "Gentle Walnut"],
      sensory: {
        intensity: 75,
        creaminess: 80,
        saltiness: 65,
        earthiness: 60
      },
      pairings: {
        wines: ["Italian Pinot Grigio", "Crisp Prosecco", "Chardonnay"],
        accoutrements: ["Fresh Sweet Figs", "Grissini Breadsticks", "Aged Balsamic Glaze"]
      },
      producer: {
        name: "Salumificio Dok Dall'Ava",
        region: "Friuli, Italy",
        established: 1955
      }
    },
    {
      id: "manchego-curado-18m",
      name: "Aged Spanish Manchego Cheese (18 Months)",
      subName: "Handcrafted Raw Sheep Milk Cheese",
      category: "cheese",
      type: "Firm Aged Sheep Cheese",
      origin: "La Mancha, Spain",
      country: "Spain",
      milk: "100% Raw Manchega Sheep Milk",
      texture: "Firm, crumbly, buttery with subtle crystals",
      aging: "Aged 18 Months on Wood Racks",
      price: 21.00,
      weight: "250g Wedge",
      rating: 4.90,
      reviewsCount: 102,
      inStock: true,
      badge: "Artisan DOP",
      badgeColor: "gold",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
      description: "Made from the rich milk of free-grazing sheep that feed on wild rosemary and thyme across central Spain. Firm and nutty with a gentle piquant finish and signature basket-weave rind.",
      tastingNotes: ["Toasted Almond", "Wild Herbs", "Caramelized Sheep Milk", "Savory Tang"],
      sensory: {
        intensity: 85,
        creaminess: 50,
        saltiness: 75,
        earthiness: 80
      },
      pairings: {
        wines: ["Spanish Rioja Crianza", "Medium Dry Sherry", "Cabernet Sauvignon"],
        accoutrements: ["Spanish Quince Paste (Membrillo)", "Roasted Almonds", "Olive Oil Crackers"]
      },
      producer: {
        name: "Artequeso Farmstead",
        region: "Toledo, Spain",
        established: 1983
      }
    },
    {
      id: "truffle-moliterno",
      name: "Aged Pecorino with Black Truffle Swirls",
      subName: "Firm Italian Sheep Cheese Infused with Black Truffle",
      category: "cheese",
      type: "Hard Veined Pecorino",
      origin: "Sardinia, Italy",
      country: "Italy",
      milk: "100% Whole Sheep Milk",
      texture: "Firm, flaky, interlaced with black truffle paste",
      aging: "Cellar Cured 12 Months",
      price: 29.50,
      weight: "200g Cut",
      rating: 4.96,
      reviewsCount: 65,
      inStock: true,
      badge: "Rare Find",
      badgeColor: "gold",
      image: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0?auto=format&fit=crop&w=800&q=80",
      description: "Aged for several months before pure black truffle paste is directly injected into the wheel. The truffle flavor flows through every crack while keeping the cheese delightfully firm and savory.",
      tastingNotes: ["Black Winter Truffle", "Sharp Pecorino", "Rich Broth Umami", "Aged Salt"],
      sensory: {
        intensity: 92,
        creaminess: 55,
        saltiness: 85,
        earthiness: 96
      },
      pairings: {
        wines: ["Italian Barolo", "Brunello di Montalcino", "Chianti Classico"],
        accoutrements: ["Clover Honeycomb", "Toasted Crostini", "Roasted Pistachios"]
      },
      producer: {
        name: "Caseificio Central",
        region: "Sardinia, Italy",
        established: 1940
      }
    },
    {
      id: "culatello-zibello",
      name: "Culatello di Zibello (The King of Italian Ham)",
      subName: "Rare Artisan Cured Ham Aged Near the Po River",
      category: "charcuterie",
      type: "Artisan Cured Ham",
      origin: "Parma, Italy",
      country: "Italy",
      milk: "Heritage Italian Pork",
      texture: "Velvety, petal-soft ruby slices",
      aging: "Cellar Aged 30 Months",
      price: 42.00,
      weight: "100g Sliced",
      rating: 4.99,
      reviewsCount: 52,
      inStock: true,
      badge: "Michelin Favorite",
      badgeColor: "burgundy",
      image: "https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=800&q=80",
      description: "Considered by top culinary chefs as the rarest and finest cured meat in Europe. Only the prime center muscle of the thigh is cured inside centuries-old damp cellars, creating a sweet, melt-in-the-mouth texture.",
      tastingNotes: ["Rose Petals", "Sweet Spiced Ham", "Melted Butter Fat", "Deep Savory Umami"],
      sensory: {
        intensity: 90,
        creaminess: 88,
        saltiness: 70,
        earthiness: 82
      },
      pairings: {
        wines: ["Sparkling Franciacorta", "Dry Italian Lambrusco", "Barbaresco"],
        accoutrements: ["Salted Farmhouse Butter", "Warm Brioche", "Pickled Baby Onions"]
      },
      producer: {
        name: "Antica Corte Pallavicina",
        region: "Parma, Italy",
        established: 1893
      }
    },
    {
      id: "sainte-maure-touraine",
      name: "French Sainte-Maure Artisan Goat Cheese",
      subName: "Ash-Coated Soft Goat Cheese Log",
      category: "cheese",
      type: "Soft Goat Cheese",
      origin: "Loire Valley, France",
      country: "France",
      milk: "100% Fresh Alpine Goat Milk",
      texture: "Dense, creamy center with a runny creamline",
      aging: "Matured 4 to 6 Weeks",
      price: 18.00,
      weight: "250g Log",
      rating: 4.87,
      reviewsCount: 62,
      inStock: true,
      badge: "French AOP",
      badgeColor: "olive",
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
      description: "A famous French goat cheese log coated in light vegetable ash with a natural rye straw running through its center. Creamy, tangy, and fresh with pleasant citrus and walnut undertones.",
      tastingNotes: ["Fresh Goat Cream", "Citrus Lemon Herb", "Toasted Walnut", "Smooth Ash Rind"],
      sensory: {
        intensity: 70,
        creaminess: 75,
        saltiness: 60,
        earthiness: 82
      },
      pairings: {
        wines: ["Sauvignon Blanc (Sancerre)", "Dry Rosé", "Pinot Grigio"],
        accoutrements: ["Lavender Honey", "Green Apple Slices", "Toasted Pecans"]
      },
      producer: {
        name: "Ferme du Châtellier",
        region: "Loire Valley, France",
        established: 1978
      }
    },
    {
      id: "bresaola-valtellina",
      name: "Air-Dried Italian Alpine Beef (Bresaola)",
      subName: "Lean Cured Beef Seasoned with Juniper & Bay Leaves",
      category: "charcuterie",
      type: "Dry-Cured Beef",
      origin: "Valtellina, Italy",
      country: "Italy",
      milk: "Heritage Lean Beef",
      texture: "Lean, tender, delicate ruby-red slices",
      aging: "Dried in Pure Alpine Mountain Air for 14 Weeks",
      price: 21.00,
      weight: "120g Sliced Pack",
      rating: 4.89,
      reviewsCount: 71,
      inStock: true,
      badge: "Italian IGP",
      badgeColor: "burgundy",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      description: "Made from prime lean beef, seasoned with sea salt, crushed juniper berries, and bay leaves, then dried by pure mountain winds in the Italian Alps. Exceptionally lean, flavorful, and tender.",
      tastingNotes: ["Alpine Juniper", "Savory Cured Beef", "Bay Leaf Spice", "Fresh Black Pepper"],
      sensory: {
        intensity: 70,
        creaminess: 40,
        saltiness: 68,
        earthiness: 75
      },
      pairings: {
        wines: ["Nebbiolo", "Sparkling Brut", "Barbera"],
        accoutrements: ["Shaved Parmesan Cheese", "Fresh Arugula & Olive Oil", "Lemon Wedges"]
      },
      producer: {
        name: "Salumificio Bordoni",
        region: "Lombardy, Italy",
        established: 1968
      }
    },
    {
      id: "morbier-affine",
      name: "Morbier French Cheese with Ash Vein",
      subName: "Semi-Soft French Farmhouse Cow Milk Cheese",
      category: "cheese",
      type: "Semi-Soft Cheese",
      origin: "Jura, France",
      country: "France",
      milk: "100% Raw Cow Milk",
      texture: "Supple, springy, melts easily",
      aging: "Cellar Aged 90 Days",
      price: 17.50,
      weight: "220g Wedge",
      rating: 4.84,
      reviewsCount: 54,
      inStock: true,
      badge: "Heritage French",
      badgeColor: "olive",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80",
      description: "Famous for its dark, decorative layer of natural vegetable ash running horizontally through the center. Incredibly rich and creamy with delightful aromas of roasted peanuts, warm cream, and mild pasture flowers.",
      tastingNotes: ["Roasted Peanuts", "Warm Sweet Cream", "Pasture Flowers", "Gentle Savory Finish"],
      sensory: {
        intensity: 68,
        creaminess: 82,
        saltiness: 62,
        earthiness: 74
      },
      pairings: {
        wines: ["Chardonnay", "Pinot Noir", "Beaujolais"],
        accoutrements: ["Crisp Pickled Cornichons", "Spelt Crackers", "Whole Grain Dijon Mustard"]
      },
      producer: {
        name: "Fromagerie Badoz",
        region: "Jura, France",
        established: 1961
      }
    },
    {
      id: "chorizo-bellota-jabugo",
      name: "Smoked Spanish Chorizo Salami (Acorn-Fed)",
      subName: "Handcrafted Cured Salami with Smoked Paprika",
      category: "charcuterie",
      type: "Artisan Dry Salami",
      origin: "Jabugo, Spain",
      country: "Spain",
      milk: "100% Acorn-Fed Iberian Pork",
      texture: "Firm, rich, seasoned with smoked paprika",
      aging: "Air-Cured 6 Months",
      price: 18.50,
      weight: "250g Whole",
      rating: 4.93,
      reviewsCount: 89,
      inStock: true,
      badge: "Artisan Classic",
      badgeColor: "burgundy",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      description: "Made from premium cuts of acorn-fed Iberian pork, seasoned with garlic, sea salt, and authentic Spanish oak-smoked paprika. Naturally air-cured for six months for a warm, smoky, savory bite.",
      tastingNotes: ["Smoked Paprika", "Sweet Pork Fat", "Roasted Garlic", "Warm Spices"],
      sensory: {
        intensity: 88,
        creaminess: 72,
        saltiness: 78,
        earthiness: 84
      },
      pairings: {
        wines: ["Spanish Tempranillo", "Grenache Red", "Crisp Dry White"],
        accoutrements: ["Manchego Cheese Cubes", "Caramelized Onion Jam", "Crusty Warm Baguette"]
      },
      producer: {
        name: "Señorío de Montanera",
        region: "Extremadura, Spain",
        established: 1990
      }
    }
  ],

  giftBoxes: [
    {
      id: "box-grand-terroir",
      name: "The European Gourmet Tasting Box",
      tier: "Connoisseur Edition",
      price: 125.00,
      serves: "Serves 4–6 People",
      featured: true,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80",
      description: "Our most popular gift hamper. Includes the best European cheeses, acorn-fed Spanish ham, raw honeycomb, artisan crackers, and a wooden cheese knife in an engraved wooden gift box.",
      includes: [
        "Aged French Comté (36 Months, 250g)",
        "100% Acorn-Fed Jamón Ibérico Ham (100g)",
        "Black Truffle Triple-Cream Brie (200g)",
        "French Sainte-Maure Soft Goat Cheese (250g)",
        "Lavender Honeycomb Jar (120g)",
        "Crispy Olive Oil Crackers & Toast",
        "Handmade Wooden Serving Knife"
      ]
    },
    {
      id: "box-cellar-reserve",
      name: "The Master Collector's Luxury Hamper",
      tier: "Luxury Reserve Edition",
      price: 215.00,
      serves: "Serves 8–10 People",
      featured: false,
      image: "https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=800&q=80",
      description: "An extraordinary party collection of rare vintage cheeses, Italian Culatello ham, black truffle pecorino, French blue cheese, and luxury cheese knives in a deluxe wooden crate.",
      includes: [
        "Culatello di Zibello Italian Ham (100g)",
        "Black Truffle Moliterno Pecorino (200g)",
        "Roquefort Blue Cheese (200g)",
        "100% Acorn-Fed Jamón Ibérico (100g)",
        "Prosciutto di San Daniele (150g)",
        "Smoked Spanish Chorizo Salami (250g)",
        "Black Truffle & Walnut Tapenade",
        "Pair of Premium French Cheese Knives"
      ]
    },
    {
      id: "box-petite-degustation",
      name: "The Weekend Wine & Cheese Box",
      tier: "Evening Host Edition",
      price: 78.00,
      serves: "Serves 2–4 People",
      featured: false,
      image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
      description: "Perfect for a cozy wine night or an appetizer platter with friends. Features Spanish Manchego, Italian cured beef, French Morbier cheese, sweet quince paste, and crispy breadsticks.",
      includes: [
        "Aged Spanish Manchego 18-Month (250g)",
        "Air-Dried Italian Beef Bresaola (120g)",
        "Morbier French Farmhouse Cheese (220g)",
        "Sweet Quince Paste (Membrillo)",
        "Crispy Mediterranean Breadsticks",
        "Printed Cheese & Wine Pairing Guide"
      ]
    }
  ],

  blogArticles: [
    {
      id: "art-of-comte-affinage",
      title: "Why 36-Month Aged Comté Cheese Tastes So Incredible",
      subtitle: "The secret of aging cheese inside damp mountain caves.",
      category: "Cheese Guides",
      readTime: "7 Min Read",
      date: "October 3, 2026",
      author: "Émile Laurent, Master Cheesemaker",
      image: "https://images.unsplash.com/photo-1528733918455-5a59687cedf0?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Deep inside the mountains of France, an old military fortress holds 100,000 wheels of Comté cheese. Learn why three full years of cave aging creates crunchy sweet crystals and rich hazelnut notes.",
      tags: ["French Cheese", "Aged Cheese", "Cheese Caves", "Alpine Dairy"],
      caption: "Stone galleries inside Fort Saint-Antoine, France. Constant 10°C temperature and 92% natural humidity.",
      body: [
        "Deep inside the limestone mountains of the French Jura region stands an extraordinary building: Fort Saint-Antoine. Built in 1879 by military engineers as an underground defense fort, its thick stone walls and subterranean tunnels were designed to survive heavy artillery. Today, instead of weapons, these quiet stone vaults house over 100,000 wheels of authentic French Comté cheese.",
        "In 1966, cheesemaker Marcel Petite made a bold decision. While modern dairy factories preferred dry, heated warehouses for rapid sales, Petite realized that true cheese requires natural patience. The natural dampness and cool 10°C air under 25 meters of earth created the exact environment needed to develop complex hazelnut and butter flavors.",
        "Every morning, skilled cellar workers walk down the spruce wood racks carrying small brass sounding hammers. Lightly tapping each wheel reveals its internal consistency. A hollow sound warns of an air pocket, while a clear, ringing tone confirms that the cheese paste is dense, uniform, and maturing into perfection."
      ],
      quote: "You cannot rush a 40-kilogram wheel of Comté. Giving the cheese three full years of slow cave aging is what creates the delightful crunchy crystals and nutty sweetness you taste in every slice.",
      quoteCite: "— Emile Laurent, Master Cheesemaker",
      sidebarTitle: "What Are Those Crunchy White Crystals?",
      sidebarText: "As high-quality cheese ages past 24 months, natural milk proteins gently break down into amino acids. These amino acids group together and form tiny white crystals called tyrosine. They are completely natural, harmless, and deliver that wonderful slight crunch that cheese connoisseurs love.",
      winePairing: "Best Wine Pairing: Crisp dry white wines like Chablis or rich medium-bodied red wines.",
      journalBadge: "1966",
      journalTitle: "From the Founder's Diary: Fort Saint-Antoine",
      journalText: "The cool air inside the stone fort is remarkable today. The natural spruce shelves are lightly fragrant. We transferred fifty wheels made from high alpine summer milk into Gallery West. The wheels sound clear and resonant upon tapping. We will let them rest quietly through the winter."
    },
    {
      id: "cortador-de-jamon-mastery",
      title: "Why Jamón Ibérico Should Always Be Sliced by Hand",
      subtitle: "How delicate knife slicing protects the sweet acorn fats.",
      category: "Cured Meats",
      readTime: "5 Min Read",
      date: "September 24, 2026",
      author: "Mateo Ortiz, Master Ham Carver",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      excerpt: "When high-speed meat slicers cut cured ham, the friction and heat damage the delicate natural oils. Slicing paper-thin by hand allows the meat to melt softly the moment it hits your tongue.",
      tags: ["Spanish Ham", "Jamon Iberico", "Knife Skills", "Food Guides"],
      caption: "Hand-carving Jamón Ibérico in Jabugo, Spain. Slices are cut paper-thin and served at room temperature.",
      body: [
        "When a high-speed slicer bites into a leg of Jamón Ibérico, blade friction warms the meat and smears its prized marbled fat. Those sweet acorn oils — built over four years of mountain-air curing — lose their silkiness in seconds under heat and pressure.",
        "A master carver, or cortador, works instead with a long, flexible cuchillo jamonero, drawing paper-thin ribbons with slow strokes that follow the grain. Served at room temperature within the hour, each slice melts softly the moment it touches your tongue."
      ],
      quote: "A sharp knife guided by hand allows the sweet acorn fat of the ham to shine.",
      quoteCite: "— Mateo Ortiz, Master Ham Carver",
      sidebarTitle: "Why Machines Damage Cured Ham",
      sidebarText: "Machine blades generate friction heat that melts delicate acorn-fed marbling and tears fine muscle fibers. Hand slicing keeps the fat intact and glossy, preserving the ham's signature melt-in-the-mouth texture.",
      winePairing: "Best Wine Pairing: Dry Manzanilla sherry or aged Spanish Rioja reds.",
      journalBadge: "1889",
      journalTitle: "From the Bodega Log: Jabugo Oak Forests",
      journalText: "The autumn montanera begins this week. The pigs roam freely beneath the holm oaks, each eating nearly ten kilos of sweet acorns a day. Cool night breezes move through the drying sheds — perfect curing weather ahead."
    },
    {
      id: "architecture-of-the-board",
      title: "How to Build an Impressive Charcuterie Board at Home",
      subtitle: "The simple 3:3:3 rule that makes every party platter look and taste amazing.",
      category: "Entertaining Guides",
      readTime: "6 Min Read",
      date: "September 12, 2026",
      author: "Geneviève Moreau, Food Stylist",
      image: "https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Building a beautiful party platter is easy when you follow a few basic rules: pair 3 distinct cheeses, 3 flavorful cured meats, and 3 tasty sides like honey, olives, and fresh fruit.",
      tags: ["Board Styling", "Party Hosting", "Wine Pairings", "Easy Entertaining"],
      caption: "A finished board with honeycomb, grapes, ribbons of ham, and aged wedges ready for guests.",
      body: [
        "A beautiful board follows one simple formula — the 3:3:3 rule. Choose three distinct cheeses (one soft, one firm, one bold), three cured meats with different textures, and three sides that add sweetness, crunch, and color: honey, olives, and fresh fruit.",
        "Build height first: place bowls of honey and olives as anchors, fan the meats in loose ribbons, then fill every gap with crackers, nuts, and grapes. Serve cheeses at room temperature so their aromas fully open up."
      ],
      quote: "Pair 3 distinct cheeses, 3 flavorful cured meats, and 3 tasty sides — balance is what makes a board unforgettable.",
      quoteCite: "— Geneviève Moreau, Food Stylist",
      sidebarTitle: "The 3:3:3 Balance Rule",
      sidebarText: "Three cheeses cover every palate (creamy, nutty, bold), three meats add savory depth, and three sweet-tangy sides reset the taste buds between bites. Plan roughly 120 grams of food per guest for cocktail parties.",
      winePairing: "Best Wine Pairing: Sparkling Champagne or chilled Chardonnay for the whole table.",
      journalBadge: "3:3:3",
      journalTitle: "From the Stylist's Notebook: Party Night",
      journalText: "Tonight's board came together in twenty minutes: truffle brie, aged Comté, Roquefort, ribbons of ibérico, honeycomb, and black grapes. The honey bowl in the center did all the visual work — guests photographed it before touching a bite."
    },
    {
      id: "goat-cheese-logs-beginners",
      title: "A Beginner's Guide to French Goat Cheese Logs",
      subtitle: "How fresh Sainte-Maure logs get their wrinkled rind and bright citrus snap.",
      category: "Cheese Guides",
      readTime: "5 Min Read",
      date: "August 28, 2026",
      author: "Geneviève Moreau, Food Stylist",
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Rolled in fine ash and aged just two weeks, French goat logs stay bright, lemony, and spreadable. Learn how to spot a perfect log, when to serve it, and which honey drizzles make it shine.",
      tags: ["Goat Cheese", "French Cheese", "Beginner Guides", "Serving Tips"],
      caption: "Fresh Sainte-Maure logs with wrinkled ash rinds and a traditional straw through the center.",
      body: [
        "A great French goat log looks slightly wrinkled, like fine linen, with a thin grey-white rind of ash and mold. Press it gently: the center should give just a little. If the log weeps or smells sharp like ammonia, it has passed its peak.",
        "Serve logs at room temperature with raw honey, dried figs, and crisp water crackers. A two-week-aged Sainte-Maure spreads like butter and tastes bright and lemony — the perfect starting cheese for any board."
      ],
      quote: "Fresh goat cheese should taste like spring morning: clean, bright, and gently tangy.",
      quoteCite: "— Geneviève Moreau, Food Stylist",
      sidebarTitle: "What Is the Grey Ash Line?",
      sidebarText: "The thin ash layer is food-safe vegetable charcoal. It protects the young cheese, balances acidity, and helps the wrinkled Geotrichum rind form evenly during its short two-week aging.",
      winePairing: "Best Wine Pairing: Crisp Sauvignon Blanc or dry Pinot Grigio.",
      journalBadge: "2 WK",
      journalTitle: "From the Dairy Notes: Loire Valley",
      journalText: "This morning's logs left the ash room with perfect wrinkled coats. The traditional straw runs through each center to keep the delicate paste from breaking on its journey to your table."
    },
    {
      id: "blue-cheese-wine-rules",
      title: "5 Simple Wine Rules for Bold Blue Cheese",
      subtitle: "Sweet wines tame savory Roquefort — here is exactly why it works.",
      category: "Pairing Guides",
      readTime: "6 Min Read",
      date: "August 14, 2026",
      author: "Dr. Sofia Bertolli, Sommelier",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Salty Roquefort begs for sweetness: Sauternes, Port, and late-harvest Riesling. Our sommelier shares five foolproof rules plus the one pairing mistake almost every host makes.",
      tags: ["Wine Pairing", "Blue Cheese", "Roquefort", "Entertaining"],
      caption: "Roquefort wedges beside a glass of golden Sauternes and a drizzle of honeycomb.",
      body: [
        "Salt and sweetness are natural partners: the salt in Roquefort makes sweet wine taste rounder, while the wine's honeyed depth tames the cheese's peppery bite. That is why Sauternes, Port, and late-harvest Riesling outperform dry reds every time.",
        "The one mistake hosts make is serving blue cheese ice-cold, which mutes its creaminess. Bring Roquefort to room temperature an hour before guests arrive, drizzle with honeycomb, and pour something sweet and golden."
      ],
      quote: "Pairing the right cheese with the right wine creates an unforgettable experience.",
      quoteCite: "— Dr. Sofia Bertolli, Sommelier",
      sidebarTitle: "Why Sweet Wine Loves Salty Blue",
      sidebarText: "Salt suppresses bitterness and lifts sweetness on the palate, so each sip of dessert wine tastes richer after blue cheese — and each bite of cheese tastes creamier after the wine. A perfect two-way pairing.",
      winePairing: "Best Wine Pairing: Sweet Sauternes, vintage Port, or late-harvest Riesling.",
      journalBadge: "No.5",
      journalTitle: "From the Tasting Journal: Roquefort Evening",
      journalText: "Rule number five proved itself again tonight: never chill the blue. The room-temperature wedge turned silky against the Sauternes, and the honeycomb disappeared first — as always."
    },
    {
      id: "seasons-shape-flavor",
      title: "From Summer Pasture to Winter Cave: How Seasons Shape Flavor",
      subtitle: "Why the same cheese tastes different in July and December.",
      category: "Cheese Guides",
      readTime: "8 Min Read",
      date: "July 30, 2026",
      author: "Émile Laurent, Master Cheesemaker",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
      excerpt: "Wildflower summer milk turns golden and aromatic, while winter hay milk goes pale and mellow. Follow a wheel from alpine pasture through the aging cave across all four seasons.",
      tags: ["Alpine Dairy", "Seasonality", "Cheese Caves", "Food Science"],
      caption: "High alpine pastures above the Comté dairies, where summer wildflowers color the milk gold.",
      body: [
        "In July, mountain cows graze on wildflowers, clover, and fresh herbs, and their milk turns visibly golden with beta-carotene. Cheeses made in these weeks taste aromatic and complex. By January, the same herd eats stored hay, and the milk — and the cheese — turns paler and milder.",
        "That is why affineurs stamp every wheel with its month of making. A summer wheel aged 36 months and a winter wheel aged 36 months are siblings, not twins — try them side by side and taste the calendar."
      ],
      quote: "A wheel of cheese holds the story of the sunny summer pastures where the cows grazed.",
      quoteCite: "— Emile Laurent, Master Cheesemaker",
      sidebarTitle: "Summer Milk vs Winter Milk",
      sidebarText: "Pasture flowers and sunlight enrich summer milk with carotene and floral aromas; winter hay milk is leaner and gentler. Cheesemakers track the season of every wheel because it shapes the final flavor as much as aging does.",
      winePairing: "Best Wine Pairing: Dry White Burgundy for summer wheels, vintage Champagne for winter wheels.",
      journalBadge: "JUL",
      journalTitle: "From the Pasture Log: High Alps",
      journalText: "The herd moved above 1,500 meters today into full wildflower bloom. This morning's milk measured deep gold — the July wheels from this pasture will be the ones collectors ask for in three years."
    }
  ],

  boardBuilderIngredients: [
    { id: "b-comte", name: "36-Month Aged French Comté", category: "cheese", type: "Hard / Nutty / Crystallized", price: 24.50, weight: "250g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-gold);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 9.5V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.5L12 2zm0 3.2L18.8 10H5.2L12 5.2zM4 12h16v7H4v-7zm4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>` },
    { id: "b-brillat", name: "Black Truffle Triple-Cream Brie", category: "cheese", type: "Soft / Decadent / Creamy", price: 28.00, weight: "200g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-gold);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 9.5V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.5L12 2zm0 3.2L18.8 10H5.2L12 5.2zM4 12h16v7H4v-7zm4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>` },
    { id: "b-roquefort", name: "French Roquefort Blue Cheese", category: "cheese", type: "Bold / Savory / Piquant", price: 19.50, weight: "200g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-gold);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 9.5V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.5L12 2zm0 3.2L18.8 10H5.2L12 5.2zM4 12h16v7H4v-7zm4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>` },
    { id: "b-manchego", name: "Aged Spanish Manchego 18M", category: "cheese", type: "Firm / Nutty / Sheep Milk", price: 21.00, weight: "250g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-gold);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 9.5V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.5L12 2zm0 3.2L18.8 10H5.2L12 5.2zM4 12h16v7H4v-7zm4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>` },
    { id: "b-chèvre", name: "French Sainte-Maure Goat Cheese", category: "cheese", type: "Soft / Fresh / Citrusy", price: 18.00, weight: "250g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-gold);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 9.5V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9.5L12 2zm0 3.2L18.8 10H5.2L12 5.2zM4 12h16v7H4v-7zm4 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm7 1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4zm-3-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>` },
    { id: "b-iberico", name: "100% Acorn-Fed Jamón Ibérico", category: "meat", type: "Thin Sliced / Melt-in-Mouth", price: 36.00, weight: "100g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-burgundy);" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 5.5c-2.48-2.48-6.5-2.48-8.98 0l-7.07 7.07a6.35 6.35 0 0 0 8.98 8.98l7.07-7.07c2.48-2.48 2.48-6.5 0-8.98zm-2.12 6.86-5.66 5.66a3.35 3.35 0 0 1-4.74-4.74l5.66-5.66a3.35 3.35 0 0 1 4.74 4.74z"/></svg>` },
    { id: "b-san-daniele", name: "Prosciutto di San Daniele 24M", category: "meat", type: "Sweet / Tender / Delicate", price: 22.50, weight: "150g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-burgundy);" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 5.5c-2.48-2.48-6.5-2.48-8.98 0l-7.07 7.07a6.35 6.35 0 0 0 8.98 8.98l7.07-7.07c2.48-2.48 2.48-6.5 0-8.98zm-2.12 6.86-5.66 5.66a3.35 3.35 0 0 1-4.74-4.74l5.66-5.66a3.35 3.35 0 0 1 4.74 4.74z"/></svg>` },
    { id: "b-chorizo", name: "Spanish Smoked Chorizo Salami", category: "meat", type: "Smoky / Paprika / Savory", price: 18.50, weight: "250g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-burgundy);" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 5.5c-2.48-2.48-6.5-2.48-8.98 0l-7.07 7.07a6.35 6.35 0 0 0 8.98 8.98l7.07-7.07c2.48-2.48 2.48-6.5 0-8.98zm-2.12 6.86-5.66 5.66a3.35 3.35 0 0 1-4.74-4.74l5.66-5.66a3.35 3.35 0 0 1 4.74 4.74z"/></svg>` },
    { id: "b-culatello", name: "Culatello di Zibello (King of Ham)", category: "meat", type: "Ultra Tender / Savory", price: 42.00, weight: "100g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-burgundy);" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 5.5c-2.48-2.48-6.5-2.48-8.98 0l-7.07 7.07a6.35 6.35 0 0 0 8.98 8.98l7.07-7.07c2.48-2.48 2.48-6.5 0-8.98zm-2.12 6.86-5.66 5.66a3.35 3.35 0 0 1-4.74-4.74l5.66-5.66a3.35 3.35 0 0 1 4.74 4.74z"/></svg>` },
    { id: "b-bresaola", name: "Air-Dried Alpine Beef Bresaola", category: "meat", type: "Lean / Seasoned / Tender", price: 21.00, weight: "120g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-burgundy);" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 5.5c-2.48-2.48-6.5-2.48-8.98 0l-7.07 7.07a6.35 6.35 0 0 0 8.98 8.98l7.07-7.07c2.48-2.48 2.48-6.5 0-8.98zm-2.12 6.86-5.66 5.66a3.35 3.35 0 0 1-4.74-4.74l5.66-5.66a3.35 3.35 0 0 1 4.74 4.74z"/></svg>` },
    { id: "b-figs", name: "Sweet Figs & Red Grapes", category: "accoutrement", type: "Fresh Fruits", price: 9.00, weight: "150g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:#8E4A6B;" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="11" r="2.5"/><circle cx="8" cy="11" r="2.5"/><circle cx="16" cy="11" r="2.5"/><circle cx="10" cy="15" r="2.5"/><circle cx="14" cy="15" r="2.5"/><circle cx="12" cy="19" r="2.5"/><path d="M12 3v5" stroke="currentColor" stroke-width="2"/><path d="M12 3c3 0 5 1 5 3" stroke="currentColor" stroke-width="2" fill="none"/></svg>` },
    { id: "b-truffle-honey", name: "Raw Honeycomb Jar", category: "accoutrement", type: "Sweet Spreads", price: 14.00, weight: "120g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-gold);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3h8v3H8z"/><path d="M6 6h12a3 3 0 0 1 3 3v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V9a3 3 0 0 1 3-3z"/><path d="M8 12h8"/><path d="M10 16h4"/></svg>` },
    { id: "b-marcona", name: "Roasted Rosemary Almonds", category: "accoutrement", type: "Salted Nuts", price: 8.50, weight: "100g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:#A0724E;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 4 6 4 11c0 6 6 11 8 11s8-5 8-11c0-5-4-9-8-9zm0 4c2.5 0 5 3 5 6s-2 5-5 5-5-2-5-5 2.5-6 5-6z"/></svg>` },
    { id: "b-cornichons", name: "Crispy Pickles & Olives", category: "accoutrement", type: "Tangy Pickles", price: 7.50, weight: "120g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-olive);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="4" width="14" height="17" rx="4"/><line x1="9" y1="2" x2="15" y2="2"/><line x1="9" y1="9" x2="9" y2="9.01"/><line x1="14" y1="12" x2="14" y2="12.01"/><line x1="10" y1="16" x2="10" y2="16.01"/></svg>` },
    { id: "b-crackers", name: "Artisan Sourdough Crackers", category: "bread", type: "Crispy Crackers", price: 8.00, weight: "180g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:var(--color-gold-dark);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z"/><line x1="8" y1="11" x2="8" y2="15"/><line x1="12" y1="11" x2="12" y2="15"/><line x1="16" y1="11" x2="16" y2="15"/></svg>` },
    { id: "b-membrillo", name: "Spanish Sweet Quince Paste", category: "accoutrement", type: "Fruit Paste", price: 8.50, weight: "150g", icon: `<svg class="svg-icon" style="width:24px; height:24px; color:#C96D48;" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="8"/><path d="M12 5V2m-3 3c3 0 5-1 6-3" stroke="currentColor" stroke-width="2" fill="none"/></svg>` }
  ]
};

window.GOURMET_DATABASE = GOURMET_DATABASE;
