import type { TConfig } from "commitsmile/index";

const config: TConfig = {
  prompts: {
    SCOPES: {
      multiple: true,
      custom: {
        value: true,
      },
      message: "What is the scope of this change (e.g. component or file name)",
      options: [
        { label: "🌍 Enviroment", hint: "Root of repo", value: "enviroment" },
        { label: "🤖 Discord Bot", value: "discordBot" },
        { label: "📦 Package", value: "package" },
        { label: "📖 Docs", value: "docs" },
        { label: "🌐 Socials", value: "socials" },
        { label: "📘 Create Design System (TUT)", value: "cds" },
      ],
    },
  },
};
export default config;
