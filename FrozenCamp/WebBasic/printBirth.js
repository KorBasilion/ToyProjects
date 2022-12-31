function printBirth() {
    var code = document.getElementById('code').value;
    var location = document.getElementById('result');
    switch(code){
        case '0': case '1': case '2': case '3': case '4': case '5': case '6':
            request(code)
            break;
        case '박정현':
            var json = request(0)
            text.textContent = json;
            break;
        case '복무창':
            request(1);
            break;
        case '오민석':
            request(2);
            break;
        case '한규원':
            request(3);
            break;
        case '김도영':
            request(4);
            break;
        case '김준호':
            request(5);
            break;
        case '문희범':
            request(6);
            break;
        default:
            location.textContent = "잘못된 코드 혹은 이름입니다(존재하지 않음)";
            break;
    }
}

function request(code) {
    var location = document.getElementById('result');
    var url = "https://my-json-server.typicode.com/smashh712/json_placeholder/members/" + code;
    fetch(url, {method: 'get'}).catch(error => alert("API HTTP Error: " + response.status))
    .then(response => response.json()).then(data => {
        var text = data.name + '님의 생일은 ' + data.birth[0] + data.birth[1] + '년 ' + data.birth[2] + data.birth[3] + '월 ' + data.birth[4] + data.birth[5] + '일 입니다.';
        location.textContent = text;
    });
}
