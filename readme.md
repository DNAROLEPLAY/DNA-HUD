# DNA RP HUD for FiveM (QBCore Compatible)

This repository contains a sleek and modern HUD (Heads-Up Display) for your FiveM server, designed specifically for QBCore. This HUD displays essential player information, including server ID, cash, bank balance, job title, server logo, and Discord link. It's a simple addition intended to enhance the visual appeal of your city without modifying the map or health bar.

## Features
- Displays player ID, cash, bank balance, and job title.
- Includes a customizable server logo and Discord link.
- Easy to install and replace your existing HUD.

## Installation

### Step 1: Download the HUD Folder
1. Clone or download this repository to your local machine.

### Step 2: Replace Your Existing HUD
1. Navigate to your `resources` directory in your QBCore server.
2. Delete or backup your existing HUD resource folder.
3. Copy the `dna_hud` folder from this repository into your `resources` directory.

### Step 3: Start the HUD Resource
1. Ensure the following line is present in your `server.cfg` to start the HUD when the server launches:
    ```cfg
    start dna_hud
    ```
2. Restart your server or use the `start dna_hud` command to activate the HUD.

## Customization

### Changing Images
To personalize the HUD with your server's branding:

1. **Server Logo**:
   - Replace the `logo.png` file in the `dna_hud` folder with your server's logo.
   - Ensure it is named `logo.png`, or update the image path in `index.html`.

2. **Icons (ID, Cash, Bank, Job)**:
   - Replace the corresponding icon files (`id_icon.png`, `cash_icon.png`, `bank_icon.png`, `job_icon.png`) with your desired icons.
   - Keep the same file names, or update the paths in `index.html`.


### Changing the Discord Invite Link
To update the Discord link displayed on the HUD:

1. Open `index.html` and locate:
   ```html
   <p class="discord-link">discord.gg/dnaroleplay</p>
![image](https://github.com/user-attachments/assets/dae608ba-069d-4792-903d-6b9cbeed60c5)


https://discord.gg/Ja8cjGhKSp
