---
prev: devices
next: developer-mode
---

# Known Issues

## Devices

::: tip
You should avoid buying any devices in this list.
:::

- Samsung Chromebook 3 (CELES): Numerous hardware bugs that make it difficult to use.
- Samsung Galaxy Chromebook (KOHAKU): Badly designed hardware, deteriorating trackpad grounding, possibly faulty backlight circuit.
- Samsung Chromebox Series 3 (STUMPY): DisplayPort output is non-functional under Windows, and VGA output through the DVI port is non-functional.

## Firmware

- **All ARM Chromebooks**: No support, though development is slowly starting.
- GeminiLake: Legacy boot mode/alternative firmware menu works but does not show payload list
- AMD Stoneyridge: Some Stoney Ridge devices may not currently have functional Legacy Boot Mode due to bugs in Google's firmware.
- AMD Cezanne: legacy boot mode/alternative firmware menu works, edk2 boots, but screen backlight is off. Will be fixed in next Google fw update (fingers crossed).

::: tip
For issues relating to OS support, see [this page](../installing/known-issues.md).
:::
