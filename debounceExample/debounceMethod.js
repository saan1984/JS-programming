function debounce(fn , timeout) {
    let timeoutHandle = null;
    return function(){
        if(timeoutHandle) {
            clearTimeout(timeoutHandle);
        }
        timeoutHandle = setTimeout(function(){
            fn.apply(this)
            timeoutHandle = null;
        }, timeout);
    }
}