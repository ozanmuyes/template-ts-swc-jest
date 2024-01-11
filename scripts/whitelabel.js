const fs = require("node:fs");
const path = require("node:path");
const { program } = require("commander");

const ROOT_DIR = path.join(__dirname, "..");
const ROOT_DIR_NAME = path.basename(ROOT_DIR);

program
  .option("-n, --name <name>", "Project name", ROOT_DIR_NAME)
  .option("--version <version>", "Project version", "0.1.0")
  .option("--description <desc>", "Set project's description", undefined)
  .option("-r, --repo <url>", "Repository URL of the project", undefined)
  .option(
    "-k, --keywords <word1[,word2]>",
    "Comma-separated list of keywords",
    undefined,
  )
  .option("-a, --author <fullName>", "Set author's fullname", undefined)
  .option("-e, --email <email>", "Set author's email address", undefined)
  .option("-l, --license <license>", "E.g. MIT (default), GPL, etc.", "MIT")
  .option(
    "-h, --homepage <homepageUrl>",
    "Homepage URL of the project",
    undefined,
  )
  .option(
    "-d, --dry-run",
    "Do not take any action just report what will be done",
  )
  .parse();

const config = program.opts();

(() => {
  fs.copyFileSync(
    path.join(ROOT_DIR, "package.json"),
    path.join(ROOT_DIR, "package.json_backup"),
  );

  const p2 = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, "package.json")));

  p2.name = config.name;
  p2.version = config.version;
  if (config.description) {
    p2.description = config.description;
  }
  if (config.repo) {
    p2.repository = {
      type: "git", // FIXME
      url: config.repo,
    };
  }
  if (config.keywords) {
    p2.keywords = config.keywords.split(",");
  }
  p2.author = `${config.author ? config.author + " " : ""}${
    config.email ? " <" + config.email + ">" : ""
  }`;
  p2.license = config.license;
  if (config.homepage) {
    p2.homepage = config.homepage;
  }

  if (config.dryRun) {
    console.log(JSON.stringify(p2, null, 2));

    process.exit();
  }

  fs.writeFileSync(
    path.join(ROOT_DIR, "package.json"),
    JSON.stringify(p2, null, 2),
  );
})();
