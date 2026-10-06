# Otto

A small, mobile-friendly habit tracker. Otto shows a week of check-in spaces for each habit.

## Features

- Create habits for every day, a target number of days each week, or several check-ins per day.
- Check in from a weekly grid of large, touch-friendly spaces.
- Edit or remove habits and switch between light and dark themes.
- Keep habits, progress, and theme preference in this browser with `localStorage`.

## Run locally

Serve this folder with any static web server. For example:

```sh
python3 -m http.server 8765
```

Then open [http://localhost:8765](http://localhost:8765).

The app is implemented in `index.html` and does not require a build step.

## Next direction

RFID/NFC tap-to-check-in is a planned extension. Check-ins currently use the on-screen controls; tag reading is not implemented yet.
