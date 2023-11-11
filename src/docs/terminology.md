## Terminology

| **Term** | **Description** |  
| - | - |
| chrultrabook | A modified Chromebook/box designed to run Windows, Linux, or even macOS |   
| coreboot     | UEFI firmware firmware replacement |  
| UEFI         | The Unified Extensible Firmware Interface (UEFI) is a specification that defines a software interface between an operating system and platform firmware. UEFI replaces the legacy Basic Input/Output System (BIOS) firmware interface originally present in all IBM PC-compatible personal computers, with most UEFI firmware implementations providing support for legacy BIOS services. UEFI can support remote diagnostics and repair of computers, even with no operating system installed. (source: Wikipedia) 
| EC           | Embedded Controller. Communicates between the main board and embedded peripherals such as hotkeys, ports, or battery.  
| SKL          | Abbreviation for Skylake, an Intel CPU generation (6xxx)
| KBL          | Abbreviation for Kaby Lake, an Intel CPU generation (7xxx)
| APL          | Abbreviation for Apollo Lake, an Intel CPU generation (7xxx)
| ABL          | Abbreviation for Amber Lake, an Intel CPU generation (8xxx)
| GLK          | Abbreviation for Gemini Lake, an Intel CPU generation 
| CML          | Abbreviation for Comet Lake, an Intel CPU generation (10xxx)
| TGL          | Abbreviation for Tiger Lake, an Intel CPU generation (11xxx)
| JSL          | Abbreviation for Jasper Lake, an Intel CPU generation (Nxxx)
| ADL          | Abbreviation for Alder Lake, an Intel CPU generation (12xxx)
| SOF          | Abbreviation for **S**ound **O**pen **F**irmware, a audio driver used for both Linux and Windows. APL, GLK, CML, TGL, JSL, and ADL use this driver.
| AVS          | Abbreviation for **A**udio **V**oice **S**peech, a audio driver used for both Linux and Windows. SKL, APL, KBL, and ABL use this driver.
| SuzyQable    | A cable that enables CCD (Closed Case Debug). Used to disable WP.
| NVRAM        | Non Volatile Random Access Memory. NVRAM exists on a chip in your motherboard, and contains things like your boot entries/boot order along with a suite of other things.
| RWL          | Abbreviation of RW_Legacy
| altOS        | Stands for **alt**ernate **OS**, a operating system thats not chromeOS.
| POST         | Stands for **P**ower **O**n **S**elf **T**est. POST is a process performed by firmware or software routines immediately after a computer or other digital electronic device is powered on.
| DRM          | Digital rights management (DRM) is the use of technology to control access to copyrighted material. It also enables copyright holders and content creators to manage what users can do with their content, such as how many devices they can access media on and whether they can share it.
| LTS          | Stands for **L**ong **T**erm **S**upport.
| ACPI         | Advanced Configuration and Power Interface (ACPI), an open standard for operating systems to identify and set up computer hardware components.
| DSDT/SSDT    | Tables in your ACPI that describe the devices and how the OS should interact with them e.g. putting the computer to sleep, wake, switching GPUs, USB ports.
| .AML	       | The compiled file format of ACPI, and what your PC will execute. .DAT is another extension with the exact same use.
| .DSL         | The source code for ACPI – this is what you edit and compile for your computer. DO NOT mix this file format up with .ASL.
| Kext(s)      | Kernel Extensions, also referred to as Kexts, serve as drivers for macOS. They have various functions, such as facilitating device drivers or serving alternative purposes within Hackintoshing, such as OS patching, information injection, or task execution. It is worth noting that while Kexts play a crucial role in a successful Hackintosh setup, they are typically paired with ACPI patches and fixes.
| ch341a       | A USB programmer used to read/write firmware. You'll need this if you bricked your system


--------

<table>
<tr>
<td class="navtable-l">
<a href="getting-started.html">← Getting Started</a> 
</td>
<td class="navtable-r">
<a href="supported-devices.html">Supported Devices →</a> 
</td>
</tr>
</table>
