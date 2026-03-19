const [major] = process.versions.node.split(".").map(Number);

if (major < 20 || major >= 23) {
  console.error("");
  console.error("This project expects Node.js 20 or 22 LTS.");
  console.error(`Current version: ${process.version}`);
  console.error("");
  console.error("Recommended fix:");
  console.error("  1. Switch to Node 22");
  console.error("  2. Remove node_modules and reinstall dependencies");
  console.error("  3. Run npm run dev again");
  console.error("");
  process.exit(1);
}
