const xhr = new XMLHttpRequest();
const content = document.getElementById('content');
xhr.onload = function () {
    if (this.status === 200) {
        content.innerHTML = xhr.responseText;
    } else {
        console.warn('Did not recieve 200 OK');
    }
};

xhr.open('get', 'about.html');
xhr.send();