/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'mesa',
    name: 'Mesa',
    state: 'AZ',
    intro:
      'Mesa is the heart of East Valley RV country, and it is hard to overstate how many rigs are parked here. The 55-plus resorts off Main Street, Apache Trail, and University — places like Val Vista Village, Towerpoint, Mesa Regal, and Monte Vista — fill up every winter with snowbirds, and thousands of those coaches are lived in for months at a time. When something quits on a rig you are living in, you cannot just hand it to a dealer for three weeks. That is where we come in: we are fully mobile, so we drive to your resort site, your driveway, or your storage lot anywhere in Mesa and fix the rig where it sits. The desert is hard on RVs in a specific way — the summer heat kills rooftop air conditioners and bakes roof sealant brittle, the monsoon finds every crack, hard water scales up water heaters, and a coach that sat all summer comes back to life with a generator full of stale fuel. We handle all of it on-site: AC, electrical and batteries, slide-outs, water heaters, roof leaks, and generators, on motorhomes, fifth wheels, and travel trailers. Tell us the rig and the symptom and we will give you a straight quote and a real time — no dealer service lane, no losing your home for the season.',
    neighborhoods: ['Val Vista Village & the 55+ resorts', 'Mesa Regal / Towerpoint area', 'Dobson Ranch', 'Red Mountain', 'East Mesa / Superstition Springs', 'Downtown / Main Street'],
    landmarks: ['US-60 (Superstition Freeway)', 'Loop 202 (Red Mountain)', 'Apache Trail / Main Street resort row', 'Superstition Springs'],
    issues: [
      {
        title: 'Snowbird rigs lived in all season',
        body: 'Mesa’s big 55-plus resorts are full of coaches that people live in for months. When the AC, the slide, or the water heater quits, dropping the rig at a dealer for weeks is not an option — so we fix it on-site at your resort space.',
      },
      {
        title: 'Summer heat that kills rooftop ACs',
        body: 'A Mesa summer pushes rooftop air conditioners to the edge. Weak capacitors and tired fan motors that would limp along anywhere else fail outright at 110 degrees. We test the unit under load and get you cooling again where the rig is parked.',
      },
      {
        title: 'Rigs waking up from a long summer sit',
        body: 'A lot of Mesa coaches sit through the brutal summer and get fired up in the fall with stale fuel in the generator, a flat battery bank, and dried-out roof sealant. We handle the de-winterizing problems — generator, batteries, roof, and AC — in one visit.',
      },
    ],
    nearby: ['tempe', 'gilbert', 'apache-junction'],
    faqs: [
      {
        q: 'Do you come to the 55-plus RV resorts in Mesa?',
        a: 'Yes — that is a big part of what we do. We work right at the resort site at Val Vista Village, Towerpoint, Mesa Regal, Monte Vista, and the others. Just make sure we have access to the space and room to work around the coach, and check that your resort allows on-site mobile service.',
      },
      {
        q: 'My AC died and I am living in the rig — how fast can you get to Mesa?',
        a: 'A dead AC with people or pets in the coach is treated as urgent, especially in summer. Mesa is central to our service area, so we can usually get to you quickly. Call with your location and the make of the unit and ask about same-day availability.',
      },
      {
        q: 'Can you de-winterize and check my rig before the season?',
        a: 'Yes. Bringing a coach out of a long summer sit is a great time for a once-over — generator, batteries and charging, AC, water heater, and roof sealant. We can inspect it and handle the repairs on the same visit at your Mesa site.',
      },
    ],
  },
  {
    slug: 'apache-junction',
    name: 'Apache Junction',
    state: 'AZ',
    intro:
      'Apache Junction sits where the East Valley runs out and the Superstition Mountains begin, and it is RV territory through and through. The snowbird resorts off Apache Trail and Idaho Road — Superstition Sunrise, Meridian, Sundance, Countryside — pack in for the winter, and beyond the town the state trust land and Tonto National Forest draw boondockers who dry-camp out in the desert for weeks. Both groups have the same problem when something breaks: the nearest dealer is a long tow away and booked out for weeks. We are mobile, so we come to your resort space, your lot off the 60, or as far out as we can safely reach a boondocking spot, and fix the rig on-site. Out here the systems that fail are the off-grid ones — generators that will not start after sitting, battery banks and solar that will not keep up, rooftop ACs straining in the heat, and roofs that dried out and crack-leak in the monsoon. We work on all of it: generators, electrical, AC, slide-outs, water heaters, and roof leaks, on motorhomes, fifth wheels, and toy haulers. Give us the rig and the symptom and we will quote it straight and give you a real time.',
    neighborhoods: ['Apache Trail resort row', 'Idaho Road corridor', 'Gold Canyon (nearby)', 'Superstition Foothills', 'Mountainbrook', 'Peralta area'],
    landmarks: ['Superstition Mountains', 'Lost Dutchman State Park', 'Apache Trail (SR-88)', 'US-60 / Idaho Road'],
    issues: [
      {
        title: 'Boondockers off-grid on the desert',
        body: 'Plenty of Apache Junction RVers dry-camp on the state trust land and forest out past town, running entirely on generator, battery, and solar. When the generator quits or the bank will not hold, we come as far out as we can safely reach and get the off-grid power back.',
      },
      {
        title: 'Generators that sat through the summer',
        body: 'Coaches parked around Apache Junction through the summer come back with stale fuel and gummed-up carburetors, so the generator cranks but will not start. It is the most common call we get out here, and we clean it up and get it running on-site.',
      },
      {
        title: 'Monsoon roof leaks after a dry season',
        body: 'Months of hard desert sun crack the roof sealant, and then the Apache Junction monsoon dumps rain and finds every gap at once. We inspect the whole roof and reseal it with the right material before the next storm gets into the structure.',
      },
    ],
    nearby: ['mesa', 'queen-creek', 'gilbert'],
    faqs: [
      {
        q: 'Can you reach me if I am boondocking out past Apache Junction?',
        a: 'Often, yes — if the spot is somewhere we can safely drive and set up. Out on the trust land and forest, generators, batteries, and solar are the usual issues. Tell us exactly where you are and what the rig is doing, and we will tell you straight whether we can reach you.',
      },
      {
        q: 'My generator won’t start after the summer — can you fix it on-site?',
        a: 'Yes, and it is our most common Apache Junction call. After a long sit, it is usually stale fuel and a varnished carburetor. We clean or rebuild the carb, deal with the old fuel, and check spark and fuel delivery right where the rig is parked.',
      },
      {
        q: 'Do you serve the snowbird resorts in Apache Junction?',
        a: 'Yes. We work at the resorts off Apache Trail and Idaho Road — Superstition Sunrise, Meridian, Sundance, and the others — right at your space. Just confirm your resort allows mobile service and that we can get access to the coach.',
      },
    ],
  },
  {
    slug: 'gilbert',
    name: 'Gilbert',
    state: 'AZ',
    intro:
      'Gilbert is the family side of East Valley RV ownership — block after block of newer master-planned neighborhoods where a lot of homes have an RV gate and a coach or toy hauler parked down the side yard. These are not full-timers; they are weekend and vacation rigs that get loaded up for a trip to the high country, the lake, or the dunes, then parked at home in between. That parked-in-the-side-yard life has its own pattern of problems: the rig bakes in the Gilbert sun for months between trips, so roof sealant dries out, batteries discharge, the generator fuel goes stale, and the first hot weekend reveals an AC that will not cool. Because Gilbert is mostly houses with driveways and RV pads, mobile service is the easy answer — we come to your home and fix the rig in your own side yard so you are ready for the trip instead of scrambling to find a shop with an opening. We handle AC, electrical and batteries, slide-outs, water heaters, roof leaks, and generators on motorhomes, fifth wheels, and travel trailers. Tell us the rig and what it is doing and we will give you a straight quote and a real time, often before your trip.',
    neighborhoods: ['Power Ranch', 'Seville', 'Val Vista Lakes', 'Agritopia', 'Layton Lakes', 'Cooley Station'],
    landmarks: ['Loop 202 (Santan Freeway)', 'Gilbert Heritage District', 'San Tan Village', 'Power Road corridor'],
    issues: [
      {
        title: 'Weekend rigs parked in the side yard',
        body: 'Most Gilbert RVs live on a pad beside the house between trips. Sitting in the sun for months dries out sealant, drains batteries, and stales the generator fuel — so problems show up on the first trip of the season, not while you are using it.',
      },
      {
        title: 'AC and battery surprises before a trip',
        body: 'You go to load up for a weekend and find the AC will not cool or the house batteries are dead. We come to your Gilbert driveway, test the AC and the battery bank under load, and get the rig trip-ready before you pull out.',
      },
      {
        title: 'Roof sealant dried out between uses',
        body: 'A coach that sits in the Gilbert heat all summer ends up with cracked lap sealant that leaks the first monsoon. We inspect and reseal the roof at your home so the next storm does not get into a rig you only use a few times a year.',
      },
    ],
    nearby: ['chandler', 'mesa', 'queen-creek'],
    faqs: [
      {
        q: 'Can you service my RV at my house in Gilbert?',
        a: 'Yes — that is most of what we do here. Gilbert homes with RV gates and side-yard pads are ideal for mobile service. We come to the house, work on the rig where it is parked, and you never have to hitch up and find a shop.',
      },
      {
        q: 'My rig has been parked all summer — can you get it trip-ready?',
        a: 'Yes. After a long sit we check the things that fail from sitting — the AC, the battery bank and charging, the generator and its fuel, and the roof sealant. We can inspect it and handle the repairs in one visit so you are ready for your trip.',
      },
      {
        q: 'Do you work on travel trailers and toy haulers, not just motorhomes?',
        a: 'Yes. We work on travel trailers, fifth wheels, and toy haulers as well as motorhomes — all common in Gilbert side yards. Give us the type, make, and year when you call so we bring the right parts.',
      },
    ],
  },
  {
    slug: 'chandler',
    name: 'Chandler',
    state: 'AZ',
    intro:
      'Chandler runs from the tech corridor along Price Road out to the newer neighborhoods near the 202 and Queen Creek Road, and its RVs follow the same pattern as the rest of the family-side East Valley — weekend and vacation rigs parked at home or tucked into one of the area’s many RV-and-boat storage lots between trips. A lot of Chandler owners keep the coach in covered or open storage rather than the side yard, and a rig that sits in a storage row for months has all the sitting-related problems plus the inconvenience of being across town when something needs fixing. That is exactly where mobile service earns its keep: we come to the storage lot or your driveway and handle the repair on-site instead of you towing the rig home first. The desert does its usual work here — heat on the rooftop ACs, sun on the roof sealant, hard water in the heaters, and stale fuel in generators that sat out the summer. We fix AC, electrical and batteries, slide-outs, water heaters, roof leaks, and generators on motorhomes, fifth wheels, and travel trailers. Tell us where the rig is parked and what it is doing and we will give you a straight quote and a real time.',
    neighborhoods: ['Ocotillo', 'Fulton Ranch', 'Sun Groves', 'Clemente Ranch', 'Price Road corridor', 'Downtown Chandler'],
    landmarks: ['Loop 101 (Price Freeway)', 'Loop 202 (Santan)', 'Chandler Fashion Center', 'Intel / Price Road tech corridor'],
    issues: [
      {
        title: 'Rigs kept in storage lots across town',
        body: 'Many Chandler owners store the coach in an RV-and-boat lot rather than at home. When it needs work, we come to the storage row and fix it there, so you do not have to tow it home and back just for a repair.',
      },
      {
        title: 'Sitting problems from long storage',
        body: 'A rig that sits in a Chandler storage lot for months comes back with a dead battery bank, stale generator fuel, and dried roof sealant. We handle the wake-up repairs on-site so the coach is ready when you are.',
      },
      {
        title: 'Hard water scaling up water heaters',
        body: 'Chandler’s hard water leaves sediment in RV water heater tanks and eats the anode rod, leading to lukewarm water and short-cycling tankless units. We flush, descale, and replace the anode rod where the rig is parked.',
      },
    ],
    nearby: ['gilbert', 'tempe', 'mesa'],
    faqs: [
      {
        q: 'Can you meet me at my RV storage lot in Chandler?',
        a: 'Yes. We do a lot of work at Chandler storage lots — just make sure we can get access to the rig and have room to work around it, and that the facility allows on-site service. It saves you towing the coach home for the repair.',
      },
      {
        q: 'My water heater only gets lukewarm — is it the hard water?',
        a: 'Often, yes. Chandler’s hard water scales up the tank and the element and eats the anode rod, which leaves you with lukewarm water or a tankless unit that short-cycles. We flush and descale the unit and replace the anode rod on-site.',
      },
      {
        q: 'How quickly can you get to Chandler?',
        a: 'Chandler is well within our core East Valley coverage, so we can usually get to you quickly. Urgent problems like a dead AC in summer get priority. Call with your location and the rig details and we will give you a real time.',
      },
    ],
  },
  {
    slug: 'queen-creek',
    name: 'Queen Creek',
    state: 'AZ',
    intro:
      'Queen Creek is the part of the East Valley where the lots get big and the toys come out. Out past the San Tan Mountains, on the bigger parcels and horse properties around Ellsworth, Ironwood, and Rittenhouse, a lot of households have a real RV setup — a fifth wheel or a toy hauler with the side-by-sides loaded in the back, parked on the property and used hard. This is off-pavement, haul-it-to-the-desert RV culture, and the rigs see dust, washboard roads, and heavy use that shows up as slide-outs knocked out of adjustment, electrical and battery demands from running gear off-grid, and roofs and seals that take a beating. Queen Creek’s big lots make mobile service a natural fit — there is room to work and we come right to the property. We handle slide-outs, electrical and batteries, generators, AC, water heaters, and roof leaks on fifth wheels, toy haulers, travel trailers, and motorhomes. Tell us the rig and what it is doing and we will bring the parts to your place anywhere in Queen Creek and quote it straight, so the rig is ready for the next desert run.',
    neighborhoods: ['Ellsworth corridor', 'Ironwood Crossing', 'Hastings Farms', 'Cortina', 'Pecan Creek', 'Rittenhouse area'],
    landmarks: ['San Tan Mountains', 'Schnepf Farms', 'Ellsworth & Rittenhouse Roads', 'Queen Creek Marketplace'],
    issues: [
      {
        title: 'Toy haulers used hard off-pavement',
        body: 'Queen Creek runs on toy haulers and fifth wheels that get loaded with side-by-sides and hauled out to the desert. Washboard roads and heavy use knock slide-outs out of adjustment and stress the electrical, and we sort it out at the property.',
      },
      {
        title: 'Off-grid power demands on the desert',
        body: 'Folks here run their rigs off generator, battery, and solar out on the desert. When the bank will not keep up with the gear or the generator quits, we diagnose the charging and power systems on-site so the off-grid setup actually holds.',
      },
      {
        title: 'Big lots, big rigs, room to work',
        body: 'Queen Creek’s larger lots and horse properties have plenty of space, which makes mobile service easy — we bring everything to your place and work on the rig where it sits, even the big fifth wheels and toy haulers.',
      },
    ],
    nearby: ['san-tan-valley', 'gilbert', 'mesa'],
    faqs: [
      {
        q: 'Do you work on toy haulers and big fifth wheels in Queen Creek?',
        a: 'Yes. Toy haulers and fifth wheels are a big part of what we see out here. Queen Creek’s larger lots give us room to work on-site. Give us the type, make, and year and what is wrong, and we will bring the right parts to your property.',
      },
      {
        q: 'My slide-out got knocked out of whack after a desert trip — can you fix it?',
        a: 'Yes. Hard use and washboard roads are tough on slides, throwing off the adjustment or wearing the mechanism. We identify your slide system, re-adjust or repair it, and reseal it so dust and rain stay out, right at your place in Queen Creek.',
      },
      {
        q: 'Can you sort out my solar and battery setup for boondocking?',
        a: 'Yes. We troubleshoot solar charging, controllers, inverters, and battery banks — including lithium — so your off-grid power actually keeps up out on the desert. We can also check the wiring before any upgrade.',
      },
    ],
  },
  {
    slug: 'tempe',
    name: 'Tempe',
    state: 'AZ',
    intro:
      'Tempe is the dense, urban corner of the East Valley — ASU, Mill Avenue, Tempe Town Lake, and a lot of apartments and tight lots — so RV ownership here looks different than out in the suburbs. There are fewer side-yard pads and more rigs kept in storage lots or parked at a relative’s place, and plenty of Tempe RVers are heading out from the city to the high country or the river rather than wintering in a resort. The challenge in Tempe is space: there is not always room at home to work on a rig, which is exactly why mobile service helps — we come to the storage lot or wherever the coach is parked and do the repair on-site instead of you trying to wedge it into a city driveway. The desert problems are the same as everywhere in the Valley: heat on the rooftop AC, sun-cracked roof sealant, hard water in the heater, and stale fuel after a sit. We fix AC, electrical and batteries, slide-outs, water heaters, roof leaks, and generators on motorhomes, travel trailers, and fifth wheels. Tell us where the rig is and what it is doing and we will give you a straight quote and a real time.',
    neighborhoods: ['Downtown / Mill Avenue', 'North Tempe', 'South Tempe', 'Warner Ranch', 'The Lakes', 'Tempe Town Lake area'],
    landmarks: ['Arizona State University', 'Tempe Town Lake', 'Loop 101 & US-60', 'Mill Avenue District'],
    issues: [
      {
        title: 'Tight lots and limited room at home',
        body: 'Tempe’s apartments and small lots often leave no room to work on a rig at home. We come to the storage lot or wherever the coach is parked and do the repair there, so you do not have to find space in the city.',
      },
      {
        title: 'Rigs stored between city trips',
        body: 'Many Tempe RVs live in a storage lot between trips up north or out to the river. Sitting brings the usual problems — flat batteries, stale generator fuel, dried sealant — and we handle those at the lot before your next trip.',
      },
      {
        title: 'Summer heat on rooftop ACs',
        body: 'Tempe gets the full force of the Valley heat, and rooftop ACs strained in those temperatures fail fast. We test the unit under load and get it cooling again wherever the rig is parked.',
      },
    ],
    nearby: ['mesa', 'chandler', 'scottsdale'],
    faqs: [
      {
        q: 'I have no room to work on my RV at my Tempe apartment — what now?',
        a: 'That is a common Tempe situation. We come to wherever the rig is — a storage lot, a relative’s driveway, or anywhere with safe access and room to work — and do the repair on-site, so you do not need space at your place.',
      },
      {
        q: 'Can you meet me at my storage facility in Tempe?',
        a: 'Yes, as long as we can get access to the rig and the facility allows on-site service. Storage-lot visits are a regular part of what we do, and they save you towing the coach across town for a repair.',
      },
      {
        q: 'My RV sat all summer in storage — can you get it going?',
        a: 'Yes. After a sit we check the battery bank and charging, the generator and its fuel, the AC, and the roof sealant, and handle the repairs on the same visit so the rig is ready for your next trip out of Tempe.',
      },
    ],
  },
  {
    slug: 'scottsdale',
    name: 'Scottsdale',
    state: 'AZ',
    intro:
      'Scottsdale brings the higher end of the RV world to the East Valley’s northern edge. From the older neighborhoods near Old Town up to the big lots and desert estates of North Scottsdale, there are a lot of premium Class A motorhomes and luxury fifth wheels here — and WestWorld draws major RV shows and rallies that fill the area with high-end coaches. These rigs have more systems and more to go wrong: multiple rooftop ACs, big lithium-and-solar power setups, residential refrigerators, automatic leveling, and several slide-outs. When something on a coach like that needs attention, the owner usually does not want to hand a $300,000 motorhome to a dealer service lane for a month — they want it handled where it sits. That is what we do: mobile service to your North Scottsdale property, your driveway, or your space at a show, with straight diagnosis and no dealer runaround. We work on AC, electrical and big battery banks, slide-outs, water heaters, roof leaks, and generators on motorhomes and fifth wheels. Tell us the rig and the symptom and we will give you a straight quote and a real time.',
    neighborhoods: ['Old Town Scottsdale', 'McCormick Ranch', 'Gainey Ranch', 'North Scottsdale', 'DC Ranch', 'Grayhawk'],
    landmarks: ['WestWorld of Scottsdale', 'McDowell Mountains', 'Loop 101 (Pima Freeway)', 'Old Town Scottsdale'],
    issues: [
      {
        title: 'Premium coaches with more to go wrong',
        body: 'Scottsdale has a lot of high-end Class A motorhomes and luxury fifth wheels with multiple ACs, big power systems, and several slides. More systems mean more that can fail, and owners want them fixed on-site rather than parked at a dealer for weeks.',
      },
      {
        title: 'Big lithium-and-solar power systems',
        body: 'The upgraded coaches up here often run large lithium banks, inverters, and roof solar. When the system will not charge or hold, the cause can be the bank, a controller, or a setting — and we diagnose the whole charging system on-site.',
      },
      {
        title: 'Rally and show rigs needing quick fixes',
        body: 'WestWorld’s RV shows and rallies bring high-end coaches to Scottsdale, and a problem during an event needs to be handled fast and where the rig is parked. We come to the show space and get the system working again.',
      },
    ],
    nearby: ['tempe', 'mesa', 'chandler'],
    faqs: [
      {
        q: 'Do you work on big Class A motorhomes in Scottsdale?',
        a: 'Yes. We service Class A motorhomes and luxury fifth wheels, including coaches with multiple ACs, large battery banks, and several slide-outs. Give us the make, model, and year so we bring the right parts to your North Scottsdale property or driveway.',
      },
      {
        q: 'Can you diagnose my lithium and solar power system on-site?',
        a: 'Yes. We troubleshoot large lithium banks, inverters, charge controllers, and roof solar, including confirming the converter or controller is set for the right chemistry. We do it where the coach is parked.',
      },
      {
        q: 'Can you come to WestWorld during an RV show or rally?',
        a: 'Often, yes, if we can get access to your space and the event allows on-site service. A breakdown during a show needs fixing fast and in place — call with your location at the event and what the rig is doing.',
      },
    ],
  },
  {
    slug: 'san-tan-valley',
    name: 'San Tan Valley',
    state: 'AZ',
    intro:
      'San Tan Valley is the East Valley’s fast-growing far southeast edge, out past Queen Creek where the subdivisions give way to bigger lots, open desert, and the San Tan Mountains. It shares Queen Creek’s outdoor, haul-it-to-the-desert culture — lots of fifth wheels, travel trailers, and toy haulers parked on roomy lots and used to get out into the backcountry — with even more space and even more rigs that sit out in the full sun between trips. Being unincorporated and spread out, San Tan Valley is a long way from any RV dealer, which makes a mobile repair service that comes to you genuinely valuable: we drive out to your lot and fix the rig on-site instead of you towing it an hour each way. The desert is hard on these rigs in every direction — heat on the ACs, sun-cracked roof sealant, dust in the slides, stale fuel in generators, and off-grid power demands when folks dry-camp. We handle AC, electrical and batteries, slide-outs, water heaters, roof leaks, and generators on every type of rig. Tell us what you have and what it is doing and we will bring the parts to your place in San Tan Valley and quote it straight.',
    neighborhoods: ['Johnson Ranch', 'Pecan Creek', 'Circle Cross Ranch', 'Copper Basin', 'Skyline Ranch', 'Castlegate'],
    landmarks: ['San Tan Mountains', 'Hunt Highway', 'Gantzel & Combs Roads', 'Bella Vista Farms'],
    issues: [
      {
        title: 'A long haul from any RV dealer',
        body: 'San Tan Valley is spread out and far from the dealers, so towing a rig in for service means an hour each way. We come to your lot instead and fix the coach on-site, which is the whole reason mobile service makes sense out here.',
      },
      {
        title: 'Rigs sitting in full sun between trips',
        body: 'With big lots and lots of open sky, San Tan Valley rigs sit out in the full desert sun between desert runs. That bakes roof sealant, drains batteries, and stales generator fuel, so problems surface on the first trip of the season.',
      },
      {
        title: 'Dust and off-grid use on the backcountry',
        body: 'Toy haulers and trailers used to get out into the backcountry come home full of dust that fouls slide seals and mechanisms, and the off-grid power gets pushed hard. We service the slides, seals, and power systems at your place.',
      },
    ],
    nearby: ['queen-creek', 'mesa', 'apache-junction'],
    faqs: [
      {
        q: 'Do you really drive out to San Tan Valley?',
        a: 'Yes. San Tan Valley is part of our service area, and being far from the dealers is exactly why folks out here call us. We come to your lot, work on the rig where it sits, and save you the long tow into town and back.',
      },
      {
        q: 'My rig is covered in dust and the slide is binding — can you help?',
        a: 'Yes. Backcountry dust fouls the slide seals and mechanism and makes it bind or grind. We clean and lubricate the mechanism, re-adjust the slide, and replace worn seals so it moves smoothly and keeps the dust out, right at your place.',
      },
      {
        q: 'Can you handle generator and battery problems for dry camping?',
        a: 'Yes. We fix generators that will not start or hold a load and diagnose battery, solar, and charging problems so your off-grid power keeps up when you dry-camp. Give us the rig and the symptom and we will bring the parts.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
