# macOS Hibernation

macOS by default will try to use hibernation after sleeping for a predetermined amount of time.  
Some fixes in the `config.plist` are required in order to take advantage of this:

- Disable `Booter->Quirks->DevirtualiseMmio`
- Set `Misc->Boot->HibernateMode` to `Auto`
  - By default, OpenCore will not look for hibernated images of macOS.
- Set `Misc->Boot->HibernationSkipsPicker` to `True` to skip the picker when resuming from hibernation
  - While not strictly required, this speeds up resume times and prevents accidently booting another OS and changing hardware state underneath macOS.
- Create a reserved memory region under `UEFI->ReservedMemory` with the properties:

    | Field   | Type    | Value |
    | ------- | ------- | ----- |
    | Comment | String  | Fix black screen on wake from hibernation |
    | Enabled | Boolean | True |
    | Address | Number  | 569344 |
    | Enabled | Boolean | True |
    | Size    | Number  | 4096 |
    | Type    | String  | RuntimeCode |

## Testing Hibernation

To test hibernation, it is recommended to run `sudo pmset -a hibernatemode 25`.  
This will force macOS to hibernate immediately whenever the lid is closed or `Sleep` is selected in the menu at the top left.

### macOS enters S3 sleep instead of shutting down

Some models (such as `KLED`) have drives not marked as internal, which prevents macOS from entering hibernation.  
To fix this, add the `built-in` property to the PCI device under `DeviceProperties->Add-><storage device path>`:

| Field    | Type | Value      |
| -------- | ---- | ---------- | 
| built-in | Data | <01000000> |

You may need to add an ACPI device as well.
If an ACPI device does not exist to represent the NVMe or eMMC drive, then device properties will not be applied.
An example SSDT can be found [here](https://github.com/1Revenger1/Acer-Spin-713-Hackintosh/blob/main/src/ACPI/SSDT-Devices.dsl).

## Hibernate Modes

Pmset exposes a few different hibernation modes which can be set through `sudo pmset -a hibernatemode <value>`:

- 0: Disables hibernation
- 3: Hibernates after either `standbydelaylow` or `standbydelayhigh` seconds of sleep
  - Which one is used is dependent on the battery percentage. Anything above `highstandbythreshold` will use `standbydelayhigh` instead of `standbydelaylow`.
- 25: Hibernates instead of S3 sleep

When using hibernate mode 3, macOS may keep sleeping even after the standby time has elapsed.
[`HibernationFixup.kext`](https://github.com/acidanthera/HibernationFixup) may be required in this case, and provides options to fine tune when the Chromebook is allowed to sleep.
