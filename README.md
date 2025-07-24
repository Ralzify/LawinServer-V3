<div align=center>
  <img src="https://camo.githubusercontent.com/7f2211d5979b1879cc48dd53e7088f4005d50ba1e21d9ccac056a5456ed7df47/68747470733a2f2f692e6962622e636f2f42636a3356586d2f363837343734373037333361326632663633363436653265363436393733363336663732363436313730373032653633366636643266363137343734363136333638366436353665373437333266333933323337333733333339333933303331333533342e706e67" alt="LawinServer Logo">
</div>
<br>

# What is LawinServer V3?
- LawinServer V3 is a fixed version of LawinV1, that intends to add all new features, and fix many game bugs, while prioritizing its stability.
- It's mainly meant to be used to host/play [Project Reboot](https://github.com/Milxnor/Project-Reboot-3.0), or [Reboot Ultimate](https://github.com/Ralzify/Reboot-Ultimate) (if you have access to that github).

## Modified Lawin Features/Updates:
- The UI is fixed, and no longer messy
- Upon running install.bat, and opening run.bat, you'll be greeted with a message asking if you want to use straight bloom or not. (designed for trickshotters)
- Fixed many bugs with Chapter 3, Season 1, such as: Lategame Storm Damage, and Shotgun Knockback.
- Fixed other core bugs such as Synced Emotes (ty burlone), and disabling sand (bugged on reboot).
- In DefaultGame.ini, there is a preset of many Data Tables and Curve Tables, you just need to remove the ";" to enable them (add it back to disable them)
- Fixed CloudStorage on 9.40-10.40 (defaultgame.ini bug)
- Fixed 12.41 Locker

## Planned Features/Updates
- Curvetable/Datatable Customization Directly Through start.bat
- Update athena.json to include later chapter cosmetics.

## Base Lawin Features:

### Battle Royale:
- CloudStorage and ClientSettings (Settings saving)
- Winterfest presents opening (11.31, 19.01 & 23.10)
- Purchasing Item Shop items
- Refunding cosmetics in the refund tab
- Favoriting items
- Marking items as seen
- Changing items in Locker
- Changing banner icon and banner color
- Changing items edit styles
- Support a Creator with specific codes
- Fully working daily challenges system (New daily challenge every day, replacing daily challenges, etc...)
- Seasonal Quests from Season 3 up to Season 21 (Can change)
- Purchasable battle pass from Season 2 to Season 10 (Can change)
- Discovery Tab

### Save the World:
- CloudStorage and ClientSettings (Settings saving)
- Llama purchasing and opening with random loot
- Every Hero, Weapon, Defender and Resource
- Crafting items in Backpack
- Transferring items to and from Storage
- Modifying and upgrading Schematic perks
- Supercharging items
- Leveling up and Evolving items
- Upgrading item rarity
- Hero, Defender, Survivor, Team Perk and Gadget equipping
- Research level resetting and upgrading
- Upgrade level resetting and upgrading
- Autofill survivors
- Recycling and destroying items
- Collection Book slotting and unslotting
- Claiming Daily Rewards
- Claiming Quest and Collection Book Rewards
- Modifying quickbars in Backpack
- Activating XP Boosts
- Correct Events in Frontend up to Season 11 (Can change)
- Buying Skill Tree perks
- Quests pinning
- Switching between Hero Loadouts
- Favoriting items
- Marking items as seen
- Changing items in Locker
- Changing banner icon and banner color
- Changing items edit styles
- Support a Creator with specific codes
- Fully working daily challenges system (New daily challenge every day, replacing daily challenges, etc...)
- Item transformation
- Event Quests from Season 2 up to Season X (Can change)

## How to use?
1) Install [NodeJS](https://nodejs.org/en/)
2) Run "install_packages.bat" (This file isn't required after the packages are installed.)
3) Run "start.bat". Choose whether you want to use straight bloom by typing Y / N. After that, if you've done everything right, you should be all set.
4) Use [Reboot Launcher](https://github.com/Auties00/Reboot-Launcher/releases/latest) to launch your desired OG Fortnite version. Make sure to set the backend settings to local to prioritize this Lawin instead of the built in Reboot one.

EXTRA: IF you're getting an issue involving something called "Axios", open Command Prompt and run "npm install axios".
