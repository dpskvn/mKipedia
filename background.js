chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         var newUrl = details.url.replace(/(en)(.wikipedia.org\/)/, function(match, p1, p2){
           return [p1, '.m', p2].join('');
         });
         return {redirectUrl: newUrl};
    },
    {
        urls: [
            "*://en.wikipedia.org/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);