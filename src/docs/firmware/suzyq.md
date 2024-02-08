---
prev: write-protect
next: false
---
# Disabling write protect with a SuzyQable

::: tip
This method is only available on CR50 devices.
:::

::: tip
This method requires a SuzyQable, a chromeOS debug cable.
:::

<br>

## Step 1: Enabling Closed Case Debugging (CCD)

1. Open VT-2 (`ctrl` + `alt` + `f2` (right arrow)).
2. Login as `root`.
3. Run `gsctool -a -o`. 
4. You will be prompted to press the `PP` (physical presence) button several times. This is a fancy way of saying to press the power button. This process takes several minutes and ends with the message `PP Done!`.
5. The device will suddenly reboot and exit developer mode. Re-enable developer mode and continue with the instructions.

## Step 2: Disable Write Protect.
1. Open VT-2 (`ctrl` + `alt` + `f2` (right arrow)).
2. Login as `root`.
3. Plug in your cable
4. Run `ls /dev/ttyUSB*` to verify your cable is working. This should output 3 items, `ttyUSB0`, `ttyUSB1`, and `ttyUSB2`. If you do not see these items, try flipping the `usb-c` end upside-down, and try another `usb-c` port. If there is still no result, confirm your cable was assembled properly.
5. Run the following commands. This will disable hardware write protect.
  - `echo "wp false" > /dev/ttyUSB0`
  - `echo "wp false atboot" > /dev/ttyUSB0`
6. Run `echo "ccd reset factory" > /dev/ttyUSB0` to be able to unbrick using a suzyqable, if needed.
7. Run `gsctool -a -I` to verify you have opened all the CCD flags. The current value for all CCD flags should be set to Y/Always.
8. Verify `crossystem wpsw_cur` returns `0`.
9. Reboot.

