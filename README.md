# The Learning Workshop — V10 project directory review

70 standalone educational lessons across Mathematics, Physics, Chemistry and Space & Aerospace. Static HTML/CSS/JavaScript, no third-party libraries, trackers or sign-in required.

## GitHub Pages deployment
1. Extract the ZIP; upload its **contents** to the root of a GitHub repository (not the ZIP itself). `index.html` must be in the root.
2. In repository **Settings → Pages**, choose **Deploy from a branch**, select the branch (typically `main`) and root `/`, and save. GitHub will provide the URL when deployment completes.
3. Verify homepage navigation, a lesson, search, theme, and mobile view at the published URL. Do not include personal secrets in the repository.

This package includes `.nojekyll` to disable unwanted Jekyll processing. Projects now contains six expandable entries and linked draft hands-on guides. These are prototypes for user feedback and require practical build validation before a public instructional release.

## Educational status

This is a **public beta candidate**, not independently certified courseware. The 70 lessons and 350 answers have structural and consistency checks, with a substantial but non-exhaustive sample of numerical recalculations. An external specialist scientific review and physical screen-reader/device tests remain recommended, and cannot be represented as completed by automated checks. See `RELEASE_QA.md` and `sources.html`.

External university sources are linked as further reading; third-party images and text are not packaged. Original material has no blanket reuse licence unless independently specified by the author. MIT OCW materials are governed by their licence if actually adapted.

## Video and project materials (Version 11)

- Model Rocket now includes a locally hosted 79-second narrated motion-graphics walkthrough (`assets/videos/balloon-rocket-demo.mp4`). It is an **illustrated prototype**, not filmed build footage.
- English `.vtt` captions and an on-page transcript are included. Audio is synthetic and can be replaced with a recorded voiceover later.
- Materials are numbered vertically in all six project guides.
- Not uploaded to GitHub: project owner requested approval first.

## Version 12 video update

All six project guides contain embedded silent illustrated videos with on-screen instructional text and VTT captions. The CAD tutorial uses an illustrated Fusion 360 interface (not real screen capture). See `VIDEO_PRODUCTION_NOTES.md`.
