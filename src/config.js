// Site settings. Edit this file to change the names and contact details shown across the hub.
window.SITE_CONFIG = {
  companyName: "", // your organisation's name. Left blank: nothing is shown until you add one
  hubName: "Graduate Hub",
  logo: "assets/logo-white.svg", // a placeholder logo (the letters ABC in a circle, white for the navy header). Replace the file, or use "" for no logo
  logoAlt: "Logo", // read out by screen readers
  logoShowsName: true, // true = the logo already stands for the organisation, so the header only adds "Graduate Hub" beside it
  favicon: "assets/icon.svg", // small icon in the browser tab; use "" for none
  programmeName: "Graduate Placement Programme",
  defaultName: "Hannah", // the name filled in on the first-time set-up form (the person can still change it). Use "" to leave it empty
  creditName: "Hannah", // shown in the footer as "Created by ...". Change it, or use "" for none
  usingDummyData: true, // true shows the yellow "sample content" banner on every page. Set to false once everything is your own
  // SAMPLE dates of the graduate programme (change them to yours). They drive the progress bar at the top of My profile until a graduate
  // enters their own dates there. Format: YYYY-MM-DD.
  programmeStart: "2026-09-01",
  programmeEnd: "2026-11-20",
  placementWeeks: 12, // used only if no end date is known
  hubUrl: "", // optional: the web address graduates open the hub at. If filled in, it is added to the Monday reminder in their calendar
  programmeTeamEmail: "", // optional: where the "Email it to the programme team" draft is addressed (falls back to contactEmail)
  contactEmail: "" // the programme team's email address: add it here when you have it (the Help page shows "Contact details will be added here" until then)
};
