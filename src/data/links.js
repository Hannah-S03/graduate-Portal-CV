// SAMPLE company systems and resources for the Quick links page. The addresses are placeholders (example.com): replace them with your own.
// These links are built into the site for every graduate. Graduates can pin them but cannot edit or delete them.
// To add another: copy a line, give it a new unique id, and paste the web address between the quote marks.
// Use plain web addresses, never a password. Only links that are in this list are shown. (An item with url: "" would show a greyed "Link to be added" button.)
window.SITE_LINKS = {
  categories: ["Key tools", "People and HR", "IT and tools", "Learning", "Finance", "Company"],
  items: [
    { id: "customer-system", name: "Customer system", category: "Key tools", description: "Sample link: sign in to the customer records system.", url: "https://example.com/customer-system" },
    { id: "hr-portal", name: "HR portal", category: "People and HR", description: "Sample link: holiday requests and personal details.", url: "https://example.com/hr" },
    { id: "learning-platform", name: "Learning platform", category: "Learning", description: "Sample link: online courses and training.", url: "https://example.com/learning" }
  ]
};
