import fs from "fs-extra";
import path from "path";
import { parse } from "svgson";

const iconsDir = path.resolve("./svg");
const outputDir = path.resolve("./icon-fa");
fs.ensureDirSync(outputDir);

const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".svg"));

files.forEach(async (file) => {
  const name = path.basename(file, ".svg");
  const svgPath = path.join(iconsDir, file);
  const svgContent = fs.readFileSync(svgPath, "utf-8");

  const parsed = await parse(svgContent);

  const width = parseInt(parsed.attributes.width || "512", 10);
  const height = parseInt(parsed.attributes.height || "512", 10);

  const paths = [];
  const extractPaths = (node) => {
    if (node.name === "path" && node.attributes.d)
      paths.push(node.attributes.d);
    if (node.children) node.children.forEach(extractPaths);
  };
  extractPaths(parsed);

  if (!paths.length) {
    console.warn(`SVG sem path: ${file}`);
    return;
  }

  const tsContent = `import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export const ${name}: IconDefinition = {
  prefix: "fas",
  iconName: "${name}",
  icon: [${width}, ${height}, [], "", "${paths.join(" ")}"]
};
`;

  const outFile = path.join(outputDir, `${name}.ts`);
  fs.writeFileSync(outFile, tsContent.trim());
  console.log(`Gerado: ${outFile}`);
});
