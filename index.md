---
title: Home
layout: home
nav_order: 1
---

<button class="btn js-toggle-dark-mode">Dark Mode</button>


<script> const toggleDarkMode = document.querySelector('.js-toggle-dark-mode'); jtd.addEvent(toggleDarkMode, 'click', function(){ if (jtd.getTheme() === 'dark') { jtd.setTheme('light'); toggleDarkMode.textContent = 'Preview dark color scheme'; } else { jtd.setTheme('dark'); toggleDarkMode.textContent = 'Return to the light side'; } }); </script>


idk what im doing

<h1><div align="center">Welcome to the Chrultrabook Docs!</div></h1>

### What is a Chrultrabook and who is this guide for?

A Chrultrabook is a modified Chromebook designed to run Windows, Linux, or even macOS by utilizing MrChromebox coreboot firmware and custom CoolStar drivers. The purpose of this repository is to provide comprehensive and user-friendly documentation on hardware, firmware, and operating systems.

{: .fs-7 }
{: .text-center }
[Getting Started →](docs/getting-started.html)


--------------------------------------

**The wiki focuses on two main things:**

*   Installing altOS on your Chromebook.
*   Learning in-depth information about your Chromebook.

Because of this, you will be expected to read, learn, and even use Google. This is not a one click procedure.

--------------------------------------

Finally, those who are still facing issues can ask for help in the [chrultrabook Discord](https://discord.com/invite/tkPTk5w).

Help us improve this documentation on [GitHub](https://github.com/chrultrabook/docs/)!
