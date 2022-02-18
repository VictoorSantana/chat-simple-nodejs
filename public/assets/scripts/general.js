


function getStorageUser() {
    const storage = localStorage.getItem('user');
    return storage ? JSON.parse(storage) : null;
}

function getToken() {
    const storage = localStorage.getItem('token');
    return storage;
}


function clearAuth() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = "/index.html";
}

$(document).ready(function () {
    $('.same-height').each(function () {
        $(this).css("height", $(this).width());
    });

    $('.ratio-height').each(function () {
        const width = $(this).css("width");
        const ratio = $(this).attr("ratio-height");

        if (width) {
            let result = width.replace('px', '');
            $(this).css("height", `${Number(result) / Number(ratio)}px`);
        }
    });
});
