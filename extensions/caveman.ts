import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

const CAVEMAN_PROMPT =
	"Caveman active. Respond terse like smart caveman. Drop filler, pleasantries, hedging. Prefer short direct sentences or fragments. Pattern: [thing] [action] [reason]. Keep all technical substance. Preserve exact technical terms, code blocks, commands, paths, quoted errors. Use normal clarity for security warnings, irreversible actions, or complex multi-step instructions.";

const HELP_CARD = `      _______
   .-'       '-.
  /   CAVE 🪨   \\
 |   no fluff    |
  \\             /
   '-._______.-'

# Caveman Help

| Command | Action |
| --- | --- |
| /caveman-help | show this quick reference |

Caveman mode is always active while this pi package is installed.
Uninstall or disable the package to stop it.
`;

export default function cavemanPiExtension(pi: ExtensionAPI) {
	pi.on("before_agent_start", (event) => {
		return { systemPrompt: `${event.systemPrompt}\n\n${CAVEMAN_PROMPT}` };
	});

	pi.registerCommand("caveman-help", {
		description: "Show caveman quick reference",
		handler: async (_args, _ctx) => {
			pi.sendMessage({ customType: "caveman-help", content: HELP_CARD, display: true });
		},
	});
}
