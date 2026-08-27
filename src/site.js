const STORAGE_KEY = "middle-path-finance-state-v2";
const UI_STAGE_KEY = "middle-path-finance-ui-stage-v1";
const PROFILE_KEY = "middle-path-finance-profile-v1";
const PLAN_401K_RULES = {
  defaultContributionRate: 0.06,
  employerMatchRate: 0.5,
  employerMatchCapRate: 0.06,
  annualReturn: 0.07,
  annualLimit: 24500,
  retirementAge: 67,
  withdrawalRate: 0.04,
  projectionAgeCap: 85,
};
const HOME_PURCHASE_RULES = {
  annualRate: 0.068,
  termMonths: 360,
};
const CAR_PURCHASE_RULES = {
  annualRate: 0.069,
  termMonths: 72,
  defaultDownPaymentRate: 0.1,
};

const careerData = {
  teacher: { label: "Public School Teacher", baseSalary: 52000, annualGrowth: 0.028, volatility: 0.16, blurb: "Stable path, but rent can quickly dominate in expensive cities." },
  software: { label: "Software Engineer", baseSalary: 98000, annualGrowth: 0.05, volatility: 0.1, blurb: "High early earning power, especially useful for building emergency reserves." },
  nurse: { label: "Registered Nurse", baseSalary: 79000, annualGrowth: 0.032, volatility: 0.13, blurb: "Reliable middle-class path with resilience against health-related shocks." },
  marketing: { label: "Marketing Coordinator", baseSalary: 58000, annualGrowth: 0.03, volatility: 0.2, blurb: "Comfort depends on careful rent and debt management." },
  analyst: { label: "Financial Analyst", baseSalary: 74000, annualGrowth: 0.04, volatility: 0.14, blurb: "Often reaches low-stress territory after the first few years." },
  social: { label: "Social Worker", baseSalary: 51000, annualGrowth: 0.025, volatility: 0.18, blurb: "Mission-driven but financially tight unless costs stay lean." },
  pm: { label: "Project Manager", baseSalary: 86000, annualGrowth: 0.038, volatility: 0.12, blurb: "Usually supports a healthy buffer once emergency savings are established." },
  designer: { label: "Graphic Designer", baseSalary: 56000, annualGrowth: 0.027, volatility: 0.19, blurb: "Moderate upside with noticeable sensitivity to market and lifestyle drift." },
  accountant: { label: "Accountant / Auditor", baseSalary: 79000, annualGrowth: 0.03, volatility: 0.12, blurb: "A steady white-collar path that usually improves once debt payments shrink." },
  data: { label: "Data Analyst", baseSalary: 82000, annualGrowth: 0.042, volatility: 0.11, blurb: "Solid analytical role with strong upside in higher-cost metros." },
  electrician: { label: "Electrician", baseSalary: 65000, annualGrowth: 0.03, volatility: 0.11, blurb: "Skilled-trades income can support stability well outside the highest-rent cities." },
  police: { label: "Police Officer", baseSalary: 76000, annualGrowth: 0.022, volatility: 0.12, blurb: "Benefits help, but housing and family costs still shape long-run comfort." },
  paralegal: { label: "Paralegal", baseSalary: 61000, annualGrowth: 0.028, volatility: 0.13, blurb: "Good for stable middle-income planning if rent stays manageable." },
  construction: { label: "Construction Manager", baseSalary: 104000, annualGrowth: 0.034, volatility: 0.15, blurb: "High earning power with some project-cycle risk." },
  dental: { label: "Dental Hygienist", baseSalary: 90000, annualGrowth: 0.03, volatility: 0.09, blurb: "Usually a strong buffer-builder because pay is high relative to training time." },
  mechanical: { label: "Mechanical Engineer", baseSalary: 99000, annualGrowth: 0.035, volatility: 0.11, blurb: "Well-suited for long-horizon stability in most major metros." },
  hr: { label: "HR Specialist", baseSalary: 72000, annualGrowth: 0.028, volatility: 0.12, blurb: "Often supports a balanced plan when variable spending is controlled." },
  sales: { label: "Sales Representative", baseSalary: 73000, annualGrowth: 0.032, volatility: 0.2, blurb: "Compensation can be good, but monthly stress rises when commissions dip." },
  logistics: { label: "Logistician", baseSalary: 82000, annualGrowth: 0.033, volatility: 0.12, blurb: "A stable operations career that tends to pair well with medium-cost cities." },
  pharmacist: { label: "Pharmacist", baseSalary: 136000, annualGrowth: 0.018, volatility: 0.08, blurb: "Very strong income floor, though housing choices still matter for savings speed." },
  physician_assistant: { label: "Physician Assistant", baseSalary: 134000, annualGrowth: 0.03, volatility: 0.09, blurb: "High pay and resilient demand make this one of the lower-stress paths." },
  ux: { label: "UX / Product Designer", baseSalary: 92000, annualGrowth: 0.038, volatility: 0.15, blurb: "Comfortable in many cities, but more exposed to hiring cycles than nursing or teaching." },
  admin: { label: "Administrative Manager", baseSalary: 76000, annualGrowth: 0.026, volatility: 0.11, blurb: "Often stable enough for long-run planning when fixed costs stay moderate." },
  therapist: { label: "Mental Health Counselor", baseSalary: 58000, annualGrowth: 0.03, volatility: 0.13, blurb: "A meaningful career that can feel tight unless housing and debt stay under control." },
  chef: { label: "Chef / Head Cook", baseSalary: 62000, annualGrowth: 0.026, volatility: 0.22, blurb: "Lifestyle pressure can rise fast because hospitality income is less predictable." },
  cybersecurity: { label: "Information Security Analyst", baseSalary: 112000, annualGrowth: 0.045, volatility: 0.1, blurb: "High pay and resilient demand usually create room for emergency savings." },
  civil: { label: "Civil Engineer", baseSalary: 95000, annualGrowth: 0.034, volatility: 0.1, blurb: "A durable professional track that stays workable across many metros." },
  web: { label: "Web Developer", baseSalary: 89000, annualGrowth: 0.038, volatility: 0.14, blurb: "Often viable in medium-cost cities, with more volatility than core engineering roles." },
  operations: { label: "Operations Manager", baseSalary: 93000, annualGrowth: 0.03, volatility: 0.12, blurb: "Strong planning income that can keep stress moderate when housing is controlled." },
  loan: { label: "Loan Officer", baseSalary: 76000, annualGrowth: 0.025, volatility: 0.17, blurb: "Can support middle-class stability, though commission swings still matter." },
  insurance: { label: "Claims Adjuster", baseSalary: 72000, annualGrowth: 0.022, volatility: 0.11, blurb: "A dependable office-based path with moderate upside and manageable volatility." },
  radiology: { label: "Radiologic Technologist", baseSalary: 76000, annualGrowth: 0.027, volatility: 0.1, blurb: "Healthcare demand makes this a relatively resilient option for long-range planning." },
  respiratory: { label: "Respiratory Therapist", baseSalary: 80000, annualGrowth: 0.028, volatility: 0.11, blurb: "Pay and stability both help during higher-risk health and family scenarios." },
  plumber: { label: "Plumber / Pipefitter", baseSalary: 69000, annualGrowth: 0.03, volatility: 0.12, blurb: "Trades income can remain solid even when white-collar hiring is softer." },
  firefighter: { label: "Firefighter / EMT", baseSalary: 65000, annualGrowth: 0.023, volatility: 0.11, blurb: "Benefits help, but expensive housing still shapes overall pressure." },
  lpn: { label: "Licensed Practical Nurse", baseSalary: 62000, annualGrowth: 0.026, volatility: 0.12, blurb: "A practical healthcare route that works best in lower- to medium-cost cities." },
  medical_assistant: { label: "Medical Assistant", baseSalary: 46000, annualGrowth: 0.024, volatility: 0.11, blurb: "A tighter income path that requires especially careful fixed-cost management." },
  bookkeeper: { label: "Bookkeeping Clerk", baseSalary: 50000, annualGrowth: 0.02, volatility: 0.1, blurb: "Stable but modest pay, so rent and debt quickly become the main stress drivers." },
  physical_therapist: { label: "Physical Therapist", baseSalary: 101000, annualGrowth: 0.03, volatility: 0.09, blurb: "High and steady pay makes this one of the easier paths for reserve-building." },
  labtech: { label: "Clinical Lab Technologist", baseSalary: 68000, annualGrowth: 0.028, volatility: 0.1, blurb: "Usually sustainable in most metros if lifestyle inflation stays controlled." },
  school_counselor: { label: "School Counselor", baseSalary: 65000, annualGrowth: 0.027, volatility: 0.12, blurb: "A mission-driven career that needs a moderate-cost city to feel comfortable." },
  procurement: { label: "Procurement Specialist", baseSalary: 78000, annualGrowth: 0.03, volatility: 0.11, blurb: "A balanced operations role that pairs well with medium-cost regions." },
};

const cityData = {
  nyc: { label: "New York City", rent: 2450, transit: 150, health: 420, groceries: 540, utilities: 210, rentGrowth: 0.044, inflation: 0.03, taxModifier: 0.03, salaryMultiplier: 1.16 },
  chicago: { label: "Chicago", rent: 1680, transit: 130, health: 390, groceries: 460, utilities: 185, rentGrowth: 0.036, inflation: 0.028, taxModifier: 0.018, salaryMultiplier: 1 },
  austin: { label: "Austin", rent: 1780, transit: 120, health: 360, groceries: 430, utilities: 175, rentGrowth: 0.035, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 1.04 },
  seattle: { label: "Seattle", rent: 2120, transit: 145, health: 395, groceries: 510, utilities: 190, rentGrowth: 0.04, inflation: 0.029, taxModifier: 0.02, salaryMultiplier: 1.12 },
  atlanta: { label: "Atlanta", rent: 1580, transit: 115, health: 340, groceries: 410, utilities: 170, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.014, salaryMultiplier: 0.96 },
  denver: { label: "Denver", rent: 1830, transit: 125, health: 350, groceries: 440, utilities: 180, rentGrowth: 0.034, inflation: 0.028, taxModifier: 0.015, salaryMultiplier: 0.99 },
  losangeles: { label: "Los Angeles", rent: 2320, transit: 135, health: 405, groceries: 520, utilities: 195, rentGrowth: 0.041, inflation: 0.029, taxModifier: 0.026, salaryMultiplier: 1.11 },
  sanfrancisco: { label: "San Francisco", rent: 2920, transit: 165, health: 425, groceries: 590, utilities: 205, rentGrowth: 0.045, inflation: 0.03, taxModifier: 0.03, salaryMultiplier: 1.22 },
  sanjose: { label: "San Jose", rent: 2860, transit: 150, health: 415, groceries: 570, utilities: 200, rentGrowth: 0.044, inflation: 0.03, taxModifier: 0.028, salaryMultiplier: 1.2 },
  sandiego: { label: "San Diego", rent: 2380, transit: 125, health: 390, groceries: 515, utilities: 190, rentGrowth: 0.04, inflation: 0.029, taxModifier: 0.022, salaryMultiplier: 1.09 },
  sacramento: { label: "Sacramento", rent: 1940, transit: 120, health: 370, groceries: 470, utilities: 185, rentGrowth: 0.037, inflation: 0.028, taxModifier: 0.018, salaryMultiplier: 1.01 },
  phoenix: { label: "Phoenix", rent: 1710, transit: 95, health: 345, groceries: 420, utilities: 205, rentGrowth: 0.034, inflation: 0.027, taxModifier: 0.011, salaryMultiplier: 0.96 },
  lasvegas: { label: "Las Vegas", rent: 1630, transit: 90, health: 340, groceries: 415, utilities: 195, rentGrowth: 0.034, inflation: 0.027, taxModifier: 0.01, salaryMultiplier: 0.94 },
  portland: { label: "Portland", rent: 1810, transit: 120, health: 365, groceries: 455, utilities: 175, rentGrowth: 0.035, inflation: 0.028, taxModifier: 0.015, salaryMultiplier: 1.01 },
  saltlake: { label: "Salt Lake City", rent: 1690, transit: 105, health: 340, groceries: 420, utilities: 170, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 0.97 },
  albuquerque: { label: "Albuquerque", rent: 1420, transit: 85, health: 325, groceries: 390, utilities: 165, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.009, salaryMultiplier: 0.89 },
  dallas: { label: "Dallas", rent: 1660, transit: 105, health: 350, groceries: 420, utilities: 180, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.011, salaryMultiplier: 1 },
  houston: { label: "Houston", rent: 1590, transit: 95, health: 345, groceries: 415, utilities: 185, rentGrowth: 0.032, inflation: 0.027, taxModifier: 0.01, salaryMultiplier: 0.98 },
  sanantonio: { label: "San Antonio", rent: 1470, transit: 85, health: 335, groceries: 395, utilities: 175, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.009, salaryMultiplier: 0.92 },
  minneapolis: { label: "Minneapolis", rent: 1690, transit: 120, health: 360, groceries: 435, utilities: 190, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.014, salaryMultiplier: 0.99 },
  detroit: { label: "Detroit", rent: 1420, transit: 95, health: 335, groceries: 395, utilities: 175, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.011, salaryMultiplier: 0.9 },
  cleveland: { label: "Cleveland", rent: 1360, transit: 100, health: 330, groceries: 390, utilities: 170, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.88 },
  columbus: { label: "Columbus", rent: 1480, transit: 100, health: 335, groceries: 395, utilities: 172, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.9 },
  cincinnati: { label: "Cincinnati", rent: 1410, transit: 95, health: 332, groceries: 392, utilities: 170, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.89 },
  indianapolis: { label: "Indianapolis", rent: 1460, transit: 95, health: 335, groceries: 400, utilities: 172, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.9 },
  stlouis: { label: "St. Louis", rent: 1450, transit: 100, health: 338, groceries: 400, utilities: 172, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.9 },
  kansascity: { label: "Kansas City", rent: 1440, transit: 95, health: 334, groceries: 398, utilities: 172, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.89 },
  oklahomacity: { label: "Oklahoma City", rent: 1340, transit: 82, health: 325, groceries: 385, utilities: 168, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.008, salaryMultiplier: 0.86 },
  neworleans: { label: "New Orleans", rent: 1490, transit: 95, health: 338, groceries: 405, utilities: 180, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.011, salaryMultiplier: 0.9 },
  miami: { label: "Miami", rent: 2140, transit: 120, health: 375, groceries: 470, utilities: 190, rentGrowth: 0.039, inflation: 0.028, taxModifier: 0.018, salaryMultiplier: 1.02 },
  orlando: { label: "Orlando", rent: 1710, transit: 95, health: 350, groceries: 420, utilities: 180, rentGrowth: 0.034, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 0.95 },
  tampa: { label: "Tampa", rent: 1760, transit: 95, health: 350, groceries: 425, utilities: 182, rentGrowth: 0.034, inflation: 0.027, taxModifier: 0.013, salaryMultiplier: 0.95 },
  charlotte: { label: "Charlotte", rent: 1650, transit: 98, health: 345, groceries: 415, utilities: 175, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 0.96 },
  raleigh: { label: "Raleigh", rent: 1610, transit: 95, health: 342, groceries: 412, utilities: 173, rentGrowth: 0.032, inflation: 0.027, taxModifier: 0.011, salaryMultiplier: 0.97 },
  nashville: { label: "Nashville", rent: 1690, transit: 92, health: 345, groceries: 418, utilities: 176, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 0.96 },
  dc: { label: "Washington, DC", rent: 2380, transit: 160, health: 400, groceries: 520, utilities: 190, rentGrowth: 0.041, inflation: 0.029, taxModifier: 0.028, salaryMultiplier: 1.15 },
  boston: { label: "Boston", rent: 2290, transit: 155, health: 405, groceries: 530, utilities: 195, rentGrowth: 0.042, inflation: 0.029, taxModifier: 0.026, salaryMultiplier: 1.13 },
  philadelphia: { label: "Philadelphia", rent: 1770, transit: 140, health: 375, groceries: 455, utilities: 182, rentGrowth: 0.035, inflation: 0.028, taxModifier: 0.017, salaryMultiplier: 0.98 },
  pittsburgh: { label: "Pittsburgh", rent: 1490, transit: 110, health: 345, groceries: 405, utilities: 172, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.011, salaryMultiplier: 0.91 },
  richmond: { label: "Richmond", rent: 1550, transit: 95, health: 340, groceries: 408, utilities: 172, rentGrowth: 0.032, inflation: 0.026, taxModifier: 0.011, salaryMultiplier: 0.92 },
  omaha: { label: "Omaha", rent: 1380, transit: 82, health: 328, groceries: 388, utilities: 168, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.009, salaryMultiplier: 0.87 },
  national: { label: "U.S. Average", rent: 1640, transit: 100, health: 350, groceries: 425, utilities: 178, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 0.97 },
  baltimore: { label: "Baltimore", rent: 1710, transit: 125, health: 365, groceries: 438, utilities: 178, rentGrowth: 0.034, inflation: 0.027, taxModifier: 0.015, salaryMultiplier: 0.97 },
  buffalo: { label: "Buffalo", rent: 1390, transit: 105, health: 336, groceries: 398, utilities: 171, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.89 },
  providence: { label: "Providence", rent: 1760, transit: 118, health: 368, groceries: 448, utilities: 180, rentGrowth: 0.034, inflation: 0.027, taxModifier: 0.014, salaryMultiplier: 0.96 },
  hartford: { label: "Hartford", rent: 1740, transit: 112, health: 366, groceries: 442, utilities: 179, rentGrowth: 0.034, inflation: 0.027, taxModifier: 0.014, salaryMultiplier: 0.96 },
  albany: { label: "Albany", rent: 1540, transit: 100, health: 345, groceries: 410, utilities: 173, rentGrowth: 0.032, inflation: 0.026, taxModifier: 0.011, salaryMultiplier: 0.92 },
  rochester: { label: "Rochester", rent: 1450, transit: 102, health: 340, groceries: 402, utilities: 171, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.9 },
  milwaukee: { label: "Milwaukee", rent: 1490, transit: 108, health: 342, groceries: 404, utilities: 173, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.011, salaryMultiplier: 0.91 },
  madison: { label: "Madison", rent: 1590, transit: 108, health: 348, groceries: 412, utilities: 176, rentGrowth: 0.032, inflation: 0.026, taxModifier: 0.012, salaryMultiplier: 0.94 },
  desmoines: { label: "Des Moines", rent: 1360, transit: 82, health: 328, groceries: 386, utilities: 168, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.009, salaryMultiplier: 0.87 },
  wichita: { label: "Wichita", rent: 1260, transit: 78, health: 320, groceries: 378, utilities: 166, rentGrowth: 0.029, inflation: 0.025, taxModifier: 0.008, salaryMultiplier: 0.84 },
  littlerock: { label: "Little Rock", rent: 1320, transit: 80, health: 323, groceries: 382, utilities: 167, rentGrowth: 0.029, inflation: 0.025, taxModifier: 0.008, salaryMultiplier: 0.85 },
  louisville: { label: "Louisville", rent: 1430, transit: 92, health: 334, groceries: 396, utilities: 170, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.89 },
  memphis: { label: "Memphis", rent: 1410, transit: 88, health: 332, groceries: 394, utilities: 171, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.009, salaryMultiplier: 0.88 },
  birmingham: { label: "Birmingham", rent: 1370, transit: 84, health: 330, groceries: 390, utilities: 170, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.009, salaryMultiplier: 0.87 },
  jacksonville: { label: "Jacksonville", rent: 1690, transit: 92, health: 345, groceries: 418, utilities: 181, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 0.95 },
  virginiabeach: { label: "Virginia Beach", rent: 1620, transit: 92, health: 343, groceries: 410, utilities: 175, rentGrowth: 0.032, inflation: 0.027, taxModifier: 0.011, salaryMultiplier: 0.94 },
  boise: { label: "Boise", rent: 1600, transit: 86, health: 340, groceries: 410, utilities: 172, rentGrowth: 0.032, inflation: 0.027, taxModifier: 0.011, salaryMultiplier: 0.94 },
  spokane: { label: "Spokane", rent: 1480, transit: 90, health: 336, groceries: 398, utilities: 170, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.9 },
  fresno: { label: "Fresno", rent: 1660, transit: 95, health: 350, groceries: 430, utilities: 182, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.013, salaryMultiplier: 0.95 },
  bakersfield: { label: "Bakersfield", rent: 1540, transit: 92, health: 344, groceries: 418, utilities: 180, rentGrowth: 0.032, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 0.92 },
  riverside: { label: "Riverside", rent: 2140, transit: 108, health: 376, groceries: 468, utilities: 188, rentGrowth: 0.038, inflation: 0.028, taxModifier: 0.018, salaryMultiplier: 1.01 },
  stockton: { label: "Stockton", rent: 1880, transit: 96, health: 358, groceries: 444, utilities: 184, rentGrowth: 0.035, inflation: 0.027, taxModifier: 0.015, salaryMultiplier: 0.97 },
  reno: { label: "Reno", rent: 1760, transit: 88, health: 348, groceries: 426, utilities: 176, rentGrowth: 0.034, inflation: 0.027, taxModifier: 0.013, salaryMultiplier: 0.96 },
  coloradosprings: { label: "Colorado Springs", rent: 1710, transit: 90, health: 345, groceries: 420, utilities: 176, rentGrowth: 0.033, inflation: 0.027, taxModifier: 0.012, salaryMultiplier: 0.96 },
  tucson: { label: "Tucson", rent: 1490, transit: 86, health: 336, groceries: 402, utilities: 172, rentGrowth: 0.031, inflation: 0.026, taxModifier: 0.01, salaryMultiplier: 0.9 },
  elpaso: { label: "El Paso", rent: 1330, transit: 80, health: 326, groceries: 386, utilities: 170, rentGrowth: 0.03, inflation: 0.026, taxModifier: 0.009, salaryMultiplier: 0.86 },
  anchorage: { label: "Anchorage", rent: 1890, transit: 88, health: 372, groceries: 500, utilities: 225, rentGrowth: 0.034, inflation: 0.028, taxModifier: 0.014, salaryMultiplier: 1.03 },
  honolulu: { label: "Honolulu", rent: 2240, transit: 118, health: 384, groceries: 560, utilities: 205, rentGrowth: 0.039, inflation: 0.029, taxModifier: 0.02, salaryMultiplier: 1.08 },
};

const partTimeData = {
  uber: { label: "Uber Driver", hourly: 26 },
  barista: { label: "Barista", hourly: 18 },
  designer: { label: "Freelance Designer", hourly: 34 },
  tutor: { label: "Tutor", hourly: 30 },
  retail: { label: "Retail Associate", hourly: 17 },
};

const gigData = {
  delivery: { label: "Delivery Batches", monthly: 320 },
  freelance: { label: "Freelance Project", monthly: 760 },
  babysitting: { label: "Babysitting Weekend", monthly: 420 },
  resale: { label: "Reselling / Flips", monthly: 280 },
  petcare: { label: "Pet Care Visits", monthly: 340 },
};

const eventPresets = {
  travel: {
    label: "Travel",
    duration: 1,
    incomeDelta: 0,
    emergencyEligible: false,
    note: "Travel can be tuned using airfare, hotel, train or local transit, and activity costs.",
    breakdowns: [
      { key: "hotel", label: "Hotel / lodging", amount: 1200 },
      { key: "flight", label: "Airfare", amount: 850 },
      { key: "train", label: "Train / local transit", amount: 140 },
      { key: "activities", label: "Food & activities", amount: 700 },
    ],
  },
  wedding: {
    label: "Wedding",
    duration: 2,
    incomeDelta: 0,
    emergencyEligible: false,
    note: "Wedding costs are split into venue, banquet, attire, and photography so the user can tune them directly.",
    breakdowns: [
      { key: "venue", label: "Venue", amount: 11000 },
      { key: "banquet", label: "Banquet / dining", amount: 6500 },
      { key: "attire", label: "Dress / suit", amount: 2200 },
      { key: "photo", label: "Photography", amount: 2400 },
    ],
  },
  move: {
    label: "Relocation",
    duration: 1,
    incomeDelta: -10,
    emergencyEligible: false,
    note: "Relocation combines deposit, movers, furniture, and utility setup fees.",
    breakdowns: [
      { key: "deposit", label: "Deposit", amount: 1800 },
      { key: "movers", label: "Movers", amount: 900 },
      { key: "furniture", label: "Furniture / setup", amount: 1200 },
      { key: "fees", label: "Utilities & admin fees", amount: 300 },
    ],
  },
  family: {
    label: "Family Responsibility",
    duration: 12,
    incomeDelta: 0,
    emergencyEligible: true,
    note: "Family support models recurring childcare, eldercare, supplies, and transport.",
    breakdowns: [
      { key: "care", label: "Care services", amount: 4800 },
      { key: "supplies", label: "Household supplies", amount: 1200 },
      { key: "transport", label: "Extra transport", amount: 720 },
      { key: "support", label: "Outside support", amount: 1080 },
    ],
  },
  custom: {
    label: "Custom Event",
    duration: 2,
    incomeDelta: -5,
    emergencyEligible: false,
    note: "Custom event lets the user model any other life decision with four editable categories.",
    breakdowns: [
      { key: "categoryA", label: "Category A", amount: 1500 },
      { key: "categoryB", label: "Category B", amount: 800 },
      { key: "categoryC", label: "Category C", amount: 600 },
      { key: "categoryD", label: "Category D", amount: 400 },
    ],
  },
};

const diseaseData = {
  none: { label: "No illness forecast", duration: 0, incomeDelta: 0, note: "No medical scenario is being added to the forecast right now.", breakdowns: [] },
  cold: {
    label: "Cold / Flu",
    duration: 1,
    incomeDelta: -12,
    note: "A short illness with limited direct cost but small productivity and medicine expenses.",
    breakdowns: [
      { label: "Clinic visit", amount: 160 },
      { label: "Medication", amount: 95 },
      { label: "Testing", amount: 70 },
      { label: "Recovery supplies", amount: 55 },
    ],
  },
  fracture: {
    label: "Bone Fracture",
    duration: 4,
    incomeDelta: -35,
    note: "A medium-term shock combining imaging, treatment, rehab, and mobility-related costs.",
    breakdowns: [
      { label: "Imaging", amount: 900 },
      { label: "Surgery / cast", amount: 4800 },
      { label: "Physical therapy", amount: 1800 },
      { label: "Medication", amount: 260 },
    ],
  },
  appendicitis: {
    label: "Appendicitis",
    duration: 3,
    incomeDelta: -55,
    note: "Emergency care plus surgery creates a sharp short-term cashflow hit.",
    breakdowns: [
      { label: "Emergency room", amount: 2400 },
      { label: "Surgery", amount: 13500 },
      { label: "Anesthesia", amount: 2600 },
      { label: "Follow-up visits", amount: 650 },
    ],
  },
  depression: {
    label: "Depression Treatment",
    duration: 6,
    incomeDelta: -22,
    note: "Longer treatment path with therapy, medication, and productivity loss over several months.",
    breakdowns: [
      { label: "Psychiatry intake", amount: 1400 },
      { label: "Therapy sessions", amount: 1800 },
      { label: "Medication", amount: 480 },
      { label: "Support resources", amount: 420 },
    ],
  },
  cancer: {
    label: "Cancer Treatment",
    duration: 8,
    incomeDelta: -60,
    note: "This is one of the highest-stress scenarios because treatment is prolonged and income loss can be severe.",
    breakdowns: [
      { label: "Diagnostics", amount: 4200 },
      { label: "Treatment cycle", amount: 32000 },
      { label: "Medication", amount: 5600 },
      { label: "Supportive care", amount: 3800 },
    ],
  },
};

const sectionTitles = {
  dashboard: "Financial Stress Room",
  income: "Income",
  expenses: "Expenses",
  events: "Events",
  forecast: "Forecast",
  stress: "Stress Index",
};

const page = document.body.dataset.page || "dashboard";
const $ = (id) => document.getElementById(id);

const qualityOfLifePresets = [
  {
    label: "Frugal",
    cat: "calm cat",
    score: 34,
    description: "A lean setup focused on lower rent, basic groceries, and minimal transport or lifestyle extras.",
    multipliers: { rent: 0.82, utilities: 0.88, groceries: 0.84, transport: 0.78, healthcare: 0.94, discretionary: 0 },
  },
  {
    label: "Average",
    cat: "huh cat",
    score: 56,
    description: "A balanced baseline with typical rent, regular grocery spending, and everyday city transport costs.",
    multipliers: { rent: 1, utilities: 1, groceries: 1, transport: 1, healthcare: 1, discretionary: 0 },
  },
  {
    label: "Good",
    cat: "smug cat",
    score: 74,
    description: "More comfort and convenience, with stronger spending on housing, food quality, and smoother commuting.",
    multipliers: { rent: 1.14, utilities: 1.08, groceries: 1.14, transport: 1.1, healthcare: 1.04, discretionary: 0 },
  },
  {
    label: "Luxurious",
    cat: "fancy cat",
    score: 90,
    description: "A premium lifestyle with higher housing expectations, richer daily spending, and more convenience across the board.",
    multipliers: { rent: 1.32, utilities: 1.16, groceries: 1.28, transport: 1.22, healthcare: 1.08, discretionary: 0 },
  },
];

function createId() {
  if (globalThis.crypto && typeof globalThis.crypto.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function cityExpenseDefaults(cityKey) {
  const city = cityData[cityKey];
  return {
    rent: city.rent,
    utilities: city.utilities,
    groceries: city.groceries,
    transport: city.transit,
    healthcare: city.health,
    discretionary: 0,
  };
}

function getQualityOfLifeTier(value) {
  const numeric = Number(value || 0);
  if (numeric > 10) {
    if (numeric < 91) return 0;
    if (numeric < 108) return 1;
    if (numeric < 123) return 2;
    return 3;
  }
  return clamp(Math.round(numeric), 0, qualityOfLifePresets.length - 1);
}

function getQualityOfLifePreset(value) {
  return qualityOfLifePresets[getQualityOfLifeTier(value)];
}

function expensePresetFromLifestyle(cityKey, lifestyle) {
  const base = cityExpenseDefaults(cityKey);
  const preset = getQualityOfLifePreset(lifestyle);

  return Object.fromEntries(
    Object.entries(base).map(([key, value]) => [key, Math.max(0, Math.round(value * preset.multipliers[key]))]),
  );
}

function presetBreakdownObject(type) {
  return Object.fromEntries(eventPresets[type].breakdowns.map((item) => [item.key, item.amount]));
}

function buildEvent(type, overrides = {}) {
  const preset = eventPresets[type];
  const breakdowns = overrides.breakdowns ? { ...overrides.breakdowns } : presetBreakdownObject(type);
  const duration = overrides.duration ?? preset.duration;
  const totalCost = Object.values(breakdowns).reduce((sum, value) => sum + Number(value || 0), 0);
  return {
    id: overrides.id ?? createId(),
    type,
    label: overrides.label ?? preset.label,
    month: overrides.month ?? 8,
    duration,
    incomeDelta: overrides.incomeDelta ?? preset.incomeDelta,
    emergencyEligible: overrides.emergencyEligible ?? preset.emergencyEligible,
    emergencyUseRate: overrides.emergencyUseRate ?? (overrides.emergencyEligible ?? preset.emergencyEligible ? 50 : 0),
    note: overrides.note ?? preset.note,
    breakdowns,
    totalCost,
    monthlyCost: totalCost / Math.max(duration, 1),
  };
}

function defaultState() {
  return {
    career: "teacher",
    city: "chicago",
    salary: careerData.teacher.baseSalary,
    salaryGrowthRate: 3,
    targetIncomeGrowthRate: 3,
    k401ContributionRate: 6,
    k401Adjustments: [],
    fullTimeHours: 40,
    partTimeJobs: [{ id: createId(), role: "uber", hours: 8 }],
    targetIncome: 70000,
    studentLoan: 28000,
    emergencyRate: 15,
    lifestyle: 1,
    years: 12,
    selectedMonth: 1,
    buyCar: false,
    carPrice: 28000,
    buyHouse: false,
    homePrice: 420000,
    homeDownPaymentPct: 12,
    expenses: expensePresetFromLifestyle("chicago", 1),
    eventDraft: {
      type: "travel",
      month: 8,
      duration: 1,
      incomeDelta: 0,
      emergencyEligible: false,
      emergencyUseRate: 50,
      breakdowns: presetBreakdownObject("travel"),
    },
    events: [buildEvent("travel", { month: 8 }), buildEvent("family", { month: 26 })],
    forecastDraft: {
      disease: "cold",
      duration: 2,
      insuranceCoverage: 70,
      paidLeave: 40,
      useEmergencyStash: false,
      emergencyUseRate: 50,
    },
    forecastDiseases: [],
  };
}

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!raw) return defaultState();
    const base = defaultState();
    const state = {
      ...base,
      ...raw,
      expenses: { ...base.expenses, ...(raw.expenses || {}) },
      eventDraft: { ...base.eventDraft, ...(raw.eventDraft || {}) },
      forecastDraft: { ...base.forecastDraft, ...(raw.forecastDraft || {}) },
    };
    state.salaryGrowthRate = clamp(Number(raw.salaryGrowthRate ?? base.salaryGrowthRate) || base.salaryGrowthRate, 0, 12);
    state.targetIncomeGrowthRate = clamp(Number(raw.targetIncomeGrowthRate ?? base.targetIncomeGrowthRate) || base.targetIncomeGrowthRate, 0, 12);
    state.k401ContributionRate = clamp(Number(raw.k401ContributionRate ?? base.k401ContributionRate) || base.k401ContributionRate, 0, 25);
    state.k401Adjustments = Array.isArray(raw.k401Adjustments)
      ? raw.k401Adjustments
        .map((item) => ({
          id: item.id || createId(),
          age: clamp(Number(item.age || 0), 18, PLAN_401K_RULES.retirementAge),
          rate: clamp(Number(item.rate || 0), 0, 25),
        }))
        .filter((item) => item.age >= 18)
        .sort((left, right) => left.age - right.age)
      : base.k401Adjustments;
    state.buyCar = Boolean(raw.buyCar ?? base.buyCar);
    state.carPrice = Math.max(5000, Number(raw.carPrice ?? base.carPrice) || base.carPrice);
    state.buyHouse = Boolean(raw.buyHouse ?? base.buyHouse);
    state.homePrice = Math.max(50000, Number(raw.homePrice ?? base.homePrice) || base.homePrice);
    state.homeDownPaymentPct = clamp(Number(raw.homeDownPaymentPct ?? base.homeDownPaymentPct) || base.homeDownPaymentPct, 0, 80);
    state.lifestyle = getQualityOfLifeTier(raw.lifestyle ?? base.lifestyle);
    state.expenses = { ...expensePresetFromLifestyle(raw.city || base.city, state.lifestyle), ...(raw.expenses || {}) };
    state.partTimeJobs = Array.isArray(raw.partTimeJobs) && raw.partTimeJobs.length
      ? raw.partTimeJobs.map((job) => ({
          id: job.id || createId(),
          role: job.role in partTimeData ? job.role : "uber",
          hours: Number(job.hours || 0),
        }))
      : base.partTimeJobs;
    state.events = Array.isArray(raw.events)
      ? raw.events.map((event) =>
          buildEvent(event.type in eventPresets ? event.type : "custom", {
            ...event,
            emergencyUseRate: Number(event.emergencyUseRate ?? (event.emergencyEligible ? 50 : 0)),
            breakdowns: event.breakdowns || presetBreakdownObject(event.type in eventPresets ? event.type : "custom"),
          }),
        )
      : base.events;
    if (Array.isArray(raw.forecastDiseases)) {
      state.forecastDiseases = raw.forecastDiseases.map((item) => ({
        id: item.id || createId(),
        disease: item.disease in diseaseData ? item.disease : "cold",
        duration: Number(item.duration || diseaseData[item.disease]?.duration || 1),
        insuranceCoverage: Number(item.insuranceCoverage ?? 70),
        paidLeave: Number(item.paidLeave ?? 40),
        useEmergencyStash: Boolean(item.useEmergencyStash),
        emergencyUseRate: Number(item.emergencyUseRate ?? (item.useEmergencyStash ? 50 : 0)),
      }));
    } else if (raw.forecast && raw.forecast.disease && raw.forecast.disease !== "none") {
      state.forecastDiseases = [{
        id: createId(),
        disease: raw.forecast.disease in diseaseData ? raw.forecast.disease : "cold",
        duration: Number(raw.forecast.duration || diseaseData[raw.forecast.disease]?.duration || 1),
        insuranceCoverage: Number(raw.forecast.insuranceCoverage ?? 70),
        paidLeave: Number(raw.forecast.paidLeave ?? 40),
        useEmergencyStash: Boolean(raw.forecast.useEmergencyStash),
        emergencyUseRate: Number(raw.forecast.emergencyUseRate ?? (raw.forecast.useEmergencyStash ? 50 : 0)),
      }];
    } else {
      state.forecastDiseases = base.forecastDiseases;
    }
    return state;
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const state = loadState();
function loadDashboardUiStage() {
  if (page !== "dashboard") return "stress";
  try {
    const saved = localStorage.getItem(UI_STAGE_KEY);
    if (saved === "profile" || saved === "basics" || saved === "reality" || saved === "stress") return saved;
    if (saved === "onboarding") return "profile";
    if (saved === "dashboard") return "stress";
    return "profile";
  } catch {
    return "profile";
  }
}

function defaultUserProfile() {
  return {
    name: "",
    age: 22,
    education: "college",
  };
}

function loadUserProfile() {
  try {
    const raw = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
    if (!raw) return defaultUserProfile();
    const base = defaultUserProfile();
    return {
      name: typeof raw.name === "string" ? raw.name.slice(0, 32) : base.name,
      age: clamp(Number(raw.age) || base.age, 16, 40),
      education: typeof raw.education === "string" ? raw.education : base.education,
    };
  } catch {
    return defaultUserProfile();
  }
}

function saveUserProfile() {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(userProfile));
  } catch {
    // Ignore storage failures and keep the app usable.
  }
}

const userProfile = loadUserProfile();
let dashboardUiStage = loadDashboardUiStage();
let emojiParticleTimer = 0;
let lastSimulation = null;
let lastRetirementProjection = [];
let reportAssistantFocus = "all";
let reportAssistantNote = "";
let reportAssistantState = "prompt";
let reportGenerationTimer = 0;
let reportParticleTimer = 0;
let catSpeechDebounceTimer = 0;
let catSpeechHideTimer = 0;
let pendingCatSpeechMeta = null;
const REPORT_PARTICLE_IMAGE = "./src/assets/avatar-cat-orange-v2.webp";
const chartRegistry = new Map();

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function compactCurrency(value) {
  const amount = Number(value || 0);
  const sign = amount < 0 ? "-" : "";
  const absolute = Math.abs(amount);
  if (absolute >= 1000000) {
    const scaled = (absolute / 1000000).toFixed(absolute >= 10000000 ? 0 : 1).replace(/\.0$/, "");
    return `${sign}$${scaled}M`;
  }
  if (absolute >= 1000) {
    const scaled = (absolute / 1000).toFixed(absolute >= 10000 ? 0 : 1).replace(/\.0$/, "");
    return `${sign}$${scaled}k`;
  }
  return currency(amount);
}

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function percent(value) {
  return `${Math.round(value || 0)}%`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function monthLabel(monthIndex) {
  const year = Math.floor((monthIndex - 1) / 12) + 1;
  const month = ((monthIndex - 1) % 12) + 1;
  return `Year ${year} / Month ${month}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function k401InfoIconHTML() {
  return '<a class="info-icon" href="https://www.irs.gov/retirement-plans/plan-participant-employee/401k-resource-guide-plan-participants-401k-plan-overview" target="_blank" rel="noreferrer noopener" aria-label="Learn about 401k">i</a>';
}

function decorate401kMentions(text) {
  return escapeHtml(String(text || ""))
    .replaceAll("401k", `401k ${k401InfoIconHTML()}`);
}

function destroyChart(id) {
  const chart = chartRegistry.get(id);
  if (chart) {
    chart.destroy();
    chartRegistry.delete(id);
  }
}

function ensureChartCanvas(id, points, minWidth, pxPerPoint, height) {
  const canvas = $(id);
  if (!canvas) return null;
  const width = Math.max(minWidth, points * pxPerPoint);
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  return canvas;
}

function lifestyleLabel(value) {
  return getQualityOfLifePreset(value).label;
}

function calculateAmortizedPayment(principal, annualRate, months) {
  if (principal <= 0 || months <= 0) return 0;
  const monthlyRate = annualRate / 12;
  if (monthlyRate <= 0) return principal / months;
  return (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -months);
}

function calculateStudentLoanPayment(balance) {
  return calculateAmortizedPayment(balance, 0.05, 120);
}

function calculateCarPayment(currentState) {
  if (!currentState.buyCar) return 0;
  const principal = Math.max(0, currentState.carPrice * (1 - CAR_PURCHASE_RULES.defaultDownPaymentRate));
  return calculateAmortizedPayment(principal, CAR_PURCHASE_RULES.annualRate, CAR_PURCHASE_RULES.termMonths);
}

function calculateMortgagePayment(currentState) {
  if (!currentState.buyHouse) return 0;
  const principal = Math.max(0, currentState.homePrice * (1 - currentState.homeDownPaymentPct / 100));
  return calculateAmortizedPayment(principal, HOME_PURCHASE_RULES.annualRate, HOME_PURCHASE_RULES.termMonths);
}

function futureValueOfSeries(payment, monthlyRate, months) {
  if (payment <= 0 || months <= 0) return 0;
  if (monthlyRate <= 0) return payment * months;
  return payment * (((1 + monthlyRate) ** months - 1) / monthlyRate);
}

function getSorted401kAdjustments(currentState) {
  return [...(currentState.k401Adjustments || [])]
    .map((item) => ({
      id: item.id || createId(),
      age: clamp(Number(item.age || 0), 18, PLAN_401K_RULES.retirementAge),
      rate: clamp(Number(item.rate || 0), 0, 25),
    }))
    .sort((left, right) => left.age - right.age);
}

function resolve401kRateForAge(currentState, age) {
  let rate = clamp(Number(currentState.k401ContributionRate || 0), 0, 25);
  getSorted401kAdjustments(currentState).forEach((item) => {
    if (item.age <= age) rate = item.rate;
  });
  return rate;
}

function formatPercentValue(value, digits = 1) {
  return `${Number(value || 0).toFixed(digits)}%`;
}

function get401kSummary(currentState) {
  const contributionRate = resolve401kRateForAge(currentState, userProfile.age) / 100;
  const annualGross = currentState.salary * (currentState.fullTimeHours / 40);
  const annualEmployeeContribution = Math.min(annualGross * contributionRate, PLAN_401K_RULES.annualLimit);
  const annualEmployerMatch = annualGross * Math.min(contributionRate, PLAN_401K_RULES.employerMatchCapRate) * PLAN_401K_RULES.employerMatchRate;
  const monthlyEmployeeContribution = annualEmployeeContribution / 12;
  const monthlyEmployerMatch = annualEmployerMatch / 12;
  const monthlyTotalDeposit = monthlyEmployeeContribution + monthlyEmployerMatch;
  const monthsUntilRetirement = Math.max(0, (PLAN_401K_RULES.retirementAge - userProfile.age) * 12);
  const monthlyReturn = PLAN_401K_RULES.annualReturn / 12;
  const projectedValueAt65 = futureValueOfSeries(monthlyTotalDeposit, monthlyReturn, monthsUntilRetirement);
  return {
    contributionRatePct: contributionRate * 100,
    annualEmployeeContribution,
    annualEmployerMatch,
    monthlyEmployeeContribution,
    monthlyEmployerMatch,
    monthlyTotalDeposit,
    projectedValueAt65,
    monthsUntilRetirement,
  };
}

function getRetirementIncomeTargetRatio(annualIncome) {
  if (annualIncome < 50000) return 0.8;
  if (annualIncome < 80000) return 0.75;
  if (annualIncome < 120000) return 0.7;
  return 0.6;
}

function getSocialSecurityReplacementRate(annualIncome) {
  if (annualIncome < 50000) return 0.45;
  if (annualIncome < 80000) return 0.4;
  if (annualIncome < 120000) return 0.35;
  return 0.3;
}

function getActiveCarPaymentForMonth(currentState, month) {
  if (!currentState.buyCar) return 0;
  return month <= CAR_PURCHASE_RULES.termMonths ? calculateCarPayment(currentState) : 0;
}

function getActiveMortgagePaymentForMonth(currentState, month) {
  if (!currentState.buyHouse) return 0;
  return month <= HOME_PURCHASE_RULES.termMonths ? calculateMortgagePayment(currentState) : 0;
}

function yearlyVibeLabel(stressScore) {
  if (stressScore >= 82) return "Cooked";
  if (stressScore >= 68) return "Barely Surviving";
  if (stressScore >= 50) return "Walking a Tightrope";
  if (stressScore >= 32) return "Holding It Together";
  return "Bulletproof";
}

function effectiveTaxRate(annualSalary, cityModifier) {
  return clamp(0.18 + annualSalary / 230000 + cityModifier, 0.2, 0.34);
}

function getIncomeProfile(currentState) {
  const city = cityData[currentState.city];
  const fullTimeAnnual = currentState.salary * (currentState.fullTimeHours / 40);
  const partTimeJobs = currentState.partTimeJobs.map((job) => ({
    ...job,
    label: partTimeData[job.role].label,
    hourly: partTimeData[job.role].hourly,
    annual: partTimeData[job.role].hourly * job.hours * 52,
  }));
  const partTimeAnnual = partTimeJobs.reduce((sum, job) => sum + job.annual, 0);
  const totalAnnualGross = fullTimeAnnual + partTimeAnnual;
  const cityAverage = careerData[currentState.career].baseSalary * city.salaryMultiplier * (currentState.fullTimeHours / 40);
  const gapToCityAverage = fullTimeAnnual - cityAverage;
  const gapToTarget = currentState.targetIncome - totalAnnualGross;
  const averageHourly = partTimeJobs.length
    ? partTimeJobs.reduce((sum, job) => sum + job.hourly, 0) / partTimeJobs.length
    : partTimeData.retail.hourly;
  const partTimeHoursNeeded = gapToTarget > 0 ? gapToTarget / Math.max(averageHourly * 52, 1) : 0;
  return {
    fullTimeAnnual,
    partTimeJobs,
    partTimeAnnual,
    totalAnnualGross,
    cityAverage,
    gapToCityAverage,
    gapToTarget,
    partTimeHoursNeeded,
  };
}

function getForecastScenarios(currentState) {
  const totalMonths = currentState.years * 12;
  const baselineHealthcare = Math.max(cityExpenseDefaults(currentState.city).healthcare, 1);
  const healthcarePreparedness = clamp(currentState.expenses.healthcare / baselineHealthcare, 0.65, 1.55);
  const coverageBoost = clamp((healthcarePreparedness - 1) * 0.22, -0.08, 0.18);
  return currentState.forecastDiseases.map((item, index) => {
    const disease = diseaseData[item.disease] || diseaseData.cold;
    const effectiveCoverage = clamp(item.insuranceCoverage / 100 + coverageBoost, 0, 0.97);
    const insuranceFactor = 1 - effectiveCoverage;
    const paidLeaveFactor = 1 - item.paidLeave / 100;
    const duration = Math.max(1, Number(item.duration || disease.duration));
    const breakdowns = disease.breakdowns.map((entry) => ({
      label: entry.label,
      preInsurance: entry.amount,
      outOfPocket: entry.amount * insuranceFactor,
    }));
    const totalCost = breakdowns.reduce((sum, entry) => sum + entry.outOfPocket, 0);
    const startMonth = clamp(6 + index * Math.max(6, duration + 3), 1, Math.max(1, totalMonths - duration + 1));
    return {
      id: item.id,
      disease: item.disease,
      label: disease.label,
      note: disease.note,
      duration,
      incomeDelta: disease.incomeDelta * paidLeaveFactor,
      totalCost,
      monthlyCost: totalCost / duration,
      month: startMonth,
      insuranceCoverage: item.insuranceCoverage,
      effectiveCoveragePct: effectiveCoverage * 100,
      healthcarePreparedness,
      paidLeave: item.paidLeave,
      emergencyEligible: item.useEmergencyStash,
      emergencyUseRate: Number(item.emergencyUseRate ?? 0),
      breakdowns,
    };
  });
}

function getForecastSummary(currentState) {
  const scenarios = getForecastScenarios(currentState);
  if (!scenarios.length) {
    return {
      enabled: false,
      label: diseaseData.none.label,
      note: diseaseData.none.note,
      duration: 0,
      incomeDelta: 0,
      totalCost: 0,
      monthlyCost: 0,
      breakdowns: [],
      scenarios,
    };
  }
  const totalCost = scenarios.reduce((sum, scenario) => sum + scenario.totalCost, 0);
  const totalDuration = scenarios.reduce((sum, scenario) => sum + scenario.duration, 0);
  const peakIncomeLoss = scenarios.reduce((max, scenario) => Math.max(max, Math.abs(scenario.incomeDelta)), 0);
  return {
    enabled: true,
    label: `${scenarios.length} disease scenario${scenarios.length > 1 ? "s" : ""}`,
    note: "Disease scenarios are auto-distributed across the simulation horizon so you can compare their combined long-term impact.",
    duration: totalDuration,
    incomeDelta: -peakIncomeLoss,
    totalCost,
    monthlyCost: totalCost / Math.max(totalDuration, 1),
    breakdowns: [],
    scenarios,
  };
}

function getAllEvents(currentState) {
  const forecast = getForecastScenarios(currentState);
  const items = [...currentState.events];
  forecast.forEach((scenario) => {
    items.push({
      id: scenario.id,
      type: "forecast",
      label: scenario.label,
      month: scenario.month,
      duration: scenario.duration,
      incomeDelta: scenario.incomeDelta,
      emergencyEligible: scenario.emergencyEligible,
      emergencyUseRate: scenario.emergencyUseRate,
      note: scenario.note,
      breakdowns: Object.fromEntries(scenario.breakdowns.map((entry, index) => [`item${index}`, entry.outOfPocket])),
      totalCost: scenario.totalCost,
      monthlyCost: scenario.monthlyCost,
    });
  });
  return items;
}

function getActiveEvents(events, month) {
  return events.filter((event) => month >= event.month && month < event.month + event.duration);
}

function estimateMinimumIncome(currentState, city) {
  const forecast = getForecastSummary(currentState);
  const profile = getIncomeProfile(currentState);
  const k401Summary = get401kSummary(currentState);
  const housePayment = calculateMortgagePayment(currentState);
  const carPayment = calculateCarPayment(currentState);
  const baseMonthlyCosts =
    currentState.expenses.rent +
    currentState.expenses.utilities +
    currentState.expenses.transport +
    currentState.expenses.healthcare +
    currentState.expenses.groceries +
    k401Summary.monthlyEmployeeContribution +
    calculateStudentLoanPayment(currentState.studentLoan) +
    housePayment +
    carPayment;
  const eventAverage = currentState.events.reduce((sum, event) => sum + event.totalCost, 0) / Math.max(currentState.years * 12, 1);
  const emergencyNeed = baseMonthlyCosts * (currentState.emergencyRate / 100);
  const forecastLoad = forecast.enabled ? forecast.monthlyCost : 0;
  const requiredNetMonthly = (baseMonthlyCosts + emergencyNeed + eventAverage + forecastLoad) * (1 + city.inflation * 1.4);
  const taxRate = effectiveTaxRate(Math.max(profile.totalAnnualGross, currentState.salary), city.taxModifier);
  const floor = (requiredNetMonthly * 12) / (1 - taxRate);
  return { floor, comfort: floor * 1.15 };
}

function simulate(currentState) {
  const career = careerData[currentState.career];
  const city = cityData[currentState.city];
  const profile = getIncomeProfile(currentState);
  const events = getAllEvents(currentState);
  const scenarioMonths = currentState.years * 12;
  const projectionMonths = Math.max(scenarioMonths, Math.max(12, (PLAN_401K_RULES.projectionAgeCap - userProfile.age + 1) * 12));
  const records = [];
  const projectionYears = [];
  let balance = 2500;
  let emergencyFund = 0;
  let retirementBalance = 0;
  let loanBalance = currentState.studentLoan;
  let negativeMonths = 0;
  let debtStressMonths = 0;
  let totalHousingRatio = 0;
  let totalEventLoad = 0;
  let total401kContribution = 0;
  let total401kEmployerMatch = 0;
  const qualityPreset = getQualityOfLifePreset(currentState.lifestyle);
  let annual401kContribution = 0;
  let annual401kEmployerMatch = 0;
  let annual401kWithdrawal = 0;
  let annualSocialSecurity = 0;
  let annualIncome = 0;
  let annualExpenses = 0;
  let annualStressTotal = 0;
  let annualStressCount = 0;
  let annualRateApplied = resolve401kRateForAge(currentState, userProfile.age);
  let annualBankrupt = false;
  let annualWorstLiquidity = balance + emergencyFund;
  let annual401kPaused = false;

  for (let month = 1; month <= projectionMonths; month += 1) {
    const yearIndex = Math.floor((month - 1) / 12);
    const age = userProfile.age + yearIndex;
    const retired = age >= PLAN_401K_RULES.retirementAge;
    const withinScenario = month <= scenarioMonths;
    const monthOfYear = ((month - 1) % 12) + 1;
    if (monthOfYear === 1) {
      annual401kContribution = 0;
      annual401kEmployerMatch = 0;
      annual401kWithdrawal = 0;
      annualSocialSecurity = 0;
      annualIncome = 0;
      annualExpenses = 0;
      annualStressTotal = 0;
      annualStressCount = 0;
      annualRateApplied = resolve401kRateForAge(currentState, age);
      annualBankrupt = false;
      annualWorstLiquidity = balance + emergencyFund;
      annual401kPaused = false;
    }

    const activeEvents = withinScenario ? getActiveEvents(events, month) : [];
    const incomeDelta = activeEvents.reduce((sum, event) => sum + event.incomeDelta / 100, 0);
    const incomeMultiplier = clamp(1 + incomeDelta, 0, 1.5);
    const inflationFactor = (1 + city.inflation) ** (month / 12);
    const rentFactor = (1 + city.rentGrowth) ** (month / 12);
    const currentHousePayment = getActiveMortgagePaymentForMonth(currentState, month);
    const currentCarPayment = getActiveCarPaymentForMonth(currentState, month);
    let rent = currentState.expenses.rent * rentFactor;
    let utilities = currentState.expenses.utilities * inflationFactor;
    let transport = currentState.expenses.transport * inflationFactor;
    let healthcare = currentState.expenses.healthcare * inflationFactor;
    let groceries = currentState.expenses.groceries * inflationFactor;
    let housingCost = rent + currentHousePayment;

    const loanPayment = calculateStudentLoanPayment(loanBalance);
    const loanInterest = loanBalance > 0 ? loanBalance * (0.05 / 12) : 0;
    loanBalance = Math.max(0, loanBalance - Math.max(0, loanPayment - loanInterest));
    let monthlyGross = 0;
    let taxableIncome = 0;
    let incomeTax = 0;
    let monthlyNetIncome = 0;
    let monthly401kContribution = 0;
    let monthly401kEmployerMatch = 0;
    let monthly401kWithdrawal = 0;
    let monthlySocialSecurity = 0;
    const modeledAge = retired ? PLAN_401K_RULES.retirementAge - 1 : age;
    const modeledYearIndex = Math.max(0, modeledAge - userProfile.age);
    const scheduledRaiseMultiplier = 1;
    const primaryAnnual = currentState.salary * scheduledRaiseMultiplier * (1 + currentState.salaryGrowthRate / 100) ** modeledYearIndex * (currentState.fullTimeHours / 40);
    const partTimeAnnualAtAge = profile.partTimeAnnual * (1 + city.inflation * 0.35) ** modeledYearIndex;
    const annualEarnedReference = primaryAnnual + partTimeAnnualAtAge;

    if (!retired) {
      monthlyGross = (annualEarnedReference / 12) * incomeMultiplier;

      const plannedAnnualContribution = Math.min(primaryAnnual * (annualRateApplied / 100), PLAN_401K_RULES.annualLimit);
      const plannedMonthlyContribution = plannedAnnualContribution / 12;
      const previewTax = monthlyGross * effectiveTaxRate(monthlyGross * 12, city.taxModifier);
      const previewNetIncome = monthlyGross - previewTax;
      const medicalCostPreview = activeEvents.filter((event) => event.type === "forecast").reduce((sum, event) => sum + event.monthlyCost, 0);
      const eventCostPreview = activeEvents.filter((event) => event.type !== "forecast").reduce((sum, event) => sum + event.monthlyCost, 0);
      const monthlyBurnWithout401k = rent + utilities + groceries + transport + healthcare + currentHousePayment + currentCarPayment;
      const requiredCoreWithout401k = monthlyBurnWithout401k + loanPayment + medicalCostPreview + eventCostPreview;
      const pause401k = activeEvents.length > 0 && requiredCoreWithout401k > previewNetIncome;

      if (!pause401k) {
        monthly401kContribution = Math.min(plannedMonthlyContribution, Math.max(0, PLAN_401K_RULES.annualLimit - annual401kContribution));
        monthly401kEmployerMatch = (primaryAnnual / 12) * Math.min(annualRateApplied / 100, PLAN_401K_RULES.employerMatchCapRate) * PLAN_401K_RULES.employerMatchRate;
      } else {
        annual401kPaused = true;
      }

      taxableIncome = Math.max(0, monthlyGross - monthly401kContribution);
      incomeTax = taxableIncome * effectiveTaxRate(taxableIncome * 12, city.taxModifier);
      monthlyNetIncome = monthlyGross - incomeTax;
      retirementBalance = (retirementBalance * (1 + PLAN_401K_RULES.annualReturn / 12)) + monthly401kContribution + monthly401kEmployerMatch;
    } else {
      const retirementYears = Math.max(0, age - PLAN_401K_RULES.retirementAge);
      const desiredRetirementSpendMonthly = (annualEarnedReference * getRetirementIncomeTargetRatio(annualEarnedReference)) / 12;
      const socialSecurityBaseMonthly = (annualEarnedReference * getSocialSecurityReplacementRate(annualEarnedReference)) / 12;
      monthlySocialSecurity = socialSecurityBaseMonthly * (1 + city.inflation * 0.65) ** retirementYears;
      monthly401kWithdrawal = Math.min(
        retirementBalance * PLAN_401K_RULES.withdrawalRate / 12,
        Math.max(0, desiredRetirementSpendMonthly - monthlySocialSecurity),
      );
      monthlyGross = monthlySocialSecurity + monthly401kWithdrawal;
      taxableIncome = monthly401kWithdrawal + monthlySocialSecurity * 0.85;
      incomeTax = taxableIncome * effectiveTaxRate(taxableIncome * 12, city.taxModifier * 0.55);
      monthlyNetIncome = monthlyGross - incomeTax;
      retirementBalance = Math.max(0, (retirementBalance * (1 + PLAN_401K_RULES.annualReturn / 12)) - monthly401kWithdrawal);

      const retiredHousing = rent * 0.88;
      const retiredUtilities = utilities * 0.95;
      const retiredGroceries = groceries * 0.9;
      const retiredTransport = transport * 0.68;
      const retiredHealthcare = healthcare * 1.14;
      const targetLifestyleMonthly = Math.max(0, desiredRetirementSpendMonthly - loanPayment - currentHousePayment - currentCarPayment);
      const baseRetiredNonHealthcare = retiredHousing + retiredUtilities + retiredGroceries + retiredTransport;
      const desiredNonHealthcare = Math.max(targetLifestyleMonthly - retiredHealthcare, baseRetiredNonHealthcare * 0.58);
      const nonHealthcareScale = clamp(desiredNonHealthcare / Math.max(baseRetiredNonHealthcare, 1), 0.58, 1);

      rent = retiredHousing * nonHealthcareScale;
      utilities = retiredUtilities * nonHealthcareScale;
      groceries = retiredGroceries * nonHealthcareScale;
      transport = retiredTransport * nonHealthcareScale;
      healthcare = retiredHealthcare;
      housingCost = rent + currentHousePayment;
    }

    if (withinScenario) {
      total401kContribution += monthly401kContribution;
      total401kEmployerMatch += monthly401kEmployerMatch;
    }
    annual401kContribution += monthly401kContribution;
    annual401kEmployerMatch += monthly401kEmployerMatch;
    annual401kWithdrawal += monthly401kWithdrawal;
    annualSocialSecurity += monthlySocialSecurity;
    annualIncome += monthlyGross;

    const medicalCostImpact = activeEvents.filter((event) => event.type === "forecast").reduce((sum, event) => sum + event.monthlyCost, 0);
    const eventCostImpact = activeEvents.filter((event) => event.type !== "forecast").reduce((sum, event) => sum + event.monthlyCost, 0);
    const retirementExpense = monthly401kContribution;
    const fixedExpenses = rent + utilities + transport + healthcare + retirementExpense + currentHousePayment + currentCarPayment;
    const variableExpenses = groceries;
    const monthlyBurn = fixedExpenses + variableExpenses;
    const essentials = monthlyBurn + loanPayment;
    const emergencyTarget = essentials * 6;
    const requiredCoreCosts = monthlyBurn + loanPayment + medicalCostImpact + eventCostImpact;
    const brokeEraMonth = withinScenario && (monthlyNetIncome + emergencyFund) < requiredCoreCosts;
    const rawDeficit = Math.max(0, requiredCoreCosts - monthlyNetIncome);
    let emergencyWithdrawal = 0;

    if (rawDeficit > 0 && emergencyFund > 0) {
      emergencyWithdrawal = Math.min(rawDeficit, emergencyFund);
      emergencyFund -= emergencyWithdrawal;
    }

    const uncoveredDeficit = Math.max(0, rawDeficit - emergencyWithdrawal);
    const postCoreNet = monthlyNetIncome + emergencyWithdrawal - requiredCoreCosts;
    const emergencyContribution = retired || postCoreNet <= 0
      ? 0
      : Math.min(postCoreNet * (currentState.emergencyRate / 100), Math.max(0, emergencyTarget - emergencyFund));
    const totalExpenses = requiredCoreCosts + emergencyContribution;
    const monthlyNet = postCoreNet - emergencyContribution;

    if (monthlyNet >= 0) {
      emergencyFund += emergencyContribution;
      balance += monthlyNet;
    } else {
      balance += monthlyNet;
      if (withinScenario && balance < 0) debtStressMonths += 1;
    }

    const liquidityBalance = balance + emergencyFund;
    const bankruptMonth = liquidityBalance < 0;
    annualWorstLiquidity = Math.min(annualWorstLiquidity, liquidityBalance);
    if (bankruptMonth) annualBankrupt = true;

    if (withinScenario && brokeEraMonth) negativeMonths += 1;
    if (withinScenario) totalEventLoad += medicalCostImpact + eventCostImpact;
    annualExpenses += requiredCoreCosts + emergencyContribution;

    const qualityPenalty = activeEvents.reduce((sum, event) => sum + Math.abs(event.incomeDelta) * 0.28 + event.monthlyCost / 220, 0);
    const qualityScore = clamp(qualityPreset.score - qualityPenalty - Math.max(0, -monthlyNet / 140), 10, 96);
    const eventFund = Math.max(0, emergencyFund - (medicalCostImpact + eventCostImpact) * 0.6 + Math.max(balance, 0) * 0.12);
    const monthlyStress = clamp(
      (housingCost / Math.max(monthlyNetIncome, 1)) * 28
      + Math.max(0, totalExpenses - monthlyNetIncome) / 110
      + Math.max(0, 4 - emergencyFund / Math.max(essentials, 1)) * 10
      + Math.abs(incomeDelta) * 18
      + (currentHousePayment + currentCarPayment) / 120
      + uncoveredDeficit / 90
      + (uncoveredDeficit > 0 ? 12 : 0),
      8,
      96,
    ) + (brokeEraMonth ? 18 : 0);
    const normalizedStress = clamp(monthlyStress, 8, 98);
    annualStressTotal += normalizedStress;
    annualStressCount += 1;

    if (withinScenario) {
      totalHousingRatio += (housingCost / Math.max(monthlyNetIncome, 1)) * 100;
      records.push({
        month,
        age,
        label: monthLabel(month),
        grossIncome: monthlyGross,
        taxableIncome,
        netIncome: monthlyNetIncome,
        incomeTax,
        rent,
        utilities,
        transport,
        healthcare,
        groceries,
        housingCost,
        fixedExpenses,
        variableExpenses,
        monthlyBurn,
        retirementExpense,
        loanPayment,
        housePayment: currentHousePayment,
        carPayment: currentCarPayment,
        eventCost: medicalCostImpact + eventCostImpact,
        medicalCostImpact,
        eventCostImpact,
        emergencyContribution,
        emergencyWithdrawal,
        monthly401kContribution,
        monthly401kEmployerMatch,
        monthly401kWithdrawal,
        monthlySocialSecurity,
        k401Status: retired ? "Retirement: Social Security + 401k withdrawals" : "Working Years: Contributing to 401k",
        totalExpenses,
        monthlyNet,
        balance,
        emergencyFund,
        retirementBalance,
        loanBalance,
        essentials,
        qualityScore,
        monthlyStress: normalizedStress,
        eventFund,
        brokeEraMonth,
        bankruptMonth,
        liquidityBalance,
        uncoveredDeficit,
        activeEvents,
      });
    }

    if (monthOfYear === 12 || month === projectionMonths) {
      const yearlyStress = annualStressCount ? annualStressTotal / annualStressCount : 0;
      const timelineStatus = retired
        ? "Withdrawing"
        : annual401kPaused
          ? "Paused due to event"
          : `${annualRateApplied}% contribution`;
      projectionYears.push({
        age,
        simulationYear: yearIndex + 1,
        label: `Age ${age}`,
        phase: retired ? "retirement" : "working",
        k401Status: retired ? "Retirement: Social Security + 401k withdrawals" : "Working Years: Contributing to 401k",
        k401TimelineStatus: timelineStatus,
        annual401kPaused,
        current401kRate: annualRateApplied,
        incomeStream: annualIncome,
        annualExpenses,
        emergencyFund,
        retirementBalance,
        annual401kContribution,
        annual401kEmployerMatch,
        annual401kWithdrawal,
        annualSocialSecurity,
        k401CashflowType: retired ? "income" : "expense",
        k401CashflowAmount: retired ? annual401kWithdrawal : annual401kContribution + annual401kEmployerMatch,
        financialStress: yearlyStress,
        vibe: yearlyVibeLabel(yearlyStress),
        bankrupt: annualBankrupt,
        liquidityBalance: annualWorstLiquidity,
      });
    }
  }

  const ending = records[records.length - 1];
  const averageHousingRatio = totalHousingRatio / Math.max(scenarioMonths, 1);
  const finalCoverageMonths = ending.emergencyFund / Math.max(ending.essentials, 1);
  const averageEventLoad = totalEventLoad / Math.max(scenarioMonths, 1);
  const age65Point = projectionYears.find((entry) => entry.age >= PLAN_401K_RULES.retirementAge) || projectionYears[projectionYears.length - 1];
  const current401k = get401kSummary(currentState);
  const k401Summary = {
    ...current401k,
    projectedValueAt65: age65Point?.retirementBalance || 0,
  };
  const retirementSecurity = k401Summary.projectedValueAt65 / Math.max(profile.totalAnnualGross * 7, 1);
  const stressComponents = {
    housing: averageHousingRatio * 0.55,
    negative: negativeMonths * 2.5,
    debt: debtStressMonths * 4,
    reserve: Math.max(0, 6 - finalCoverageMonths) * 7,
    career: career.volatility * 40,
    events: averageEventLoad / 220,
    retirement: Math.max(0, 9 - retirementSecurity * 8),
  };
  const stressIndex = clamp(Object.values(stressComponents).reduce((sum, value) => sum + value, 0), 8, 95);

  return {
    profile,
    forecast: getForecastSummary(currentState),
    recommendedIncome: estimateMinimumIncome(currentState, city),
    records,
    ending,
    negativeMonths,
    debtStressMonths,
    averageHousingRatio,
    finalCoverageMonths,
    averageEventLoad,
    retirementSecurity,
    k401Summary,
    projectionYears,
    averageMonthly401kContribution: total401kContribution / Math.max(scenarioMonths, 1),
    averageMonthly401kEmployerMatch: total401kEmployerMatch / Math.max(scenarioMonths, 1),
    averageMonthly401kDeposit: (total401kContribution + total401kEmployerMatch) / Math.max(scenarioMonths, 1),
    total401kContribution,
    total401kEmployerMatch,
    stressComponents,
    stressIndex,
  };
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = $(id);
  if (el) el.innerHTML = value;
}

function setValue(id, value) {
  const el = $(id);
  if (el) el.value = String(value);
}

function infoModalMarkup(lines) {
  return lines.map((line) => `<p>${line}</p>`).join("");
}

function getInfoContext() {
  const sim = lastSimulation || simulate(state);
  const carPayment = calculateCarPayment(state);
  const housePayment = calculateMortgagePayment(state);
  const loanPayment = calculateStudentLoanPayment(state.studentLoan);
  const monthlyBurn =
    state.expenses.rent +
    state.expenses.utilities +
    state.expenses.groceries +
    state.expenses.transport +
    state.expenses.healthcare +
    loanPayment +
    carPayment +
    housePayment +
    sim.k401Summary.monthlyEmployeeContribution;

  return {
    sim,
    carPayment,
    housePayment,
    loanPayment,
    monthlyBurn,
  };
}

const INFO_CONTENT_BUILDERS = {
  reality_housing_drag: ({ sim }) => ({
    title: "Housing drag",
    body: infoModalMarkup([
      `This number is the average share of your <strong>monthly net income</strong> that goes to housing across the simulation.`,
      `Housing cost is treated as <strong>rent + mortgage payment</strong> when house mode is on, then divided by your projected take-home pay. Right now the model is landing at <strong>${percent(sim.averageHousingRatio)}</strong>.`,
    ]),
  }),
  reality_debt_left: ({ sim, loanPayment }) => ({
    title: "Debt left",
    body: infoModalMarkup([
      `This is the projected student-loan balance still left after monthly payments and interest keep working in the background.`,
      `The simulator starts from your current debt, applies a simplified <strong>5% annual interest</strong> assumption, and subtracts the monthly payment of <strong>${currency(loanPayment)}</strong>. The current projection leaves <strong>${currency(sim.ending.loanBalance)}</strong> unpaid.`,
    ]),
  }),
  reality_broke_era: ({ sim }) => ({
    title: "Broke era risk",
    body: infoModalMarkup([
      `A month counts as “broke era” when <strong>income + available emergency stash</strong> cannot cover monthly burn, debt payment, event costs, and medical shock costs.`,
      `The current setup triggers that condition for <strong>${sim.negativeMonths} month(s)</strong> in the run.`,
    ]),
  }),
  reality_emergency_stash: ({ sim }) => ({
    title: "Emergency stash",
    body: infoModalMarkup([
      `This is the projected emergency fund built from positive cash-flow months using your configured emergency-fund rate.`,
      `The simulator contributes to the stash only after core costs are covered, and it can pull money back out when eligible shocks hit. The current projection ends with <strong>${currency(sim.ending.emergencyFund)}</strong>.`,
    ]),
  }),
  reality_401k_65: ({ sim }) => ({
    title: "401k at 65",
    body: infoModalMarkup([
      `This is your projected 401k balance at age 65 using your current contribution rate, employer match, and compound growth.`,
      `The model adds your payroll contribution plus employer match each month and compounds it at a simplified <strong>7% annual return</strong>. Right now that projects to <strong>${currency(sim.k401Summary.projectedValueAt65)}</strong>.`,
    ]),
  }),
  stress_score: ({ sim }) => ({
    title: "Financial stress / 100",
    body: infoModalMarkup([
      `The stress score blends the big pressure sources in the model: <strong>housing drag, broke-era months, reserve gap, debt strain, event load, career volatility, and retirement security</strong>.`,
      `Higher fixed costs, repeated negative months, or weak savings push the score up. Your current blended result is <strong>${Math.round(sim.stressIndex)} / 100</strong>.`,
    ]),
  }),
  stress_housing_drag: ({ sim }) => ({
    title: "Housing drag",
    body: infoModalMarkup([
      `This card uses the same housing-drag formula as Step 3: average housing cost divided by average monthly take-home pay.`,
      `The current model shows housing eating <strong>${percent(sim.averageHousingRatio)}</strong> of net income on average.`,
    ]),
  }),
  stress_emergency_cover: ({ sim }) => ({
    title: "Emergency cover",
    body: infoModalMarkup([
      `Emergency cover is your projected stash divided by your current monthly essentials, which gives the number of months you can survive without fresh income.`,
      `Right now the stash covers about <strong>${sim.finalCoverageMonths.toFixed(1)} months</strong> of core costs.`,
    ]),
  }),
  stress_broke_era: ({ sim }) => ({
    title: "Broke era",
    body: infoModalMarkup([
      `This is the count of months where the simulator decides your cash flow fully breaks: income plus stash cannot cover required costs.`,
      `At the moment, that happens in <strong>${sim.negativeMonths} month(s)</strong>.`,
    ]),
  }),
  stress_401k_65: ({ sim }) => ({
    title: "Projected 401k at 65",
    body: infoModalMarkup([
      `This projection uses your salary, contribution rate, scheduled future rate changes, employer match, and monthly compounding.`,
      `With your current inputs, the model estimates <strong>${currency(sim.k401Summary.projectedValueAt65)}</strong> by age 65.`,
    ]),
  }),
  stress_emergency_stash: ({ sim }) => ({
    title: "Emergency stash",
    body: infoModalMarkup([
      `This is the projected emergency balance left at the end of the simulation after savings contributions and any withdrawals caused by shocks.`,
      `The current scenario finishes with <strong>${currency(sim.ending.emergencyFund)}</strong> still in reserve.`,
    ]),
  }),
  cashflow_work_mix: ({ sim }) => ({
    title: "Work mix",
    body: infoModalMarkup([
      `Reality income starts with your full-time salary, adjusts it by weekly hours, layers in yearly salary growth, and then adds any part-time gigs by <strong>hourly wage × weekly hours</strong>.`,
      `That combined work mix currently projects to about <strong>${currency(sim.profile.totalAnnualGross)}</strong> in gross annual income before taxes and deductions.`,
    ]),
  }),
  cashflow_monthly_burn: ({ monthlyBurn, carPayment, housePayment, loanPayment, sim }) => ({
    title: "Monthly burn",
    body: infoModalMarkup([
      `Monthly burn includes <strong>rent, utilities, groceries, transport, healthcare, student-loan payment, car payment, house payment, and your own 401k contribution</strong>.`,
      `With the current settings, the stack includes <strong>${currency(loanPayment)}</strong> in loan payments, <strong>${currency(carPayment)}</strong> in car costs, <strong>${currency(housePayment)}</strong> in mortgage, and lands near <strong>${currency(monthlyBurn)}</strong> per month before event shocks.`,
    ]),
  }),
  cashflow_income_gap: ({ sim }) => ({
    title: "Desired Annual Income vs Reality",
    body: infoModalMarkup([
      `The <strong>Desired</strong> line grows from your target income using the desired-income growth rate. The <strong>Reality</strong> line grows from your actual salary path using work mix and yearly salary growth.`,
      `The simulator compares those two curves year by year to show whether your real earnings are catching up or drifting behind the life you want.`,
    ]),
  }),
  twists_emergency_rate: ({ sim }) => ({
    title: "Emergency stash rate",
    body: infoModalMarkup([
      `This slider controls what share of positive post-expense cash flow gets routed into emergency savings instead of staying as flexible cash.`,
      `In the current run, that logic helps build <strong>${currency(sim.ending.emergencyFund)}</strong> and creates about <strong>${sim.finalCoverageMonths.toFixed(1)} months</strong> of cover.`,
    ]),
  }),
  twists_event_builder: () => ({
    title: "Draft a new event",
    body: infoModalMarkup([
      `Each event combines a cost breakdown, a duration, and an income-change setting. The total event cost is spread across the active months, while the income change hits the paycheck during that same window.`,
      `If “Emergency stash can be used” is turned on, the selected use rate decides how much of the shock is allowed to come out of reserves first.`,
    ]),
  }),
  twists_event_impact: () => ({
    title: "Event impact over time",
    body: infoModalMarkup([
      `This chart tracks how active events change <strong>income, expenses, and emergency-fund balance</strong> over time.`,
      `When an event starts, its monthly cost and income delta are applied for the configured duration, so the lines bend only while the event is active.`,
    ]),
  }),
  projection_k401_tracking: ({ sim }) => ({
    title: "Contribution rate and monthly deposit",
    body: infoModalMarkup([
      `Your employee 401k contribution is calculated as <strong>gross salary × contribution rate</strong>, but it is capped by the annual IRS elective-deferral limit of <strong>${currency(PLAN_401K_RULES.annualLimit)}</strong>.`,
      `Employer match is calculated separately at <strong>50% of your contribution up to 6% of gross pay</strong>. Right now the model deposits about <strong>${currency(sim.k401Summary.monthlyTotalDeposit)}</strong> per month in total.`,
    ]),
  }),
  projection_k401_employee: ({ sim }) => ({
    title: "You put in / month",
    body: infoModalMarkup([
      `This is your own monthly payroll deferral going into the 401k.`,
      `The current setup contributes <strong>${currency(sim.k401Summary.monthlyEmployeeContribution)}</strong> per month from your paycheck, based on the selected contribution rate and the IRS annual cap.`,
    ]),
  }),
  projection_k401_match: ({ sim }) => ({
    title: "Employer match / month",
    body: infoModalMarkup([
      `This is the monthly employer contribution added on top of your own deferral.`,
      `The model assumes the employer matches <strong>50%</strong> of what you contribute, but only up to <strong>6% of gross salary</strong>. That currently adds <strong>${currency(sim.k401Summary.monthlyEmployerMatch)}</strong> per month.`,
    ]),
  }),
  projection_k401_total: ({ sim }) => ({
    title: "Total monthly deposit",
    body: infoModalMarkup([
      `This is simply <strong>your monthly contribution + employer match</strong>.`,
      `Right now the combined deposit is <strong>${currency(sim.k401Summary.monthlyTotalDeposit)}</strong> each month before compounding growth is applied.`,
    ]),
  }),
  projection_k401_schedule: () => ({
    title: "Schedule rate changes",
    body: infoModalMarkup([
      `Each scheduled change overrides the base 401k rate starting at the chosen age and stays active until another scheduled change replaces it.`,
      `If a severe event or disease creates a month where required costs beat income, the simulation can also <strong>pause contributions for that duration</strong>.`,
    ]),
  }),
  forecast_inputs: () => ({
    title: "Disease scenario inputs",
    body: infoModalMarkup([
      `Each disease scenario mixes a duration, insurance coverage, paid-leave coverage, and optional emergency-stash usage.`,
      `The simulator converts those settings into out-of-pocket medical cost, income loss, and extra stress by spreading the shock across the illness window.`,
    ]),
  }),
  forecast_cost_income: () => ({
    title: "Cost and income loss",
    body: infoModalMarkup([
      `This section summarizes the medical bill shock and paycheck damage created by all active disease scenarios.`,
      `Insurance coverage reduces out-of-pocket cost, paid leave reduces income loss, and emergency-stash usage can soften the hit if you allow it.`,
    ]),
  }),
  health_total_medical_cost: ({ sim }) => ({
    title: "Total medical cost",
    body: infoModalMarkup([
      `This is the total projected out-of-pocket medical cost across all active disease scenarios after insurance reduces the gross bill.`,
      `The current active scenarios add up to <strong>${currency(sim.forecast.totalCost)}</strong>.`,
    ]),
  }),
  health_stress_increase: ({ sim }) => ({
    title: "Financial stress increase",
    body: infoModalMarkup([
      `This value estimates how many extra stress points your active disease scenarios add to the global stress score.`,
      `The formula blends <strong>monthly medical cost, income loss, insurance coverage, healthcare preparedness, and emergency-stash use</strong>. Right now it is adding <strong>+${calculateForecastStressIncrease(sim).toFixed(1)} pts</strong>.`,
    ]),
  }),
  health_income_loss: ({ sim }) => ({
    title: "Income loss",
    body: infoModalMarkup([
      `This is the total percentage income hit produced by the active disease scenarios after paid-leave coverage softens the loss.`,
      `At the moment the combined forecast is removing about <strong>${percent(Math.abs(sim.forecast.incomeDelta))}</strong> of income during the affected months.`,
    ]),
  }),
};

function getInfoContent(key) {
  const context = getInfoContext();
  const builder = INFO_CONTENT_BUILDERS[key];
  if (!builder) {
    return {
      title: "Metric explanation",
      body: infoModalMarkup(["This metric is part of the shared simulation engine, but a detailed explanation has not been wired up yet."]),
    };
  }
  return builder(context);
}

function openInfoModal(key) {
  const modal = $("infoModal");
  if (!modal) return;
  const content = getInfoContent(key);
  setText("infoModalTitle", content.title);
  setHTML("infoModalBody", content.body);
  modal.hidden = false;
}

function closeInfoModal() {
  const modal = $("infoModal");
  if (modal) modal.hidden = true;
}

function renderNav() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === page);
  });
  setText("pageTitle", sectionTitles[page] || "Dashboard");
}

function profileDisplayName() {
  const name = userProfile.name.trim();
  return name || "friend";
}

function normalizeUserProfile() {
  if (!userProfile.name.trim()) userProfile.name = "Friend";
  userProfile.age = clamp(Number(userProfile.age) || 22, 16, 40);
  if (!userProfile.education) userProfile.education = "college";
  saveUserProfile();
}

function renderUserProfile() {
  setValue("profileNameInput", userProfile.name);
  setValue("profileAgeInput", userProfile.age);
  setValue("educationSelect", userProfile.education);
  document.querySelectorAll(".user-name-display").forEach((node) => {
    node.textContent = profileDisplayName();
  });
}

function syncDashboardStageUI() {
  if (page !== "dashboard") return;
  document.body.dataset.uiStage = dashboardUiStage;
  document.querySelectorAll(".stage-screen").forEach((section) => {
    section.classList.toggle("is-active", section.dataset.stage === dashboardUiStage);
  });
  document.querySelectorAll(".stage-pill").forEach((button) => {
    const isActive = button.dataset.openStage === dashboardUiStage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function setDashboardStage(stage) {
  if (page !== "dashboard") return;
  dashboardUiStage = ["profile", "basics", "reality", "stress", "report"].includes(stage) ? stage : "profile";
  try {
    localStorage.setItem(UI_STAGE_KEY, dashboardUiStage);
  } catch {
    // Ignore storage failures and keep the UI functional.
  }
  if (dashboardUiStage !== "stress") hideCatSpeechBubble();
  if (!["stress", "report"].includes(dashboardUiStage)) stopEmojiParticles();
  syncDashboardStageUI();
  globalThis.scrollTo({ top: 0, behavior: "smooth" });
  globalThis.requestAnimationFrame(() => renderPage());
}

function syncAccordionHeights() {
  if (page !== "dashboard") return;
  document.querySelectorAll(".accordion-item").forEach((item) => {
    const panel = item.querySelector(".accordion-panel");
    if (!(panel instanceof HTMLElement)) return;
    const isOpen = item.classList.contains("open");
    panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
    panel.setAttribute("aria-hidden", isOpen ? "false" : "true");
  });
}

function toggleAccordion(targetId) {
  if (!targetId) return;
  const items = [...document.querySelectorAll(".accordion-item")];
  const targetItem = items.find((item) => item.querySelector(`#${targetId}`));
  if (!targetItem) return;
  const shouldOpen = !targetItem.classList.contains("open");
  items.forEach((item) => item.classList.remove("open"));
  if (shouldOpen) targetItem.classList.add("open");
  syncAccordionHeights();
  globalThis.requestAnimationFrame(syncAccordionHeights);
}

function openStressModule(targetId) {
  if (page !== "dashboard") return;
  setDashboardStage("stress");
  globalThis.requestAnimationFrame(() => {
    const items = [...document.querySelectorAll(".accordion-item")];
    const targetItem = items.find((item) => item.querySelector(`#${targetId}`));
    items.forEach((item) => item.classList.remove("open"));
    if (targetItem) targetItem.classList.add("open");
    syncAccordionHeights();
    globalThis.requestAnimationFrame(() => {
      const panel = $(targetId);
      const item = panel?.closest(".accordion-item");
      if (item instanceof HTMLElement) item.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function appendAssistantMessage(role, text) {
  const messages = $("assistantMessages");
  if (!messages) return;
  const bubble = document.createElement("div");
  bubble.className = `assistant-message ${role}`;
  bubble.innerHTML = `<strong>${role === "bot" ? "Broke Era AI" : profileDisplayName()}</strong><p>${escapeHtml(text)}</p>`;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

function ensureAssistantGreeting() {
  const messages = $("assistantMessages");
  if (!messages || messages.childElementCount) return;
  appendAssistantMessage("bot", "I can help you buy a house, handle emergencies, or check your 401k. What do you want to do?");
}

function setAssistantPanelOpen(open) {
  const panel = $("assistantPanel");
  if (!panel) return;
  panel.hidden = !open;
  if (open) {
    ensureAssistantGreeting();
    $("assistantInput")?.focus();
  }
}

function hideCatSpeechBubble() {
  globalThis.clearTimeout(catSpeechHideTimer);
  const bubble = $("catSpeechBubble");
  if (!bubble) return;
  bubble.classList.remove("is-visible");
  bubble.setAttribute("aria-hidden", "true");
}

function showCatSpeechBubble(title, copy) {
  const bubble = $("catSpeechBubble");
  if (!bubble) return;
  setHTML("catSpeechTitle", title);
  setHTML("catSpeechCopy", copy);
  bubble.classList.add("is-visible");
  bubble.setAttribute("aria-hidden", "false");
  globalThis.clearTimeout(catSpeechHideTimer);
  catSpeechHideTimer = globalThis.setTimeout(() => {
    hideCatSpeechBubble();
  }, 4000);
}

function getBiggestExpense() {
  const entries = [
    { key: "rent", label: "Rent", value: Number(state.expenses.rent || 0) },
    { key: "utilities", label: "Utilities", value: Number(state.expenses.utilities || 0) },
    { key: "groceries", label: "Groceries", value: Number(state.expenses.groceries || 0) },
    { key: "transport", label: "Transport", value: Number(state.expenses.transport || 0) },
    { key: "healthcare", label: "Healthcare", value: Number(state.expenses.healthcare || 0) },
    { key: "debt", label: "Debt payment", value: calculateStudentLoanPayment(state.studentLoan) },
  ].sort((left, right) => right.value - left.value);

  return entries[0];
}

function getFirstBrokeYear(sim) {
  if (!sim?.records?.length) return null;
  const first = sim.records.find((record) => record.brokeEraMonth);
  if (!first) return null;
  return Math.floor((first.month - 1) / 12) + 1;
}

function getStressFeedbackKey(target) {
  if (!(target instanceof HTMLElement)) return "";
  if (target.id) return target.id;
  if (target.classList.contains("parttime-role")) return "parttime-role";
  if (target.classList.contains("parttime-hours")) return "parttime-hours";
  if (target.classList.contains("forecast-disease")) return "forecast-disease";
  if (target.classList.contains("forecast-duration")) return "forecast-duration";
  if (target.classList.contains("forecast-insurance")) return "forecast-insurance";
  if (target.classList.contains("forecast-paid-leave")) return "forecast-paid-leave";
  if (target.classList.contains("forecast-emergency-toggle")) return "forecast-emergency-toggle";
  if (target.classList.contains("forecast-emergency-rate")) return "forecast-emergency-rate";
  if (target.closest("#eventBreakdownFields")) return "event-breakdown";
  return "";
}

function speechHighlight(value) {
  return `<span class="speech-highlight">${escapeHtml(String(value ?? ""))}</span>`;
}

function speechStrong(value) {
  return `<strong class="speech-strong">${escapeHtml(String(value ?? ""))}</strong>`;
}

function buildStressFeedback(inputKey, beforeSim, afterSim) {
  const biggestExpense = getBiggestExpense();
  const expenseLabel = speechHighlight(biggestExpense.label);
  const expenseValue = speechStrong(currency(biggestExpense.value));
  const title = `Biggest expense: ${expenseLabel} · ${expenseValue}`;

  if (!beforeSim || !afterSim) {
    return {
      title,
      copy: `Tiny tweak, big ripple. I’ll keep calling out ${speechHighlight("what matters most")} as the plan updates.`,
    };
  }

  const stressDelta = Math.round((afterSim.stressIndex || 0) - (beforeSim.stressIndex || 0));
  const coverDelta = (afterSim.finalCoverageMonths || 0) - (beforeSim.finalCoverageMonths || 0);
  const retirementDelta = (afterSim.k401Summary?.projectedValueAt65 || 0) - (beforeSim.k401Summary?.projectedValueAt65 || 0);
  const gapDelta = (afterSim.profile?.gapToTarget || 0) - (beforeSim.profile?.gapToTarget || 0);
  const brokeBefore = getFirstBrokeYear(beforeSim);
  const brokeAfter = getFirstBrokeYear(afterSim);
  const brokeShift = typeof brokeBefore === "number" && typeof brokeAfter === "number"
    ? brokeAfter - brokeBefore
    : null;

  const brokeLine =
    typeof brokeShift === "number" && brokeShift < 0
      ? ` ${speechHighlight(`Broke era arrives ${Math.abs(brokeShift)} year${Math.abs(brokeShift) === 1 ? "" : "s"} earlier.`)}`
      : typeof brokeShift === "number" && brokeShift > 0
        ? ` ${speechHighlight(`You buy about ${brokeShift} extra year${brokeShift === 1 ? "" : "s"} of runway.`)}`
        : brokeAfter && !brokeBefore
          ? ` ${speechHighlight("Good news: the broke-era flag disappears here.")}`
          : !brokeAfter && brokeBefore
            ? ` ${speechHighlight(`Watch it: broke era now appears around year ${brokeBefore}.`)}`
            : "";

  const careerFlexLine =
    stressDelta >= 4
      ? ` ${speechHighlight("Career pivots get harder to survive.")}`
      : stressDelta <= -4
        ? ` ${speechHighlight("This gives your career plan more room to breathe.")}`
        : ` ${speechHighlight("The long-term plan survives, but the margin is still thin.")}`;

  const messageMap = {
    rentInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Pushing housing higher eats flexibility first, so future career moves need to work faster, not just sound cooler.${brokeLine}${careerFlexLine}`,
    utilitiesInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Utility bumps feel small, but they add permanent drag to the monthly plan and slowly squeeze your runway.${careerFlexLine}`,
    groceriesInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Food creep is sneaky: it won’t destroy the plan alone, but it can quietly erase the money that funds skill-building or job transitions.${careerFlexLine}`,
    transportInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Transport upgrades trade convenience for career optionality, because every extra commute dollar is one less buffer for switching paths.${careerFlexLine}`,
    healthcareInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Better healthcare spend can protect the plan, but it still raises your fixed burn, so your next career move needs real payoff.${careerFlexLine}`,
    lifestyleInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Changing quality of life retunes the whole budget at once, so it directly changes how much career risk you can realistically afford.${brokeLine}${careerFlexLine}`,
    fullTimeHoursInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). More hours can stabilize the short term, but if the work mix feels heavy, your long-term plan still needs better pay, not just longer days.${gapDelta < 0 ? ` ${speechHighlight("Your income gap is shrinking.")}` : ` ${speechHighlight("The target gap is still loud.")}`}`,
    targetIncomeInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Raising the target doesn’t hurt today's burn, but it does raise the career standard you need to hit over the next few years.${gapDelta > 0 ? ` ${speechHighlight("The gap just widened.")}` : ` ${speechHighlight("The target is still within reach.")}`}`,
    targetIncomeGrowthInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). A faster desired income curve means your career plan has to compound harder too, not just survive month to month.${gapDelta > 0 ? ` ${speechHighlight("The long-term gap is widening.")}` : ` ${speechHighlight("The path is still catching up.")}`}`,
    cashFlowSalaryGrowthInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Better salary growth gives the whole plan more oxygen, because future raises start doing real work instead of just patching today’s burn.${gapDelta < 0 ? ` ${speechHighlight("The income gap is improving.")}` : ` ${speechHighlight("You still need sharper growth.")}`}`,
    "parttime-role": `Your biggest drain is ${expenseLabel} (${expenseValue}). Changing the side-hustle mix tweaks how fast you can close the gap without betting your whole career on one paycheck.${careerFlexLine}`,
    "parttime-hours": `Your biggest drain is ${expenseLabel} (${expenseValue}). More side-hustle hours can rescue the math, but it also means your main career path is being subsidized by extra labor.${gapDelta < 0 ? ` ${speechHighlight("At least the income gap is narrowing.")}` : ` ${speechHighlight("The plan still wants better primary income.")}`}`,
    buyCarToggle: `Your biggest drain is ${expenseLabel} (${expenseValue}). Adding a car payment makes the plan less forgiving, so your career track needs steadier raises to carry the extra fixed cost.${brokeLine}${careerFlexLine}`,
    carPriceInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). A pricier car is basically a tax on future flexibility, because it forces your next career move to cover convenience and ambition at the same time.${brokeLine}${careerFlexLine}`,
    buyHouseToggle: `Your biggest drain is ${expenseLabel} (${expenseValue}). Turning homeownership on means your plan stops being lightweight, so your career path needs to get more predictable fast.${brokeLine}${careerFlexLine}`,
    homePriceInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Bigger house, bigger career lock-in. The higher this goes, the harder it gets to take a lower-paying pivot that might be smarter long term.${brokeLine}${careerFlexLine}`,
    homeDownPaymentInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). A stronger down payment can calm the monthly burn, but it also uses cash you could have kept as transition runway.${coverDelta < 0 ? ` ${speechHighlight("Emergency cover just got thinner.")}` : ` ${speechHighlight("The monthly plan gets a little cleaner.")}`}`,
    emergencyRateInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). More emergency funding slows the vibe now, but it gives your career plan more time to survive layoffs, bad markets, and one ugly year.${coverDelta > 0 ? ` ${speechHighlight(`Coverage improves by ${coverDelta.toFixed(1)} months.`)}` : careerFlexLine}`,
    eventTypeSelect: `Your biggest drain is ${expenseLabel} (${expenseValue}). You’re modeling a different kind of chaos now, which changes how much career safety net you really need before taking bold risks.${careerFlexLine}`,
    eventMonthInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Moving the event timing changes when the pressure lands, which matters if your plan depends on raises arriving before the mess does.${careerFlexLine}`,
    eventDurationInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Longer events stretch recovery, so your career plan needs more cash stamina, not just optimism.${brokeLine}${careerFlexLine}`,
    eventIncomeInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Bigger income hits during events make the career plan less resilient, because one bad quarter starts acting like a full storyline.${brokeLine}${careerFlexLine}`,
    eventEmergencyInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Letting the stash absorb event costs protects the long-term plan, but only if the stash is actually thick enough.${coverDelta > 0 ? ` ${speechHighlight("Your defensive cushion is helping.")}` : ` ${speechHighlight("The cushion is still easy to bruise.")}`}`,
    eventEmergencyRateInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Using more stash softens the immediate hit, which can keep your career plan from getting derailed by one random plot twist.${coverDelta < 0 ? ` ${speechHighlight("The buffer is burning faster now.")}` : careerFlexLine}`,
    "event-breakdown": `Your biggest drain is ${expenseLabel} (${expenseValue}). Changing the event budget rewrites how violent the shock feels, and that directly changes how careful your future career moves need to be.${brokeLine}${careerFlexLine}`,
    k401RateInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Boosting your 401k helps future-you, but if today’s cash is already tight, the plan gets less forgiving in the short term.${retirementDelta > 0 ? ` ${speechHighlight(`Age-65 projection rises by ${currency(retirementDelta)}.`)}` : careerFlexLine}`,
    future401kRateInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Future 401k changes are a long-game lever: great for later, but only smart if the career path can support the tradeoff now.${retirementDelta > 0 ? ` ${speechHighlight(`Retirement outlook improves by ${currency(retirementDelta)}.`)}` : careerFlexLine}`,
    future401kAgeInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Changing the timing of 401k shifts alters when the plan starts compounding harder, which matters more if your salary ramp is slow.${retirementDelta > 0 ? ` ${speechHighlight(`Delayed timing still moves the projection by ${currency(retirementDelta)}.`)}` : careerFlexLine}`,
    diseaseSelect: `Your biggest drain is ${expenseLabel} (${expenseValue}). A different health scenario changes how fragile the plan is under pressure, so your career strategy needs a real backup lane.${careerFlexLine}`,
    forecastDurationInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Longer recovery windows turn one health issue into a career momentum problem too, not just a money problem.${brokeLine}${careerFlexLine}`,
    insuranceCoverageInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Better coverage protects your runway, which is huge when your career plan depends on surviving disruption without panic decisions.${coverDelta > 0 ? ` ${speechHighlight(`The plan gets ${coverDelta.toFixed(1)} more months of breathing room.`)}` : careerFlexLine}`,
    paidLeaveInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). More paid leave stabilizes the bad-year scenario, which means your career path has a better chance of surviving one rough chapter.${careerFlexLine}`,
    forecastEmergencyToggle: `Your biggest drain is ${expenseLabel} (${expenseValue}). Letting health shocks tap the stash keeps your long-term plan alive, but only if the stash isn’t already performing CPR.${coverDelta > 0 ? ` ${speechHighlight("The protection layer helps here.")}` : ` ${speechHighlight("The protection layer is still thin.")}`}`,
    forecastEmergencyRateInput: `Your biggest drain is ${expenseLabel} (${expenseValue}). Raising emergency usage reduces the immediate pain, but it can leave less reserve for the next career wobble.${coverDelta < 0 ? ` ${speechHighlight("Buffer is draining faster now.")}` : careerFlexLine}`,
    "forecast-disease": `Your biggest drain is ${expenseLabel} (${expenseValue}). This health scenario changes how much slack your career plan needs to stay realistic.${careerFlexLine}`,
    "forecast-duration": `Your biggest drain is ${expenseLabel} (${expenseValue}). Extending the timeline means recovery takes longer, so your work plan needs patience and cash at the same time.${brokeLine}${careerFlexLine}`,
    "forecast-insurance": `Your biggest drain is ${expenseLabel} (${expenseValue}). Insurance is boring until it saves the entire trajectory. More coverage means fewer bad surprises get to bully your career plan.${coverDelta > 0 ? ` ${speechHighlight(`Coverage improves by ${coverDelta.toFixed(1)} months.`)}` : careerFlexLine}`,
    "forecast-paid-leave": `Your biggest drain is ${expenseLabel} (${expenseValue}). Better paid leave protects your income stream, which keeps one bad chapter from permanently muting your career growth.${careerFlexLine}`,
    "forecast-emergency-toggle": `Your biggest drain is ${expenseLabel} (${expenseValue}). Tapping the stash for health events can save the plan, but only if you rebuild it before the next hit.${careerFlexLine}`,
    "forecast-emergency-rate": `Your biggest drain is ${expenseLabel} (${expenseValue}). More emergency usage softens today’s hit while making tomorrow’s buffer thinner, so it is a rescue move, not a growth strategy.${coverDelta < 0 ? ` ${speechHighlight("The cushion is shrinking.")}` : careerFlexLine}`,
  };

  return {
    title,
    copy: messageMap[inputKey] || `Your biggest drain is ${expenseLabel} (${expenseValue}). This tweak shifts the plan, so keep an eye on whether it creates more career breathing room or less.${careerFlexLine}`,
  };
}

function queueStressCatFeedback(inputKey, beforeSim) {
  pendingCatSpeechMeta = { inputKey, beforeSim };
  globalThis.clearTimeout(catSpeechDebounceTimer);
  globalThis.clearTimeout(catSpeechHideTimer);
  catSpeechDebounceTimer = globalThis.setTimeout(() => {
    if (dashboardUiStage !== "stress" || !pendingCatSpeechMeta || !lastSimulation) return;
    const feedback = buildStressFeedback(pendingCatSpeechMeta.inputKey, pendingCatSpeechMeta.beforeSim, lastSimulation);
    showCatSpeechBubble(feedback.title, feedback.copy);
  }, 500);
}

function handleAssistantPrompt(rawPrompt) {
  const prompt = rawPrompt.trim();
  if (!prompt) return;
  appendAssistantMessage("user", prompt);
  const normalized = prompt.toLowerCase();

  if (/(house|car|buy)/.test(normalized)) {
    appendAssistantMessage("bot", "Let's look at your monthly burn!");
    openStressModule("cashFlowPanel");
    return;
  }

  if (/(sick|ill|health)/.test(normalized)) {
    appendAssistantMessage("bot", "Let's jump to your forecasts and health risk.");
    openStressModule("forecastPanel");
    return;
  }

  if (/(emergency|fired|laid off|job loss)/.test(normalized)) {
    appendAssistantMessage("bot", "Let's check your defensive setup before the plot twists hit.");
    openStressModule("plotTwistsPanel");
    return;
  }

  if (/(401k|retire|retirement)/.test(normalized)) {
    appendAssistantMessage("bot", "Your 401k math is wired into the sim now. Open the projection module to inspect contribution changes, pauses, and withdrawal years.");
    openStressModule("stashPanel");
    return;
  }

  appendAssistantMessage("bot", "I can help you buy a house, handle emergencies, or check your 401k. What do you want to do?");
}

function getStressEmotionConfig(sim) {
  const housing = percent(sim.averageHousingRatio);
  const stash = currency(sim.ending.emergencyFund);
  const retirement = currency(sim.k401Summary.projectedValueAt65);

  if (sim.stressIndex > 70) {
    return {
      tier: "high",
      status: "Screaming Cat Alert",
      shortNarrative: `Housing is eating ${housing} of take-home pay, the sim still shows ${sim.negativeMonths} broke months, and the projected 401k at 65 only lands near ${retirement}. This build is getting jumped by math.`,
      fullNarrative: `High stress means the basics are not fitting cleanly. Housing is taking ${housing} of take-home pay, the sim logs ${sim.negativeMonths} negative months, and even with steady 401k deposits the long-run retirement number only reaches ${retirement}. One nasty surprise can flip the whole plan into chaos fast.`,
      cats: ["screaming cat", "crying cat", "panic cat"],
      catTone: "bad",
      motion: "fall",
      interval: 420,
      burst: 6,
      durationMin: 2200,
      durationMax: 3800,
    };
  }

  if (sim.stressIndex < 30) {
    return {
      tier: "low",
      status: "Smug Cat Stability",
      shortNarrative: `The budget can actually breathe. Housing lands around ${housing}, your emergency stash trends to ${stash}, and the 401k stacks toward ${retirement}.`,
      fullNarrative: `Low stress means the budget has room to breathe. Housing is manageable, the stash builds toward ${stash}, and the 401k grows toward ${retirement}, so the setup feels much less likely to spiral from one random life event.`,
      cats: ["smug cat", "happy cat", "calm cat"],
      catTone: "good",
      motion: "rise",
      interval: 760,
      burst: 3,
      durationMin: 3600,
      durationMax: 6200,
    };
  }

  return {
    tier: "medium",
    status: "Huh Cat Buffer",
    shortNarrative: `The numbers are workable, but thin. Housing is taking ${housing} of income, the budget has ${sim.negativeMonths} shaky months, and the 401k only reaches ${retirement}.`,
    fullNarrative: `Medium stress means you are not cooked, but the margin is thin. The core budget works most months, yet housing, debt, surprise costs, and a still-small 401k cushion all have enough power to make the vibe go sideways.`,
    cats: ["huh cat", "wide-eye cat", "side-eye cat"],
    catTone: "medium",
    motion: "drift",
    interval: 560,
    burst: 4,
    durationMin: 2800,
    durationMax: 4600,
  };
}

function catToneForStress(score) {
  if (score >= 70) return "bad";
  if (score >= 38) return "medium";
  return "good";
}

function catLabelForStress(score) {
  if (score >= 70) return "screaming cat";
  if (score >= 38) return "huh cat";
  return "smug cat";
}

const CAT_MEME_ASSETS = {
  "smug cat": {
    src: "https://i.kym-cdn.com/photos/images/newsfeed/001/088/640/bf6.jpg",
    alt: "Smug Cat meme",
  },
  "happy cat": {
    src: "https://i.kym-cdn.com/photos/images/newsfeed/001/088/640/bf6.jpg",
    alt: "Smug Cat meme",
  },
  "calm cat": {
    src: "https://i.kym-cdn.com/photos/images/newsfeed/001/088/640/bf6.jpg",
    alt: "Smug Cat meme",
  },
  "huh cat": {
    src: "https://i.kym-cdn.com/photos/images/newsfeed/002/681/863/ede.gif",
    alt: "Huh Cat meme",
  },
  "wide-eye cat": {
    src: "https://i.kym-cdn.com/photos/images/newsfeed/002/681/863/ede.gif",
    alt: "Huh Cat meme",
  },
  "side-eye cat": {
    src: "https://i.kym-cdn.com/photos/images/newsfeed/002/681/863/ede.gif",
    alt: "Huh Cat meme",
  },
  "crying cat": {
    src: "https://i.kym-cdn.com/photos/images/newsfeed/001/384/531/8ed.jpg",
    alt: "Crying Cat meme",
  },
  "panic cat": {
    src: "https://media1.tenor.com/m/ZYfX9AFS7WQAAAAd/sunakook-cat.gif",
    alt: "Screaming Cat meme",
  },
  "screaming cat": {
    src: "https://media1.tenor.com/m/ZYfX9AFS7WQAAAAd/sunakook-cat.gif",
    alt: "Screaming Cat meme",
  },
};

function catAssetForLabel(label, tone) {
  if (CAT_MEME_ASSETS[label]) return CAT_MEME_ASSETS[label];
  if (tone === "good") return CAT_MEME_ASSETS["smug cat"];
  if (tone === "bad") return CAT_MEME_ASSETS["screaming cat"];
  return CAT_MEME_ASSETS["huh cat"];
}

function catInnerMarkup(tone, label) {
  const asset = catAssetForLabel(label, tone);
  return `
    <img
      class="meme-cat-photo"
      src="${asset.src}"
      alt="${escapeHtml(asset.alt)}"
      loading="lazy"
      decoding="async"
      referrerpolicy="no-referrer"
    />
  `;
}

function vibeTierFromTone(tone) {
  if (tone === "good") return "low";
  if (tone === "bad") return "high";
  return "medium";
}

function toneFromTier(tier) {
  if (tier === "low") return "good";
  if (tier === "high") return "bad";
  return "medium";
}

function catInnerMarkupForTier(tier) {
  const src = realityGifForTier(tier);
  const alt =
    tier === "high"
      ? "High stress cat meme"
      : tier === "low"
        ? "Low stress cat meme"
        : "Medium stress cat meme";

  return `
    <img
      class="meme-cat-photo"
      src="${src}"
      alt="${escapeHtml(alt)}"
      loading="lazy"
      decoding="async"
      referrerpolicy="no-referrer"
    />
  `;
}

function catMarkup(tone, label, compact = false) {
  return `<span class="meme-cat-${compact ? "token" : "badge"} meme-cat-${tone}">${catInnerMarkup(tone, label)}</span>`;
}

function applyCatVisual(id, tone, label, compact = false) {
  const el = $(id);
  if (!el) return;
  if (el.classList.contains("meme-cat-hero") || el.classList.contains("timeline-popup-emoji")) {
    el.classList.remove("meme-cat-good", "meme-cat-medium", "meme-cat-bad");
    el.classList.add(`meme-cat-${tone}`);
    el.innerHTML = catInnerMarkup(tone, label);
    return;
  }
  el.innerHTML = catMarkup(tone, label, compact);
}

function stopEmojiParticles() {
  if (emojiParticleTimer) {
    globalThis.clearInterval(emojiParticleTimer);
    emojiParticleTimer = 0;
  }
  if ($("emojiParticleField")) $("emojiParticleField").innerHTML = "";
}

function burstEmojiParticles(config, multiplier = 1.6) {
  if (page !== "dashboard" || dashboardUiStage !== "stress") return;
  const burstCount = Math.max(3, Math.round(config.burst * multiplier));
  for (let index = 0; index < burstCount; index += 1) {
    globalThis.setTimeout(() => spawnEmojiParticle(config), index * 42);
  }
}

function spawnEmojiParticle(config) {
  const field = $("emojiParticleField");
  if (!field) return;
  const particle = document.createElement("span");
  particle.className = `emoji-particle ${config.motion}`;
  particle.innerHTML = catMarkup(config.catTone, randomItem(config.cats), true);
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.setProperty("--particle-size", `${Math.round(86 + Math.random() * 24)}px`);
  particle.style.setProperty("--particle-duration", `${Math.round(config.durationMin + Math.random() * (config.durationMax - config.durationMin))}ms`);
  particle.style.setProperty("--particle-drift", `${Math.round((Math.random() - 0.5) * 180)}px`);
  particle.style.setProperty("--particle-rotate", `${Math.round((Math.random() - 0.5) * 140)}deg`);
  field.appendChild(particle);
  particle.addEventListener("animationend", () => particle.remove(), { once: true });
}

function refreshEmojiParticles(config) {
  stopEmojiParticles();
  if (page !== "dashboard" || dashboardUiStage !== "stress") return;
  for (let index = 0; index < config.burst; index += 1) {
    spawnEmojiParticle(config);
  }
  emojiParticleTimer = globalThis.setInterval(() => {
    if (dashboardUiStage !== "stress") {
      stopEmojiParticles();
      return;
    }
    spawnEmojiParticle(config);
  }, config.interval);
}

function realityGifForTier(tier) {
  if (tier === "high") return "https://media1.tenor.com/m/ZYfX9AFS7WQAAAAd/sunakook-cat.gif";
  if (tier === "medium") return "https://i.kym-cdn.com/photos/images/newsfeed/002/681/863/ede.gif";
  return "https://i.kym-cdn.com/photos/images/newsfeed/003/206/666/eff.gif";
}

function stressRoomGifForTier(tier) {
  if (tier === "high") return "https://media1.tenor.com/m/ZYfX9AFS7WQAAAAd/sunakook-cat.gif";
  if (tier === "medium") return "https://i.kym-cdn.com/photos/images/newsfeed/002/681/863/ede.gif";
  return "https://i.kym-cdn.com/photos/images/newsfeed/003/206/666/eff.gif";
}

function renderRealityCheck(sim) {
  if (!$("realityStatus")) return;
  const config = getStressEmotionConfig(sim);
  const realityCard = document.querySelector("#realityStage .reality-card");
  if (realityCard) {
    realityCard.style.setProperty("--reality-gif", `url("${realityGifForTier(config.tier)}")`);
  }
  setText("realityStatus", config.status);
  setHTML("realityNarrative", `${escapeHtml(profileDisplayName())}, ${decorate401kMentions(config.shortNarrative)}`);
  setText("realitySavingsPreview", currency(sim.ending.emergencyFund));
  setText("realityDebtPreview", currency(sim.ending.loanBalance));
  setText("realityBrokePreview", `${sim.negativeMonths} month${sim.negativeMonths === 1 ? "" : "s"}`);
  setText("realityHousingPreview", percent(sim.averageHousingRatio));
  setText("reality401kPreview", currency(sim.k401Summary.projectedValueAt65));
}

function renderStressRoom(sim) {
  if (!$("stressRoomStatus")) return;
  const config = getStressEmotionConfig(sim);
  const pressurePanel = $("pressurePanel");
  if (pressurePanel) {
    pressurePanel.style.setProperty("--stress-room-gif", `url("${stressRoomGifForTier(config.tier)}")`);
  }
  setText("stressRoomStatus", config.status);
  setText("stressRoomNarrative", `${profileDisplayName()}, ${config.fullNarrative}`);
  if (dashboardUiStage === "stress") {
    document.body.dataset.stressTier = config.tier;
    refreshEmojiParticles(config);
  } else {
    document.body.dataset.stressTier = "medium";
    stopEmojiParticles();
  }
}

function renderSharedState(sim) {
  setValue("careerSelect", state.career);
  setValue("citySelect", state.city);
  setValue("salaryInput", state.salary);
  setText("salaryValue", currency(state.salary));
  setValue("loanInput", state.studentLoan);
  setText("loanValue", currency(state.studentLoan));
  setValue("salaryGrowthInput", state.salaryGrowthRate);
  setText("salaryGrowthValue", formatPercentValue(state.salaryGrowthRate));
  setValue("cashFlowSalaryGrowthInput", state.salaryGrowthRate);
  setText("cashFlowSalaryGrowthValue", formatPercentValue(state.salaryGrowthRate));
  setValue("initial401kRateInput", state.k401ContributionRate);
  setText("initial401kRateValue", `${state.k401ContributionRate}%`);
  setValue("emergencyRateInput", state.emergencyRate);
  setText("emergencyRateValue", `${state.emergencyRate}%`);
  setText("emergencyRateNarrative", buildEmergencyRateNarrative(state, sim));
  setValue("lifestyleInput", getQualityOfLifeTier(state.lifestyle));
  setText("lifestyleDefinitionTitle", getQualityOfLifePreset(state.lifestyle).label);
  setText("lifestyleDefinitionCopy", getQualityOfLifePreset(state.lifestyle).description);

  setValue("fullTimeHoursInput", state.fullTimeHours);
  setText("fullTimeHoursValue", `${state.fullTimeHours}h`);
  setValue("targetIncomeInput", state.targetIncome);
  setText("targetIncomeValue", currency(state.targetIncome));
  setValue("targetIncomeGrowthInput", state.targetIncomeGrowthRate);
  setText("targetIncomeGrowthValue", formatPercentValue(state.targetIncomeGrowthRate));
  setValue("k401RateInput", state.k401ContributionRate);
  setText("k401RateValue", `${state.k401ContributionRate}%`);
  setText("monthly401kEmployee", currency(sim.k401Summary.monthlyEmployeeContribution));
  setText("monthly401kMatch", currency(sim.k401Summary.monthlyEmployerMatch));
  setText("monthly401kDeposit", currency(sim.k401Summary.monthlyTotalDeposit));
  setValue("future401kAgeInput", clamp(userProfile.age + 5, userProfile.age + 1, PLAN_401K_RULES.retirementAge));
  setValue("future401kRateInput", clamp(state.k401ContributionRate + 2, 0, 25));
  render401kAdjustmentList();

  setValue("rentInput", state.expenses.rent);
  setText("rentValue", currency(state.expenses.rent));
  setValue("utilitiesInput", state.expenses.utilities);
  setText("utilitiesValue", currency(state.expenses.utilities));
  setValue("groceriesInput", state.expenses.groceries);
  setText("groceriesValue", currency(state.expenses.groceries));
  setValue("transportInput", state.expenses.transport);
  setText("transportValue", currency(state.expenses.transport));
  setValue("healthcareInput", state.expenses.healthcare);
  setText("healthcareValue", currency(state.expenses.healthcare));
  setText("monthly401kExpense", currency(sim.averageMonthly401kContribution));
  if ($("buyCarToggle")) $("buyCarToggle").checked = Boolean(state.buyCar);
  if ($("buyHouseToggle")) $("buyHouseToggle").checked = Boolean(state.buyHouse);
  setValue("carPriceInput", state.carPrice);
  setValue("homePriceInput", state.homePrice);
  setValue("homeDownPaymentInput", state.homeDownPaymentPct);
  if ($("carPurchaseFields")) $("carPurchaseFields").classList.toggle("is-hidden", !state.buyCar);
  if ($("housePurchaseFields")) $("housePurchaseFields").classList.toggle("is-hidden", !state.buyHouse);
  setText("carPaymentValue", currency(calculateCarPayment(state)));
  setText("housePaymentValue", currency(calculateMortgagePayment(state)));
  setText("purchaseBurnValue", currency(calculateCarPayment(state) + calculateMortgagePayment(state)));

  setValue("eventTypeSelect", state.eventDraft.type);
  setValue("eventMonthInput", state.eventDraft.month);
  setValue("eventDurationInput", state.eventDraft.duration);
  setValue("eventIncomeInput", state.eventDraft.incomeDelta);
  if ($("eventMonthInput")) $("eventMonthInput").max = String(state.years * 12);
  if ($("eventEmergencyInput")) $("eventEmergencyInput").checked = state.eventDraft.emergencyEligible;
  setValue("eventEmergencyRateInput", state.eventDraft.emergencyUseRate || 0);
  setText("eventEmergencyRateValue", `${state.eventDraft.emergencyUseRate || 0}%`);
  if ($("eventEmergencyRateWrap")) $("eventEmergencyRateWrap").classList.toggle("is-hidden", !state.eventDraft.emergencyEligible);

  setValue("diseaseSelect", state.forecastDraft.disease);
  setValue("forecastDurationInput", state.forecastDraft.duration);
  setValue("insuranceCoverageInput", state.forecastDraft.insuranceCoverage);
  setText("insuranceCoverageValue", `${state.forecastDraft.insuranceCoverage}%`);
  setValue("paidLeaveInput", state.forecastDraft.paidLeave);
  setText("paidLeaveValue", `${state.forecastDraft.paidLeave}%`);
  if ($("forecastEmergencyToggle")) $("forecastEmergencyToggle").checked = Boolean(state.forecastDraft.useEmergencyStash);
  setValue("forecastEmergencyRateInput", state.forecastDraft.emergencyUseRate || 0);
  setText("forecastEmergencyRateValue", `${state.forecastDraft.emergencyUseRate || 0}%`);
  if ($("forecastEmergencyRateWrap")) $("forecastEmergencyRateWrap").classList.toggle("is-hidden", !state.forecastDraft.useEmergencyStash);
  setText("reality401kPreview", currency(sim.k401Summary.projectedValueAt65));
  setText("retirementPreview", currency(sim.k401Summary.projectedValueAt65));
}

function getStressPalette(stressIndex) {
  const t = clamp(stressIndex / 100, 0, 1);
  if (t < 0.31) {
    return {
      accent: "#7fd4ff",
      accentSoft: "#7ce9c9",
      warm: "rgba(164, 227, 255, 0.22)",
      cool: "rgba(119, 244, 210, 0.28)",
      hot: "rgba(104, 182, 255, 0.18)",
      background: "radial-gradient(circle at 12% 10%, rgba(104, 212, 255, 0.26), transparent 24%), radial-gradient(circle at 86% 14%, rgba(122, 255, 211, 0.2), transparent 26%), linear-gradient(180deg, #04131c 0%, #081f2d 48%, #0b2635 100%)",
      cardGlow: "rgba(122, 233, 255, 0.16)",
      cardEdge: "rgba(128, 222, 255, 0.28)",
      buttonStart: "#97a2ff",
      buttonEnd: "#6ef0cb",
    };
  }
  if (t < 0.71) {
    return {
      accent: "#ffcf77",
      accentSoft: "#ffac72",
      warm: "rgba(255, 204, 112, 0.24)",
      cool: "rgba(255, 174, 120, 0.18)",
      hot: "rgba(255, 146, 99, 0.26)",
      background: "radial-gradient(circle at 16% 12%, rgba(255, 208, 104, 0.26), transparent 24%), radial-gradient(circle at 84% 16%, rgba(255, 160, 113, 0.24), transparent 24%), linear-gradient(180deg, #160d06 0%, #24140d 46%, #321b10 100%)",
      cardGlow: "rgba(255, 188, 92, 0.14)",
      cardEdge: "rgba(255, 176, 107, 0.26)",
      buttonStart: "#ffd974",
      buttonEnd: "#ff9a7a",
    };
  }
  return {
    accent: "#ff7c91",
    accentSoft: "#ff4f68",
    warm: "rgba(255, 108, 118, 0.22)",
    cool: "rgba(122, 42, 52, 0.28)",
    hot: "rgba(255, 67, 84, 0.44)",
    background: "radial-gradient(circle at 14% 14%, rgba(255, 82, 113, 0.34), transparent 22%), radial-gradient(circle at 84% 18%, rgba(129, 21, 40, 0.3), transparent 28%), linear-gradient(180deg, #140204 0%, #220408 46%, #33070d 100%)",
    cardGlow: "rgba(255, 76, 97, 0.18)",
    cardEdge: "rgba(255, 102, 124, 0.3)",
    buttonStart: "#ff7c91",
    buttonEnd: "#ff9a7a",
  };
}

function scenarioStatus(stressIndex) {
  if (stressIndex < 34) return "smug cat";
  if (stressIndex < 56) return "huh cat";
  if (stressIndex < 76) return "wide-eye cat";
  return "screaming cat";
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function prepareCanvas(canvas, fallbackHeight) {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.max(globalThis.devicePixelRatio || 1, 1);
  const width = Math.max(Math.round(rect.width || canvas.clientWidth || canvas.width), 220);
  const height = Math.max(Math.round(rect.height || canvas.clientHeight || fallbackHeight || canvas.height), 180);
  const displayWidth = Math.round(width * dpr);
  const displayHeight = Math.round(height * dpr);
  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  return { ctx, width, height };
}

function resolveCanvasWidth(canvas, points, minWidth, pxPerPoint) {
  const width = Math.max(minWidth, points * pxPerPoint);
  canvas.style.width = `${width}px`;
  return width;
}

function drawChartLegend(ctx, entries, startX, startY, itemGap = 18) {
  let cursorX = startX;
  entries.forEach((entry) => {
    ctx.fillStyle = entry.color;
    roundRect(ctx, cursorX, startY - 9, 14, 14, 5);
    ctx.fill();
    ctx.fillStyle = "rgba(247, 248, 253, 0.88)";
    ctx.font = "12px Avenir Next, sans-serif";
    ctx.fillText(entry.label, cursorX + 20, startY + 2);
    cursorX += 20 + ctx.measureText(entry.label).width + itemGap;
  });
}

function renderLineChart(canvasId, {
  labels,
  series,
  minWidth = 920,
  pxPerPoint = 46,
  height = 320,
  leftFormatter = compactCurrency,
  rightFormatter = (value) => `${Math.round(value)}`,
  rightRange = null,
  markers = [],
  legendY = 24,
  legendGap = 18,
}) {
  const canvas = $(canvasId);
  if (!canvas || !labels.length || !series.length) return;
  resolveCanvasWidth(canvas, labels.length, minWidth, pxPerPoint);
  const { ctx, width, height: renderHeight } = prepareCanvas(canvas, height);
  const padding = { top: 54, right: rightRange ? 62 : 24, bottom: 46, left: 58 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = renderHeight - padding.top - padding.bottom;
  const leftSeries = series.filter((entry) => entry.axis !== "right");
  const rightSeries = series.filter((entry) => entry.axis === "right");
  const leftValues = leftSeries.flatMap((entry) => entry.values);
  const leftMax = Math.max(...leftValues, 1);
  const leftMin = Math.min(...leftValues, 0);
  const leftRange = leftMax - leftMin || 1;
  const rightMax = rightRange ? rightRange.max : Math.max(...rightSeries.flatMap((entry) => entry.values), 100);
  const rightMin = rightRange ? rightRange.min : Math.min(...rightSeries.flatMap((entry) => entry.values), 0);
  const rightScale = rightMax - rightMin || 1;
  const xForIndex = (index) => padding.left + (index / Math.max(labels.length - 1, 1)) * plotWidth;
  const yForLeft = (value) => padding.top + ((leftMax - value) / leftRange) * plotHeight;
  const yForRight = (value) => padding.top + ((rightMax - value) / rightScale) * plotHeight;

  ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
  ctx.lineWidth = 1;
  ctx.font = "11px Avenir Next, sans-serif";
  ctx.fillStyle = "rgba(170, 179, 202, 0.86)";
  ctx.beginPath();
  for (let index = 0; index <= 4; index += 1) {
    const ratio = index / 4;
    const y = padding.top + plotHeight * ratio;
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.fillText(leftFormatter(leftMax - leftRange * ratio), 8, y + 4);
    if (rightSeries.length) ctx.fillText(rightFormatter(rightMax - rightScale * ratio), width - padding.right + 10, y + 4);
  }
  ctx.stroke();

  const labelStep = Math.max(1, Math.ceil(labels.length / 8));
  labels.forEach((label, index) => {
    if (index % labelStep !== 0 && index !== labels.length - 1) return;
    const x = xForIndex(index);
    ctx.fillStyle = "rgba(170, 179, 202, 0.82)";
    ctx.fillText(label, x - 14, renderHeight - 14);
  });

  drawChartLegend(ctx, series.map((entry) => ({ label: entry.label, color: entry.color })), padding.left, legendY, legendGap);

  markers.forEach((marker) => {
    const index = clamp(Number(marker.index || 0), 0, Math.max(labels.length - 1, 0));
    const x = xForIndex(index);
    ctx.save();
    ctx.setLineDash([7, 7]);
    ctx.strokeStyle = marker.color || "rgba(255, 217, 116, 0.9)";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(x, padding.top);
    ctx.lineTo(x, padding.top + plotHeight);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = marker.color || "#ffd974";
    ctx.font = "12px Avenir Next, sans-serif";
    ctx.fillText(marker.label, Math.min(x + 8, width - padding.right - 118), padding.top + 14);
    ctx.restore();
  });

  series.forEach((entry) => {
    ctx.beginPath();
    entry.values.forEach((value, index) => {
      const x = xForIndex(index);
      const y = entry.axis === "right" ? yForRight(value) : yForLeft(value);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = entry.color;
    ctx.lineWidth = entry.width || 3;
    ctx.setLineDash(entry.dashed ? [8, 6] : []);
    ctx.stroke();
    ctx.setLineDash([]);

    entry.values.forEach((value, index) => {
      const x = xForIndex(index);
      const y = entry.axis === "right" ? yForRight(value) : yForLeft(value);
      ctx.beginPath();
      ctx.arc(x, y, 3.2, 0, Math.PI * 2);
      ctx.fillStyle = entry.color;
      ctx.fill();
    });
  });
}

function renderChartJsLine(canvasId, {
  labels,
  datasets,
  minWidth,
  pxPerPoint,
  height,
  stacked = false,
  percentAxis = false,
  tooltipFooter = null,
  legendPadding = 16,
  layoutPaddingTop = 0,
}) {
  if (!globalThis.Chart) return false;
  const canvas = ensureChartCanvas(canvasId, labels.length, minWidth, pxPerPoint, height);
  if (!canvas) return false;
  destroyChart(canvasId);
  const chart = new globalThis.Chart(canvas.getContext("2d"), {
    type: "line",
    data: { labels, datasets },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      animation: false,
      layout: {
        padding: {
          top: layoutPaddingTop,
        },
      },
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: {
          position: "top",
          align: "start",
          labels: {
            color: "#f7f8fd",
            boxWidth: 12,
            boxHeight: 12,
            padding: legendPadding,
            font: { family: "Avenir Next, sans-serif", size: 12 },
          },
        },
        tooltip: {
          backgroundColor: "rgba(8, 14, 24, 0.94)",
          titleColor: "#f7f8fd",
          bodyColor: "#d9def2",
          footerColor: "#9ea8c7",
          padding: 14,
          displayColors: true,
          callbacks: {
            label(context) {
              const raw = Number(context.raw || 0);
              return percentAxis
                ? `${context.dataset.label}: ${raw.toFixed(1)}%`
                : `${context.dataset.label}: ${compactCurrency(raw)}`;
            },
            footer(contexts) {
              if (!tooltipFooter) return "";
              const index = contexts[0]?.dataIndex ?? 0;
              return tooltipFooter(index);
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "rgba(170, 179, 202, 0.86)",
            maxRotation: 0,
            autoSkip: labels.length > 12,
          },
          grid: { color: "rgba(255,255,255,0.06)" },
          stacked,
        },
        y: {
          min: 0,
          max: percentAxis ? 100 : undefined,
          ticks: {
            color: "rgba(170, 179, 202, 0.86)",
            callback(value) {
              return percentAxis ? `${value}%` : compactCurrency(value);
            },
          },
          grid: { color: "rgba(255,255,255,0.08)" },
          stacked,
        },
      },
      elements: {
        line: { tension: 0.34, borderWidth: 2.5 },
        point: { radius: 2.8, hoverRadius: 4.2 },
      },
    },
  });
  chartRegistry.set(canvasId, chart);
  return true;
}

function getCurrentMonthlyBurn(currentState, sim) {
  const k401Summary = sim?.k401Summary || get401kSummary(currentState);
  return (
    currentState.expenses.rent +
    currentState.expenses.utilities +
    currentState.expenses.groceries +
    currentState.expenses.transport +
    currentState.expenses.healthcare +
    calculateStudentLoanPayment(currentState.studentLoan) +
    calculateCarPayment(currentState) +
    calculateMortgagePayment(currentState) +
    k401Summary.monthlyEmployeeContribution
  );
}

function buildEmergencyRateNarrative(currentState, sim) {
  const monthlyBurn = getCurrentMonthlyBurn(currentState, sim);
  const coverageMonths = sim.ending.emergencyFund / Math.max(monthlyBurn, 1);
  return `At ${currentState.emergencyRate}%, the projected emergency stash could cover about ${coverageMonths.toFixed(1)} months of your current monthly burn (${currency(monthlyBurn)}/mo).`;
}

function aggregateSimulationYears(sim) {
  const buckets = [];
  for (let start = 0; start < sim.records.length; start += 12) {
    const slice = sim.records.slice(start, start + 12);
    if (!slice.length) continue;
    const last = slice[slice.length - 1];
    const yearIndex = buckets.length;
    buckets.push({
      age: userProfile.age + yearIndex,
      label: `Age ${userProfile.age + yearIndex}`,
      phase: userProfile.age + yearIndex >= PLAN_401K_RULES.retirementAge ? "retirement" : "working",
      k401Status: userProfile.age + yearIndex >= PLAN_401K_RULES.retirementAge ? "Retirement: Social Security + 401k withdrawals" : "Working Years: Contributing to 401k",
      incomeStream: slice.reduce((sum, record) => sum + record.grossIncome, 0),
      annual401kContribution: slice.reduce((sum, record) => sum + record.monthly401kContribution, 0),
      annual401kEmployerMatch: slice.reduce((sum, record) => sum + (record.monthly401kEmployerMatch || 0), 0),
      annual401kWithdrawal: slice.reduce((sum, record) => sum + (record.monthly401kWithdrawal || 0), 0),
      k401CashflowType: "expense",
      k401CashflowAmount: slice.reduce((sum, record) => sum + record.monthly401kContribution + (record.monthly401kEmployerMatch || 0), 0),
      emergencyFund: last.emergencyFund,
      retirementBalance: last.retirementBalance,
      annualExpenses: slice.reduce((sum, record) => sum + record.essentials, 0),
      annualNetIncome: slice.reduce((sum, record) => sum + record.netIncome, 0),
      source: "simulation",
    });
  }
  return buckets;
}

function buildRetirementProjection(sim) {
  lastRetirementProjection = sim.projectionYears || [];
  return lastRetirementProjection;
}

function k401TimelineTone(record) {
  if (record.phase === "retirement") return "medium";
  if (record.annual401kPaused || !record.annual401kContribution) return "bad";
  if (record.current401kRate >= 10) return "good";
  return "medium";
}

function k401TimelineLabel(record) {
  if (record.phase === "retirement") return "Withdrawing";
  if (record.annual401kPaused || !record.annual401kContribution) return "Paused due to event";
  return `${record.current401kRate}% contribution`;
}

function renderFlowChart(sim) {
  const yearly = sim.records.filter((record) => record.month % 12 === 0 || record.month === sim.records.length);
  const labels = yearly.map((record) => `Year ${Math.ceil(record.month / 12)}`);
  const reality = yearly.map((record) => Math.max(record.grossIncome * 12, 0));
  const desired = yearly.map((record) => {
    const yearIndex = Math.max(0, Math.ceil(record.month / 12) - 1);
    return state.targetIncome * (1 + state.targetIncomeGrowthRate / 100) ** yearIndex;
  });
  const rendered = renderChartJsLine("flowChart", {
    labels,
    datasets: [
      { label: "Desired", data: desired, borderColor: "#ffd974", backgroundColor: "rgba(255, 217, 116, 0.12)", borderDash: [8, 6], fill: false },
      { label: "Reality", data: reality, borderColor: "#97a2ff", backgroundColor: "rgba(151, 162, 255, 0.14)", fill: true },
    ],
    minWidth: 1320,
    pxPerPoint: 92,
    height: 320,
    legendPadding: 42,
    layoutPaddingTop: 4,
  });
  if (!rendered) {
    renderLineChart("flowChart", {
      labels,
      series: [
        { label: "Desired", values: desired, color: "#ffd974", dashed: true, width: 2.5 },
        { label: "Reality", values: reality, color: "#97a2ff" },
      ],
      minWidth: 1320,
      pxPerPoint: 92,
      height: 320,
      legendY: 8,
      legendGap: 48,
    });
  }
}

function buildEventComparisonPoints(records) {
  const eventMonths = records.filter((record) => record.activeEvents.length).map((record) => record.month);
  const eventStart = eventMonths.length ? Math.min(...eventMonths) : 1;
  const eventEnd = eventMonths.length ? Math.max(...eventMonths) : Math.min(records.length, 6);
  const start = Math.max(1, eventStart - 3);
  const end = Math.min(records.length, eventEnd + 5);
  const window = records.slice(start - 1, end);
  const bucketSize = window.length > 14 ? Math.ceil(window.length / 14) : 1;
  const points = [];

  for (let index = 0; index < window.length; index += bucketSize) {
    const slice = window.slice(index, index + bucketSize);
    const last = slice[slice.length - 1];
    const spendableIncome = slice.reduce((sum, record) => sum + Math.max(record.netIncome - record.retirementExpense, 0), 0) / slice.length;
    let label = `Post +${Math.max(0, last.month - eventEnd)}m`;
    if (last.month < eventStart) label = `Pre ${eventStart - last.month}m`;
    else if (last.month <= eventEnd) label = `Event +${last.month - eventStart}m`;
    points.push({
      label,
      income: spendableIncome,
      expenses: slice.reduce((sum, record) => sum + record.totalExpenses, 0) / slice.length,
      emergencyFund: last.emergencyFund,
    });
  }
  return points;
}

function renderEventImpactChart(records) {
  const points = buildEventComparisonPoints(records);
  if (globalThis.Chart) {
    const canvas = ensureChartCanvas("eventImpactChart", points.length, 760, 72, 280);
    if (!canvas) return;
    destroyChart("eventImpactChart");
    const chart = new globalThis.Chart(canvas.getContext("2d"), {
      type: "line",
      data: {
        labels: points.map((point) => point.label),
        datasets: [
          { label: "Income", data: points.map((point) => point.income), borderColor: "#97a2ff", backgroundColor: "rgba(151, 162, 255, 0.14)", yAxisID: "money" },
          { label: "Expenses", data: points.map((point) => point.expenses), borderColor: "#ff9a7a", backgroundColor: "rgba(255, 154, 122, 0.12)", yAxisID: "money" },
          { label: "Emergency Fund", data: points.map((point) => point.emergencyFund), borderColor: "#6ef0cb", backgroundColor: "rgba(110, 240, 203, 0.12)", yAxisID: "money" },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        animation: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            position: "top",
            align: "start",
            labels: { color: "#f7f8fd", boxWidth: 12, boxHeight: 12, padding: 16 },
          },
          tooltip: {
            backgroundColor: "rgba(8, 14, 24, 0.94)",
            callbacks: {
              label(context) {
                const raw = Number(context.raw || 0);
                return `${context.dataset.label}: ${compactCurrency(raw)}`;
              },
            },
          },
        },
        scales: {
          x: {
            ticks: { color: "rgba(170, 179, 202, 0.86)", maxRotation: 0 },
            grid: { color: "rgba(255,255,255,0.06)" },
          },
          money: {
            position: "left",
            ticks: { color: "rgba(170, 179, 202, 0.86)", callback: (value) => compactCurrency(value) },
            grid: { color: "rgba(255,255,255,0.08)" },
          },
        },
        elements: { line: { tension: 0.34, borderWidth: 2.5 }, point: { radius: 2.8, hoverRadius: 4.2 } },
      },
    });
    chartRegistry.set("eventImpactChart", chart);
    return;
  }

  renderLineChart("eventImpactChart", {
    labels: points.map((point) => point.label),
    series: [
      { label: "Income", values: points.map((point) => point.income), color: "#97a2ff" },
      { label: "Expenses", values: points.map((point) => point.expenses), color: "#ff9a7a" },
      { label: "Emergency Fund", values: points.map((point) => point.emergencyFund), color: "#6ef0cb" },
    ],
    minWidth: 760,
    pxPerPoint: 72,
    height: 280,
  });
}

function renderCareerSuggestions(recommendedIncome) {
  if (!$("careerSuggestions")) return;
  const candidates = Object.values(careerData)
    .map((career) => {
      const delta = career.baseSalary - recommendedIncome.floor;
      return { ...career, delta, fitScore: clamp(100 - Math.abs(delta) / 800, 22, 98) };
    })
    .filter((career) => career.baseSalary >= recommendedIncome.floor * 0.9)
    .sort((a, b) => Math.abs(a.delta) - Math.abs(b.delta))
    .slice(0, 3);

  if (!candidates.length) {
    setHTML(
      "careerSuggestions",
      `<div class="suggestion-item"><div class="suggestion-top"><strong>Stretch target</strong><span class="suggestion-score">Needs upskilling</span></div><p>The current lifestyle exceeds the sample role set, which suggests lowering fixed costs or targeting a higher-paying career tier.</p></div>`,
    );
    return;
  }

  setHTML(
    "careerSuggestions",
    candidates
      .map(
        (career) =>
          `<div class="suggestion-item"><div class="suggestion-top"><strong>${career.label}</strong><span class="suggestion-score">Fit ${Math.round(career.fitScore)}</span></div><p>${currency(career.baseSalary)} starting salary. ${career.blurb}</p></div>`,
      )
      .join(""),
  );
}

function renderPartTimeJobsBuilder() {
  if (!$("partTimeJobsList")) return;
  setHTML(
    "partTimeJobsList",
    state.partTimeJobs
      .map(
        (job) => `
          <div class="parttime-row">
            <label class="field">
              <span>Job</span>
              <select class="parttime-role" data-job-id="${job.id}">
                ${Object.entries(partTimeData)
                  .map(([value, item]) => `<option value="${value}" ${value === job.role ? "selected" : ""}>${item.label}</option>`)
                  .join("")}
              </select>
            </label>
            <label class="field">
              <span>Hours / week</span>
              <input class="parttime-hours" data-job-id="${job.id}" type="number" min="0" max="32" step="1" value="${job.hours}" />
            </label>
            <div class="parttime-pay">
              <strong>${currency(partTimeData[job.role].hourly * job.hours * 52)}</strong>
              <span>${currency(partTimeData[job.role].hourly)}/hr</span>
            </div>
            <button class="remove-button parttime-remove" data-job-id="${job.id}">Remove</button>
          </div>
        `,
      )
      .join(""),
  );
}

function render401kAdjustmentList() {
  if (!$("k401AdjustmentList")) return;
  const adjustments = getSorted401kAdjustments(state).filter((item) => item.age > userProfile.age);
  if (!adjustments.length) {
    setHTML("k401AdjustmentList", `<div class="analysis-item"><strong>No scheduled changes yet</strong><p>Your baseline 401k rate stays active unless you add future shifts here.</p></div>`);
    return;
  }
  setHTML(
    "k401AdjustmentList",
    adjustments
      .map(
        (item) => `
          <div class="analysis-item">
            <div class="event-top">
              <strong>Age ${item.age}: Rate shifts to ${item.rate}%</strong>
              <button class="remove-button k401-adjustment-remove" data-adjustment-id="${item.id}" type="button">Remove</button>
            </div>
          </div>
        `,
      )
      .join(""),
  );
}

function renderForecastScenarioBuilder(sim) {
  if (!$("diseaseBreakdown")) return;
  if (!sim.forecast.scenarios.length) {
    setHTML("diseaseBreakdown", `<div class="analysis-item"><strong>No illness selected</strong><p>Select a disease to add a detailed medical cost forecast into the model.</p></div>`);
    return;
  }

  setHTML(
    "diseaseBreakdown",
    sim.forecast.scenarios
      .map(
        (scenario) => `
          <div class="analysis-item">
            <div class="event-top">
              <strong>${scenario.label}</strong>
            </div>
            <div class="forecast-row-grid">
              <label class="field">
                <span>Disease</span>
                <select class="forecast-disease" data-forecast-id="${scenario.id}">
                  ${Object.entries(diseaseData)
                    .filter(([value]) => value !== "none")
                    .map(([value, item]) => `<option value="${value}" ${value === scenario.disease ? "selected" : ""}>${item.label}</option>`)
                    .join("")}
                </select>
              </label>
              <label class="field">
                <span>Duration (months)</span>
                <input class="forecast-duration" data-forecast-id="${scenario.id}" type="number" min="1" step="1" value="${scenario.duration}" />
              </label>
              <label class="field">
                <span>Insurance coverage</span>
                <input class="forecast-insurance" data-forecast-id="${scenario.id}" type="number" min="0" max="95" step="5" value="${scenario.insuranceCoverage}" />
              </label>
              <label class="field">
                <span>Paid leave</span>
                <input class="forecast-paid-leave" data-forecast-id="${scenario.id}" type="number" min="0" max="100" step="5" value="${scenario.paidLeave}" />
              </label>
            </div>
            <div class="checkbox-row toggle-row" style="margin: 12px 0;">
              <input class="forecast-emergency-toggle" data-forecast-id="${scenario.id}" id="forecastEmergency_${scenario.id}" type="checkbox" ${scenario.emergencyEligible ? "checked" : ""} />
              <label for="forecastEmergency_${scenario.id}">Use emergency stash</label>
            </div>
            <label class="field ${scenario.emergencyEligible ? "" : "is-hidden"}" id="forecastEmergencyRate_${scenario.id}">
              <span>Emergency Use Rate (%)</span>
              <input class="forecast-emergency-rate" data-forecast-id="${scenario.id}" type="number" min="0" max="100" step="5" value="${scenario.emergencyUseRate || 0}" />
            </label>
            <p>${scenario.note}</p>
            <p>Out-of-pocket total ${currency(scenario.totalCost)}. Monthly impact ${currency(scenario.monthlyCost)}. Income loss pressure ${percent(Math.abs(scenario.incomeDelta))}.</p>
            <p>Detailed costs: ${scenario.breakdowns.map((entry) => `${entry.label}: ${currency(entry.outOfPocket)}`).join(" / ")}</p>
            <button class="remove-button forecast-remove" data-forecast-id="${scenario.id}">Remove</button>
          </div>
        `,
      )
      .join(""),
  );
}

function renderEventDraft() {
  if (!$("eventBreakdownFields")) return;
  const preset = eventPresets[state.eventDraft.type];
  setText("eventPresetNote", preset.note);
  setHTML(
    "eventBreakdownFields",
    preset.breakdowns
      .map((item) => {
        const value = state.eventDraft.breakdowns[item.key] ?? item.amount;
        return `<label class="field"><span>${item.label}</span><input class="event-breakdown" data-key="${item.key}" type="number" min="0" step="50" value="${value}" /></label>`;
      })
      .join(""),
  );
}

function renderEventList() {
  if (!$("eventList")) return;
  if (!state.events.length) {
    setHTML("eventList", `<div class="event-item"><p>No life events yet. Add a wedding, trip, move, or family support scenario to test the chain reaction.</p></div>`);
    return;
  }
  setHTML(
    "eventList",
    state.events
      .slice()
      .sort((a, b) => a.month - b.month)
      .map(
        (event) =>
          `<div class="event-item"><div class="event-top"><strong>${event.label}</strong><span class="mini-tag">${monthLabel(event.month)}</span></div><p>Total ${currency(event.totalCost)} spread across ${event.duration} month${event.duration > 1 ? "s" : ""}. Monthly impact: ${currency(event.monthlyCost)}.</p><p>${event.note}</p><p>Emergency stash use: ${event.emergencyEligible ? `${event.emergencyUseRate}%` : "Off"}.</p><button class="remove-button" data-event-id="${event.id}">Remove</button></div>`,
      )
      .join(""),
  );
}

function financialMemeMoment(record) {
  if ("phase" in record) {
    const monthlyNeed = Math.max(record.annualExpenses / 12, 1);
    const coverageMonths = record.emergencyFund / monthlyNeed;
    if (record.phase === "retirement" && record.incomeStream < record.annualExpenses * 0.78) {
      return { cat: "panic cat", title: "Retirement cliff", copy: `${record.label}: the post-work income drop is rough here, so the stash starts doing CPR for the plan.` };
    }
    if (coverageMonths < 2 || (record.phase === "working" && record.incomeStream < record.annualExpenses)) {
      return { cat: "crying cat", title: "Barely holding on", copy: `${record.label}: income is not keeping enough distance from costs, so one bad surprise could body the budget.` };
    }
    if (record.phase === "retirement" && coverageMonths > 8 && record.retirementBalance > record.annualExpenses * 5) {
      return { cat: "calm cat", title: "Retirement has a pulse", copy: `${record.label}: the 401k is still hydrated and the stash can cover real life instead of just manifesting.` };
    }
    if (record.retirementBalance > Math.max(record.incomeStream, 1) * 3 && coverageMonths > 5) {
      return { cat: "smug cat", title: "Soft life reserve", copy: `${record.label}: the emergency stash and 401k are both thick enough that the plan feels genuinely calmer.` };
    }
    return { cat: "wide-eye cat", title: "Still in motion", copy: `${record.label}: the plan is moving forward, but it still needs consistency more than luck.` };
  }

  if (record.balance < 0 || record.monthlyNet < -400) {
    return { cat: "screaming cat", title: "Certified cooked", copy: `${record.label}: cash is underwater, the vibe is in the blender, and this month needs an intervention.` };
  }
  if (record.activeEvents.length && record.eventCost > 900) {
    return { cat: "huh cat", title: "Plot twist arc", copy: `${record.label}: events are body-checking the budget, so this is the clown-car chapter.` };
  }
  if (record.emergencyFund > record.essentials * 4 && record.retirementBalance > record.netIncome * 2) {
    return { cat: "smug cat", title: "Soft life unlocked", copy: `${record.label}: your emergency fund and 401k are both looking hydrated. This is premium peace.` };
  }
  if (record.monthlyNet > 0 && record.retirementBalance > record.netIncome) {
    return { cat: "happy cat", title: "Actually climbing", copy: `${record.label}: the cashflow is up and the 401k is stacking. Respect.` };
  }
  return { cat: "huh cat", title: "Still making it work", copy: `${record.label}: not glamorous, not doomed, just one more month of budget bread.` };
}

function openTimelinePopup(index) {
  const popup = $("timelinePopup");
  if (!popup || !lastRetirementProjection.length) return;
  const record = lastRetirementProjection[clamp(Number(index) || 0, 0, lastRetirementProjection.length - 1)];
  const popupTier = lastSimulation ? getStressEmotionConfig(lastSimulation).tier : vibeTierFromTone(k401TimelineTone(record));
  const tone = toneFromTier(popupTier);
  const popupEmoji = $("timelinePopupEmoji");
  if (popupEmoji) {
    popupEmoji.className = "timeline-popup-emoji";
    popupEmoji.classList.add(`meme-cat-${tone}`);
    popupEmoji.innerHTML = catInnerMarkupForTier(popupTier);
  }
  setText("timelinePopupTitle", `Year ${record.simulationYear}: ${k401TimelineLabel(record)}`);

  if (record.phase === "retirement") {
    setText(
      "timelinePopupCopy",
      [
        `Year: ${record.simulationYear}`,
        `Age: ${record.age}`,
        `401k status: withdrawing`,
        `Annual 401k withdrawal: ${currency(record.annual401kWithdrawal)}`,
        `Social Security: ${currency(record.annualSocialSecurity || 0)}`,
        `Total 401k Remaining Balance: ${currency(record.retirementBalance)}`,
      ].join("\n"),
    );
  } else {
    setText(
      "timelinePopupCopy",
      [
        `Year: ${record.simulationYear}`,
        `Age: ${record.age}`,
        `401k status: ${k401TimelineLabel(record).toLowerCase()}`,
        `Contribution rate: ${record.current401kRate}%`,
        `Annual 401k Contribution: ${currency(record.annual401kContribution)}`,
        `Employer Match: ${currency(record.annual401kEmployerMatch)}`,
        `Total 401k Balance: ${currency(record.retirementBalance)}`,
      ].join("\n"),
    );
  }
  popup.hidden = false;
}

function closeTimelinePopup() {
  const popup = $("timelinePopup");
  if (popup) popup.hidden = true;
}

function renderEmergencyTimeline(projection) {
  if (!$("emergencyTimeline")) return;
  const highlighted = projection
    .map((record, index) => ({ ...record, index }))
    .filter((record, index, list) => index === 0 || index === list.length - 1 || record.age === PLAN_401K_RULES.retirementAge || record.age % 3 === 0 || record.annual401kPaused);
  setHTML(
    "emergencyTimeline",
    highlighted
      .map(
        (record) => `
          <button class="timeline-node timeline-node--${k401TimelineTone(record)}" data-projection-index="${record.index}" type="button">
            <span>Year ${record.simulationYear}</span>
            <strong>${k401TimelineLabel(record)}</strong>
          </button>
        `,
      )
      .join(""),
  );
}

function renderStressPalette(stressIndex) {
  const ring = $("scoreRing");
  const panel = $("pressurePanel");
  if (!ring || !panel) return;
  const palette = getStressPalette(stressIndex);
  const angle = Math.round((stressIndex / 100) * 360);
  ring.style.background = `conic-gradient(${palette.accent} ${angle}deg, ${palette.accentSoft} ${angle}deg, rgba(255,255,255,0.45) ${angle}deg)`;
  document.body.style.setProperty("--dashboard-bg", palette.background);
  document.body.style.setProperty("--card-accent-glow", palette.cardGlow);
  document.body.style.setProperty("--card-accent-edge", palette.cardEdge);
  document.body.style.setProperty("--button-start", palette.buttonStart);
  document.body.style.setProperty("--button-end", palette.buttonEnd);
  panel.style.setProperty("--panel-cool", palette.cool);
  panel.style.setProperty("--panel-warm", palette.warm);
  panel.style.setProperty("--panel-hot", palette.hot);
  panel.style.setProperty("--stress-accent", palette.accent);
  panel.style.setProperty("--stress-accent-soft", palette.accentSoft);
}

function renderOverviewWidgets(sim) {
  if ($("stressScore")) setText("stressScore", `${Math.round(sim.stressIndex)}`);
  if ($("housingBurden")) setText("housingBurden", percent(sim.averageHousingRatio));
  if ($("coverageValue")) setText("coverageValue", `${sim.finalCoverageMonths.toFixed(1)} mo`);
  if ($("negativeMonthsValue")) setText("negativeMonthsValue", `${sim.negativeMonths}`);
  if ($("retirementPreview")) setText("retirementPreview", currency(sim.k401Summary.projectedValueAt65));
  renderStressPalette(sim.stressIndex);
}

function renderCurveChart(records) {
  const canvas = $("curveChart");
  if (!canvas) return;
  const { ctx, width, height } = prepareCanvas(canvas, 280);
  const compact = width < 620;
  const padding = { top: compact ? 34 : 30, right: compact ? 16 : 24, bottom: 30, left: compact ? 44 : 48 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const values = records.flatMap((record) => [record.netIncome, record.totalExpenses]);
  const max = Math.max(...values, 1);
  const min = 0;
  const range = max - min || 1;

  ctx.strokeStyle = "rgba(31, 36, 55, 0.08)";
  ctx.lineWidth = 1;
  ctx.font = `${compact ? 10.5 : 12}px Avenir Next, sans-serif`;
  ctx.fillStyle = "rgba(102, 112, 137, 0.92)";
  ctx.beginPath();
  for (let index = 0; index <= 4; index += 1) {
    const y = padding.top + (plotHeight / 4) * index;
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.fillText(compactCurrency(max - (range / 4) * index), 6, y + 4);
  }
  ctx.stroke();

  const drawLine = (getter, color) => {
    ctx.beginPath();
    records.forEach((record, index) => {
      const x = padding.left + (index / (records.length - 1 || 1)) * plotWidth;
      const y = padding.top + ((max - getter(record)) / range) * plotHeight;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  drawLine((record) => record.netIncome, "#1d7dfa");
  drawLine((record) => record.totalExpenses, "#ff9a7a");
  ctx.fillStyle = "rgba(31, 36, 55, 0.92)";
  ctx.font = `${compact ? 11 : 12}px Avenir Next, sans-serif`;
  ctx.fillText(compact ? "Income / expenses" : "Income / expenses (blue vs coral)", padding.left, 18);
}

function renderDashboardPage(sim) {
  const projection = buildRetirementProjection(sim);
  const forecastStressIncrease = calculateForecastStressIncrease(sim);
  setText("stressScore", `${Math.round(sim.stressIndex)}`);
  setText("housingBurden", percent(sim.averageHousingRatio));
  setText("coverageValue", `${sim.finalCoverageMonths.toFixed(1)} mo`);
  setText("negativeMonthsValue", `${sim.negativeMonths}`);
  setText("endingEmergency", currency(sim.ending.emergencyFund));
  setText("retirementPreview", currency(sim.k401Summary.projectedValueAt65));
  setText("insightCopy", buildOverviewInsight(sim));
  renderIncomePage(sim);
  renderExpensesPage(sim);
  renderEventsPage();
  renderForecastPage(sim);
  renderStressRoom(sim);
  renderFlowChart(sim);
  renderEventImpactChart(sim.records);
  renderEmergencyTimeline(projection);
  renderStressPalette(sim.stressIndex);
}

function renderIncomePage(sim) {
  renderPartTimeJobsBuilder();
  renderCareerSuggestions(sim.recommendedIncome);
}

function renderExpensesPage() {}

function calculateForecastStressIncrease(sim) {
  return sim.forecast.scenarios.reduce((sum, scenario) => {
    let impact = scenario.monthlyCost / 170 + Math.abs(scenario.incomeDelta) * 0.42 + scenario.totalCost / 9000;
    impact *= clamp(1.08 - (scenario.effectiveCoveragePct / 100) * 0.34 - (scenario.healthcarePreparedness - 1) * 0.22, 0.46, 1.22);
    if (scenario.emergencyEligible) {
      impact *= 1 - ((scenario.emergencyUseRate || 0) / 100) * 0.45;
    }
    return sum + impact;
  }, 0);
}

function renderForecastPage(sim) {
  const stressIncrease = calculateForecastStressIncrease(sim);
  setText("forecastTotalCost", currency(sim.forecast.totalCost));
  setText("forecastMonthlyCost", `+${stressIncrease.toFixed(1)} pts`);
  setText("forecastIncomeLoss", percent(Math.abs(sim.forecast.incomeDelta)));
  renderForecastScenarioBuilder(sim);
  if (!sim.forecast.enabled) {
    setText("forecastNarrative", diseaseData.none.note);
    return;
  }
  const stashActive = sim.forecast.scenarios.some((scenario) => scenario.emergencyEligible);
  setText(
    "forecastNarrative",
    stashActive
      ? `${sim.forecast.scenarios.length} disease scenario(s) are active. Each one updates medical bills, income loss, emergency stash usage, and the global Stress Room score immediately.`
      : `${sim.forecast.scenarios.length} disease scenario(s) are active. Each one updates medical bills, income loss, and the global Stress Room score immediately.`,
  );
}

function stressStrategies(sim) {
  const list = [];
  if (sim.stressComponents.housing > 18) list.push("Housing is the main pressure point, so reducing rent or moving to a lower-cost city would have the biggest effect.");
  if (sim.stressComponents.reserve > 10) list.push("Emergency savings are too thin. Increasing the emergency fund rate or cutting variable spending would reduce fragility.");
  if (sim.profile.gapToTarget > 0) list.push("Income is below the configured goal, so part-time hours or higher-paying work are the most direct stabilizers.");
  if (sim.averageEventLoad > 250) list.push("Life-event spending is creating ongoing stress. Spreading events over more months would soften the shock.");
  if (!list.length) list.push("Current pressure is relatively controlled. The best strategy is preserving the reserve and avoiding lifestyle inflation.");
  return list;
}

function renderStressPage(sim) {
  const entries = [
    { label: "Housing pressure", value: sim.stressComponents.housing, body: "Rent takes too much of take-home income over time." },
    { label: "Negative months", value: sim.stressComponents.negative, body: "Too many months end below zero after expenses and events." },
    { label: "Debt strain", value: sim.stressComponents.debt, body: "Balance dropping below zero increases structural financial pressure." },
    { label: "Emergency fund gap", value: sim.stressComponents.reserve, body: "Reserve coverage is below the six-month safety target." },
    { label: "Career volatility", value: sim.stressComponents.career, body: "Some career paths are less resilient to disruption." },
    { label: "Event load", value: sim.stressComponents.events, body: "Life events and illness scenarios are putting extra weight on the plan." },
  ].sort((a, b) => b.value - a.value);

  setText("stressScorePage", `${Math.round(sim.stressIndex)}`);
  setText("stressScore", `${Math.round(sim.stressIndex)}`);
  setText("stressTopDriver", entries[0].label);
  setText("stressReserveGap", `${Math.max(0, 6 - sim.finalCoverageMonths).toFixed(1)} mo`);
  setText("stressDebtMonths", `${sim.debtStressMonths}`);
  setText("stressEventLoad", currency(sim.averageEventLoad));
  setHTML(
    "stressReasonList",
    entries
      .map((item) => `<div class="analysis-item"><strong>${item.label} · ${item.value.toFixed(1)} pts</strong><p>${item.body}</p></div>`)
      .join(""),
  );
  setHTML(
    "stressStrategyList",
    stressStrategies(sim)
      .map((item) => `<div class="analysis-item"><strong>Response idea</strong><p>${item}</p></div>`)
      .join(""),
  );
  setText("stressNarrative", `The stress index is explained directly through its drivers, so users can see whether pressure is coming from weak income, high expenses, unstable events, or insufficient emergency protection.`);
  renderStressPalette(sim.stressIndex);
}

function renderEventsPage() {
  renderEventDraft();
  renderEventList();
}

function buildOverviewInsight(sim) {
  if (sim.stressIndex < 34) {
    return `This path is actually pretty solid. You finish with ${currency(sim.ending.emergencyFund)} in emergency cash and a projected ${currency(sim.k401Summary.projectedValueAt65)} 401k by age 65, so the vibe is less "panic noodles" and more "okay, we breathe."`;
  }
  if (sim.stressIndex < 56) {
    return `The plan works, but the margin is thin. A rent jump or one messy life event could start a low-key flop era before the emergency stash and 401k have time to bulk up.`;
  }
  if (sim.stressIndex < 76) {
    return `Pressure is showing. ${sim.negativeMonths} months go negative, so even with 401k contributions running in the background the day-to-day cashflow can still catch fire.`;
  }
  return `This setup is genuinely cooked right now. The model is pretty clear: higher income, lower fixed costs, or fewer giant shocks need to happen before the budget chills out enough to protect both cash and retirement money.`;
}

function buildTimelineCopy(record) {
  const names = record.activeEvents.map((item) => item.label).join(", ");
  const eventText = names ? `Active chaos this month: ${names}. ` : "No extra chaos is active this month. ";
  const reserveText = record.emergencyWithdrawal > 0
    ? `Emergency stash absorbs ${currency(record.emergencyWithdrawal)} of the hit.`
    : `Emergency stash sits at ${currency(record.emergencyFund)} here.`;
  return `${eventText}Core fixed costs eat ${percent((record.fixedExpenses / Math.max(record.netIncome, 1)) * 100)} of take-home income. ${reserveText}`;
}

function renderReportPoints(id, items) {
  setHTML(
    id,
    items.map((item) => `<div class="report-point">${item}</div>`).join(""),
  );
}

function stopReportParticles(clearField = false) {
  globalThis.clearInterval(reportParticleTimer);
  reportParticleTimer = 0;
  if (!clearField) return;
  const field = $("reportParticleField");
  if (field) field.innerHTML = "";
}

function spawnReportParticle() {
  const field = $("reportParticleField");
  if (!field) return;

  const particle = document.createElement("span");
  particle.className = "report-particle";
  particle.innerHTML = `<img src="${REPORT_PARTICLE_IMAGE}" alt="" aria-hidden="true" />`;
  particle.style.left = `${6 + Math.random() * 86}%`;
  particle.style.top = `${52 + Math.random() * 34}%`;
  particle.style.setProperty("--report-particle-drift", `${Math.round((Math.random() - 0.5) * 110)}px`);
  particle.style.setProperty("--report-particle-duration", `${Math.round(4400 + Math.random() * 1800)}ms`);
  field.appendChild(particle);
  particle.addEventListener("animationend", () => particle.remove(), { once: true });
}

function syncReportParticles() {
  stopReportParticles(true);
}

function setReportAssistantState(nextState) {
  reportAssistantState = nextState;
}

function startReportGeneration() {
  globalThis.clearTimeout(reportGenerationTimer);
  setReportAssistantState("generating");
  renderPage();
  reportGenerationTimer = globalThis.setTimeout(() => {
    setReportAssistantState("ready");
    renderPage();
  }, 950);
}

function reportFocusLabel(focus) {
  return {
    all: "full life plan",
    career: "career strategy",
    budget: "lifestyle and budget",
    defense: "financial defense",
  }[focus] || "full life plan";
}

function buildReportPromptContext(sectionKey) {
  const note = reportAssistantNote.trim();
  const focusLabel = reportFocusLabel(reportAssistantFocus);
  const sectionLabel = reportFocusLabel(sectionKey);

  if (reportAssistantFocus === "all") {
    return note
      ? `You asked the AI to build a full plan around this note: "${note}".`
      : "You asked the AI for the full plan, so this section is being optimized as part of the whole picture.";
  }

  if (reportAssistantFocus === sectionKey) {
    return note
      ? `This is your priority section, built around your note: "${note}".`
      : `This is the main focus area you selected: ${focusLabel}.`;
  }

  return note
    ? `This section is supporting your ${focusLabel} request, using your note "${note}" as context.`
    : `This section is a supporting view while the AI prioritizes ${focusLabel}.`;
}

function reportHighlight(value) {
  return `<strong class="report-highlight">${escapeHtml(value)}</strong>`;
}

function populateAiReportFromInputs() {
  const educationSelect = document.getElementById("educationSelect");
  const citySelect = document.getElementById("citySelect");
  const careerSelect = document.getElementById("careerSelect");
  const salaryInput = document.getElementById("salaryInput");
  const loanInput = document.getElementById("loanInput");

  if (!educationSelect || !citySelect || !careerSelect || !salaryInput || !loanInput) return;

  const education = educationSelect.options[educationSelect.selectedIndex]?.text || "current education path";
  const city = citySelect.options[citySelect.selectedIndex]?.text || citySelect.value || "your city";
  const career = careerSelect.options[careerSelect.selectedIndex]?.text || careerSelect.value || "your career path";
  const salary = Number(salaryInput.value) || 0;
  const debt = Number(loanInput.value) || 0;

  const formattedSalary = Number(salary).toLocaleString();
  const formattedDebt = Number(debt).toLocaleString();

  const careerSummary = `
    As a ${escapeHtml(career)} in <strong>${escapeHtml(city)}</strong>, your starting salary of <strong>$${formattedSalary}</strong> is your baseline.
    However, local costs will decide how much of that income actually feels usable month to month.
    The best early move is to <strong>grow your earning power before fixed costs lock in</strong>.
  `;

  const lifestyleSummary = `
    Your student debt of <strong>$${formattedDebt}</strong> will directly tighten your monthly burn and limit how much housing freedom you really have.
    Even if the salary looks fine on paper, life in ${escapeHtml(city)} gets harder when debt and rent are pulling at the same paycheck.
    The clearest lifestyle advice is to <strong>keep recurring costs lean</strong> until that debt load gets lighter.
  `;

  const defenseSummary = `
    In <strong>${escapeHtml(city)}</strong>, a bad health year or sudden income shock can spiral quickly if you do not have cash on hand.
    That means your safety net has to do real work, not just look good in the dashboard.
    You need to <strong>build a strong emergency fund</strong> before taking on more financial risk.
  `;

  const futureSummary = `
    With your <strong>${escapeHtml(education)}</strong> background, staying at <strong>$${formattedSalary}</strong> long-term is risky.
    You should focus on <strong>upskilling or job-hopping within the next 2 years</strong> so your growth can outpace $${formattedDebt} in debt pressure.
    The long-term goal is to turn early career growth into breathing room before expenses rise faster than income.
  `;

  const reportCareerSummary = document.getElementById("reportCareerSummary");
  const reportLifestyleSummary = document.getElementById("reportLifestyleSummary");
  const reportDefenseSummary = document.getElementById("reportDefenseSummary");
  const reportFutureSummary = document.getElementById("reportFutureSummary");

  if (reportCareerSummary) reportCareerSummary.innerHTML = careerSummary;
  if (reportLifestyleSummary) reportLifestyleSummary.innerHTML = lifestyleSummary;
  if (reportDefenseSummary) reportDefenseSummary.innerHTML = defenseSummary;
  if (reportFutureSummary) reportFutureSummary.innerHTML = futureSummary;

  const reportCareerBullets = document.getElementById("reportCareerBullets");
  const reportLifestyleBullets = document.getElementById("reportLifestyleBullets");
  const reportDefenseBullets = document.getElementById("reportDefenseBullets");
  const reportFutureBullets = document.getElementById("reportFutureBullets");

  if (reportCareerBullets) {
    reportCareerBullets.innerHTML = `
      <div class="report-point">Career goal: ${escapeHtml(career)}.</div>
      <div class="report-point">Starting pay modeled: <strong>$${formattedSalary}</strong>.</div>
      <div class="report-point">Best action: <strong>increase income early</strong>.</div>
    `;
  }

  if (reportLifestyleBullets) {
    reportLifestyleBullets.innerHTML = `
      <div class="report-point">Student debt load: <strong>$${formattedDebt}</strong>.</div>
      <div class="report-point">Cost pressure city: ${escapeHtml(city)}.</div>
      <div class="report-point">Best action: <strong>control fixed costs first</strong>.</div>
    `;
  }

  if (reportDefenseBullets) {
    reportDefenseBullets.innerHTML = `
      <div class="report-point">Protection market: ${escapeHtml(city)}.</div>
      <div class="report-point">Risk focus: health shock or job loss.</div>
      <div class="report-point">Best action: <strong>grow the emergency stash</strong>.</div>
    `;
  }

  if (reportFutureBullets) {
    reportFutureBullets.innerHTML = `
      <div class="report-point">Education path: ${escapeHtml(education)}.</div>
      <div class="report-point">Career growth target: beat debt pressure fast.</div>
      <div class="report-point">Best action: <strong>upskill or job-hop within 2 years</strong>.</div>
    `;
  }
}

function renderReportPage(sim) {
  if (!$("reportStage")) return;

  if ($("reportFocusInput")) $("reportFocusInput").value = reportAssistantNote;
  document.querySelectorAll(".report-focus-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.reportFocus === reportAssistantFocus);
  });
  if ($("reportPromptShell")) $("reportPromptShell").classList.toggle("is-hidden", reportAssistantState !== "prompt");
  if ($("reportGenerationShell")) $("reportGenerationShell").classList.toggle("is-hidden", reportAssistantState !== "generating");
  if ($("reportOutputShell")) $("reportOutputShell").classList.toggle("is-hidden", reportAssistantState !== "ready");
  setText("backToStressButton", "Back to Previous Step");
  syncReportParticles();

  const focusIntroMap = {
    all: `Tell me what matters most, ${profileDisplayName()}. I can build the full life plan or zoom in on one weak point.`,
    career: `You want the AI to focus on career strategy first, ${profileDisplayName()}. I’ll weight salary trajectory and work mix more heavily.`,
    budget: `You want a lifestyle and budget read first, ${profileDisplayName()}. I’ll focus on rent pressure, monthly burn, and quality-of-life tradeoffs.`,
    defense: `You want the defense plan first, ${profileDisplayName()}. I’ll focus on the emergency stash, shocks, and retirement resilience.`,
  };
  setText("reportIntroCopy", focusIntroMap[reportAssistantFocus] || focusIntroMap.all);

  if (reportAssistantState !== "ready") return;
  populateAiReportFromInputs();
}

function renderPage() {
  saveState();
  const sim = simulate(state);
  lastSimulation = sim;
  renderNav();
  syncDashboardStageUI();
  renderUserProfile();
  renderSharedState(sim);
  renderOverviewWidgets(sim);
  renderRealityCheck(sim);
  renderReportPage(sim);
  renderCurveChart(sim.records);
  if (page === "dashboard") {
    renderDashboardPage(sim);
    syncAccordionHeights();
    globalThis.requestAnimationFrame(syncAccordionHeights);
  }
  if (page === "income") renderIncomePage(sim);
  if (page === "expenses") renderExpensesPage(sim);
  if (page === "events") renderEventsPage(sim);
  if (page === "forecast") renderForecastPage(sim);
  if (page === "stress") renderStressPage(sim);
}

function populateSelects() {
  const mappings = [
    ["careerSelect", careerData],
    ["citySelect", cityData],
    ["eventTypeSelect", eventPresets],
    ["diseaseSelect", diseaseData],
  ];
  mappings.forEach(([id, map]) => {
    const el = $(id);
    if (!el) return;
    el.innerHTML = Object.entries(map)
      .sort(([, left], [, right]) => left.label.localeCompare(right.label))
      .map(([value, item]) => `<option value="${value}">${item.label}</option>`)
      .join("");
  });
}

function bindSharedInputs() {
  if ($("careerSelect")) {
    $("careerSelect").addEventListener("change", (event) => {
      state.career = event.target.value;
      state.salary = careerData[state.career].baseSalary;
      state.salaryGrowthRate = clamp(Math.round(careerData[state.career].annualGrowth * 1000) / 10, 0, 12);
      renderPage();
    });
  }

  if ($("citySelect")) {
    $("citySelect").addEventListener("change", (event) => {
      state.city = event.target.value;
      state.expenses = expensePresetFromLifestyle(state.city, state.lifestyle);
      renderPage();
    });
  }

  if ($("salaryInput")) $("salaryInput").addEventListener("input", (event) => { state.salary = Number(event.target.value); renderPage(); });
  if ($("salaryGrowthInput")) {
    $("salaryGrowthInput").addEventListener("input", (event) => {
      state.salaryGrowthRate = clamp(Number(event.target.value), 0, 12);
      renderPage();
    });
  }
  if ($("cashFlowSalaryGrowthInput")) {
    $("cashFlowSalaryGrowthInput").addEventListener("input", (event) => {
      state.salaryGrowthRate = clamp(Number(event.target.value), 0, 12);
      renderPage();
    });
  }
  if ($("targetIncomeGrowthInput")) $("targetIncomeGrowthInput").addEventListener("input", (event) => { state.targetIncomeGrowthRate = clamp(Number(event.target.value), 0, 12); renderPage(); });
  if ($("loanInput")) $("loanInput").addEventListener("input", (event) => { state.studentLoan = Number(event.target.value); renderPage(); });
  if ($("initial401kRateInput")) {
    $("initial401kRateInput").addEventListener("input", (event) => {
      state.k401ContributionRate = clamp(Number(event.target.value), 0, 25);
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation), 1.2);
    });
  }
  if ($("k401RateInput")) {
    $("k401RateInput").addEventListener("input", (event) => {
      state.k401ContributionRate = clamp(Number(event.target.value), 0, 25);
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation), 1.2);
    });
  }
  if ($("emergencyRateInput")) $("emergencyRateInput").addEventListener("input", (event) => { state.emergencyRate = Number(event.target.value); renderPage(); });
  if ($("lifestyleInput")) {
    $("lifestyleInput").addEventListener("change", (event) => {
      state.lifestyle = Number(event.target.value);
      state.expenses = expensePresetFromLifestyle(state.city, state.lifestyle);
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation));
    });
  }
  if ($("buyCarToggle")) {
    $("buyCarToggle").addEventListener("change", (event) => {
      state.buyCar = event.target.checked;
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation), 1.25);
    });
  }
  if ($("carPriceInput")) {
    $("carPriceInput").addEventListener("input", (event) => {
      state.carPrice = Math.max(5000, Number(event.target.value || 0));
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation), 1.2);
    });
  }
  if ($("buyHouseToggle")) {
    $("buyHouseToggle").addEventListener("change", (event) => {
      state.buyHouse = event.target.checked;
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation), 1.25);
    });
  }
  if ($("homePriceInput")) {
    $("homePriceInput").addEventListener("input", (event) => {
      state.homePrice = Math.max(50000, Number(event.target.value || 0));
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation), 1.2);
    });
  }
  if ($("homeDownPaymentInput")) {
    $("homeDownPaymentInput").addEventListener("input", (event) => {
      state.homeDownPaymentPct = clamp(Number(event.target.value || 0), 0, 80);
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation), 1.2);
    });
  }
  if ($("add401kChangeButton")) {
    $("add401kChangeButton").addEventListener("click", () => {
      const age = clamp(Number($("future401kAgeInput")?.value || userProfile.age + 1), userProfile.age + 1, PLAN_401K_RULES.retirementAge);
      const rate = clamp(Number($("future401kRateInput")?.value || state.k401ContributionRate), 0, 25);
      state.k401Adjustments = getSorted401kAdjustments({
        ...state,
        k401Adjustments: [...state.k401Adjustments.filter((item) => item.age !== age), { id: createId(), age, rate }],
      });
      renderPage();
      if (lastSimulation) burstEmojiParticles(getStressEmotionConfig(lastSimulation), 1.2);
    });
  }
  if ($("k401AdjustmentList")) {
    $("k401AdjustmentList").addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      const adjustmentId = target.dataset.adjustmentId;
      if (!adjustmentId) return;
      state.k401Adjustments = state.k401Adjustments.filter((item) => item.id !== adjustmentId);
      renderPage();
    });
  }
  if ($("yearsInput")) $("yearsInput").addEventListener("input", (event) => { state.years = Number(event.target.value); state.selectedMonth = clamp(state.selectedMonth, 1, state.years * 12); renderPage(); });
  if ($("timelineInput")) $("timelineInput").addEventListener("input", (event) => { state.selectedMonth = Number(event.target.value); renderPage(); });
  if ($("resetDefaults")) {
    $("resetDefaults").addEventListener("click", () => {
      Object.assign(state, defaultState());
      if (page === "dashboard") {
        dashboardUiStage = "profile";
        try {
          localStorage.setItem(UI_STAGE_KEY, dashboardUiStage);
        } catch {
          // Ignore storage failures and still reset the UI locally.
        }
      }
      renderPage();
      if (page === "dashboard") globalThis.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function bindProfileInputs() {
  if ($("profileNameInput")) {
    $("profileNameInput").addEventListener("input", (event) => {
      userProfile.name = event.target.value.slice(0, 32);
      saveUserProfile();
      renderUserProfile();
    });
  }

  if ($("profileAgeInput")) {
    $("profileAgeInput").addEventListener("input", (event) => {
      userProfile.age = clamp(Number(event.target.value) || 22, 16, 40);
      saveUserProfile();
    });
  }

  if ($("educationSelect")) {
    $("educationSelect").addEventListener("change", (event) => {
      userProfile.education = event.target.value;
      saveUserProfile();
    });
  }
}

function bindDashboardFlow() {
  if (page !== "dashboard") return;
  document.querySelectorAll("[data-open-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetStage = button.dataset.openStage;
      if (!targetStage) return;
      setDashboardStage(targetStage);
    });
  });

  if ($("continueProfileButton")) {
    $("continueProfileButton").addEventListener("click", () => {
      normalizeUserProfile();
      renderUserProfile();
      setDashboardStage("basics");
    });
  }
  if ($("backToProfileButton")) $("backToProfileButton").addEventListener("click", () => setDashboardStage("profile"));
  if ($("startRealityCheck")) $("startRealityCheck").addEventListener("click", () => setDashboardStage("reality"));
  if ($("showStressRoomButton")) $("showStressRoomButton").addEventListener("click", () => setDashboardStage("stress"));
  if ($("editBasicsButton")) $("editBasicsButton").addEventListener("click", () => setDashboardStage("basics"));
  if ($("backToStressButton")) {
    $("backToStressButton").addEventListener("click", () => {
      setDashboardStage("stress");
    });
  }
  if ($("downloadReportButton")) $("downloadReportButton").addEventListener("click", () => globalThis.print());
  document.querySelectorAll(".report-focus-chip").forEach((button) => {
    button.addEventListener("click", () => {
      const focus = button.dataset.reportFocus;
      if (!focus) return;
      reportAssistantFocus = focus;
      renderPage();
    });
  });
  if ($("reportFocusInput")) {
    $("reportFocusInput").addEventListener("input", (event) => {
      reportAssistantNote = event.target.value.slice(0, 240);
    });
  }
  if ($("generateFocusedReportButton")) {
    $("generateFocusedReportButton").addEventListener("click", () => {
      startReportGeneration();
    });
  }
}

function bindAccordionModules() {
  if (page !== "dashboard") return;
  document.querySelectorAll(".accordion-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.accordionTarget;
      toggleAccordion(targetId);
    });
  });
}

function bindIncomeInputs() {
  if ($("fullTimeHoursInput")) $("fullTimeHoursInput").addEventListener("input", (event) => { state.fullTimeHours = Number(event.target.value); renderPage(); });
  if ($("targetIncomeInput")) $("targetIncomeInput").addEventListener("input", (event) => { state.targetIncome = Number(event.target.value); renderPage(); });
  if ($("addPartTimeJobButton")) {
    $("addPartTimeJobButton").addEventListener("click", () => {
      state.partTimeJobs.push({ id: createId(), role: "uber", hours: 6 });
      renderPage();
    });
  }
  if ($("partTimeJobsList")) {
    $("partTimeJobsList").addEventListener("input", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const jobId = target.dataset.jobId;
      if (!jobId) return;
      const job = state.partTimeJobs.find((item) => item.id === jobId);
      if (!job) return;
      if (target.classList.contains("parttime-role")) job.role = target.value;
      if (target.classList.contains("parttime-hours")) job.hours = Number(target.value);
      renderPage();
    });
    $("partTimeJobsList").addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      const jobId = target.dataset.jobId;
      if (!jobId) return;
      state.partTimeJobs = state.partTimeJobs.filter((item) => item.id !== jobId);
      if (!state.partTimeJobs.length) state.partTimeJobs.push({ id: createId(), role: "uber", hours: 0 });
      renderPage();
    });
  }
}

function bindExpenseInputs() {
  [
    ["rentInput", "rent"],
    ["utilitiesInput", "utilities"],
    ["groceriesInput", "groceries"],
    ["transportInput", "transport"],
    ["healthcareInput", "healthcare"],
    ["discretionaryInput", "discretionary"],
  ].forEach(([id, key]) => {
    const el = $(id);
    if (!el) return;
    el.addEventListener("input", (event) => {
      state.expenses[key] = Number(event.target.value);
      renderPage();
    });
  });
}

function bindEventInputs() {
  if ($("eventTypeSelect")) {
    $("eventTypeSelect").addEventListener("change", (event) => {
      state.eventDraft = {
        type: event.target.value,
        month: state.eventDraft.month,
        duration: eventPresets[event.target.value].duration,
        incomeDelta: eventPresets[event.target.value].incomeDelta,
        emergencyEligible: eventPresets[event.target.value].emergencyEligible,
        emergencyUseRate: eventPresets[event.target.value].emergencyEligible ? (state.eventDraft.emergencyUseRate || 50) : 0,
        breakdowns: presetBreakdownObject(event.target.value),
      };
      renderPage();
    });
  }
  if ($("eventMonthInput")) $("eventMonthInput").addEventListener("input", (event) => { state.eventDraft.month = Number(event.target.value); renderPage(); });
  if ($("eventDurationInput")) $("eventDurationInput").addEventListener("input", (event) => { state.eventDraft.duration = Number(event.target.value); renderPage(); });
  if ($("eventIncomeInput")) $("eventIncomeInput").addEventListener("input", (event) => { state.eventDraft.incomeDelta = Number(event.target.value); renderPage(); });
  if ($("eventEmergencyInput")) {
    $("eventEmergencyInput").addEventListener("change", (event) => {
      state.eventDraft.emergencyEligible = event.target.checked;
      if (!state.eventDraft.emergencyEligible) state.eventDraft.emergencyUseRate = 0;
      else if (!state.eventDraft.emergencyUseRate) state.eventDraft.emergencyUseRate = 50;
      renderPage();
    });
  }
  if ($("eventEmergencyRateInput")) {
    $("eventEmergencyRateInput").addEventListener("input", (event) => {
      state.eventDraft.emergencyUseRate = Number(event.target.value);
      renderPage();
    });
  }
  if ($("eventBreakdownFields")) {
    $("eventBreakdownFields").addEventListener("input", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      const key = target.dataset.key;
      if (!key) return;
      state.eventDraft.breakdowns[key] = Number(target.value);
      renderPage();
    });
  }
  if ($("addEventButton")) {
    $("addEventButton").addEventListener("click", () => {
      state.events.push(
        buildEvent(state.eventDraft.type, {
          month: clamp(Number(state.eventDraft.month) || 1, 1, state.years * 12),
          duration: clamp(Number(state.eventDraft.duration) || 1, 1, state.years * 12),
          incomeDelta: clamp(Number(state.eventDraft.incomeDelta) || 0, -100, 100),
          emergencyEligible: state.eventDraft.emergencyEligible,
          emergencyUseRate: state.eventDraft.emergencyUseRate,
          breakdowns: { ...state.eventDraft.breakdowns },
        }),
      );
      renderPage();
    });
  }
  if ($("eventList")) {
    $("eventList").addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      const eventId = target.dataset.eventId;
      if (!eventId) return;
      state.events = state.events.filter((item) => item.id !== eventId);
      renderPage();
    });
  }
}

function bindForecastInputs() {
  if ($("diseaseSelect")) {
    $("diseaseSelect").addEventListener("change", (event) => {
      state.forecastDraft.disease = event.target.value;
      const preset = diseaseData[state.forecastDraft.disease] || diseaseData.cold;
      state.forecastDraft.duration = Math.max(1, preset.duration || state.forecastDraft.duration);
      renderPage();
    });
  }
  if ($("forecastDurationInput")) $("forecastDurationInput").addEventListener("input", (event) => { state.forecastDraft.duration = Number(event.target.value); renderPage(); });
  if ($("insuranceCoverageInput")) $("insuranceCoverageInput").addEventListener("input", (event) => { state.forecastDraft.insuranceCoverage = Number(event.target.value); renderPage(); });
  if ($("paidLeaveInput")) $("paidLeaveInput").addEventListener("input", (event) => { state.forecastDraft.paidLeave = Number(event.target.value); renderPage(); });
  if ($("forecastEmergencyToggle")) {
    $("forecastEmergencyToggle").addEventListener("change", (event) => {
      state.forecastDraft.useEmergencyStash = event.target.checked;
      if (!state.forecastDraft.useEmergencyStash) state.forecastDraft.emergencyUseRate = 0;
      else if (!state.forecastDraft.emergencyUseRate) state.forecastDraft.emergencyUseRate = 50;
      renderPage();
    });
  }
  if ($("forecastEmergencyRateInput")) {
    $("forecastEmergencyRateInput").addEventListener("input", (event) => {
      state.forecastDraft.emergencyUseRate = Number(event.target.value);
      renderPage();
    });
  }
  if ($("addForecastButton")) {
    $("addForecastButton").addEventListener("click", () => {
      if (state.forecastDraft.disease === "none") {
        renderPage();
        return;
      }
      state.forecastDiseases.push({
        id: createId(),
        disease: state.forecastDraft.disease,
        duration: Math.max(1, Number(state.forecastDraft.duration || diseaseData[state.forecastDraft.disease].duration)),
        insuranceCoverage: Number(state.forecastDraft.insuranceCoverage),
        paidLeave: Number(state.forecastDraft.paidLeave),
        useEmergencyStash: Boolean(state.forecastDraft.useEmergencyStash),
        emergencyUseRate: Number(state.forecastDraft.emergencyUseRate || 0),
      });
      renderPage();
    });
  }
  if ($("diseaseBreakdown")) {
    const updateForecastItem = (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
      const forecastId = target.dataset.forecastId;
      if (!forecastId) return;
      const item = state.forecastDiseases.find((entry) => entry.id === forecastId);
      if (!item) return;
      if (target.classList.contains("forecast-disease")) {
        item.disease = target.value;
        const preset = diseaseData[item.disease] || diseaseData.cold;
        item.duration = preset.duration;
      }
      if (target.classList.contains("forecast-duration")) item.duration = Math.max(1, Number(target.value || 1));
      if (target.classList.contains("forecast-insurance")) item.insuranceCoverage = clamp(Number(target.value || 0), 0, 95);
      if (target.classList.contains("forecast-paid-leave")) item.paidLeave = clamp(Number(target.value || 0), 0, 100);
      if (target.classList.contains("forecast-emergency-rate")) item.emergencyUseRate = clamp(Number(target.value || 0), 0, 100);
      renderPage();
    };
    $("diseaseBreakdown").addEventListener("input", updateForecastItem);
    $("diseaseBreakdown").addEventListener("change", updateForecastItem);
    $("diseaseBreakdown").addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement)) return;
      if (!target.classList.contains("forecast-emergency-toggle")) return;
      const forecastId = target.dataset.forecastId;
      if (!forecastId) return;
      const item = state.forecastDiseases.find((entry) => entry.id === forecastId);
      if (!item) return;
      item.useEmergencyStash = target.checked;
      item.emergencyEligible = target.checked;
      if (!item.useEmergencyStash) item.emergencyUseRate = 0;
      else if (!item.emergencyUseRate) item.emergencyUseRate = 50;
      renderPage();
    });
    $("diseaseBreakdown").addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLButtonElement)) return;
      const forecastId = target.dataset.forecastId;
      if (!forecastId) return;
      state.forecastDiseases = state.forecastDiseases.filter((item) => item.id !== forecastId);
      renderPage();
    });
  }
}

function bindTimelineInteractions() {
  if ($("closeTimelinePopup")) $("closeTimelinePopup").addEventListener("click", closeTimelinePopup);
  if ($("timelinePopup")) {
    $("timelinePopup").addEventListener("click", (event) => {
      if (event.target === $("timelinePopup")) closeTimelinePopup();
    });
  }
  if ($("emergencyTimeline")) {
    $("emergencyTimeline").addEventListener("dblclick", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const node = target.closest(".timeline-node");
      if (!(node instanceof HTMLButtonElement)) return;
      $("emergencyTimeline").classList.add("is-expanded");
      openTimelinePopup(node.dataset.projectionIndex);
    });
  }
}

function bindInfoInteractions() {
  document.querySelectorAll(".info-trigger").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const key = button.dataset.infoKey;
      if (!key) return;
      openInfoModal(key);
    });
  });

  if ($("closeInfoModal")) $("closeInfoModal").addEventListener("click", closeInfoModal);
  if ($("infoModal")) {
    $("infoModal").addEventListener("click", (event) => {
      if (event.target === $("infoModal")) closeInfoModal();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeInfoModal();
    }
  });
}

function bindStressSpeechBubble() {
  if (page !== "dashboard") return;
  const stressStage = $("stressStage");
  if (!stressStage) return;

  const handleAdjustment = (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement)) return;
    const inputKey = getStressFeedbackKey(target);
    if (!inputKey || !lastSimulation) return;
    queueStressCatFeedback(inputKey, lastSimulation);
  };

  stressStage.addEventListener("input", handleAdjustment, true);
  stressStage.addEventListener("change", handleAdjustment, true);
}

function bindAssistant() {
  if ($("assistantFab")) {
    $("assistantFab").addEventListener("click", () => {
      setAssistantPanelOpen($("assistantPanel")?.hidden ?? true);
    });
  }
  if ($("closeAssistantPanel")) $("closeAssistantPanel").addEventListener("click", () => setAssistantPanelOpen(false));
  if ($("assistantForm")) {
    $("assistantForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const input = $("assistantInput");
      if (!(input instanceof HTMLInputElement)) return;
      const prompt = input.value.trim();
      if (!prompt) return;
      input.value = "";
      handleAssistantPrompt(prompt);
    });
  }
}

populateSelects();
bindSharedInputs();
bindProfileInputs();
bindDashboardFlow();
bindAccordionModules();
bindIncomeInputs();
bindExpenseInputs();
bindEventInputs();
bindForecastInputs();
bindTimelineInteractions();
bindInfoInteractions();
bindStressSpeechBubble();
bindAssistant();
renderPage();
ensureAssistantGreeting();

let resizeFrame = 0;
globalThis.addEventListener("resize", () => {
  globalThis.cancelAnimationFrame(resizeFrame);
  resizeFrame = globalThis.requestAnimationFrame(() => renderPage());
});
