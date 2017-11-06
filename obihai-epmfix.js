// ==UserScript==
// @name    Sangoma EndPoint Manager Fix for Voiceopia
// @description Fixes brain-dead lack of URL encoding for dialpatterns on Sangoma EPM with Voiceopia PBXes
// @include http://*.pbx.voiceopia.net/admin/config.php?display=endpoint&view=sangoma*
// @include http://pbx.voiceopia.com/admin/config.php?display=endpoint&view=sangoma*
// ==/UserScript==

dialpat = document.getElementById("dialpattern").value;
dialpat2 = dialpat.replace('<','&lt;');
dialpat3 = dialpat2.replace('>','&gt;');
document.getElementById("dialpattern").value = dialpat3;

