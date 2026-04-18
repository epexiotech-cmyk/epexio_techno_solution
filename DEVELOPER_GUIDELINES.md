# Antigravity Rules of Engagement

### 📋 Planning Protocol
- **ALWAYS** create a detailed Implementation Plan before making any structural or core code changes.
- **ONLY** make direct changes without a plan if the edit is extremely minor (1-2 lines of code).

### 🚫 DON'Ts (Strict Prohibitions)
- **DO NOT** use the browser subagent or any automated browser verification tools unless the USER explicitly requests it in a prompt.
- **DO NOT** perform automated visual checks or "scroll through" sections on your own.
- **DO NOT** waste API quota or session time on unrequested UI validation.

### ✅ DOs (Required Practices)
- **DO** focus entirely on code implementation and logical verification.
- **DO** provide clear summaries of code changes.
- **DO** wait for the USER to manually verify the UI in their local browser.
- **DO** preserve all custom physics and animation logic as requested.
