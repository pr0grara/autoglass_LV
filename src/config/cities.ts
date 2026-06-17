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
    slug: 'las-vegas',
    name: 'Las Vegas',
    state: 'NV',
    intro:
      'Las Vegas is hard on car glass and car windows in ways most places are not. Cars sit in uncovered lots all day — at work, at the Strip, at the airport long-term garages — baking under sun that pushes dash temperatures past 150 degrees. That heat turns a small rock chip from the I-15 or the 95 into a windshield-length crack by the afternoon, and it cooks the plastic clips and guides inside your doors until power windows quit. We are a fully mobile service, so we come to you anywhere in the valley: downtown, the central neighborhoods off Charleston and Sahara, the Strip resort garages, or out toward the edges. Whether it is a cracked windshield, a side window smashed in a parking-lot break-in, a rear window that shattered in the heat, or a power window stuck down with the sun beating in, we bring the glass and the tools to wherever the car is parked. Tell us the year, make, and model and what is wrong, and we will give you a straight quote and a real time. No shop to drive to, no waiting room — that is the whole point of doing this mobile in a city this spread out and this hot.',
    neighborhoods: ['Downtown / Arts District', 'The Strip corridor', 'Charleston Heights', 'Huntridge', 'Centennial Hills'],
    landmarks: ['Las Vegas Strip', 'Fremont Street', 'Harry Reid International Airport', 'I-15 / US-95 interchange'],
    issues: [
      {
        title: 'Freeway rock chips that spread by afternoon',
        body: 'The I-15 and US-95 throw rocks, and a chip that looks minor in the morning runs into a full crack once the dash heats up and the glass expands. Catching chips early with a resin repair is the difference between a quick fix and a full windshield.',
      },
      {
        title: 'Parking-lot and garage break-ins',
        body: 'Cars left in Strip garages, event lots, and apartment carports get their windows smashed for a smash-and-grab. We replace the side or rear glass on-site and vacuum the shattered glass out of the door and seats.',
      },
      {
        title: 'Power windows that quit in the heat',
        body: 'Years of daily cycling in a car that bakes all day crack the regulator clips and wear the motors. A window stuck down in Las Vegas heat needs to go back up the same day, before the interior cooks and dust blows in.',
      },
    ],
    nearby: ['north-las-vegas', 'paradise', 'spring-valley'],
    faqs: [
      {
        q: 'Do you cover the whole Las Vegas valley?',
        a: 'Yes. We are fully mobile and cover Las Vegas and the surrounding communities — Henderson, North Las Vegas, Summerlin, Spring Valley, Enterprise, Paradise, and more. If you are not sure we reach you, call and ask; we likely do.',
      },
      {
        q: 'Can you come to a Strip hotel or casino parking garage?',
        a: 'Usually, yes — and covered garage shade is ideal for working in the summer. We just need safe access to the car and room to open the doors. Tell us where it is parked and which level when you call.',
      },
      {
        q: 'How fast can you reach me in Las Vegas?',
        a: 'Las Vegas is central to our service area, so we can usually get to you quickly. Broken and stuck windows get priority because the car is exposed to the heat. Call and we will give you a real time.',
      },
    ],
  },
  {
    slug: 'henderson',
    name: 'Henderson',
    state: 'NV',
    intro:
      'Henderson runs from the master-planned neighborhoods of Green Valley and Anthem down to the older industrial stretches near Boulder Highway, and we cover all of it. A lot of Henderson driving is highway driving — the 215 Beltway, US-95 toward Boulder City, the commute into Las Vegas — and that means freeway rock chips and the cracks they turn into once a car sits in the sun. The newer communities up the hill toward Anthem and MacDonald Ranch have long driveways and HOA-friendly parking, which makes them easy mobile-service stops; we come to the house and do the work in the driveway. Down in the flatter, older parts of town near Water Street and Boulder Highway, we see more break-in side-glass work and more worn-out power windows on higher-mileage vehicles. Whatever the issue — a chipped or cracked windshield, a smashed side window, a rear window that let go in the heat, or a power window that is stuck, slow, or off track — we bring the glass and tools to you anywhere in Henderson. Give us the year, make, and model and what is wrong, and we will quote it straight.',
    neighborhoods: ['Green Valley', 'Anthem', 'MacDonald Ranch', 'Whitney Ranch', 'Water Street District'],
    landmarks: ['215 Beltway', 'Water Street District', 'Lake Las Vegas', 'Sunset Station'],
    issues: [
      {
        title: 'Beltway and US-95 commuter rock chips',
        body: 'Henderson commuters rack up highway miles on the 215 and US-95, and that is where windshields take rock hits. We repair the chip on-site before the heat spreads it into a replacement.',
      },
      {
        title: 'Heat-baked power windows in higher-mileage cars',
        body: 'On older vehicles around Boulder Highway and Whitney, years of sun wear out window motors and crack regulator clips. Stuck-down and slow windows are a common Henderson call, and we carry the common parts.',
      },
      {
        title: 'Driveway and street-parked break-ins',
        body: 'Cars parked outside in Henderson neighborhoods get side windows smashed. We replace door and quarter glass at the house and clean the broken glass out of the door and interior.',
      },
    ],
    nearby: ['green-valley', 'paradise', 'enterprise'],
    faqs: [
      {
        q: 'Do you service Anthem and the hillside neighborhoods?',
        a: 'Yes. The longer driveways and easy parking up toward Anthem and MacDonald Ranch make them simple mobile stops — we come to the house and do the work right there.',
      },
      {
        q: 'Can you fix a power window at my Henderson home?',
        a: 'Yes. Stuck, slow, off-track, and dead power windows are some of our most common Henderson calls. We test whether it is the regulator, motor, or switch and fix it in the driveway.',
      },
      {
        q: 'Do you cover Lake Las Vegas and the east side?',
        a: 'Yes — we cover Henderson end to end, from Green Valley and Anthem to the Lake Las Vegas area and the older neighborhoods near Water Street and Boulder Highway.',
      },
    ],
  },
  {
    slug: 'north-las-vegas',
    name: 'North Las Vegas',
    state: 'NV',
    intro:
      'North Las Vegas covers a lot of ground, from the established neighborhoods near Cheyenne and the older core out to the newer master-planned sprawl around Aliante and the far north. It is heavy commuter and work-truck country — a lot of driving on I-15, the 215, and Las Vegas Boulevard North — which means plenty of freeway rock chips and the cracked windshields they become in the heat. Out toward Aliante and the open desert edges, blowing dust and wind during monsoon season scour glass and find their way into any window that will not close. We are fully mobile and come to you anywhere in North Las Vegas, whether that is a house in Aliante, a job site near the industrial corridor, or an apartment lot off Craig. We handle the full range: windshield chip repair and replacement, side and rear glass, and power window repair when a window is stuck down, slow, or dead. Tell us the year, make, and model and what is going on, and we will give you a straight price and a real time — no shop to drive across town to.',
    neighborhoods: ['Aliante', 'Cheyenne corridor', 'Eldorado', 'Sunrise / Civic Center area', 'Craig Ranch'],
    landmarks: ['Aliante Casino', 'Craig Ranch Regional Park', 'I-15 north corridor', 'Las Vegas Motor Speedway'],
    issues: [
      {
        title: 'Work-truck and commuter windshield damage',
        body: 'North Las Vegas runs on trucks and commuters covering I-15 and the 215. Highway rock chips are constant, and they spread fast in the heat. We repair on-site before a chip becomes a full windshield.',
      },
      {
        title: 'Blowing dust on the desert edges',
        body: 'Out toward Aliante and the open north end, monsoon-season wind drives grit against the glass and into any window that will not seal. A stuck-down window lets that dust coat the whole interior — we get it closed and working.',
      },
      {
        title: 'Power windows worn out by sun and miles',
        body: 'Higher-mileage trucks and cars here see worn window motors and cracked regulators after years of heat. We diagnose the failed part and fix stuck or slow windows at your home or job site.',
      },
    ],
    nearby: ['las-vegas', 'sunrise-manor', 'summerlin'],
    faqs: [
      {
        q: 'Do you come out to Aliante and the far north end?',
        a: 'Yes. We are fully mobile and cover North Las Vegas from the older core near Cheyenne out to Aliante and the newer north-end neighborhoods. Call and we will give you a time.',
      },
      {
        q: 'Can you replace glass at a job site?',
        a: 'Yes. We come to work trucks and fleet vehicles at the job site or yard, as long as there is safe access and room to work. Give us the location and the vehicle details when you call.',
      },
      {
        q: 'My truck window is stuck down — can you fix it on-site?',
        a: 'Yes. We carry common regulators and motors for popular trucks and cars, so most stuck-window jobs are done in one visit wherever the vehicle is parked.',
      },
    ],
  },
  {
    slug: 'summerlin',
    name: 'Summerlin',
    state: 'NV',
    intro:
      'Summerlin is master-planned from the ground up, climbing the west side of the valley toward Red Rock, and most of it is single-family homes with driveways and garages — which makes it some of the easiest mobile auto glass work in the city. We come to the house, set up in the driveway or the shade, and do the job without you ever leaving home. Summerlin sits higher and closer to the open desert, so wind and blowing grit off the Red Rock side are real, and the elevation does nothing to spare windshields from the heat that spreads a rock chip into a crack. We see a lot of newer vehicles out here with cameras, rain sensors, and lane-assist mounted to the windshield, so when we replace glass we confirm the exact part and flag whether your car needs the camera recalibrated. From chip repair and windshield replacement to side and rear glass and power-window repair, we cover all of Summerlin — The Ridges, Sun City, Summerlin Centre, and the villages in between. Give us the year, make, and model and we will quote it straight.',
    neighborhoods: ['The Ridges', 'Sun City Summerlin', 'Summerlin Centre', 'The Vistas', 'The Trails'],
    landmarks: ['Downtown Summerlin', 'Red Rock Canyon', 'Red Rock Casino', 'TPC Las Vegas'],
    issues: [
      {
        title: 'Newer vehicles with windshield cameras and sensors',
        body: 'Summerlin has a lot of late-model cars with forward cameras, rain sensors, and heated glass. We match the exact windshield and tell you up front whether the driver-assist camera needs recalibration after the swap.',
      },
      {
        title: 'Wind and grit off the Red Rock side',
        body: 'Higher up against the open desert, wind drives dust and fine grit at the glass and into any window that will not close. We seal new glass tight and get stuck windows back up before the interior fills with dust.',
      },
      {
        title: 'Heat-spread chips even at elevation',
        body: 'The higher ground does not spare windshields — chips still run into cracks once the dash bakes. Quick on-site resin repair keeps a Summerlin chip from becoming a full replacement.',
      },
    ],
    nearby: ['spring-valley', 'las-vegas', 'enterprise'],
    faqs: [
      {
        q: 'Do you do mobile service in the gated Summerlin villages?',
        a: 'Yes. We work in driveways throughout Summerlin, including gated communities — just arrange gate access for us when you book and have the vehicle reachable.',
      },
      {
        q: 'My car has a lane-assist camera — can you still replace the windshield?',
        a: 'Yes. We confirm the exact glass for your vehicle and let you know whether the forward camera needs recalibration after the replacement, so the driver-assist features work correctly.',
      },
      {
        q: 'Can you come to Sun City Summerlin?',
        a: 'Yes, we cover Sun City and all of Summerlin. Mobile service is especially convenient there — we come to the home and you do not have to drive anywhere.',
      },
    ],
  },
  {
    slug: 'spring-valley',
    name: 'Spring Valley',
    state: 'NV',
    intro:
      'Spring Valley is one of the densest parts of the valley, packed with apartment complexes, condos, and single-family neighborhoods on the west side between the Strip and Summerlin. A lot of cars here live in apartment lots and street parking rather than garages, which means more sun exposure, more break-in side-glass work, and more power windows worn down by years of baking in the open. The area is crossed by busy roads — Tropicana, Flamingo, Rainbow, and the 215 — so freeway and arterial rock chips are common, and they spread fast once a windshield heats up. We are fully mobile and come to you at the apartment, the condo lot, or the house, anywhere in Spring Valley. Whether it is a chip repair, a full windshield, a smashed side or rear window after a break-in, or a power window stuck down in the heat, we bring the glass and the tools to the car. Tell us the year, make, and model and what is wrong, and we will give you a straight quote and a real time.',
    neighborhoods: ['Chinatown / Spring Mountain', 'Rhodes Ranch', 'Spring Valley Ranch', 'Peccole Ranch', 'Rainbow corridor'],
    landmarks: ['Chinatown Plaza', '215 Beltway', 'Spring Valley Hospital', 'Rainbow Boulevard'],
    issues: [
      {
        title: 'Apartment-lot break-ins',
        body: 'With so many cars parked in open apartment and condo lots, smashed side windows from break-ins are common in Spring Valley. We replace the glass on-site and vacuum the shattered pieces out of the door and seats.',
      },
      {
        title: 'Arterial and Beltway rock chips',
        body: 'Tropicana, Flamingo, Rainbow, and the 215 keep windshields catching rocks. A chip here spreads quickly in the sun, so we repair it on-site before it becomes a replacement.',
      },
      {
        title: 'Sun-worn power windows on street-parked cars',
        body: 'Cars that live outside in Spring Valley take the full heat, and their window motors and regulators wear out. We fix stuck-down, slow, and off-track windows at the apartment or house.',
      },
    ],
    nearby: ['enterprise', 'summerlin', 'paradise'],
    faqs: [
      {
        q: 'Can you come to my apartment complex in Spring Valley?',
        a: 'Yes. We do a lot of work in apartment and condo lots here. We just need safe access to the car and a bit of room to work — point us to where it is parked and we will handle it.',
      },
      {
        q: 'My side window was smashed overnight — can you replace it today?',
        a: 'Call us and we will give you a real time. Break-in glass gets priority because the car is sitting open in the heat. We bring the correct glass and clean up all the shattered pieces.',
      },
      {
        q: 'Do you cover the Chinatown and Rainbow areas?',
        a: 'Yes — we cover all of Spring Valley, including the Spring Mountain / Chinatown corridor and the Rainbow Boulevard neighborhoods.',
      },
    ],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    state: 'NV',
    intro:
      'Enterprise is one of the fastest-growing parts of the valley, sprawling across the southwest from the 215 down toward the airport and the south end of the Strip. Much of it is newer — Mountain\'s Edge, Southern Highlands, Rhodes Ranch — with newer vehicles to match, the kind that carry windshield cameras, rain sensors, and lane-assist that have to be matched and sometimes recalibrated when the glass is replaced. Because so much of Enterprise is new-build neighborhoods with driveways and garages, mobile service is easy here: we come to the house and work in the driveway. The flip side of all that growth is constant construction traffic on the 215 and the surface roads, which throws rocks and chips windshields. We cover Enterprise top to bottom for chip repair, windshield replacement, side and rear glass, and power-window repair. Tell us the year, make, and model and what is wrong, and we will give you a straight quote and come to you — no driving across the valley to a shop.',
    neighborhoods: ['Mountain\'s Edge', 'Southern Highlands', 'Rhodes Ranch', 'Silverado Ranch', 'Blue Diamond area'],
    landmarks: ['215 Beltway', 'South Point Casino', 'Mountain\'s Edge Regional Park', 'Town Square'],
    issues: [
      {
        title: 'Construction-zone rock chips',
        body: 'Enterprise is still building out, and construction traffic on the 215 and the surface roads kicks up rocks that chip windshields. We repair chips on-site before the heat turns them into cracks.',
      },
      {
        title: 'Newer cars with camera-equipped windshields',
        body: 'A lot of Enterprise vehicles are late-model with forward cameras and sensors mounted to the glass. We match the exact windshield and flag whether the camera needs recalibration after replacement.',
      },
      {
        title: 'Power windows in sun-exposed driveways',
        body: 'Cars parked in open driveways across Mountain\'s Edge and Southern Highlands bake all day, wearing out window motors and regulators. We fix stuck and slow windows right at the home.',
      },
    ],
    nearby: ['spring-valley', 'paradise', 'henderson'],
    faqs: [
      {
        q: 'Do you cover Mountain\'s Edge and Southern Highlands?',
        a: 'Yes, we cover all of Enterprise including Mountain\'s Edge, Southern Highlands, Rhodes Ranch, and Silverado Ranch. The driveways and garages out here make mobile service simple.',
      },
      {
        q: 'My new car has a windshield camera — can you handle it?',
        a: 'Yes. We confirm the exact glass for your year, make, and model and tell you whether the driver-assist camera needs recalibration after the swap so everything works as it should.',
      },
      {
        q: 'How quickly can you get to Enterprise?',
        a: 'Enterprise is well within our service area. Call with your location and vehicle details and we will give you a real time — urgent broken or stuck windows get priority.',
      },
    ],
  },
  {
    slug: 'paradise',
    name: 'Paradise',
    state: 'NV',
    intro:
      'Paradise is the unincorporated township that wraps around the Strip, the Convention Center, the airport, and UNLV — some of the busiest, most parked-on ground in the whole valley. Between resort garages, event lots, airport parking, and dense apartment complexes near the university, there are a huge number of cars sitting out in the heat, and that shows up in the work: smashed side windows from garage break-ins, windshields cracked from sitting in the sun, and power windows worn out from baking all day. We are fully mobile and come to wherever the car is in Paradise — a Strip resort garage, an apartment lot off Flamingo or Tropicana, a space near UNLV, or the airport area. Covered garage parking is actually ideal for us to work in during summer. Whatever the problem — chip repair, windshield replacement, side or rear glass after a break-in, or a power window stuck down — we bring the glass and tools to you. Give us the year, make, and model and what is wrong, and we will quote it straight and give you a real time.',
    neighborhoods: ['UNLV / University area', 'Strip resort corridor', 'Paradise Palms', 'McCarran / airport area', 'Flamingo / Maryland'],
    landmarks: ['UNLV', 'Las Vegas Convention Center', 'Harry Reid International Airport', 'The Strip'],
    issues: [
      {
        title: 'Resort-garage and event-lot break-ins',
        body: 'With the Strip, the Convention Center, and constant events, parking-garage smash-and-grabs are common in Paradise. We replace side and rear glass on-site and clean the broken glass out of the door and interior.',
      },
      {
        title: 'Cars baking in airport and long-term lots',
        body: 'Vehicles left at the airport and in long-term lots sit in full sun for days. Windshield cracks spread and power windows fail. We meet you when you are back or come to where the car is parked.',
      },
      {
        title: 'Student and apartment-lot exposure near UNLV',
        body: 'Dense student and apartment parking near UNLV means lots of street and lot exposure — more break-in glass and more worn-out power windows. We come to the lot and handle it on-site.',
      },
    ],
    nearby: ['las-vegas', 'winchester', 'enterprise'],
    faqs: [
      {
        q: 'Can you meet me at a Strip parking garage?',
        a: 'Yes, and the covered shade makes summer work easier. We need safe access to the car and room to open the doors. Tell us the property and the garage level when you call.',
      },
      {
        q: 'My car was broken into near UNLV — can you come to the lot?',
        a: 'Yes. We come to apartment and campus-area lots, replace the glass on-site, and vacuum out the shattered pieces. Break-in calls get priority since the car is sitting open.',
      },
      {
        q: 'Do you service the airport area?',
        a: 'Yes, we cover the Harry Reid / McCarran area and the surrounding Paradise neighborhoods. Call with the vehicle location and details and we will set a time.',
      },
    ],
  },
  {
    slug: 'green-valley',
    name: 'Green Valley',
    state: 'NV',
    intro:
      'Green Valley is the established master-planned heart of Henderson, a grid of mature, tree-lined neighborhoods, shopping districts, and parks between the 215 and Sunset. It is mostly single-family homes with driveways and garages, which makes mobile auto glass work straightforward — we come to the house and do the job in the driveway without you leaving home. Green Valley cars still take the full Las Vegas heat, so the same problems show up: rock chips from the 215 and Sunset Road that spread into cracks, windshields and rear glass stressed by the temperature swings, and power windows worn out after years of daily cycling in the sun. There is also a fair amount of foot and shopping traffic around The District and Green Valley Ranch, where lot break-ins happen. We cover all of Green Valley and the surrounding Henderson neighborhoods for chip repair, windshield replacement, side and rear glass, and power-window repair. Tell us the year, make, and model and the issue, and we will give you a straight quote and come to you.',
    neighborhoods: ['Green Valley Ranch', 'The District', 'Pueblo / McLeod area', 'Silver Springs', 'Valle Verde corridor'],
    landmarks: ['The District at Green Valley Ranch', 'Green Valley Ranch Resort', 'The Galleria at Sunset', 'Sunset Road'],
    issues: [
      {
        title: '215 and Sunset Road rock chips',
        body: 'Green Valley commuters cover the 215 and Sunset, where windshields catch rocks. We repair the chip on-site before the heat spreads it into a crack and a full replacement.',
      },
      {
        title: 'Shopping-district lot break-ins',
        body: 'Around The District, Green Valley Ranch, and the Galleria, busy retail lots see smash-and-grab break-ins. We replace the side or rear glass at your home or the lot and clean up the broken glass.',
      },
      {
        title: 'Power windows tired from years in the sun',
        body: 'Established Green Valley neighborhoods have plenty of long-owned vehicles whose window motors and regulators have worn out from heat and daily use. We fix stuck and slow windows in the driveway.',
      },
    ],
    nearby: ['henderson', 'paradise', 'enterprise'],
    faqs: [
      {
        q: 'Is Green Valley part of Henderson?',
        a: 'Yes — Green Valley is a master-planned area within Henderson. We cover it and the rest of Henderson, and mobile service throughout Green Valley\'s neighborhoods is easy with the driveways and garages here.',
      },
      {
        q: 'Can you replace my windshield at home in Green Valley Ranch?',
        a: 'Yes. We come to the house, work in the driveway, and confirm the exact glass for your vehicle — including cameras or sensors if your car has them — before we set it.',
      },
      {
        q: 'My window is stuck down — can you come to Green Valley today?',
        a: 'Call and we will give you a real time. Stuck-down windows get priority in the heat, and we carry the common regulators and motors to fix most of them in one visit.',
      },
    ],
  },
  {
    slug: 'winchester',
    name: 'Winchester',
    state: 'NV',
    intro:
      'Winchester is the older township just east of the Strip, around the Boulevard Mall, Maryland Parkway, and the original casino corridor on the east side. It is a dense, established part of the valley — a mix of long-standing single-family neighborhoods, apartments, and busy commercial strips — with a lot of cars that park outside and a lot of higher-mileage vehicles. That mix means steady work for us: break-in side glass from apartment and commercial lots, windshields cracked from sitting in the sun on Maryland Parkway, and worn-out power windows on older cars that have baked through a lot of Las Vegas summers. We are fully mobile and come to you anywhere in Winchester, whether that is a house off Desert Inn, an apartment lot near the Boulevard Mall, or a spot along Maryland Parkway. We handle chip repair, windshield replacement, side and rear glass, and power-window repair. Tell us the year, make, and model and what is going on, and we will give you a straight quote and a real time.',
    neighborhoods: ['Boulevard Mall area', 'Maryland Parkway corridor', 'Desert Inn / Paradise', 'Winchester Center', 'Karen / Sahara area'],
    landmarks: ['Boulevard Mall', 'Maryland Parkway', 'Winchester Cultural Center', 'Sahara Avenue'],
    issues: [
      {
        title: 'Older cars with worn-out power windows',
        body: 'Winchester has plenty of long-owned, higher-mileage vehicles whose window motors and regulators have given out after years of heat. Stuck and slow windows are a steady call here, and we carry common parts.',
      },
      {
        title: 'Apartment and commercial-lot break-ins',
        body: 'Dense apartment and retail parking around the Boulevard Mall and Maryland Parkway sees side-window break-ins. We replace the glass on-site and vacuum the shattered pieces from the door and interior.',
      },
      {
        title: 'Sun-cracked windshields on street-parked cars',
        body: 'Cars that live outside along Maryland Parkway and the east-side neighborhoods bake all day, and small chips spread into cracks. We repair early or replace the windshield wherever the car is parked.',
      },
    ],
    nearby: ['paradise', 'sunrise-manor', 'las-vegas'],
    faqs: [
      {
        q: 'Do you cover the Boulevard Mall and Maryland Parkway area?',
        a: 'Yes. We cover all of Winchester, including the neighborhoods and lots around the Boulevard Mall, Maryland Parkway, and Desert Inn. Call with your location and vehicle details.',
      },
      {
        q: 'Can you fix the power window on my older car?',
        a: 'Yes. Worn-out power windows on higher-mileage cars are one of our most common Winchester jobs. We test whether it is the motor, regulator, or switch and fix it on-site.',
      },
      {
        q: 'My side window was broken in an apartment lot — can you help?',
        a: 'Yes. We come to apartment and commercial lots, replace the glass, and clean up the broken pieces. Break-in calls get priority because the car is sitting open in the heat.',
      },
    ],
  },
  {
    slug: 'sunrise-manor',
    name: 'Sunrise Manor',
    state: 'NV',
    intro:
      'Sunrise Manor is the large township on the east side of the valley, running from Nellis Air Force Base and the Boulder Highway corridor up against Sunrise Mountain and Frenchman Mountain. It is a sprawling, mostly established area with a lot of single-family homes, work trucks, and higher-mileage vehicles, plus heavy traffic on Nellis, Lamb, and Boulder Highway. The work here reflects that: freeway and arterial rock chips, windshields and rear glass cracked by the heat, side-glass break-ins, and power windows worn out from years in the sun. Sitting right up against the mountains on the east edge, the area also catches wind and blowing dust that scour glass and pour into any window that will not close. We are fully mobile and come to you anywhere in Sunrise Manor — a house off Nellis, a work truck at the yard, or an apartment lot along Boulder Highway. We cover chip repair, windshield replacement, side and rear glass, and power-window repair. Tell us the year, make, and model and the issue, and we will quote it straight.',
    neighborhoods: ['Nellis / Sunrise area', 'Boulder Highway corridor', 'Hollywood Boulevard', 'East Charleston', 'Whitney'],
    landmarks: ['Nellis Air Force Base', 'Sunrise Mountain', 'Sam Boyd Stadium area', 'Boulder Highway'],
    issues: [
      {
        title: 'Wind and dust off the east mountains',
        body: 'Up against Sunrise and Frenchman Mountain, wind drives grit at the glass and into any window that will not seal. A stuck-down window fills the cabin with dust — we get it closed and working.',
      },
      {
        title: 'Work-truck and commuter windshield chips',
        body: 'Heavy traffic on Nellis, Lamb, and Boulder Highway, plus work trucks covering a lot of miles, means constant rock chips. We repair on-site before the heat spreads the chip into a crack.',
      },
      {
        title: 'Power windows worn out by heat and miles',
        body: 'Sunrise Manor has many higher-mileage vehicles whose window motors and regulators have failed after years of baking. We diagnose the bad part and fix stuck or slow windows at the home or job site.',
      },
    ],
    nearby: ['las-vegas', 'north-las-vegas', 'winchester'],
    faqs: [
      {
        q: 'Do you come out to the Nellis and Boulder Highway areas?',
        a: 'Yes. We cover all of Sunrise Manor, from the Nellis area and East Charleston down the Boulder Highway corridor. Call with your location and vehicle details and we will set a time.',
      },
      {
        q: 'Can you service work trucks and fleet vehicles here?',
        a: 'Yes. We come to job sites and yards for work trucks and fleet vehicles, as long as there is safe access and room to work. Give us the vehicle details when you call.',
      },
      {
        q: 'My window won\'t roll up and dust is getting in — can you fix it fast?',
        a: 'Yes, and we treat it as a priority in this area because of the wind and dust. We carry common motors and regulators, so most stuck-window repairs are done in one visit.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
