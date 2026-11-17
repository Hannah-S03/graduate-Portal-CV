// Sample required training and a catalogue of courses and development opportunities. Replace with your own.
// "dueDays" = the training is due that many days after the graduate's placement start date.
// "skill" matches a skill from src/data/overview.js (its name in lower case with dashes).
window.SITE_LEARNING = {
  // SAMPLE required training. Replace these with your own, or empty the list to show only the note below.
  // dueDays = how many days after a graduate's start date the module is due. Items get due dates, reminders and a progress bar.
  training: [
    { id: "t-health-safety", title: "Health and safety", description: "Keeping yourself and others safe at work.", dueDays: 7 },
    { id: "t-security", title: "Information security", description: "Passwords, phishing and protecting information.", dueDays: 14 },
    { id: "t-data-protection", title: "Data protection", description: "How we handle personal data responsibly.", dueDays: 14 }
  ],
  trainingNote: "All training modules complete, or equivalent.",
  types: ["Course", "Workshop", "Shadowing", "Event", "Mentoring", "Stretch project"],
  // SAMPLE courses and development opportunities shown on the Learning page. Replace with your own.
  catalogue: [
    {"id": "c-present", "title": "Presenting with confidence", "type": "Workshop", "skill": "presentation-skills", "duration": "Half day", "description": "Structure a talk, design clear slides and handle questions.", "url": "https://example.com/courses/present"},
    {"id": "c-ai-intro", "title": "Introduction to AI tools at work", "type": "Course", "skill": "creating-your-own-ai-tool", "duration": "2 hours", "description": "What AI tools can and can't do, and how to use them responsibly.", "url": "https://example.com/courses/ai-intro"},
    {"id": "c-research", "title": "Research and analysis basics", "type": "Course", "skill": "research-and-analysis", "duration": "3 hours", "description": "Frame a question, judge sources and draw clear conclusions.", "url": "https://example.com/courses/research"},
    {"id": "c-prof-comms", "title": "Writing clear emails and updates", "type": "Course", "skill": "professional-communication", "duration": "1 hour", "description": "Short, clear and professional written communication.", "url": "https://example.com/courses/prof-comms"},
    {"id": "c-organisation", "title": "Planning your time and priorities", "type": "Course", "skill": "organisation", "duration": "2 hours", "description": "Prioritise work and keep track of what is next.", "url": "https://example.com/courses/organisation"}
  ]
};
