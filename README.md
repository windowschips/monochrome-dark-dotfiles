# MonochromeDark
## very cool hyprland and ags stuff idk

I'm going to start off by saying I have **NO IDEA WHAT I'M DOING.** This is my first time making dotfiles and I don't have much experience with this kind of thing.

These are dotfiles which configure:
- hyprland
- neofetch
- swaylock-effects
- swappy
- rofi
- ags (only tested 1.7.4)
- gnome-terminal (just configures the padding. its optional and you can change the default terminal in hyprland.conf)
- hyprpaper (the wallpaper is also included. made by Milad Fakurian on Unsplash.)
- cursor (bibata)
- icons (papirus)

Just make sure you have:
- GNU stow (for install)
- sassc (required by the ags dotfiles)
- grim
- slurp
- blueman

To install:
1. Clone this repo. `git clone https://github.com/windowschips/monochrome-dark-dotfiles.git`
2. Place it in your home directory and name it something like `.dotfiles` (optional, but you should do it for cleanliness)
3. `cd` into the newly cloned repo.
4. Run `stow */`. This will create symlinks so that the dotfiles can work.
5. Restart Hyprland and everything should work.

Tested ***ONLY*** on Fedora Workstation 39, in which I installed Hyprland using JaKooLit's [Fedora-Hyprland](https://github.com/JaKooLit/Fedora-Hyprland).

## enjoy.
