# Caveman for pi

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![pi package](https://img.shields.io/badge/pi-package-blue)](https://github.com/mariozechner/pi-coding-agent)
[![Version](https://img.shields.io/badge/version-0.3.0-green)](package.json)

Ultra-compressed communication mode for [`pi`](https://github.com/mariozechner/pi-coding-agent): fewer tokens, same technical substance.

`pi-caveman` packages the original [`JuliusBrussee/caveman`](https://github.com/JuliusBrussee/caveman) response style as a native pi package. Install it, and every agent response becomes shorter by default.

## Why

Coding agents often spend tokens on polite filler. Caveman mode removes filler while preserving exact technical meaning.

```text
Before: Sure! I'd be happy to help. The issue is likely caused by...
After: Bug in auth middleware. Token expiry check use `<` not `<=`. Fix:
```

## Features

- Always-on caveman response style while package is installed
- No per-session state, config, or toggles
- Short system prompt injected before every agent turn
- Static `/caveman-help` command without model call

## Install

### From GitHub

```bash
pi install git:github.com/viartemev/pi-caveman
```

Project-local install:

```bash
pi install -l git:github.com/viartemev/pi-caveman
```

### From local clone

```bash
git clone git@github.com:viartemev/pi-caveman.git
pi install ./pi-caveman
```

Try without installing:

```bash
pi -e ./pi-caveman
```

## Command

| Command | Action |
| --- | --- |
| `/caveman-help` | Show rock-themed quick reference without model call |

To stop caveman mode, disable or uninstall this pi package.

## Package layout

```text
extensions/caveman.ts       # pi extension adapter + compact mode prompts
skills/caveman              # caveman response-style skill
package.json                # pi package manifest
```

## How it works

The pi extension hooks into:

- `before_agent_start` — injects compact active-mode rules every turn
- `registerCommand` — registers `/caveman-help`

The base caveman skill is exposed by `package.json`; the extension makes the style always active.

## License

MIT. See [LICENSE](LICENSE).

## Attribution

Caveman rules and skills originate from [`JuliusBrussee/caveman`](https://github.com/JuliusBrussee/caveman), MIT licensed.
