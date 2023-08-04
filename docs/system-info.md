---
title: Finding System Info
layout: default
nav_order: 5
---

## System Architecture

Your system architecture is very important as it determines if your device has any support at all. ARM devices are not currently supported by the project, but support for them in the future is planned.

**How to find your architecture**
1. Open a crosh terminal by pressing `Control` + `Alt` + `T`
2. Type `shell` and press enter
3. Type `uname -m` and press enter

You show now see one of three possible outputs:
1. `x86_64`
2. `aarch64`
3. `armv7l`

If you see `x86_64`, your device is very likely to be supported, you will need to find your board name next to see if your device is supported. If you see `armv7l`, `aarch64`, or anything with `arm`, you have an ARM device which isn't currently supported.

## Board Name

The board name is the special name for your device which determines if it is supported by the custom firmware.

**How to find your board name**
1. Open a crosh terminal by pressing `Control` + `Alt` + `T`
2. Type `shell` and press enter
3. Type `sudo crossystem hwid` and press enter

You should now see your board name and some extra characters.
Example: `SNAPPY E25-A7C-J2L-I74-A47`
In this example, `SNAPPY` is the board name and you can ignore the extra characters.

## CPU Model and generation

The CPU model and generation is used to determine OS support and any extra steps you have to take after installing the OS.

**How to find your CPU model**
1. Open a crosh terminal by pressing `Control` + `Alt` + `T`
2. Type `shell` and press enter
3. Type `cat /proc/cpuinfo | grep "model name"` and press enter

You should now see your CPU model repeated a few times, we only have to look at the first line.
Example output: `model name      : Intel(R) Celeron(R) CPU N3350 @ 1.10GHz`

**How to find your CPU generation**
1. Take the CPU model from the previous steps (ex: `Intel(R) Celeron(R) CPU N3350`)
2. Copy and paste that into a search engine and look for either Intel Ark or AMD Product specifications.
3. Look for Code Name or Product Generation

{: .fs-5 }


<table>
<tr>
<td class="navtable-l">
<a href="getting-started.html">← Getting Started</a> 
</td>
<td class="navtable-r">
<a href="terminology.html">Terminology →</a> 
</td>
</tr>
</table>
