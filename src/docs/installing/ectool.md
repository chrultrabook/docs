# Using Ectool

`ectool` is a utility that is used to interface with the ChromeOS Embedded Controller. It is used to communicate with the embedded controller from userspace and vice versa.

## Uses


:::tip
Run `ectool help` for a full list of commands.
:::

Some common uses of `ectool` include:

- Accessing the EC console: `ectool console`
- Controlling the fan with `ectool fanduty <percent>`
- Set the keyboard backlight in devices that have it: `ectool pwmsetkblight <percent>`
