KekBot
======

A plug.dj bot.

Support
-------

This code has been tested on Chromium 30+

Support for other browsers is unknown.

Installation
------------

#### v1.x

(no license)

Simply the kekbot_old.js code into your favorite browser's JS console.

Modify the code and variables to your preferences.

#### v2.x

(MIT license)

##### Chrom(e/ium)

Just add a bookmark with this being the URL:

	javascript:var kbimport=document.createElement("script");kbimport.setAttribyte("id","KB_Import");kbimport.setAttribute("src","https://raw.github.com/Strategetical/kekbot/master/import.js");document.getElementsByTagName("body")[0].insertBefore(kbimport,document.getElementsByTagName("body")[0].firstChild);

..and once you join a plug.dj room, just click on the bookmark so KekBot will install!

Commands
--------

(all commands are prefixed with a %, e.g. "%roll")


**Users**: Anyone can do these commands.

 * roll - Roll a random number. Goes from 0 to 999999.
 * fortune - Roll a random fortune.
 * modtest - Test to see if you're privileged.
 * coinflip - Flips a coin. Outcome is either heads or tails.
 * skip - Skips the song it is playing
 * nextup - Says what song Kekbot will play next.
 * help - Redirects the user to this repo page.
 * version - Tells version.

Also, it now listens for these (case-sensitive) strings:

 * "Does she love me?" - Always returns "Yes."
 * "Does he love me?" - Always returns "ew r u gay or something"

**Mods**: People in the modlist can do these commands.

 * modlist - List all the Kekbot moderators.
 * listplaylists - List all the Kekbot playlists. Starts counting from 0.
 * chooseplaylist (number) - Choose a specific Kekbot playlist. Starts counting from 0.
 * djjoin - Make Kekbot join the DJ list.
 * djleave - Make Kekbot leave the DJ list.

**Admins**: Only the Kekbot admins can do these commands.

 * enable - Enable kekbot.
 * disable - Disable kekbot.
 * addmod (@person) - Add a mod to the Kekbot list.
 * removemod (@person) - Remove a mod from the Kekbot list.
 * loadmods - Load the mod list after a code hotswap.
 * modtojson - Convert the kekbot.mods object to JSON.
 * jsontomod - Load the JSON into the kekbot.mods object.
 * update - Optimize the room for the bot, reload the mods, and enable. Meant for after-code hotswaps.
 * downboats - List all the current video downvotes. (moved up to admin privileges as requested per Captain Kek)
 * upboat - Forces the bot to vote up on the current playing video
 * downboat - Forces the bot to vote down on the current playing video.
 * spam (interval) (amount) (text) - Spams a specified message X amount of time, with Y delay between message.
 