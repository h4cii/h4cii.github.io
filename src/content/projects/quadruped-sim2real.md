---
title: "Quadruped Inspection Robot RL and Sim2Real"
order: 1
subtitle: "National innovation project on quadruped inspection robot control for unmanned icy railway traction substations."
status: "National innovation project, team core member and control algorithm lead"
focus:
  - "Quadruped locomotion"
  - "Domain randomization"
  - "CTS-MoE policy"
  - "Real robot deployment"
methods:
  - "Isaac Lab and RSL-RL GPU-parallel training pipeline with URDF reconstruction, collision optimization, and Isaac Sim asset import"
  - "CTS-MoE multi-expert locomotion policy for stronger terrain state representation and Sim2Real robustness"
  - "Observation design combining joint states, gravity vector, action history, observation history, and buffered temporal context"
  - "Friction, mass, center-of-mass, and initial-pose domain randomization for policy generalization"
  - "Modular deployment framework decoupling state observation, history caching, ONNX inference, action mapping, safety limits, and real-robot interfaces"
demos:
  - title: "Low-bar traversal"
    src: "/media/previews/quadruped-low-bar.mp4"
    caption: "New quadruped prototype traversing a low-bar obstacle with closed-loop locomotion control."
    muted: false
  - title: "High-wall climbing"
    src: "/media/previews/quadruped-high-wall.mp4"
    caption: "New quadruped prototype climbing a high-wall obstacle during terrain validation."
    muted: false
  - title: "Slope and stair traversal"
    src: "/media/previews/bb710-slope-stairs.mp4"
    caption: "Quadruped robot traversing a slope and stairs-like terrain."
    muted: false
  - title: "Flat-ground Sim2Real deployment"
    src: "/media/previews/dfa108-flat-sim2real-muted.mp4"
    caption: "Real robot flat-ground movement after Sim2Real deployment. Audio track removed for public display."
    muted: true
mediaStatus: "Homepage clips show low-bar traversal, high-wall climbing, terrain traversal, and muted flat-ground Sim2Real deployment."
previewLabel: "Quadruped locomotion preview"
fullDemoUrl: ""
privacyNote: "Use cropped clips that avoid lab identifiers, terminal paths, and unpublished robot configuration details."
---

This project builds a deployable quadruped locomotion pipeline for unmanned railway inspection scenarios under winter icing and uneven terrain conditions. My work covers URDF reconstruction, collision optimization, Isaac Sim asset import, environment configuration, observation and reward design, GPU-parallel reinforcement learning, domain randomization, MuJoCo Sim2Sim verification, and ROS2-based real-robot deployment.

To improve the limited hidden-state representation and Sim2Real robustness of a single MLP policy on complex terrain, I designed and implemented a CTS-MoE multi-expert locomotion controller inspired by MoE-based robust quadrupedal locomotion work. The policy fuses joint states, gravity vector, historical actions, and historical observations, while friction, mass, center of mass, and initial pose randomization improve generalization. I also developed a modular deployment framework that separates state observation, history buffers, ONNX inference, action mapping, safety limiting, and physical robot interfaces; after MuJoCo Sim2Sim validation, the CTS-MoE policy was migrated to the prototype robot for closed-loop terrain locomotion tests.
