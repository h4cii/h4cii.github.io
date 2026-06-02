---
title: "Friction-Aware MPPI Trajectory Tracking"
order: 2
subtitle: "First-author conference paper under revision on four-wheel differential robot tracking under tire friction limits."
status: "Independent research, first-author paper under revision"
focus:
  - "Nonlinear vehicle dynamics"
  - "Brush Tire Model"
  - "Learning-augmented MPPI"
methods:
  - "Brush Model tire-ground interaction"
  - "Infinite-horizon cost augmentation with a learned state-value network"
  - "Comparison against standard MPPI, friction-aware MPPI, long-horizon MPPI, and nonlinear MPC"
mediaStatus: "Paper artifact planned after public release; current experiments report lower tracking RMSE with real-time solve time."
previewLabel: "Drift control research artifact"
fullDemoUrl: ""
privacyNote: "Publish only sanitized simulation or cropped robot clips; keep unpublished experiment details out of overlays."
---

This work studies trajectory tracking for a high-speed four-wheel differential robot when no-slip kinematics break down under lateral tire slip and friction saturation. I construct a friction-aware full-vehicle dynamics model using a Brush Tire Model and Newton-Euler equations, reproduce high-speed slip behavior in a custom Simscape tire module, and augment short-horizon MPPI with a learned terminal value estimator from MPC trajectory data. In simulation tests across five random seeds, the proposed method reduces average position and lateral RMSE while keeping the mean solve time around 18.50 ms.
