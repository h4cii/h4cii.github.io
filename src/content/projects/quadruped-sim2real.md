---
title: "Quadruped RL and Sim2Real"
order: 1
subtitle: "Locomotion policy training with Isaac Lab, PPO-style RL, and deployment constraints."
status: "Active research project"
focus:
  - "Quadruped locomotion"
  - "Domain randomization"
  - "Real robot deployment"
methods:
  - "URDF-based robot modeling"
  - "Observation and reward design"
  - "Policy robustness under actuator and terrain mismatch"
demos:
  - title: "Slope and stair traversal"
    src: "/media/previews/quadruped-slope-stairs.mp4"
    caption: "Quadruped robot traversing a slope and stairs-like terrain."
    muted: false
  - title: "Flat-ground Sim2Real deployment"
    src: "/media/previews/quadruped-flat-sim2real-muted.mp4"
    caption: "Real robot flat-ground movement after Sim2Real deployment. Audio track removed for public display."
    muted: true
mediaStatus: "Two homepage clips embedded: terrain traversal and muted flat-ground Sim2Real."
previewLabel: "Quadruped locomotion preview"
fullDemoUrl: ""
privacyNote: "Use cropped clips that avoid lab identifiers, terminal paths, and unpublished robot configuration details."
---

This project focuses on building locomotion policies that remain meaningful beyond simulation. The current emphasis is robustness: handling model mismatch, actuator limits, observation noise, terrain changes, and control frequency constraints while preserving deployability on physical hardware.
