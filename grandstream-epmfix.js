// ==UserScript==
// @name    Sangoma EndPoint Manager Fix for Voiceopia - Grandstream Devices
// @description Removes spaces from GS dial plans on Sangoma EPM with Voiceopia PBXes
// @include http://*.pbx.voiceopia.net/admin/config.php?display=endpoint&view=grandstream*
// @include http://pbx.voiceopia.com/admin/config.php?display=endpoint&view=grandstream*
// ==/UserScript==

dialpat = document.getElementById("dialpattern").value;
dialpat2 = dialpat.replace(/ /gi,'');
document.getElementById("dialpattern").value = dialpat2;
