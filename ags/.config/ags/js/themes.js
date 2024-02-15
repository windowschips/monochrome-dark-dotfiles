/**
 * A Theme is a set of options that will be applied
 * ontop of the default values. see options.js for possible options
 */
import { Theme, WP, lightColors } from './settings/theme.js';

export default [
    Theme({
    name: 'Theme',
    "spacing": 6,
    "padding": 9,
    "radii": 5,
    "popover_padding_multiplier": 1,
    "color.red": "#e55f86",
    "color.green": "#00D787",
    "color.yellow": "#EBFF71",
    "color.blue": "#51a4e7",
    "color.magenta": "#9077e7",
    "color.teal": "#51e6e6",
    "color.orange": "#E79E64",
    "theme.scheme": "dark",
    "theme.bg": "#171717",
    "theme.fg": "#eeeeee",
    "theme.accent.accent": "#ffffff",
    "theme.accent.fg": "#141414",
    "theme.accent.gradient": "to right, $accent",
    "theme.widget.bg": "$fg-color",
    "theme.widget.opacity": 94,
    "border.color": "$fg-color",
    "border.opacity": 95,
    "border.width": 2,
    "hypr.inactive_border": "rgba(00000022)",
    "hypr.wm_gaps_multiplier": 1,
    "font.font": "Ubuntu Nerd Font",
    "font.mono": "Mononoki Nerd Font",
    "font.size": 11,
    "bar.position": "top",
    "bar.style": "floating",
    "bar.flat_buttons": false,
    "bar.separators": false,
    "battery.bar.show_icon": true,
    "battery.bar.width": 120,
    "battery.bar.height": 2,
    "battery.bar.full": false,
    "battery.low": 30,
    "battery.medium": 50,
    "desktop.screen_corners": false,
    "desktop.clock.enable": false,
    "desktop.drop_shadow": false,
    "notifications.width": 450,
    "mpris.black_list": [
      "Caprine"
    ],
    "mpris.preferred": "spotify",
    "workspaces": 0,
    "battery.show_percentage": false
}),
];