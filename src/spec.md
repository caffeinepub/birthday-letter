# Specification

## Summary
**Goal:** Fix the current build/deploy failure and finalize a romantic single-page birthday “Open” reveal experience that works well on iPad Chrome.

**Planned changes:**
- Resolve the deployment/build failure so the app cleanly builds and deploys using the standard Internet Computer template workflow.
- Implement a single-action landing view with a large, touch-friendly “Open” button and responsive layout (no hover-only interactions).
- On “Open”, replace/overlay the landing view with a letter-style presentation that displays the provided birthday message text exactly (including emojis and the explicit line break).
- Add locally bundled romantic static image assets (no backend image fetching) for the envelope/letter reveal, using a consistent red-and-white theme.

**User-visible outcome:** The site deploys successfully, loads in a browser, and on iPad Chrome the user can tap a large “Open” button to reveal a romantic letter view with the exact birthday message and local envelope/letter imagery.
