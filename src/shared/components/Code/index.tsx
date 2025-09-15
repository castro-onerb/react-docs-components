import { CodeDemo, type CodeDemoProps } from "./CodeDemo";
import { CodeRoot, type CodeRootProps } from "./CodeRoot";

interface Code {
  Root: React.FC<CodeRootProps>;
  Demo: React.FC<CodeDemoProps>;
}

export const Code: Code = {
  Root: CodeRoot,
  Demo: CodeDemo,
};
