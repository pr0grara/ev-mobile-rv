/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

import mobileRvImg from '../assets/services/mobile-rv-repair.jpg';
import rvAcImg from '../assets/services/rv-ac-repair.jpg';
import rvElectricalImg from '../assets/services/rv-electrical-repair.jpg';
import slideOutImg from '../assets/services/slide-out-repair.jpg';
import waterHeaterImg from '../assets/services/water-heater-repair.jpg';
import roofLeakImg from '../assets/services/roof-leak-repair.jpg';
import generatorImg from '../assets/services/generator-repair.jpg';
import inspectionImg from '../assets/services/mobile-rv-inspections.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "RV Air Conditioner Repair"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'mobile-rv-repair',
    name: 'Mobile RV Repair',
    short: 'Mobile RV Repair',
    blurb: 'We come to your site, driveway, or RV park anywhere in the East Valley and fix the rig where it sits.',
    description:
      'We are a fully mobile RV repair service. There is no shop to tow your rig to and no two-week wait for a service bay — we load the tools, parts, and diagnostics in the van and come to you, whether the coach is parked in your driveway, sitting in an RV park, or set up on a lot out past Apache Junction. Motorhomes, fifth wheels, travel trailers, and toy haulers — we handle the systems that actually break down out here in the desert: rooftop air conditioners, house electrical and batteries, slide-outs that quit moving, water heaters, roof leaks, and generators. You call, tell us the rig and what it is doing, and we give you a straight quote. For snowbirds and full-timers in the East Valley, getting the rig fixed where it sits — instead of dropping it at a dealer and losing your home for weeks — is the whole point.',
    sections: [
      {
        h: 'The systems that break down in the desert, fixed on-site',
        body: 'We work on the things that strand RVers out here: a rooftop AC that quit in 110-degree heat, a house battery bank that will not hold a charge, a slide-out that grinds and stops halfway, a water heater with no hot water, a roof seam leaking after a monsoon, or a generator that cranks but will not run. Because we are mobile, you do not lose your rig to a dealer service lane for weeks. We show up at a scheduled time, diagnose it on-site, and most jobs are done in one visit. We just need safe access and room to set up around the coach.',
      },
      {
        h: 'Built for snowbirds, full-timers, and weekend rigs',
        body: 'A lot of our customers are living in the rig — snowbirds down for the season, full-timers, or folks staging for a trip — and cannot just hand it over for a month. We come to the RV park, the driveway, the storage lot, or the boondocking spot and do the work where you are set up, so you keep your home and your plans. Give us a flat place to work and access to the system that is acting up and we take care of the rest.',
      },
      {
        h: 'Straight quotes, no dealer-lane runaround',
        body: 'We quote off the rig, the system, and the symptom — not a shop counter trying to fill a bay. No diagnostic-fee-then-disappear, no "we will get to it next month." If we get there and it is a $40 fix, that is what we tell you and that is what you pay. If a part has to be ordered, we are straight about the timeline. And if it is something we cannot safely do mobile, we will tell you that too.',
      },
    ],
    points: [
      'Mobile service across the East Valley — we come to the rig',
      'Motorhomes, fifth wheels, travel trailers, and toy haulers',
      'AC, electrical, slide-outs, water heaters, roofs, and generators',
      'Quotes by phone from your rig and the symptom',
      'Most repairs done on-site in one visit',
      'No dealer service-lane wait — fixed where it sits',
    ],
    faqs: [
      {
        q: 'What does "mobile RV repair" actually mean?',
        a: 'It means we come to the RV instead of you towing it to a shop. We bring the tools, diagnostics, and common parts to your driveway, your RV park site, or wherever the rig is parked and do the repair there. For most jobs there is nothing you need to do but point us at the problem and give us room to work around the coach.',
      },
      {
        q: 'What kinds of RVs do you work on?',
        a: 'Class A, B, and C motorhomes, fifth wheels, travel trailers, and toy haulers. Tell us the type, the make, and the year when you call so we can confirm parts and bring the right pieces for your rig.',
      },
      {
        q: 'Can you work on my rig at an RV park or storage lot?',
        a: 'Usually, yes. We just need safe, legal access to the RV and enough room to set up around it. A lot of our work happens right at East Valley RV parks and storage lots while folks are staying in the rig. Tell us where it is parked when you call.',
      },
      {
        q: 'How do I get a quote?',
        a: 'Call us with the type of rig, the make and year, and a quick description of what is wrong — AC not cooling, no hot water, a slide that will not move, a roof leak, no shore power. That is usually enough for a straight quote over the phone or a clear plan to diagnose it on-site.',
      },
    ],
    image: mobileRvImg,
    imageAlt: 'Mobile RV repair technician servicing a motorhome on-site in the East Valley',
    hubOnly: true,
  },
  {
    slug: 'rv-ac-repair',
    name: 'RV Air Conditioner Repair',
    short: 'RV AC Repair',
    blurb: 'Rooftop AC not cooling in the heat? We diagnose and repair RV air conditioners on-site — fast.',
    description:
      'When your rooftop air conditioner quits in an Arizona summer, it is not a comfort problem — it is a get-out-of-the-rig-now problem. Inside temperatures climb past 100 degrees in minutes, and if you are living in the coach or have pets aboard, a dead AC is an emergency. We diagnose and repair RV rooftop air conditioners on-site anywhere in the East Valley. Weak airflow, warm air, a unit that trips the breaker, a fan that spins but no cooling, a compressor that hums and shuts off on thermal overload from the heat — we find the cause and get you cooling again. We check capacitors, the fan motor, the compressor, the thermostat and control board, the shroud, and the power feed, because in this heat a marginal part fails when you need the AC the most. Whether it is a Dometic, Coleman-Mach, Advent, or Furrion unit, we work on it where the rig sits.',
    sections: [
      {
        h: 'Why RV ACs fail in Arizona heat',
        body: 'A rooftop RV air conditioner is a small unit asked to do a big job here. When it is 110 outside, the compressor and capacitors run at the edge of their limits, and a weak start capacitor, a tired fan motor, or low airflow that would be fine in a mild climate causes the unit to overheat, trip the breaker, or quit cooling. Hard starts on a generator or a long extension cord make it worse. We test the capacitors, the compressor draw, and the fan motor under load, clean the coils, and confirm the unit is actually getting the voltage it needs — so it holds up through the rest of the summer, not just the afternoon we leave.',
      },
      {
        h: 'Repair, recharge, or replace — straight answer',
        body: 'Most "dead" RV ACs are a failed capacitor, fan motor, or control board — a repair, not a replacement. Some units are sealed systems that cannot be recharged and, if the compressor is gone, are more sensibly replaced than rebuilt. We diagnose which it is and tell you straight: what failed, whether it is worth repairing, and if a new unit is the better money, what fits your roof opening. No guessing, no swapping the whole unit when a $30 part fixes it.',
      },
    ],
    points: [
      'Rooftop AC diagnosed and repaired on-site',
      'Capacitors, fan motors, compressors, and control boards',
      'Weak airflow, warm air, and breaker-tripping units',
      'Dometic, Coleman-Mach, Advent, Furrion and more',
      'Coils cleaned and voltage checked so it survives the summer',
      'Honest repair-vs-replace call on dead units',
    ],
    faqs: [
      {
        q: 'My RV AC runs but blows warm — what is wrong?',
        a: 'The most common causes are a failed run or start capacitor, a struggling compressor, or low airflow from a dirty coil or filter. In the heat, a weak capacitor is the number-one offender. We test the capacitors and compressor draw on-site and can usually have you cooling again the same visit.',
      },
      {
        q: 'How fast can you come out for a dead AC in summer?',
        a: 'A dead AC in Arizona summer is treated as urgent, especially with people or pets in the rig. Call with your location and the make of the unit and we will give you a real time and prioritize it. Ask about same-day availability when you call.',
      },
      {
        q: 'Can you recharge the refrigerant in my RV air conditioner?',
        a: 'Most rooftop RV air conditioners are sealed systems with no service ports, so they are not recharged like a car or home AC. If the sealed system has failed, the fix is usually a new unit. We diagnose whether it is a serviceable part — a capacitor, fan motor, or board — or a sealed-system failure, and tell you straight.',
      },
      {
        q: 'My AC trips the breaker or the generator — why?',
        a: 'That is often a failing start capacitor or a compressor drawing too much current, or a hard start on a generator that cannot deliver clean power. We test the unit under load and check the power feed. Sometimes the fix is a part; sometimes it is a soft-start to ease the load on a generator. We will tell you which.',
      },
    ],
    image: rvAcImg,
    imageAlt: 'Technician repairing a rooftop RV air conditioner during a mobile visit in the East Valley',
    emergency: true,
  },
  {
    slug: 'rv-electrical-repair',
    name: 'RV Electrical Repair',
    short: 'RV Electrical',
    blurb: 'No power, dead batteries, or tripping breakers? We troubleshoot 12V and 120V RV electrical on-site.',
    description:
      'RV electrical problems are the ones that leave you sitting in the dark with no idea where to start, because an RV runs two systems at once — 12-volt house power from the batteries and 120-volt shore or generator power — tied together through a converter, an inverter, and a transfer switch. We troubleshoot and repair both anywhere in the East Valley. Dead house batteries that will not hold a charge, no 12V lights or water pump, no shore power at the pedestal, breakers or fuses that keep blowing, a converter that quit charging, an inverter that will not invert, or a solar setup that is not topping off the bank — we trace it to the actual fault instead of throwing parts at it. We test batteries under load, check the converter and inverter, the transfer switch, the shore cord and pedestal, the grounds, and the fuse and breaker panels. Out here, where a lot of RVers run solar and lithium for boondocking, we sort out the charging side too.',
    sections: [
      {
        h: 'Two systems, one diagnosis: 12V and 120V',
        body: 'Half of RV electrical confusion comes from not knowing which system is at fault. No lights and a dead water pump points at the 12V house side — the batteries, the converter, or a ground. No microwave or outlets with the lights still working points at the 120V side — shore power, the transfer switch, or a breaker. We test both, find where the chain breaks, and fix that — rather than replacing a perfectly good battery because the real problem was a corroded ground or a failed converter.',
      },
      {
        h: 'Batteries, converters, inverters, solar, and lithium',
        body: 'A lot of East Valley RVers boondock and run upgraded power — solar on the roof, a lithium bank, an inverter for the household outlets. When the bank will not charge or hold, the culprit can be the batteries, the converter or charge controller, a bad connection, or a setting that does not match a lithium chemistry. We test the bank under load, check the charging sources, and make sure the converter or controller is actually configured for what you are running. If you are thinking about adding solar or going to lithium, we can sort the existing wiring first.',
      },
    ],
    points: [
      '12V house and 120V shore/generator systems both diagnosed',
      'Dead or weak house batteries tested under load',
      'Converters, inverters, and transfer switches checked',
      'Blown fuses, tripping breakers, and bad grounds traced',
      'Solar and lithium charging systems sorted out',
      'No shore power at the pedestal? We test the cord and panel',
    ],
    faqs: [
      {
        q: 'My RV batteries keep dying — is it the batteries or something else?',
        a: 'Not always the batteries. It can be a converter that stopped charging, a parasitic draw, a corroded ground, or a battery at the end of its life. We test the bank under load and check the charging side so you are not buying new batteries to fix a converter or a bad connection.',
      },
      {
        q: 'I have no 120V power even though I am plugged in — what is it?',
        a: 'With shore power connected but no outlets or microwave, the usual suspects are the shore cord or pedestal, the transfer switch, a tripped main breaker, or the surge protector. We test from the pedestal in and find where the power stops.',
      },
      {
        q: 'Can you work on my solar and lithium setup?',
        a: 'Yes. We troubleshoot solar charging, charge controllers, inverters, and lithium banks, including making sure the converter or controller is set for the right battery chemistry. If you are planning an upgrade, we can check that the existing wiring and connections are up to it first.',
      },
      {
        q: 'My breaker or fuses keep blowing — is that dangerous?',
        a: 'A breaker or fuse that keeps blowing is doing its job — it is telling you there is a short or an overload somewhere. It should not be ignored or "fixed" with a bigger fuse. We find the actual fault and repair it so the protection works the way it should.',
      },
    ],
    image: rvElectricalImg,
    imageAlt: 'Technician troubleshooting RV electrical wiring and batteries during mobile service in the East Valley',
  },
  {
    slug: 'slide-out-repair',
    name: 'RV Slide-Out Repair',
    short: 'Slide-Outs',
    blurb: 'Slide stuck, grinding, or leaking? We repair RV slide-out motors, gears, seals, and controllers on-site.',
    description:
      'A slide-out is what turns a narrow rig into a livable space, so when it quits halfway — stuck out, stuck in, grinding, or crawling — it is more than an annoyance. We repair RV slide-outs on-site anywhere in the East Valley. A slide that will not move, moves unevenly, jerks and binds, makes a grinding or clunking noise, or leaks water along the seals — we diagnose the mechanism and fix it where the rig is parked. Slides run on different systems — electric rack-and-pinion, cable, hydraulic, and Schwintek in-wall — and each fails differently, so the first job is figuring out what you have and what actually broke: a motor, a controller, a stripped gear, a sheared shear pin, a hydraulic leak, a worn seal, or just a slide out of adjustment. We carry common parts and get most slides moving smoothly and sealing tight again in one visit.',
    sections: [
      {
        h: 'Electric, hydraulic, cable, and Schwintek — they fail differently',
        body: 'There is no single "slide-out fix" because there is no single slide-out. A Schwintek in-wall system has its own motors and controller and a known habit of getting out of sync; a rack-and-pinion slide can strip a gear or shear a pin; a cable slide can stretch or snap a cable; a hydraulic slide can lose pressure from a leak or a tired pump. We identify the system on your rig first, then diagnose the actual failure, rather than guessing. That is what keeps a slide repair from turning into a parade of replaced parts that did not fix it.',
      },
      {
        h: 'Seals, alignment, and keeping the desert out',
        body: 'A slide that moves but leaks or lets dust in is its own problem out here. The wiper and bulb seals around a slide dry out and crack in the desert sun, and a slide that is out of adjustment will not seat evenly against them. We inspect and replace worn slide seals, re-adjust the slide so it sits square, and lubricate the mechanism with the right product so it stops grinding and stays smooth. Keeping the seals tight keeps the heat, the dust, and the monsoon rain on the outside where they belong.',
      },
    ],
    points: [
      'Stuck, jerking, grinding, and uneven slides diagnosed',
      'Electric, hydraulic, cable, and Schwintek systems',
      'Motors, controllers, gears, shear pins, and cables',
      'Worn slide seals replaced to keep dust and rain out',
      'Slides re-adjusted to sit square and seal evenly',
      'Mechanism lubricated with the right product',
    ],
    faqs: [
      {
        q: 'My slide-out is stuck halfway — can you get it in?',
        a: 'Usually, yes. First we figure out what type of slide you have and why it stopped — a dead motor, a controller fault, a stripped gear, a sheared pin, or a hydraulic leak. In many cases we can get it moving or safely retracted on-site so you can travel, then complete the repair.',
      },
      {
        q: 'Why does my slide grind or move unevenly?',
        a: 'Grinding or uneven movement usually means a mechanism that needs lubrication or adjustment, a gear or cable that is worn, or a Schwintek system that has gotten out of sync. We diagnose the cause and adjust or repair it so the slide moves smoothly and seats square.',
      },
      {
        q: 'Water gets in around my slide — can you fix the seals?',
        a: 'Yes. The bulb and wiper seals around a slide dry out and crack in the desert sun and let in water and dust. We replace the worn seals and re-adjust the slide so it seats evenly against them, which is what keeps the monsoon rain and dust outside.',
      },
    ],
    image: slideOutImg,
    imageAlt: 'RV slide-out mechanism being repaired during a mobile visit in the East Valley',
  },
  {
    slug: 'water-heater-repair',
    name: 'RV Water Heater Repair',
    short: 'Water Heater',
    blurb: 'No hot water on gas or electric? We repair RV water heaters — igniters, elements, valves, and more.',
    description:
      'No hot water in the rig is one of those problems that makes the RV feel a lot less like home. We repair RV water heaters on-site anywhere in the East Valley. Most RV water heaters run on both propane and 120V electric, so the first step is figuring out whether it fails on one mode or both — that alone points at the cause. No ignition on gas, a unit that lights and then drops out, no heat on electric, lukewarm water, a leaking tank, a tripped reset, or a unit throwing a fault code — we diagnose and repair it where the rig is parked. We work on Suburban, Atwood, and Dometic tank units as well as the on-demand tankless systems, checking the igniter and electrode, the gas valve, the thermostats and high-limit resets, the heating element on the electric side, the circuit board, and the anode rod and tank. Most are running hot again the same visit.',
    sections: [
      {
        h: 'Gas, electric, or both — the symptom tells the story',
        body: 'Because most RV water heaters heat on both propane and electric, which mode fails narrows it down fast. No hot water on gas but fine on electric points at the igniter, electrode, or gas valve. No heat on electric but fine on gas points at the element, the thermostat, or the reset on the electric side. Nothing on either usually means a thermostat, a high-limit reset that tripped, or the control board. We test each mode and fix the part that actually failed instead of replacing the whole unit.',
      },
      {
        h: 'Tank and tankless, and the desert hard-water problem',
        body: 'East Valley water is hard, and minerals are tough on a water heater. Sediment builds in a tank unit and an anode rod gets eaten away faster than you would expect, and a tankless on-demand unit can scale up and start short-cycling or running lukewarm. We flush and descale, replace a spent anode rod, and service the unit so it heats fully and lasts. If you have a tankless system that keeps dropping out or never gets hot, scale and a marginal gas supply are the usual culprits — we sort both.',
      },
    ],
    points: [
      'Gas and electric modes both tested and repaired',
      'Igniters, electrodes, gas valves, and thermostats',
      'Electric elements and tripped high-limit resets',
      'Suburban, Atwood, Dometic tank units and tankless systems',
      'Tanks flushed and anode rods replaced for hard water',
      'Leaking tanks and fault codes diagnosed straight',
    ],
    faqs: [
      {
        q: 'I have no hot water — where do you start?',
        a: 'We start by checking whether it fails on gas, on electric, or both, because that points right at the cause. From there we test the igniter and gas valve, the electric element and thermostat, the high-limit reset, and the control board, and repair the part that failed.',
      },
      {
        q: 'My water heater lights then goes out — what is that?',
        a: 'A unit that lights and then drops out is often a dirty or misaligned electrode, a weak ground, a gas-supply issue, or a control board not seeing the flame. We clean and test the ignition side and confirm the gas supply so it lights and stays lit.',
      },
      {
        q: 'Should I flush my RV water heater here in Arizona?',
        a: 'Yes — East Valley water is hard, and sediment builds up in the tank and eats the anode rod faster than in soft-water areas. Flushing the tank and replacing a spent anode rod when needed helps it heat fully and last longer. We do it on-site.',
      },
    ],
    image: waterHeaterImg,
    imageAlt: 'RV water heater being serviced during a mobile repair visit in the East Valley',
  },
  {
    slug: 'roof-leak-repair',
    name: 'RV Roof Leak Repair',
    short: 'Roof Leaks',
    blurb: 'Soft spots, cracked sealant, or a monsoon leak? We reseal and repair RV roofs before water spreads.',
    description:
      'An RV roof leak is the quiet kind of damage — by the time you see a stain inside, water has usually been getting into the structure for a while. We repair and reseal RV roofs on-site anywhere in the East Valley. Cracked or peeling sealant around vents, the AC shroud, skylights, and seams; dried-out caulk that has split in the desert sun; a soft spot in the roof or a stain on the ceiling; a leak that showed up after a monsoon downpour — we find where the water is actually getting in and seal it before it spreads into the decking and walls. We inspect the whole roof, reseal vents, seams, and fixtures with the correct sealant for your roof type, repair or replace failed roof components, and address soft spots. Out here the sun is as hard on a roof as the rain, so keeping the sealant sound is what keeps the rig dry.',
    sections: [
      {
        h: 'The desert sun cracks sealant, the monsoon finds it',
        body: 'Arizona is brutal on RV roofs in two directions. Months of intense UV dry out and crack the lap sealant around vents, the AC, skylights, and the seams — and then a monsoon dumps an inch of rain in an hour and finds every crack at once. That is why so many leaks here show up suddenly after a storm even though the real cause was sun damage that built up for a season. We inspect the whole roof, not just the spot you noticed, and reseal the failed areas so the next storm stays outside.',
      },
      {
        h: 'The right sealant for your roof, and catching soft spots early',
        body: 'RV roofs are not all the same — EPDM and TPO rubber membranes, fiberglass, and aluminum each need the correct sealant, and using the wrong product is how a "fixed" leak comes right back. We identify your roof type and reseal with the right material. We also check for soft spots, which mean water has already gotten into the decking; catching that early is the difference between a reseal and a major repair. We will tell you straight what stage your roof is at.',
      },
    ],
    points: [
      'Whole-roof inspection, not just the visible spot',
      'Vents, AC shroud, skylights, and seams resealed',
      'Correct sealant for EPDM, TPO, fiberglass, or aluminum',
      'Cracked, dried, and peeling sealant replaced',
      'Soft spots and ceiling stains diagnosed early',
      'Sealed before the next monsoon finds the crack',
    ],
    faqs: [
      {
        q: 'How do I know if my RV roof is leaking?',
        a: 'Common signs are a stain on the ceiling or upper walls, a musty smell, a soft or spongy spot on the roof or floor, or bubbling in the wall paneling. Often the leak point and the stain are not in the same place. We inspect the whole roof to find where the water is actually getting in.',
      },
      {
        q: 'My roof only leaks during a monsoon — is it still worth fixing?',
        a: 'Definitely. A leak that only shows in heavy rain is still letting water into the structure each time, and the next storm is always coming. The underlying cause is usually sun-cracked sealant that a downpour exposes. Resealing it now is far cheaper than repairing rotted decking later.',
      },
      {
        q: 'How often should an RV roof be resealed in Arizona?',
        a: 'In the desert sun, lap sealant should be inspected at least once a year and typically needs touch-up or resealing more often than in milder climates because UV dries it out faster. A yearly inspection before monsoon season is a smart habit out here.',
      },
    ],
    image: roofLeakImg,
    imageAlt: 'Cracked RV roof sealant being repaired and resealed during a mobile visit in the East Valley',
  },
  {
    slug: 'generator-repair',
    name: 'RV Generator Repair',
    short: 'Generators',
    blurb: 'Onboard generator won’t start, surges, or shuts down? We service and repair RV generators on-site.',
    description:
      'For boondockers and anyone who runs the AC off-grid, the onboard generator is what keeps the lights on and the rig cool — so when it will not start or quits under load, the whole trip stops. We service and repair RV generators on-site anywhere in the East Valley. A generator that cranks but will not start, starts then dies, surges or runs rough, will not hold a load, shuts down on its own, or throws an error code — we diagnose and fix it where the rig is parked. We work on the common onboard units like Onan and Cummins, checking fuel delivery and filters, the carburetor, spark and ignition, the air filter, oil level and the low-oil shutdown, the control board and start circuit, and the load side. A lot of generator no-starts are simply old or stale fuel and a gummed-up carburetor from sitting through the off-season — exactly what happens to a snowbird rig parked all summer.',
    sections: [
      {
        h: 'Stale fuel and the summer sit',
        body: 'The single most common RV generator problem we see here comes from the rig sitting. A coach parked through the Arizona summer — or a snowbird rig that sat up north all season — ends up with stale fuel and a varnished-up carburetor, and then it cranks but will not start, or starts and dies, when you fire it up for the season. We clean or rebuild the carburetor, replace fuel filters, address the stale fuel, and get it running clean again. Running the generator periodically and keeping fresh fuel in it prevents a repeat.',
      },
      {
        h: 'Won’t hold a load, surges, or shuts down',
        body: 'A generator that starts fine but will not run the AC, surges up and down, or shuts itself off has a different set of causes — fuel starvation under load, a governor or carburetor issue, a low-oil shutdown doing its job, an overheating problem, or a fault on the control or load side. We test it under load, read any fault codes, and trace it to the real cause so it actually carries the AC when it is 110 out and you are off-grid.',
      },
    ],
    points: [
      'Onboard generators diagnosed and repaired on-site',
      'Onan, Cummins, and other common RV units',
      'No-start, starts-then-dies, surging, and shutdowns',
      'Carburetor cleaning and stale-fuel fixes after a long sit',
      'Fuel filters, spark, oil, and low-oil shutdown checked',
      'Tested under load so it actually runs the AC off-grid',
    ],
    faqs: [
      {
        q: 'My RV generator cranks but won’t start — what is it?',
        a: 'After a rig has been sitting, the usual cause is stale fuel and a gummed-up carburetor, sometimes with a clogged fuel filter. We clean or rebuild the carburetor, address the old fuel, and check spark and fuel delivery to get it running clean again.',
      },
      {
        q: 'The generator starts but won’t run my air conditioner — why?',
        a: 'A generator that starts but cannot carry the AC is usually starving for fuel under load, has a carburetor or governor issue, or is shutting down on a protection circuit. We test it under load and trace the cause so it holds the AC when you are off-grid.',
      },
      {
        q: 'My generator shuts itself off after a while — is that normal?',
        a: 'No. An unexpected shutdown is usually a low-oil shutdown doing its job, an overheating issue, fuel starvation, or a control-board fault. We read any codes and find the real reason rather than just restarting it and hoping.',
      },
    ],
    image: generatorImg,
    imageAlt: 'RV onboard generator being serviced during a mobile repair visit in the East Valley',
  },
  {
    slug: 'mobile-rv-inspections',
    name: 'Mobile RV Inspections',
    short: 'Inspections',
    blurb: 'Buying, selling, or de-winterizing? We come to the rig and inspect the systems before you commit.',
    description:
      'An RV is a house and a vehicle in one, with a dozen systems that all have to work — and the most expensive mistakes happen when nobody checks them first. We perform mobile RV inspections on-site anywhere in the East Valley. Buying a used rig and want to know what you are getting into; selling and want to head off surprises; bringing a rig out of storage for the season; or just want a straight assessment before a big trip — we come to where the RV is parked and go through it system by system. We check the roof and seals, the rooftop AC, the 12V and 120V electrical, the batteries and charging, the water heater and plumbing, the slide-outs, the generator, propane, and the obvious safety items, then give you a clear, plain-language report of what is solid, what needs attention, and what could be a deal-breaker. It is the honest first step before you spend real money.',
    sections: [
      {
        h: 'A real, system-by-system look before you commit',
        body: 'A proper inspection is more than a walk-through. We go through the roof and sealant, the AC under load, the 12V and 120V electrical and the battery bank, the converter and inverter, the water heater and plumbing for leaks, the slide-outs in and out, the generator started and tested, the propane system, and the basic safety gear. You come away knowing what works, what is worn, and what is going to cost money soon — instead of finding out after the check clears.',
      },
      {
        h: 'For buyers, sellers, snowbirds, and pre-trip peace of mind',
        body: 'Most of our inspections fall into a few buckets: a buyer who does not want to inherit someone else’s problems, a seller who wants no surprises mid-sale, a snowbird bringing a rig out of a long sit, or an owner who wants the systems checked before heading out on a long trip. In every case the value is the same — an honest, no-pressure picture of the rig from someone who is not the one selling it to you. If something needs fixing, we can often handle it on the same visit.',
      },
    ],
    points: [
      'On-site, system-by-system RV inspection',
      'Roof, seals, AC, electrical, plumbing, and slide-outs checked',
      'Generator, batteries, charging, and propane tested',
      'Plain-language report: solid, needs-attention, deal-breaker',
      'Great for buying, selling, or de-winterizing a rig',
      'No-pressure — we are not the ones selling you the RV',
    ],
    faqs: [
      {
        q: 'What does a mobile RV inspection cover?',
        a: 'We go through the roof and seals, the rooftop AC, the 12V and 120V electrical and battery bank, the water heater and plumbing, the slide-outs, the generator, the propane system, and basic safety items. Then we give you a plain-language rundown of what is solid and what needs attention.',
      },
      {
        q: 'I am buying a used RV — can you inspect it before I pay?',
        a: 'Yes, that is one of the most useful times to call us. We come to wherever the rig is and check the major systems so you know what you are buying before the money changes hands. If we find issues, you will know what they mean and roughly what they cost.',
      },
      {
        q: 'Can you fix the problems you find during the inspection?',
        a: 'Often, yes. Many of the items we turn up — AC, electrical, water heater, slide, generator, roof sealant — are things we repair, so we can frequently handle them on the same visit or schedule the fix. There is no obligation; the inspection stands on its own.',
      },
    ],
    image: inspectionImg,
    imageAlt: 'Technician performing a mobile RV inspection on a motorhome in the East Valley',
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
