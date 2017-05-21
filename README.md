# furryoclock
A toy app that posts a Super Furry Animals song to Twitter once an hour.

## The App

The app queries the Spotify API for all current SFA albums, chooses a random one, then queries all tracks off that album, chooses a random one of those and finally fires the track url off to Twitter.

## Cron

A crontab runs on the host computer with the task of running the app once an hour.

