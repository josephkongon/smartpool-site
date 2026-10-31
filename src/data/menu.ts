import type { MenuCategory, MenuItem } from "@/lib/types";

// Bar menu — from the official Smart Pool "Menu Boissons".
// Items are listed in menu order; each subcategory becomes a section on /bar.
export const barMenu: MenuItem[] = [
  // -- Bières / Beers --
  { subcategory: "Bières / Beers", name: "33 Export", description: "Classic Cameroonian lager, 65cl", price: 1000, image: "https://loremflickr.com/500/500/33export,lager,bottle" },
  { subcategory: "Bières / Beers", name: "Castel", description: "Crisp, refreshing lager, 65cl", price: 1000, image: "https://loremflickr.com/500/500/castelbeer,lager" },
  { subcategory: "Bières / Beers", name: "Beaufort", description: "Locally brewed Cameroonian lager, 65cl", price: 1000, image: "https://loremflickr.com/500/500/beaufort,lager,beer" },
  { subcategory: "Bières / Beers", name: "Mützig", description: "Smooth premium lager, 65cl", price: 1000, image: "https://loremflickr.com/500/500/mutzig,beer,bottle" },
  { subcategory: "Bières / Beers", name: "Booster Gin", description: "Ready-to-drink gin cocktail can", price: 1000, image: "https://loremflickr.com/500/500/gincocktail,can,drink" },
  { subcategory: "Bières / Beers", name: "Guinness PM", description: "Guinness Foreign Extra, bottle", price: 1000, image: "https://loremflickr.com/500/500/guinness,beer,bottle" },
  { subcategory: "Bières / Beers", name: "Ice Ananas", description: "Pineapple-flavoured malt cocktail", price: 1000, image: "https://loremflickr.com/500/500/pineapple,malt,drink" },
  { subcategory: "Bières / Beers", name: "Ice Black", description: "Dark malt cocktail drink", price: 1000, image: "https://loremflickr.com/500/500/maltdrink,bottle,dark" },
  { subcategory: "Bières / Beers", name: "Bavaria", description: "Smooth pale lager, bottle", price: 1000, image: "https://loremflickr.com/500/500/bavaria,lager,beer" },
  { subcategory: "Bières / Beers", name: "Kadji", description: "Local Cameroonian lager, bottle", price: 1000, image: "https://loremflickr.com/500/500/lagerbeer,bottle,bar" },
  { subcategory: "Bières / Beers", name: "Orijin", description: "Herbal bitters & spirit mix, bottle", price: 1000, image: "https://loremflickr.com/500/500/bittersdrink,bottle" },
  { subcategory: "Bières / Beers", name: "Skoll", description: "Premium lager, bottle", price: 1500, image: "https://loremflickr.com/500/500/skollbeer,lager" },
  { subcategory: "Bières / Beers", name: "Booster", description: "Premium lager, bottle", price: 1500, image: "https://loremflickr.com/500/500/premiumbeer,bottle" },
  { subcategory: "Bières / Beers", name: "Heineken", description: "Imported lager, bottle", price: 1500, image: "https://loremflickr.com/500/500/heineken,beer" },

  // -- Boissons Gazeuses / Soft Drinks --
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Cielo", description: "Bottled still water", price: 500, image: "https://loremflickr.com/500/500/bottledwater,drink" },
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Malta Guinness", description: "Rich, malty non-alcoholic drink", price: 1000, image: "https://loremflickr.com/500/500/maltdrink,bottle" },
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Coca-Cola", description: "Chilled classic soft drink", price: 1000, image: "https://loremflickr.com/500/500/cocacola,bottle,drink" },
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Extra Fresco", description: "Fizzy fruit soft drink", price: 1000, image: "https://loremflickr.com/500/500/sodabottle,fizzy,fruit" },
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Top", description: "Cameroon's iconic pineapple soda", price: 1000, image: "https://loremflickr.com/500/500/pineapplesoda,bottle" },
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Supermont", description: "Sparkling fruit soft drink", price: 1000, image: "https://loremflickr.com/500/500/sodabottle,drink,fizzy" },
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Tolia", description: "Local sparkling soft drink", price: 1000, image: "https://loremflickr.com/500/500/sodabottle,softdrink" },
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Volt", description: "Fruit-flavoured soft drink", price: 1000, image: "https://loremflickr.com/500/500/fruitdrink,bottle" },
  { subcategory: "Boissons Gazeuses / Soft Drinks", name: "Malta Vampur", description: "Malt-based soft drink", price: 1500, image: "https://loremflickr.com/500/500/maltdrink,softdrink" },

  // -- Jus Naturelle --
  { subcategory: "Jus Naturelle", name: "Talia (Mangue, Passion, Baobab, Ginger)", description: "Homemade natural juice blend", price: 1000, image: "https://loremflickr.com/500/500/mangojuice,tropicaljuice" },
  { subcategory: "Jus Naturelle", name: "Extra Fresco (Jus Naturel)", description: "Fresh homemade natural juice", price: 1000, image: "https://loremflickr.com/500/500/freshjuice,homemade" },

  // -- Boissons Énergétiques --
  { subcategory: "Boissons Énergétiques", name: "Red Bull", description: "Energy drink to keep the night going", price: 2000, image: "https://loremflickr.com/500/500/redbull,energydrink" },

  // -- Champagnes --
  { subcategory: "Champagnes", name: "Moët & Chandon Brut", description: "Classic French champagne", price: 50000, image: "https://loremflickr.com/500/500/moetchandon,champagne" },
  { subcategory: "Champagnes", name: "Moët & Chandon Impérial", description: "Premium French champagne", price: 70000, image: "https://loremflickr.com/500/500/champagne,celebration,bottle" },

  // -- Cognac & Vodka --
  { subcategory: "Cognac & Vodka", name: "Martini", description: "Vermouth, bottle", price: 30000, image: "https://loremflickr.com/500/500/martini,vermouth,bottle" },
  { subcategory: "Cognac & Vodka", name: "Hennessy V.S", description: "Classic cognac, bottle", price: 50000, image: "https://loremflickr.com/500/500/hennessy,cognac,bottle" },
  { subcategory: "Cognac & Vodka", name: "Absolut", description: "Premium vodka, bottle", price: 50000, image: "https://loremflickr.com/500/500/absolutvodka,bottle" },
  { subcategory: "Cognac & Vodka", name: "Belvedere", description: "Premium Polish vodka, bottle", price: 50000, image: "https://loremflickr.com/500/500/vodka,premiumbottle" },

  // -- Whisky --
  { subcategory: "Whisky", name: "Blue and White", description: "Blended whisky, bottle", price: 20000, image: "https://loremflickr.com/500/500/whisky,bottle,bar" },
  { subcategory: "Whisky", name: "Grants", description: "Blended Scotch whisky, bottle", price: 25000, image: "https://loremflickr.com/500/500/scotchwhisky,bottle" },
  { subcategory: "Whisky", name: "Baileys", description: "Irish cream liqueur, bottle", price: 25000, image: "https://loremflickr.com/500/500/baileys,creamliqueur" },
  { subcategory: "Whisky", name: "Ballentines", description: "Blended Scotch whisky, bottle", price: 30000, image: "https://loremflickr.com/500/500/scotch,whiskybottle" },
  { subcategory: "Whisky", name: "Jack Daniels Honey", description: "Honey whiskey liqueur, bottle", price: 35000, image: "https://loremflickr.com/500/500/jackdaniels,whiskey" },
  { subcategory: "Whisky", name: "Chivas", description: "Blended Scotch whisky, bottle", price: 40000, image: "https://loremflickr.com/500/500/chivasregal,whisky" },
  { subcategory: "Whisky", name: "Black Label", description: "Johnnie Walker blended Scotch, bottle", price: 40000, image: "https://loremflickr.com/500/500/johnniewalker,blacklabel" },
  { subcategory: "Whisky", name: "Martini Blanco", description: "White vermouth, bottle", price: 40000, image: "https://loremflickr.com/500/500/martini,whitevermouth" },
  { subcategory: "Whisky", name: "Martini Rosso", description: "Red vermouth, bottle", price: 40000, image: "https://loremflickr.com/500/500/martini,redvermouth" },
  { subcategory: "Whisky", name: "Monkey Shoulder", description: "Blended malt Scotch whisky, bottle", price: 40000, image: "https://loremflickr.com/500/500/monkeyshoulder,whisky" },
  { subcategory: "Whisky", name: "Jack Daniels", description: "Tennessee whiskey, bottle", price: 40000, image: "https://loremflickr.com/500/500/jackdaniels,tennesseewhiskey" },
  { subcategory: "Whisky", name: "Black Barrel", description: "Jameson Black Barrel Irish whiskey, bottle", price: 40000, image: "https://loremflickr.com/500/500/irishwhiskey,bottle" },
  { subcategory: "Whisky", name: "Glen Fiddich 12yrs", description: "Single malt Scotch whisky, bottle", price: 50000, image: "https://loremflickr.com/500/500/glenfiddich,singlemalt" },
  { subcategory: "Whisky", name: "Monkey Shoulder 1L", description: "Blended malt Scotch whisky, 1 litre", price: 60000, image: "https://loremflickr.com/500/500/whisky,litrebottle" },
  { subcategory: "Whisky", name: "Jack Daniels Gold Label", description: "Premium whiskey, bottle", price: 90000, image: "https://loremflickr.com/500/500/goldlabel,whiskybottle" },
  { subcategory: "Whisky", name: "Chivas 18ans", description: "Aged 18 years blended Scotch, bottle", price: 90000, image: "https://loremflickr.com/500/500/chivas18,whisky" },
  { subcategory: "Whisky", name: "Blue Label", description: "Johnnie Walker Blue Label, bottle", price: 250000, image: "https://loremflickr.com/500/500/johnniewalker,bluelabel" },

  // -- Cocktails Chauds --
  { subcategory: "Cocktails Chauds", name: "Hot Toddy", description: "Rhum, miel & citron — available flambée (+1000 FCFA)", price: 3000, image: "https://loremflickr.com/500/500/hottoddy,cocktail,hotdrink" },
  { subcategory: "Cocktails Chauds", name: "Irish Coffee", description: "Whisky, café & crème — available flambée (+1000 FCFA)", price: 3500, image: "https://loremflickr.com/500/500/irishcoffee,cocktail" },
  { subcategory: "Cocktails Chauds", name: "Tom & Jerry", description: "Rhum, cognac & lait — available flambée (+1000 FCFA)", price: 4000, image: "https://loremflickr.com/500/500/hotcocktail,creamy,drink" },
  { subcategory: "Cocktails Chauds", name: "Blue Berry Tea", description: "Fruité & épicé — available flambée (+1000 FCFA)", price: 4000, image: "https://loremflickr.com/500/500/blueberrytea,hotcocktail" },

  // -- Shot Signature --
  { subcategory: "Shot Signature", name: "Flaming Lamborghini", description: "Spectacular flaming layered shot — expérience spectaculaire à ne pas manquer", price: 5000, image: "https://loremflickr.com/500/500/flamingshot,cocktail,fire" },

  // -- Cafés & Classiques --
  { subcategory: "Cafés & Classiques", name: "Espresso", description: "Strong shot of espresso", price: 1000, image: "https://loremflickr.com/500/500/espresso,coffee" },
  { subcategory: "Cafés & Classiques", name: "Americano", description: "Espresso lengthened with hot water", price: 1000, image: "https://loremflickr.com/500/500/americanocoffee,cup" },
  { subcategory: "Cafés & Classiques", name: "Macchiato", description: "Espresso \"stained\" with a dash of milk", price: 1500, image: "https://loremflickr.com/500/500/macchiato,coffee" },
  { subcategory: "Cafés & Classiques", name: "Cappuccino", description: "Espresso, steamed milk & foam", price: 2000, image: "https://loremflickr.com/500/500/cappuccino,coffeecup" },

  // -- Shots & Expériences --
  { subcategory: "Shots & Expériences", name: "Shot Simple", description: "Classic single shot", price: 1000, image: "https://loremflickr.com/500/500/shotglass,drink" },
  { subcategory: "Shots & Expériences", name: "Tequila Frappé", description: "Chilled frappéd tequila shot", price: 1000, image: "https://loremflickr.com/500/500/tequilashot,glass" },
  { subcategory: "Shots & Expériences", name: "ABC", description: "Flambé shot — flambée (+500 FCFA)", price: 1500, image: "https://loremflickr.com/500/500/flamingshot,bar" },
  { subcategory: "Shots & Expériences", name: "B-52", description: "Flambé layered shot — flambée (+500 FCFA)", price: 1500, image: "https://loremflickr.com/500/500/b52shot,layered" },
  { subcategory: "Shots & Expériences", name: "TGV", description: "Flambé shot — flambée (+500 FCFA)", price: 1500, image: "https://loremflickr.com/500/500/flamingshot,nightclub" },

  // -- Cocktails Frais & Fruités --
  { subcategory: "Cocktails Frais & Fruités", name: "Mojito", description: "Rhum, menthe, citron, soda", price: 4000, image: "https://loremflickr.com/500/500/mojito,cocktail,mint" },
  { subcategory: "Cocktails Frais & Fruités", name: "Daiquiri à la Fraise", description: "Rhum, fraise, citron", price: 4000, image: "https://loremflickr.com/500/500/strawberrydaiquiri,cocktail" },
  { subcategory: "Cocktails Frais & Fruités", name: "Pina Colada", description: "Rhum, coco, ananas", price: 4500, image: "https://loremflickr.com/500/500/pinacolada,cocktail" },
  { subcategory: "Cocktails Frais & Fruités", name: "Blue Lagoon", description: "Vodka, curaçao bleu, citron", price: 4000, image: "https://loremflickr.com/500/500/bluelagoon,cocktail" },
  { subcategory: "Cocktails Frais & Fruités", name: "Sex on the Beach", description: "Vodka, pêche, cranberry", price: 4000, image: "https://loremflickr.com/500/500/sexonthebeach,cocktail" },
  { subcategory: "Cocktails Frais & Fruités", name: "Caïpirita", description: "Cachaça, citron vert, sucre", price: 3000, image: "https://loremflickr.com/500/500/caipirinha,cocktail" },
  { subcategory: "Cocktails Frais & Fruités", name: "Acapulco", description: "Rhum, jus tropical", price: 4000, image: "https://loremflickr.com/500/500/tropicalcocktail,rum" },
  { subcategory: "Cocktails Frais & Fruités", name: "Blue Hawaii", description: "Rhum, ananas, curaçao", price: 5000, image: "https://loremflickr.com/500/500/bluehawaii,cocktail" },
  { subcategory: "Cocktails Frais & Fruités", name: "Swimming Pool", description: "Vodka, coco, ananas, curaçao", price: 5000, image: "https://loremflickr.com/500/500/swimmingpoolcocktail,blue" },

  // -- Cocktails Fun & Tendance --
  { subcategory: "Cocktails Fun & Tendance", name: "Limonade Électrique", description: "Sans alcool / énergie citronnée", price: 3500, image: "https://loremflickr.com/500/500/lemonade,mocktail" },
  { subcategory: "Cocktails Fun & Tendance", name: "After Sex", description: "Vodka, melon, pêche", price: 2500, image: "https://loremflickr.com/500/500/melonpeach,cocktail" },
  { subcategory: "Cocktails Fun & Tendance", name: "Black Russian", description: "Vodka, liqueur de café", price: 3000, image: "https://loremflickr.com/500/500/blackrussian,cocktail" },
  { subcategory: "Cocktails Fun & Tendance", name: "Pink Lady", description: "Gin, grenadine, citron", price: 3500, image: "https://loremflickr.com/500/500/pinklady,cocktail" },
  { subcategory: "Cocktails Fun & Tendance", name: "White Lady", description: "Gin, triple sec, citron", price: 3500, image: "https://loremflickr.com/500/500/whitelady,cocktail" },
  { subcategory: "Cocktails Fun & Tendance", name: "Yellow Stone", description: "Vodka, ananas, agrumes", price: 4000, image: "https://loremflickr.com/500/500/pineapplecocktail,yellow" },
  { subcategory: "Cocktails Fun & Tendance", name: "Lady Killer", description: "Vodka, fruits rouges", price: 4500, image: "https://loremflickr.com/500/500/redberrycocktail,vodka" },

  // -- Cocktails Classiques & Internationaux --
  { subcategory: "Cocktails Classiques & Internationaux", name: "Margarita à la Fraise", description: "Tequila, fraise, citron", price: 4000, image: "https://loremflickr.com/500/500/strawberrymargarita,cocktail" },
  { subcategory: "Cocktails Classiques & Internationaux", name: "Whisky Highball", description: "Whisky, soda", price: 3500, image: "https://loremflickr.com/500/500/whiskyhighball,cocktail" },
  { subcategory: "Cocktails Classiques & Internationaux", name: "Americano", description: "Campari, vermouth rouge, soda", price: 3500, image: "https://loremflickr.com/500/500/americanococktail,campari" },
  { subcategory: "Cocktails Classiques & Internationaux", name: "Milano Torino", description: "Campari, vermouth rouge", price: 3000, image: "https://loremflickr.com/500/500/campari,cocktail,red" },
  { subcategory: "Cocktails Classiques & Internationaux", name: "Boulevardier", description: "Whisky, Campari, vermouth", price: 4000, image: "https://loremflickr.com/500/500/boulevardier,cocktail" },
  { subcategory: "Cocktails Classiques & Internationaux", name: "Moscow Mule", description: "Vodka, ginger beer, citron", price: 2500, image: "https://loremflickr.com/500/500/moscowmule,coppermug" },
  { subcategory: "Cocktails Classiques & Internationaux", name: "Old Fashioned", description: "Whisky, sucre, bitters", price: 4000, image: "https://loremflickr.com/500/500/oldfashioned,cocktail" },

  // -- Shots Cocktails & Exotiques --
  { subcategory: "Shots Cocktails & Exotiques", name: "Lincharge", description: "Signature maison", price: 3500, image: "https://loremflickr.com/500/500/signaturecocktail,bar" },
  { subcategory: "Shots Cocktails & Exotiques", name: "BMW / BMV", description: "Cocktail layered premium", price: 5000, image: "https://loremflickr.com/500/500/layeredcocktail,premium" },

  // -- Cocktails Signature & Expériences --
  { subcategory: "Cocktails Signature & Expériences", name: "Canchanchara", description: "Rhum, miel, citron", price: 3500, image: "https://loremflickr.com/500/500/rumcocktail,honey" },
  { subcategory: "Cocktails Signature & Expériences", name: "Dark & Stormy", description: "Rhum noir, ginger beer", price: 3500, image: "https://loremflickr.com/500/500/darkandstormy,cocktail" },
  { subcategory: "Cocktails Signature & Expériences", name: "Bee's Knees", description: "Gin, miel, citron", price: 3000, image: "https://loremflickr.com/500/500/beesknees,gincocktail" },
  { subcategory: "Cocktails Signature & Expériences", name: "Maï Taï", description: "Rhum, amande, citron, orange", price: 4500, image: "https://loremflickr.com/500/500/maitai,cocktail,tiki" },
  { subcategory: "Cocktails Signature & Expériences", name: "Long Island / Beach", description: "Vodka, gin, tequila, rhum, triple sec", price: 5000, image: "https://loremflickr.com/500/500/longislandicedtea,cocktail" },
  { subcategory: "Cocktails Signature & Expériences", name: "Porn Star Martini", description: "Vodka, passion, vanille", price: 7000, image: "https://loremflickr.com/500/500/pornstarmartini,cocktail" },
];

// Restaurant menu — from the official Smart Pool "Menu Restauration".
export const restaurantMenu: MenuItem[] = [
  // -- Plats Chauds --
  { subcategory: "Plats Chauds", name: "Poulet à la Braise", description: "Grilled charcoal chicken", price: 3500, image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Poulet Pané", description: "Breaded fried chicken", price: 3500, image: "https://images.pexels.com/photos/16892378/pexels-photo-16892378.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Poulet Mayo", description: "Chicken in a creamy mayo sauce", price: 3500, image: "https://loremflickr.com/500/500/chicken,mayosauce" },
  { subcategory: "Plats Chauds", name: "Poulet Basquaise", description: "Chicken stewed with peppers, tomato & onion", price: 3500, image: "https://loremflickr.com/500/500/chickenbasquaise,peppers" },
  { subcategory: "Plats Chauds", name: "Poulet Façon Queen's", description: "House-style signature chicken", price: 3500, image: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Porc à la Braise", description: "Grilled charcoal pork", price: 3500, image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Porc Rôti au Four", description: "Oven-roasted pork", price: 3500, image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Porc à la Traditionnelle", description: "Traditional-style pork", price: 3500, image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "1/4 Poulet Crème Fraîche & Champignons", description: "Quarter chicken in creamy mushroom sauce", price: 3500, image: "https://loremflickr.com/500/500/chicken,mushroomsauce" },
  { subcategory: "Plats Chauds", name: "Steak Grillé sur Flot de Tomate", description: "Grilled steak on tomato sauce", price: 5000, image: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Steak Cordon Bleu", description: "Breaded steak stuffed with ham & cheese", price: 5000, image: "https://images.pexels.com/photos/7172851/pexels-photo-7172851.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Boulette de Viande aux Fines Herbes", description: "Herb meatballs — small 3000 / large 6000 XAF", price: 3000, image: "https://images.pexels.com/photos/5724553/pexels-photo-5724553.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Rognon Sauté aux Carottes", description: "Sautéed kidney with carrots", price: 3500, image: "https://loremflickr.com/500/500/sauteeddish,carrots" },
  { subcategory: "Plats Chauds", name: "Poisson à la Poêle", description: "Pan-fried fish", price: 3500, image: "https://images.pexels.com/photos/16064369/pexels-photo-16064369.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Poisson à la Braise", description: "Grilled charcoal fish, from", price: 3000, image: "https://loremflickr.com/500/500/grilledfish,braise" },
  { subcategory: "Plats Chauds", name: "Poisson Pané au Four", description: "Oven-baked breaded fish, from", price: 7000, image: "https://loremflickr.com/500/500/bakedfish,breaded" },
  { subcategory: "Plats Chauds", name: "Gambas Sauté à l'Ail", description: "Garlic-sautéed king prawns", price: 7000, image: "https://images.pexels.com/photos/679454/pexels-photo-679454.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Plats Chauds", name: "Gambas Sauté aux Petits Légumes", description: "King prawns sautéed with vegetables", price: 7000, image: "https://images.pexels.com/photos/15387324/pexels-photo-15387324.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // -- Entrées --
  { subcategory: "Entrées", name: "Salade Croquante", description: "Crunchy fresh salad", price: 2000, image: "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Entrées", name: "Salade Coleslaw", description: "Classic creamy coleslaw", price: 2000, image: "https://images.pexels.com/photos/5966438/pexels-photo-5966438.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Entrées", name: "Salade Italienne", description: "Italian-style mixed salad", price: 2000, image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Entrées", name: "Salade Espagnole", description: "Spanish-style mixed salad", price: 2000, image: "https://images.pexels.com/photos/8535717/pexels-photo-8535717.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Entrées", name: "Crudités Variées au Maïs Doux", description: "Assorted raw vegetables with sweet corn", price: 2000, image: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // -- Menu Complet --
  { subcategory: "Menu Complet", name: "Menu Complet (Entrée + Résistance + Dessert)", description: "Full set menu: starter, main course & dessert", price: 6000, image: "https://loremflickr.com/500/500/platedmeal,threecourse" },
  { subcategory: "Menu Complet", name: "Petits Fours (Dessert)", description: "Assorted bite-sized pastries", price: 2000, image: "https://loremflickr.com/500/500/petitsfours,pastry" },
  { subcategory: "Menu Complet", name: "Crème Renversée (Dessert)", description: "Classic caramel custard", price: 2000, image: "https://images.pexels.com/photos/7593465/pexels-photo-7593465.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // -- Autres Spécialités --
  { subcategory: "Autres Spécialités", name: "Gambas Sauté à l'Ail Persillées", description: "King prawns sautéed with garlic & parsley", price: 7000, image: "https://loremflickr.com/500/500/prawns,parsley,garlic" },
  { subcategory: "Autres Spécialités", name: "Gésier aux Oignons et Blanc de Poireau", description: "Gizzard with onions & leek", price: 5000, image: "https://loremflickr.com/500/500/gizzard,onions" },
  { subcategory: "Autres Spécialités", name: "Saucisse de Porc", description: "Grilled pork sausage", price: 3000, image: "https://images.pexels.com/photos/96619/pexels-photo-96619.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Autres Spécialités", name: "Escargots Sautés Façon Ménagère", description: "Home-style sautéed snails", price: 5000, image: "https://loremflickr.com/500/500/escargot,sauteed" },
  { subcategory: "Autres Spécialités", name: "Saucisse de Bœuf", description: "Grilled beef sausage", price: 3000, image: "https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Autres Spécialités", name: "Pizza Margherita", description: "Tomato, mozzarella & basil", price: 6000, image: "https://images.pexels.com/photos/14590497/pexels-photo-14590497.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Autres Spécialités", name: "Pizza Végétarienne", description: "Loaded with fresh vegetables", price: 6000, image: "https://images.pexels.com/photos/1527602/pexels-photo-1527602.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Autres Spécialités", name: "Pizza aux Quatre Fromages", description: "Four-cheese pizza", price: 6000, image: "https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Autres Spécialités", name: "Burger", description: "Classic house burger", price: 1500, image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // -- Bouillons --
  { subcategory: "Bouillons", name: "Bouillon de Poisson", description: "Capens, machoiron, bars, silure", price: 5000, image: "https://images.pexels.com/photos/12089286/pexels-photo-12089286.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Bouillons", name: "Bouillon de Pattes et Queues de Bœuf", description: "Beef trotters & oxtail broth", price: 2000, image: "https://images.pexels.com/photos/35041910/pexels-photo-35041910.jpeg?auto=compress&cs=tinysrgb&w=800" },

  // -- Accompagnements --
  { subcategory: "Accompagnements", name: "Riz Vapeur", description: "Steamed white rice", price: 1000, image: "https://images.pexels.com/photos/8956718/pexels-photo-8956718.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { subcategory: "Accompagnements", name: "Plantain Vapeur / Frit", description: "Steamed or fried plantain", price: 1000, image: "https://loremflickr.com/500/500/friedplantain" },
  { subcategory: "Accompagnements", name: "Pomme Frite / Vapeur", description: "Fries or steamed potato", price: 1000, image: "https://loremflickr.com/500/500/frenchfries,potato" },
  { subcategory: "Accompagnements", name: "Miondo", description: "Fermented cassava sticks", price: 1000, image: "https://loremflickr.com/500/500/cassavasticks,miondo" },

  // -- Plats Camerounais --
  { subcategory: "Plats Camerounais", name: "Fufu / Garri and Eru", description: "Fufu or garri served with eru", price: 2500, image: null },
  { subcategory: "Plats Camerounais", name: "White Rice and Meat Sauce", description: "Steamed white rice with meat sauce", price: 2500, image: null },
  { subcategory: "Plats Camerounais", name: "White Rice / Plantain and Snails Sauce", description: "Rice or plantain with snails sauce", price: 4000, image: null },
  { subcategory: "Plats Camerounais", name: "Plantain and Ndolé", description: "Plantain served with ndolé", price: 2500, image: null },
  { subcategory: "Plats Camerounais", name: "Fried Rice and Chicken", description: "Fried rice with chicken", price: 2500, image: null },
  { subcategory: "Plats Camerounais", name: "Fufu Corn and Vegetables (Kati Kati)", description: "Fufu corn with vegetables and Kati Kati", price: 2500, image: null },
];

export const menus: Record<MenuCategory, MenuItem[]> = {
  bar: barMenu,
  restaurant: restaurantMenu,
};
