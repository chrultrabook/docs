# Using Ectool

`ectool` is a utility that is used to interface with the ChromeOS Embedded Controller. It is used to communicate with the embedded controller from userspace and vice versa.

## Installing Ectool

If you use Fedora or Ultramarine Linux, you can install the `chromium-ectool` package from the [Terra repository](https://terra.fyralabs.com).

Otherwise, you can download `ectool` for Linux from [here](https://files.tree123.org/utils/x86_64/gnu/ectool). Alternatively there is a [Alpine Linux / musl version](https://files.tree123.org/utils/x86_64/musl/ectool).

For Windows users, `ectool` is installed when you install CoolStar's Chrome EC driver and is located in `C:\Program Files\crosec\ectool.exe`.

## Uses

:::tip
Run `ectool help` for a full list of commands.
:::

Some common uses of `ectool` include:

- Accessing the EC console: `ectool console`
- Controlling the fan with `ectool fanduty <percent>`
- Set the keyboard backlight in devices that have it: `ectool pwmsetkblight <percent>`
