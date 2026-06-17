/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

import mobileAutoGlassImg from '../assets/services/mobile-auto-glass.jpg';
import windshieldReplacementImg from '../assets/services/windshield-replacement.jpg';
import windshieldRepairImg from '../assets/services/windshield-repair.jpg';
import sideWindowImg from '../assets/services/side-window-replacement.jpg';
import rearWindowImg from '../assets/services/rear-window-replacement.jpg';
import powerWindowImg from '../assets/services/power-window-repair.jpg';
import regulatorImg from '../assets/services/window-regulator-repair.jpg';
import emergencyImg from '../assets/services/emergency-auto-glass.jpg';

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
  name: string; // Full service name, e.g. "Windshield Replacement"
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
    slug: 'mobile-auto-glass',
    name: 'Mobile Auto Glass Repair',
    short: 'Mobile Auto Glass',
    blurb: 'We come to you anywhere in the Las Vegas valley for auto glass and car window work.',
    description:
      'We are a mobile auto glass and car window service. That means we do not run a shop you have to drive to — we load the glass, tools, and adhesive in the van and come to your home, work, hotel, or wherever the car is parked. Cracked windshield, busted side window, rear glass blown out, or a power window stuck down in the heat — we handle the whole range. You call, you tell us the year, make, and model and what is wrong, and we give you a straight quote over the phone. In a town where it is 110 degrees in the shade and your car bakes in a parking lot all day, a broken or stuck window is not something you want to drive across the valley to deal with. We bring the fix to you.',
    sections: [
      {
        h: 'One call covers glass and power windows',
        body: 'Most shops do glass or they do power-window mechanical work, not both. We do both, because in the real world a broken window can be a smashed pane that needs new glass or a dead motor and regulator that needs the door taken apart. When you call, tell us what is happening — glass is cracked, glass is shattered, window is stuck down, window moves slow or grinds — and we bring the right parts and the right tools the first time.',
      },
      {
        h: 'We come to your home, work, hotel, or parking lot',
        body: 'You should not have to take half a day off and sit in a waiting room. We set up wherever the car is: your driveway, the office lot, the hotel valet, a casino garage, an apartment carport. Most jobs are done on-site in one visit. Give us a flat, reasonably level spot to work and we handle the rest.',
      },
      {
        h: 'Straight quotes, no runaround',
        body: 'We quote off the year, make, model, and which glass or window is the problem. No bait pricing, no surprise add-ons when we show up. If we need the VIN or a photo to nail down the right glass — some windshields have rain sensors, cameras, or heating elements — we will ask up front so the price you hear is the price you pay.',
      },
    ],
    points: [
      'Mobile service across the Las Vegas valley — we come to you',
      'Windshield, side, rear, and quarter glass',
      'Power window, regulator, and motor repair',
      'Quotes by phone from your year, make, and model',
      'Most jobs done on-site in one visit',
      'Photo upload optional to speed up the quote',
    ],
    faqs: [
      {
        q: 'What does "mobile" actually mean?',
        a: 'It means we come to the car instead of you coming to a shop. We bring the glass, adhesive, and tools to your home, job site, hotel, or parking lot and do the work there. For most jobs there is nothing you need to do but point us at the car.',
      },
      {
        q: 'Do you do both auto glass and power windows?',
        a: 'Yes. We replace windshields and side and rear glass, and we also fix power windows that are stuck, slow, off track, or dead — regulators, motors, and switches. One call covers either problem.',
      },
      {
        q: 'How do I get a quote?',
        a: 'Call us with your vehicle year, make, and model and a quick description of the glass or window issue. That is usually enough for a price. For some windshields we may ask for the VIN or a photo so we order the exact right glass.',
      },
      {
        q: 'Can you work in a parking garage or covered lot?',
        a: 'Usually, yes — covered shade is actually ideal in the summer. We just need safe access to the car and enough room to open the doors and work. Tell us where it is parked when you call.',
      },
    ],
    image: mobileAutoGlassImg,
    imageAlt: 'Mobile auto glass van bringing windshield and car window service to a customer in Las Vegas',
    hubOnly: true,
  },
  {
    slug: 'windshield-replacement',
    name: 'Windshield Replacement',
    short: 'Windshield Replacement',
    blurb: 'Full windshield replacement at your home, work, or hotel — most cars done in one visit.',
    description:
      'When a crack runs across your line of sight, spreads past the edge of the glass, or the windshield is chipped in three or four spots, replacement is the honest fix — a repair will not hold. We replace windshields on-site anywhere in the Las Vegas valley. We pull the old glass, clean and prep the pinch weld, lay fresh urethane, and set the new windshield so it seals right and sits flush. We use the proper adhesive for the heat out here and tell you a real safe-drive-away time before we leave. Many newer windshields carry rain sensors, lane-camera brackets, or built-in heating, so we confirm the exact glass for your year, make, and model before we order — and we will flag if your vehicle needs camera recalibration after the swap.',
    sections: [
      {
        h: 'When a windshield needs replacing instead of repairing',
        body: 'Replace it when the crack is longer than a few inches, when it sits in the driver\'s direct line of sight, when it reaches the edge of the glass, or when there are multiple chips. Vegas heat makes this call for you fast — a small crack at sunrise can run the full width of the glass by afternoon once the dash heats up and the windshield expands. If you are not sure, send a photo and we will tell you straight whether it can be repaired or needs replacement.',
      },
      {
        h: 'Set right for desert heat',
        body: 'A windshield is a structural part of the car — it backs up the airbags and the roof in a rollover. That bond only works if it is set in clean urethane and given time to cure. We prep the frame properly, use adhesive rated for high-temperature climates, and give you a real safe-drive-away time instead of rushing you off. Cutting that corner is how windshields leak, whistle, or pop loose later.',
      },
      {
        h: 'Sensors, cameras, and the right glass',
        body: 'A lot of vehicles from the last several years have a forward camera, rain sensor, or heating element mounted to the windshield. The replacement glass has to match, and some cars need the driver-assist camera recalibrated after the glass is changed. We confirm the correct part from your VIN or year/make/model up front and tell you whether recalibration applies so there are no surprises.',
      },
    ],
    points: [
      'On-site replacement at home, work, or your hotel',
      'Correct OEM-style glass matched to your VIN or year/make/model',
      'Proper pinch-weld prep and high-temp urethane',
      'Honest safe-drive-away time before we leave',
      'We flag whether your vehicle needs camera recalibration',
      'Rain-sensor, camera-bracket, and heated-glass windshields handled',
    ],
    faqs: [
      {
        q: 'How long does a windshield replacement take?',
        a: 'The glass swap itself is usually under an hour. The bigger factor is cure time for the adhesive — we give you a safe-drive-away time before we leave, often around an hour in our heat, so the bond is set before you drive.',
      },
      {
        q: 'Can you match the glass for a car with a lane camera or rain sensor?',
        a: 'Yes. We confirm the exact glass from your VIN or year, make, and model so the camera bracket, rain sensor, or heating element matches. If your vehicle needs the camera recalibrated after the swap, we will tell you up front.',
      },
      {
        q: 'My crack is small — do I really need a full replacement?',
        a: 'Not always. If it is a small chip or a short crack out of your line of sight, we can often repair it. Replacement is for long cracks, damage in the driver\'s view, cracks that reach the edge, or multiple chips. Send a photo and we will tell you honestly.',
      },
      {
        q: 'Will insurance cover it?',
        a: 'Many comprehensive policies cover glass, sometimes with no deductible in some states. Coverage varies, so check your policy. We can give you a straight cash price either way so you can compare.',
      },
    ],
    image: windshieldReplacementImg,
    imageAlt: 'New windshield being set into a vehicle during a mobile replacement in Las Vegas',
  },
  {
    slug: 'windshield-repair',
    name: 'Windshield Chip Repair',
    short: 'Chip Repair',
    blurb: 'Stop a chip before the heat turns it into a crack — quick on-site resin repair.',
    description:
      'A rock chip from the freeway does not stay small for long in Las Vegas. Once the sun hits the windshield and the glass expands, a little star or bullseye can run into a foot-long crack in a single afternoon. Chip repair fixes the damage while it is still small: we clean the break, inject resin under pressure to fill the void, and cure it so it stops spreading and mostly disappears. It is faster and cheaper than a full replacement, and it keeps your factory glass and seal. The window for this is short — catch a chip early and it is a quick fix; wait a week in summer and you are often into a full replacement instead.',
    sections: [
      {
        h: 'Why chips spread so fast here',
        body: 'Glass expands when it heats and contracts when it cools. In Las Vegas your windshield can swing from cool overnight air to a dash baking at well over 150 degrees by midday, and then back again. That daily expand-and-contract cycle pries at the tip of any chip until it runs. Cranking cold A/C onto a hot windshield does the same thing in reverse. The fix is simple: get the chip sealed before the heat works on it.',
      },
      {
        h: 'What chip repair can and cannot do',
        body: 'Repair works best on chips smaller than a quarter and short cracks out of the driver\'s direct line of sight. It restores strength and stops the spread, and most repairs become hard to see, though a faint mark can remain. If the damage is long, deep, in your sightline, or already branching into multiple cracks, we will tell you it needs replacement instead of selling you a repair that will not hold.',
      },
    ],
    points: [
      'On-site resin injection while the chip is still small',
      'Stops the crack from spreading in the heat',
      'Keeps your original factory glass and seal',
      'Faster and cheaper than replacement',
      'Honest call when a chip is too far gone to repair',
    ],
    faqs: [
      {
        q: 'How soon should I get a chip repaired?',
        a: 'As soon as you can, especially in summer. A chip that is repairable today can spread into a crack that needs a full windshield within days once the heat gets to it. The sooner we seal it, the better the result.',
      },
      {
        q: 'Will the chip disappear completely?',
        a: 'Usually it becomes much less visible and the structural damage is sealed, but a small mark can remain depending on the size and type of break. The main point is to stop it from spreading and keep your factory glass.',
      },
      {
        q: 'How big a chip can you repair?',
        a: 'As a rule of thumb, chips up to about the size of a quarter and short cracks out of your line of sight. Bigger or longer damage, or anything in the driver\'s direct view, is better replaced. Send a photo and we will tell you which it is.',
      },
    ],
    image: windshieldRepairImg,
    imageAlt: 'Resin being injected into a windshield rock chip during a mobile repair in Las Vegas',
  },
  {
    slug: 'side-window-replacement',
    name: 'Side Window Replacement',
    short: 'Side Window',
    blurb: 'Door glass, vent glass, and quarter glass replaced — and the cleanup handled.',
    description:
      'A broken side window leaves your car open to the heat, the dust, and anyone walking by. Whether it was a break-in, a rock, a door slammed wrong, or glass that shattered from stress, we replace door glass, quarter glass, and vent windows on-site. We bring the correct tempered glass for your vehicle, take the door panel off the right way, clear the broken glass out of the door cavity and the seats — that is the part people underestimate, since tempered glass shatters into hundreds of pieces — set the new glass in the track, and make sure it rolls up and down clean. If the same hit also damaged the regulator or motor, we can handle that in the same visit.',
    sections: [
      {
        h: 'We clean up the glass, not just swap the pane',
        body: 'When a side window breaks it does not break into a few big pieces — it explodes into hundreds of little cubes that end up down inside the door, under the seats, in the seat tracks, and in the door pockets. Leaving that behind means glass works its way out for months and can jam the new window. We vacuum the door cavity and the interior so the car is actually usable again, not just patched.',
      },
      {
        h: 'The right glass, set in the track correctly',
        body: 'Side windows are tempered safety glass cut and curved for your specific door. We bring the correct piece, free up the regulator and run channels, and seat the glass so it seals against the weatherstrip and travels smoothly. If the break also took out the regulator or motor — common when a window is forced — we can replace those at the same time instead of you booking a second trip.',
      },
    ],
    points: [
      'Door glass, vent glass, and quarter glass replaced on-site',
      'Correct tempered glass for your year, make, and model',
      'Full cleanup of shattered glass from the door and interior',
      'Window re-seated in the track to roll smoothly',
      'Regulator or motor handled in the same visit if needed',
    ],
    faqs: [
      {
        q: 'My window got smashed in a break-in — can you come today?',
        a: 'Call us and we will give you a real time. A broken side window leaves the car open to the heat and to theft, so these get priority. If we cannot get the exact glass same-day, we can talk about securing the opening in the meantime.',
      },
      {
        q: 'Do you clean up all the broken glass?',
        a: 'Yes. Tempered glass shatters into hundreds of small pieces that fall into the door and the interior. We vacuum the door cavity and the cabin so glass does not keep turning up later or jam the new window.',
      },
      {
        q: 'What if the window also stopped rolling up?',
        a: 'Then the regulator or motor likely got damaged too, which is common when a window is forced. We can replace the glass and the mechanism in the same visit so you are not booking two separate trips.',
      },
    ],
    image: sideWindowImg,
    imageAlt: 'Technician replacing a broken car door window in Las Vegas',
  },
  {
    slug: 'rear-window-replacement',
    name: 'Rear Window Replacement',
    short: 'Rear Glass',
    blurb: 'Back glass replaced — including defroster lines — with a full glass cleanup.',
    description:
      'Rear glass is its own job. On most vehicles the back window is one big piece of tempered glass with the defroster grid baked into it, and when it breaks it scatters cubes across the whole cargo area and back seat. We replace rear windshields and back glass on-site, bring the correct piece for your vehicle, reconnect the defroster tabs where the glass uses them, and clean the shattered glass out of the trunk, hatch, and seats. Whether it cracked from a stress fracture in the heat, a break-in, or a hatch slammed on something, we set the new glass so it seals tight against the elements and the dust.',
    sections: [
      {
        h: 'Defroster grids and antenna lines',
        body: 'A lot of rear windows have the defroster grid and sometimes the radio antenna printed right into the glass. The replacement has to match, and the defroster tabs need to be reconnected so the grid actually works in winter. We confirm the correct glass for your vehicle and handle the electrical connections, not just the pane.',
      },
      {
        h: 'Cleanup that actually finishes the job',
        body: 'Rear glass breaks into a huge spread of small cubes that go everywhere — the cargo floor, behind the seats, into the spare-tire well, down the seat backs. We vacuum it out so you are not finding glass in your trunk for the next six months. The car leaves usable, sealed, and clean.',
      },
    ],
    points: [
      'Rear and back glass replaced on-site',
      'Defroster grid tabs reconnected where the glass uses them',
      'Correct tempered glass matched to your vehicle',
      'Full cleanup of broken glass from cargo area and seats',
      'Sealed tight against heat, dust, and weather',
    ],
    faqs: [
      {
        q: 'Does the defroster still work after a rear window replacement?',
        a: 'Yes, when the replacement glass has the defroster grid and we reconnect the tabs. We match the correct glass for your vehicle so the grid — and the antenna, if it is printed in the glass — works like before.',
      },
      {
        q: 'My back glass shattered into tiny pieces — is that normal?',
        a: 'Yes. Rear glass is tempered, so it is designed to break into small cubes rather than sharp shards. It makes a mess but it is safer. We vacuum it all out of the cargo area, seats, and trim as part of the job.',
      },
      {
        q: 'Can a rear window crack on its own from the heat?',
        a: 'It can. Tempered glass under stress, an old chip, or a hard temperature swing can cause a rear window to crack or shatter without anyone touching it — something we see in the Las Vegas summer. We will replace it and get the car sealed back up.',
      },
    ],
    image: rearWindowImg,
    imageAlt: 'Rear car window with defroster lines being replaced in Las Vegas',
  },
  {
    slug: 'power-window-repair',
    name: 'Power Window Repair',
    short: 'Power Windows',
    blurb: 'Window stuck down, slow, off track, or dead? We fix the mechanism, not just the glass.',
    description:
      'A power window that will not roll up is more than an annoyance in Las Vegas — it leaves your car open to 110-degree heat, blowing dust, and anyone who walks by. We fix the mechanical side of car windows: the regulator that raises and lowers the glass, the motor that drives it, the switch you press, and the tracks the glass rides in. If your window is stuck down, will not go up, moves slow, grinds, jumps off track, or drops into the door, that is a regulator, motor, or switch problem — not the glass itself. We diagnose which part actually failed so you are not paying to replace a good motor when the switch is the issue, and we carry the common parts to fix it on-site.',
    sections: [
      {
        h: 'Stuck down, slow, off track, or dead — what is actually wrong',
        body: 'Different symptoms point to different parts. A window that is totally dead and silent is often a blown switch, a fuse, or wiring. A window that hums or clicks but does not move is usually a stripped or failed regulator. A window that moves slow, grinds, or jumps off the track points to a worn regulator, a dry track, or a tired motor. A window that drops into the door on its own has almost always lost the regulator clip or cable. We test it instead of guessing.',
      },
      {
        h: 'Why a stuck-down window is urgent in Las Vegas',
        body: 'In this climate a window that will not close is a real problem the same day. The interior bakes, dust and grit blow in and settle into the cabin, monsoon rain in late summer soaks the seats, and an open window is an open invitation in a parking lot. We treat stuck-down windows as a priority — getting the glass back up and sealed is the first goal, then the proper repair.',
      },
      {
        h: 'Motors, regulators, switches, and tracks',
        body: 'We replace window regulators and window motors (often sold as one assembly), master and door switches, and we re-seat glass that has come off the run channel. We bring common regulators and motors for popular makes so most jobs are one visit. If it turns out to be a simple fix — a dry track, a loose connector, a blown fuse — we tell you that instead of upselling a full assembly.',
      },
    ],
    points: [
      'Window stuck down or won\'t roll up — fixed on-site',
      'Regulator, motor, switch, and track repair',
      'Slow, grinding, or off-track windows diagnosed and corrected',
      'Glass that dropped into the door re-seated and secured',
      'We test to find the failed part, not guess',
      'Common motors and regulators carried for one-visit repairs',
    ],
    faqs: [
      {
        q: 'My window is stuck down and won\'t go up — can you help today?',
        a: 'Yes, and we treat it as a priority. A window that will not close leaves your car open to the heat, dust, and theft. Call us with your year, make, and model and we will get the glass back up and the mechanism fixed.',
      },
      {
        q: 'Is it the motor, the regulator, or the switch?',
        a: 'It depends on the symptom. Dead and silent often means a switch, fuse, or wiring. A hum or click with no movement usually means the regulator. Slow or grinding points to a worn regulator or motor. We test it so you only pay to replace the part that actually failed.',
      },
      {
        q: 'My window dropped down into the door — what happened?',
        a: 'That is almost always a broken regulator clip or cable that lets the glass fall. The glass itself is usually fine. We pull the door panel, replace the regulator, and re-seat the glass in the track.',
      },
      {
        q: 'Do you repair the window switch too?',
        a: 'Yes. A worn or stuck switch is a common and often cheaper cause than people expect. We test the switch, motor, and wiring and replace whichever is actually bad.',
      },
    ],
    image: powerWindowImg,
    imageAlt: 'Car door panel removed to repair a power window motor and regulator in Las Vegas',
  },
  {
    slug: 'window-regulator-repair',
    name: 'Window Regulator Repair',
    short: 'Regulator Repair',
    blurb: 'The mechanism that raises your glass has failed — we replace the regulator and re-seat the glass.',
    description:
      'The window regulator is the mechanism inside your door that physically raises and lowers the glass — usually a cable-and-pulley or scissor-arm assembly driven by the window motor. When it fails, the glass stops moving evenly, jumps off track, slips back down after you raise it, or drops into the door entirely. Heat is hard on the plastic guides and clips these assemblies use, and over years of daily cycling in a hot car they crack and let go. We replace failed regulators on-site, re-seat the glass in the run channel, and make sure the window travels smoothly top to bottom. On many vehicles the motor and regulator come as one assembly, so we confirm which your car uses before we quote.',
    sections: [
      {
        h: 'Signs the regulator — not the motor — is the problem',
        body: 'A bad regulator usually shows up as the glass moving crooked or binding, a window that rises partway then slips back down, a popping or grinding sound from inside the door, or glass that has dropped out of sight into the door. If you hear the motor running but the glass barely moves or moves unevenly, the regulator is the likely culprit. We confirm it by pulling the panel and checking the assembly rather than guessing from the symptom alone.',
      },
      {
        h: 'Why regulators fail in the Las Vegas heat',
        body: 'Regulators rely on plastic clips, guides, and sometimes nylon pulleys that get brittle when a car bakes in the sun day after day. Add years of daily up-and-down cycling and those parts crack and release the glass. It is one of the more common door-mechanism failures we see out here, and replacing the whole regulator assembly is more reliable than trying to patch a single broken clip.',
      },
    ],
    points: [
      'Failed window regulators replaced on-site',
      'Glass re-seated in the run channel to travel smoothly',
      'Cable-type and scissor-type regulators handled',
      'Motor-and-regulator combo assemblies confirmed before quoting',
      'Common regulators carried for one-visit repairs',
    ],
    faqs: [
      {
        q: 'What is a window regulator?',
        a: 'It is the mechanism inside the door that actually raises and lowers the glass — a cable-and-pulley or scissor-arm assembly the motor drives. When it breaks, the glass moves unevenly, slips, or falls into the door even though the motor may still run.',
      },
      {
        q: 'Can you just fix the broken clip instead of the whole regulator?',
        a: 'Sometimes, but on most modern regulators the clips and guides are part of one assembly, and a single cracked clip usually means the rest is close behind. Replacing the assembly is more reliable than chasing one broken piece. We will tell you what your vehicle actually needs.',
      },
      {
        q: 'Is the regulator the same as the motor?',
        a: 'No, but they work together and on many cars they come as a single combined assembly. The motor provides the power; the regulator is the mechanism that moves the glass. We confirm which setup your vehicle uses before we quote.',
      },
    ],
    image: regulatorImg,
    imageAlt: 'Window regulator assembly being replaced inside a car door in Las Vegas',
  },
  {
    slug: 'emergency-auto-glass',
    name: 'Emergency Broken Window Service',
    short: 'Emergency Service',
    blurb: 'Broken into, smashed, or a window stuck down — fast mobile help to get you sealed up.',
    description:
      'A smashed window or a window stuck wide open is not something that can wait in Las Vegas. The car is exposed to the heat, to blowing dust, to monsoon rain in late summer, and to anyone walking through the lot. We provide fast mobile service for broken and stuck car windows — break-ins, vandalism, accidents, and windows that died in the down position. We come to wherever the car is, get the opening sealed or the glass back up, and replace the glass or fix the mechanism. The priority is getting your vehicle secure and out of the heat as quickly as we can, then doing the repair right.',
    sections: [
      {
        h: 'Why a broken window can\'t wait here',
        body: 'In most places a broken window is an inconvenience. In Las Vegas it is urgent the same day. The cabin hits oven temperatures within minutes in summer, fine desert dust blows in and coats everything, late-summer monsoon storms can dump rain into the seats, and an open car in a parking lot is an easy target. Getting the window closed or covered fast protects the interior and the car.',
      },
      {
        h: 'Break-ins, accidents, and stuck windows',
        body: 'Whatever caused it — a smash-and-grab in a casino garage, a rock on the freeway, a fender-bender, or a power window that gave out stuck down — we handle it. We bring the glass and the tools, clear out the broken pieces, replace the pane or fix the regulator and motor, and clean up so the car is usable again. If we cannot get the exact glass the same day, we focus first on securing the opening.',
      },
    ],
    points: [
      'Fast mobile response for broken and stuck windows',
      'Break-ins, vandalism, accidents, and dead power windows',
      'We secure the opening first, then repair it right',
      'Glass replacement and power-window mechanism repair',
      'Broken glass cleaned out of the door and interior',
      'Ask about same-day availability when you call',
    ],
    faqs: [
      {
        q: 'How fast can you get to me?',
        a: 'Call us with your location and what happened and we will give you a real time, not a runaround. Broken and stuck windows get priority because the car is exposed. Same-day service is often available — ask when you call.',
      },
      {
        q: 'My car was broken into — what do you do first?',
        a: 'We get there, clear the broken glass, and get the opening secured or the new glass in as fast as we can so the car is not sitting open in the heat. We vacuum the shattered glass out of the door and seats as part of the job.',
      },
      {
        q: 'Can you come at night or on the weekend?',
        a: 'Call and ask — we do our best to cover urgent broken-window calls outside normal hours. Tell us where the car is and what happened and we will tell you straight what we can do and when.',
      },
    ],
    image: emergencyImg,
    imageAlt: 'Mobile technician responding to a broken car window in Las Vegas',
    emergency: true,
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
