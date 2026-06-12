# DPDP Release Queue

This folder is for unpublished DPDP quiz pages that are ready to be released later.

Queue rules:
- Keep unpublished quiz folders here until release time.
- Use numbered theme-based folder names such as `quiz-02-childrens-data` or `quiz-11-breach-readiness`.
- Published quiz folders belong under `docs/`.
- At evening automation time, publish one ready quiz by moving the next queued folder into `docs/` and updating `docs/index.html`.
- Maintain at least 10 ready unpublished quizzes in this queue.

Operational note:
- The current public site is served only from `docs/`, so anything in `release-queue/` stays out of GitHub Pages until it is moved into `docs/`.
