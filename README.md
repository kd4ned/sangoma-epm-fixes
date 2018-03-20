# sangoma-epm-fixes
Fixes for Sangoma's Commercial EndPoint Manager

This repository contains various Grasemonkey/Tampermonkey compatible
scripts which fix various issues discovered in Sangoma's Commercial
EndPoint Manager module. Mostly, these are dialplan issues, which are
not handled properly by their module, and result in breakage of the
endpoints when dialing.

You will need to install a compatible Greasemonkey/Tampermonkey
extension for your browser of choice, and then insert the .js files
into the appropriate directory on your machine for these to work.

Out of the box, these scripts should work for most Voiceopia customer
PBXen. If you are using them with a different service provider, you
will need to modify the scripts accordingly in order to match the URL
of your PBX(en.)

Current scripts are:

    grandstream-epmfix.js - Fix dial plan for Grandstream devices
    obihai-epmfix.js - Fix dial plan for Obihai devices
    sangoma-epmfix.js - Fix dial plan for Sangoma devices

