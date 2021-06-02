// set Cookie
// name : 쿠키 key값
// value : 쿠기 key 매핑 되는 값
// exp : 저장 날짜 ex) 1 = 1일
function setCookie(name, value, exp, count) {
    var date = new Date();
    name = name + count;
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

// get Cookie
// name : 쿠키 key값 검색
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie) {
        var array = document.cookie.split(escape(name) + '=');
        // console.log(array);
        if (array.length >= 2) {
            var arraySub = array[1].split(';');
            cookieValue = unescape(arraySub[0]);
        }
    }

    // console.log("get cookie value : "+ cookieValue);

    return cookieValue;
}

// 상품 이름 쿠키 전부 가져오기
function getNameCookieList() {
    if (document.cookie) {
        var array = document.cookie.split(';');
        var resultArray = [];
        array.forEach((item) => {
            if (item.indexOf('nameText') != -1) {
                item.trim();
                console.log('item : ' + item);
                resultArray.push(item);
            }
        });

        return resultArray;
    }
}

// 유통 기한 쿠키 전부 가져오기
function getExpCookieList() {
    if (document.cookie) {
        var array = document.cookie.split(';');
        var resultArray = [];
        array.forEach((item) => {
            if (item.indexOf('expDate') != -1) {
				item.trim();
				console.log('item : ' + item);
                resultArray.push(item);
            }
        });

        return resultArray;
    }
}

// delete Cookie
// name : 지울 쿠키 key 값
function deleteCookie(name) {
    setCookie(name, '', 0, '');
}

// count min
// 총 쿠키 수 줄이기
function countMin() {
    var cookieCount = getCookie('cookieCount');
    if (cookieCount == 0) {
        setCookie('cookieCount', '', 0, '');
    } else {
        setCookie('cookieCount', --cookieCount, 7, '');
    }
}