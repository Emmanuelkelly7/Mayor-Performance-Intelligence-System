// EXECUTIVE SNAPSHOT KPIs
export const executiveKPIs = [
  { label: "2022 Mayoral Vote Share", value: "69.5%", accent: true },
  { label: "2022 Mrakas Votes", value: "7,743" },
  { label: "2022 Voter Turnout", value: "26.1%", warning: true },
  { label: "Ballots by Internet Vote", value: "39.42%", info: true },
];

// ELECTION OVERVIEW KPIs
export const electionOverviewKPIs = [
  { label: "2022 Eligible Voters", value: "42,671" },
  { label: "2022 Ballots Cast", value: "11,257" },
  { label: "Turnout Drop from 2018", value: "−6.03 pts", negative: true },
  { label: "Mrakas Vote Growth from 2018", value: "+2,962", positive: true },
];

// 2018 VOTE SHARE
export const voteShare2018 = [
  { name: "Tom Mrakas", value: 38.33, votes: 4781, color: "#2563EB" },
  { name: "Geoff Dawe", value: 28.3, votes: 3533, color: "#60A5FA" },
  { name: "Chris Ballard", value: 19.8, votes: 2475, color: "#93C5FD" },
  { name: "John Abel", value: 13.5, votes: 1684, color: "#BFDBFE" },
];
export const totalBallots2018 = 12473; // actual ballots (not eligible)
export const turnout2018 = 32.1;

// 2022 VOTE SHARE
export const voteShare2022 = [
  { name: "Tom Mrakas", value: 69.5, votes: 7743, color: "#2563EB" },
  { name: "Phiona Durrant", value: 19.0, votes: 2139, color: "#60A5FA" },
  { name: "Anna Lozyk Romeo", value: 11.5, votes: 1295, color: "#93C5FD" },
];
export const totalBallots2022 = 11257;
export const turnout2022 = 26.1;

// TURNOUT COMPARISON
export const turnoutComparison = [
  { year: "2018", turnout: 32.1 },
  { year: "2022", turnout: 26.1 },
];

// WARD DATA
export const wardData = [
  { ward: "Ward 1", eligible: 7560, cast: 2324, turnout: 30.7, priority: "PROTECT", mrakasEst: 1615, reason: "Strongest turnout; maintain high support and prevent complacency." },
  { ward: "Ward 2", eligible: 7445, cast: 2030, turnout: 27.3, priority: "MAINTAIN", mrakasEst: 1411, reason: "Stable turnout area with room for moderate expansion." },
  { ward: "Ward 3", eligible: 9651, cast: 2526, turnout: 26.2, priority: "EXPAND", mrakasEst: 1755, reason: "Largest eligible voter pool; high upside from even small turnout improvement." },
  { ward: "Ward 4", eligible: 5024, cast: 1067, turnout: 21.2, priority: "MOBILIZE", mrakasEst: 741, reason: "Lowest turnout ward; major GOTV opportunity." },
  { ward: "Ward 5", eligible: 7904, cast: 1990, turnout: 25.2, priority: "COMPETE", mrakasEst: 1383, reason: "Competitive councillor dynamics; requires local issue sensitivity." },
  { ward: "Ward 6", eligible: 5087, cast: 1104, turnout: 21.7, priority: "MOBILIZE", mrakasEst: 767, reason: "Second-lowest turnout; efficient target for reminders and field work." },
];
export const townAverageTurnout = 26.1;

// VOTING CHANNELS
export const votingChannels = [
  { name: "Election Day", ballots: 5304, percentage: 47.1, color: "#93C5FD" },
  { name: "Internet Voting", ballots: 4437, percentage: 39.42, color: "#2563EB" },
  { name: "Advance Voting", ballots: 1516, percentage: 13.48, color: "#60A5FA" },
];

// CANDIDATE COMPARISON TABLE
export const candidateHistory = [
  { election: "2018", votes: 4781, share: "38.33%", result: "Won four-way race", meaning: "Competitive plurality victory with room to consolidate." },
  { election: "2022", votes: 7743, share: "69.5%", result: "Won three-way race", meaning: "Dominant incumbent mandate with strong town-wide support." },
];

// POLICY PILLARS
export const policyPillars = [
  { number: 1, icon: "Home", title: "Responsible Growth", description: "Protect Aurora's character while managing growth with discipline." },
  { number: 2, icon: "Shield", title: "Safe Neighbourhoods", description: "Visible focus on safety, clean public spaces, and resident quality of life." },
  { number: 3, icon: "DollarSign", title: "Fiscal Discipline", description: "Respect taxpayers and communicate budget choices plainly." },
  { number: 4, icon: "Wrench", title: "Infrastructure", description: "Roads, parks, trails, facilities, and practical improvements residents can see." },
  { number: 5, icon: "Handshake", title: "Accessibility", description: "Position Mrakas as present, reachable, responsive, and active in the community." },
  { number: 6, icon: "Megaphone", title: "Communication", description: "Improve how residents hear from Town Hall and understand decisions." },
];

// CAMPAIGN TIMELINE
export const campaignTimeline = [
  { week: "Week 1", title: "Reintroduction", description: "Launch 'Aurora Forward with Tom Mrakas.' Present record, next-term priorities, and ward-by-ward listening themes." },
  { week: "Week 2", title: "Ward Visibility", description: "Prioritize Wards 4, 6, and 3 for signs, canvassing, volunteer recruitment, and local issue messaging." },
  { week: "Week 3", title: "Digital Voting Education", description: "Run 'How to Vote' content across email, web, social, and printable materials. Internet voting is a major strength area." },
  { week: "Week 4", title: "Supporter Conversion", description: "Move identified supporters into vote reminders, volunteer follow-up, household reminders, and advance vote commitments." },
];

// SIGN STRATEGY
export const signStrategy = [
  { priority: "High Priority", wards: "Ward 4, Ward 6, and Ward 3", color: "red" },
  { priority: "Medium Priority", wards: "Ward 5 and Ward 2", color: "amber" },
  { priority: "Defensive Priority", wards: "Ward 1 — maintain existing strength and prevent complacency", color: "blue" },
];

// WARD CSV EXPORT HEADERS
export const wardCSVHeaders = ["Ward", "Eligible Voters", "Votes Cast", "Turnout %", "Campaign Priority", "Estimated Mrakas Votes", "Strategic Reason"];
