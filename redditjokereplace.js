// ==UserScript==
// @name           Communication to Goodness
// @version        1.0.3
// @description    Replace any string in threads on r/relatinships for comedic effect
// @include        *.reddit.com/r/relationships/*
// @grant       none
// ==/UserScript==

function escapeRegExp(str) {
  str = String(str);
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}


var replaceArry = [
     [/a brutally honest person/g,                            'an asshole'],
     [/A brutally honest person/g,                            'An asshole'],
     [/the brutally honest/g,                            'the asshole'],
     [/The brutally Honest/g,                            'The asshole'],
     [/a brutally honest/g,                            'an asshole'],
     [/A brutally Honest/g,                            'An asshole'],
     [/how brutally honest/g,                            'how much of an asshole'],
     [/How brutally honest/g,                            'How much of an asshole'],
     [/are brutally honest/g,                            'are assholes'],
     [/brutally honest/g,                            'an asshole'],
     [/Brutally honest/g,                            'An asshole'],
     [/brutal honesty/g,                            'assholery'],
     [/Brutal honesty/g,                            'Assholery'],
     [/have an open and honest communication/g,                            'have a good relationship'],
     [/Have an open and honest communication/g,                            'Have a good relationship'],
     [/have open and honest communication/g,                            'have a good relationship'],
     [/Have open and honest communication/g,                            'Have a good relationship'],
     [/having open and honest communication/g,                            'having a good relationship'],
     [/Having open and honest communication/g,                            'Having a good relationship'],
     [/use open and honest communication/g,                            'have a good relationship'],
     [/Use open and honest communication/g,                            'Have a good relationship'],
     [/using open and honest communication/g,                            'having a good relationship'],
     [/Using open and honest communication/g,                            'Having a good relationship'],
     [/open and honest communication/g,                            'having a good relationship'],
     [/Open and honest communication/g,                            'Having a good relationship'],
     [/open and honest/g,                            'good'],
     [/Open and honest/g,                            'Good'],
     [/open and honest/g,                            'good'],
     [/blazinghand/gi,                            "the coolest guy"]
   ];

var numTerms    = replaceArry.length;
var txtWalker   = document.createTreeWalker (
    document.body,
    NodeFilter.SHOW_TEXT,
    {   acceptNode: function (node) {
            //-- Skip whitespace-only nodes
            if (node.nodeValue.trim() )
                return NodeFilter.FILTER_ACCEPT;

            return NodeFilter.FILTER_SKIP;
        }
    },
    false
);
var txtNode     = null;

while (txtNode  = txtWalker.nextNode () ) {
    var oldTxt  = txtNode.nodeValue;

    for (var J  = 0;  J < numTerms;  J++) {
        oldTxt  = oldTxt.replace (replaceArry[J][0], replaceArry[J][1]);
    }
    txtNode.nodeValue = oldTxt;
}
