---
title: "RoboCON Bionic Legged Robot Control"
order: 3
subtitle: "Control system and gait implementation for the 2025 RoboCON bionic legged robot challenge."
status: "Control algorithm lead, national first prizes"
focus:
  - "Legged robot control"
  - "Embedded systems"
  - "Competition reliability"
methods:
  - "Feedforward torque solving and hybrid position-force control based on single-leg dynamics"
  - "Distributed RK3588 and STM32H7 architecture with ROS2, FreeRTOS, and 1 kHz communication"
  - "Cycloidal foot trajectory planning plus Trot/Walk gait controllers"
mediaStatus: "Competition-safe materials can be added after filtering team-private implementation details."
previewLabel: "RoboCON mechanism debug preview"
fullDemoUrl: ""
privacyNote: "Avoid exposing team-private mechanism details, internal wiring labels, or competition strategy material."
---

This experience shaped my engineering taste for real robots: control algorithms must survive embedded constraints, communication delay, mechanical tolerance, electrical noise, and time pressure. I derived a single-leg dynamics model from D'Alembert's principle, designed Jacobian-based feedforward torque solving and hybrid position-force control for explosive jumping, built a distributed real-time control stack, and developed gait controllers used in obstacle, off-road, and speed events. The team won national first prizes in obstacle, off-road, and speed events plus an all-around award in the Shenzhen division.
