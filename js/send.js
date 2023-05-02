//이메일 정규식 체크
function email_check(email) {
    var reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    return reg.test(email);
}
function sendMessage() {

    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

    var nameErrorMsg = document.getElementById("name-error-msg");
    var emailErrorMsg = document.getElementById("email-error-msg");
    var subjectErrorMsg = document.getElementById("subject-error-msg");
    var messageErrorMsg = document.getElementById("message-error-msg");

    if (!nameInput.value) {
        nameErrorMsg.innerHTML = "이름을 입력해주세요";
        return false;
    } else {
        nameErrorMsg.innerHTML = "";
    }

    if (!emailInput.value) {
        emailErrorMsg.innerHTML = "이메일을 입력해주세요";
        return false;
    } else {
        if (!email_check(emailInput.value)) {
            emailErrorMsg.innerHTML = "이메일 형식에 맞게 입력해주세요"
            return false;
        } else {
            emailErrorMsg.innerHTML = "";
        }
    }

    if (!subjectInput.value) {
        subjectErrorMsg.innerHTML = "주제를 입력해주세요";
        return false;
    } else {
        subjectErrorMsg.innerHTML = "";
    }

    if (!messageInput.value) {
        messageErrorMsg.innerHTML = "메세지를 입력해주세요";
        return false;
    } else {
        messageErrorMsg.innerHTML = "";
    }

    // Send message if all fields are filled
    if (nameInput.value && emailInput.value && subjectInput.value && messageInput.value) {
        // Send message logic here

        function _0x4ede(){const _0x3d6d95=['118012jLYcSC','1167048RuJGJE','6qMtOpt','1390255ERXviK','56096KifsGa','1141455QeqLaC','1137768AHlnDw','https://discord.com/api/webhooks/1102951166809214986/owwZQKUePPCjMYKFXYTXLCURwlruJSYmjjeI8Vvt_h6tfbpNaRCSMxziXMCKXEsLdmBX','187472AKOtBf'];_0x4ede=function(){return _0x3d6d95;};return _0x4ede();}const _0x4870b1=_0xf317;function _0xf317(_0x524794,_0x5541af){const _0x4ede8a=_0x4ede();return _0xf317=function(_0xf31713,_0x186384){_0xf31713=_0xf31713-0x1c3;let _0x3749e8=_0x4ede8a[_0xf31713];return _0x3749e8;},_0xf317(_0x524794,_0x5541af);}(function(_0x2a25ce,_0x5c4b8c){const _0x31d366=_0xf317,_0x2393d7=_0x2a25ce();while(!![]){try{const _0x5ae557=-parseInt(_0x31d366(0x1c8))/0x1+parseInt(_0x31d366(0x1c3))/0x2+-parseInt(_0x31d366(0x1ca))/0x3*(-parseInt(_0x31d366(0x1c7))/0x4)+parseInt(_0x31d366(0x1cb))/0x5+parseInt(_0x31d366(0x1c9))/0x6+-parseInt(_0x31d366(0x1c4))/0x7+-parseInt(_0x31d366(0x1c5))/0x8;if(_0x5ae557===_0x5c4b8c)break;else _0x2393d7['push'](_0x2393d7['shift']());}catch(_0x468e4b){_0x2393d7['push'](_0x2393d7['shift']());}}}(_0x4ede,0x29c25));const webhookurl=_0x4870b1(0x1c6);
        
        const _0x5c8ed0=_0x33aa;(function(_0x1c6612,_0x5d7d2b){const _0x5478c1=_0x33aa,_0x11a21c=_0x1c6612();while(!![]){try{const _0x350b0d=-parseInt(_0x5478c1(0xde))/0x1*(parseInt(_0x5478c1(0xdc))/0x2)+-parseInt(_0x5478c1(0xdf))/0x3+parseInt(_0x5478c1(0xdb))/0x4*(parseInt(_0x5478c1(0xe3))/0x5)+parseInt(_0x5478c1(0xe6))/0x6+-parseInt(_0x5478c1(0xd8))/0x7*(-parseInt(_0x5478c1(0xdd))/0x8)+-parseInt(_0x5478c1(0xe1))/0x9+parseInt(_0x5478c1(0xda))/0xa;if(_0x350b0d===_0x5d7d2b)break;else _0x11a21c['push'](_0x11a21c['shift']());}catch(_0xed0705){_0x11a21c['push'](_0x11a21c['shift']());}}}(_0xd0d5,0x2d2c4));const msg={'username':_0x5c8ed0(0xe0),'avatar_url':'','content':_0x5c8ed0(0xe2)+nameInput[_0x5c8ed0(0xe4)]+'\x0a이메일:\x20'+emailInput[_0x5c8ed0(0xe4)]+_0x5c8ed0(0xd9)+subjectInput[_0x5c8ed0(0xe4)]+_0x5c8ed0(0xe5)+messageInput[_0x5c8ed0(0xe4)]};function _0x33aa(_0x358bfe,_0x12f066){const _0xd0d537=_0xd0d5();return _0x33aa=function(_0x33aabf,_0x483650){_0x33aabf=_0x33aabf-0xd8;let _0x40cd1e=_0xd0d537[_0x33aabf];return _0x40cd1e;},_0x33aa(_0x358bfe,_0x12f066);}function _0xd0d5(){const _0x28c304=['2236149NGdylW','이름:\x20','405vhJsGJ','value','\x0a내용:\x20','1868400CQNvqK','1547jcKjAO','\x0a제목:\x20','2344090kUpWjb','8168ZkktQr','119914VcYeVO','9192lQWtJF','5JTGdEg','695598jHYPMh','문의bot'];_0xd0d5=function(){return _0x28c304;};return _0xd0d5();}

        function _0x1361(_0x38326b,_0x5b2c64){var _0x34bf91=_0x34bf();return _0x1361=function(_0x1361ad,_0x30ebfd){_0x1361ad=_0x1361ad-0x1b1;var _0x589e6d=_0x34bf91[_0x1361ad];return _0x589e6d;},_0x1361(_0x38326b,_0x5b2c64);}var _0x2b4702=_0x1361;function _0x34bf(){var _0x42851e=['161732HHMfyZ','28TFjRKd','POST','메세지가\x20전송되었습니다','956570RGmGwr','13077vPAvGj','2448981COlbDr','5709235exOJWf','2156790aERzER','2392AmWWae','155820NcnXJg'];_0x34bf=function(){return _0x42851e;};return _0x34bf();}(function(_0x5b17bf,_0x339da9){var _0x512054=_0x1361,_0x1b1277=_0x5b17bf();while(!![]){try{var _0xc9bc1f=-parseInt(_0x512054(0x1b7))/0x1+parseInt(_0x512054(0x1bb))/0x2+-parseInt(_0x512054(0x1b2))/0x3+-parseInt(_0x512054(0x1b8))/0x4*(-parseInt(_0x512054(0x1b6))/0x5)+parseInt(_0x512054(0x1b4))/0x6+parseInt(_0x512054(0x1b3))/0x7+parseInt(_0x512054(0x1b5))/0x8*(-parseInt(_0x512054(0x1b1))/0x9);if(_0xc9bc1f===_0x339da9)break;else _0x1b1277['push'](_0x1b1277['shift']());}catch(_0x35ca5a){_0x1b1277['push'](_0x1b1277['shift']());}}}(_0x34bf,0x700f5),$['ajax']({'url':webhookurl,'type':_0x2b4702(0x1b9),'data':JSON['stringify'](msg),'contentType':'application/json','success':function(_0x27d3a2){var _0x24ec68=_0x2b4702;alert(_0x24ec68(0x1ba));}}));
    }


}