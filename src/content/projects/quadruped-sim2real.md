---
title: "Quadruped Inspection Robot RL and Sim2Real"
order: 1
subtitle: "National innovation project on quadruped inspection robot control for icy railway traction substations."
status: "National innovation project, control algorithm lead"
focus:
  - "Quadruped locomotion"
  - "Domain randomization"
  - "Real robot deployment"
methods:
  - "Isaac Lab and RSL-RL GPU-parallel PPO training pipeline"
  - "45-dimensional observation design with joint states, gravity vector, and action history"
  - "MuJoCo Sim2Sim validation and ROS2-based real-robot action/state interface"
demos:
  - title: "Slope and stair traversal"
    src: "/media/previews/dfa108-slope-stairs.mp4"
    caption: "Quadruped robot traversing a slope and stairs-like terrain."
    muted: false
  - title: "Flat-ground Sim2Real deployment"
    src: "/media/previews/bb710-flat-sim2real-muted.mp4"
    caption: "Real robot flat-ground movement after Sim2Real deployment. Audio track removed for public display."
    muted: true
mediaStatus: "Homepage clips show terrain traversal and muted flat-ground Sim2Real deployment."
previewLabel: "Quadruped locomotion preview"
fullDemoUrl: ""
privacyNote: "Use cropped clips that avoid lab identifiers, terminal paths, and unpublished robot configuration details."
---

This project builds a deployable quadruped locomotion pipeline for railway inspection scenarios under icy and uneven terrain conditions. My work covers URDF reconstruction, collision optimization, Isaac Sim asset import, observation and reward design, domain randomization, MuJoCo Sim2Sim verification, and ROS2-based real-robot deployment. The current hardware tests include stable flat-ground motion plus slope and stair-like terrain traversal.
