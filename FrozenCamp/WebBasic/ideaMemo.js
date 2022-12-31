function createMemo() {
    var nowDate = new Date();
    var location = document.getElementById('result');
    var color = document.querySelector('input[name="color"]:checked').value;
    var styleSet = "background-color: " + color + ";";

    var boxLocate = document.createElement('p');

    var memoBox = document.createElement('div');
    memoBox.className = 'card';

    var title = document.createElement('strong');
    title.className = 'card-header';
    title.style = styleSet;
    title.innerHTML = nowDate;

    var content = document.createElement('div');
    content.className = 'card-body';

    var text = document.createElement('p');
    text.className = 'card-text';
    text.innerHTML = document.getElementById('memo').value;

    var button = document.createElement('a');
    button.className = 'btn btn-primary';
    button.herf = '#'
    button.innerHTML = "삭제";
    button.onclick = () => {
        location.removeChild(boxLocate);
    }

    memoBox.appendChild(title);
    content.appendChild(text);
    content.appendChild(button);
    memoBox.appendChild(content);

    boxLocate.appendChild(memoBox);
    location.appendChild(boxLocate);
}