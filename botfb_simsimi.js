
//***********************************
//*			Install Modules			*
//*---------------------------------*
//*		Install with command		*
//*									*
//* npm install request				*
//* npm install facebook-chat-api	*
//*									*
//***********************************
// Facebook Chat API By Schmavery
//Git_URL: https://github.com/Schmavery/facebook-chat-api
// Code: Trunghieuth10 - trunghieuth10@gmail.com

// Khai báo
var request = require("request");
var login = require("facebook-chat-api");
var SimsimiAnswered;
var text;
var botkey = "http://www.simsimi.com/getRealtimeReq?uuid=UwmPMKoqosEETKleXWGOJ6lynN1TQq18wwvrmCy6IRt&lc=vn&ft=0&reqText=";
login(
	{	
	email: "01678944573", 
	password: "SON1998ls" 
	},
function callback (err, api)
{
	if(err) return console.error(err);
	
	api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent"});
	
	api.listen(function callback(err, message)
	{
		if(message.body === "//logout") {
		    api.logout(err); 
			api.sendMessage(";) Ngừng auto chat thành công.", message.threadID); 
			api.markAsRead(message.threadID);
			return;
		}
		if (message.body==="Get id"||message.body==="getid"||message.body==="get id"||message.body==="Get id") {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Your ID: ", message.threadID); 
			api.sendMessage(message.senderID, message.threadID); 
			api.markAsRead(message.threadID); 
			console.log("Sender ID: " + message.senderID);
		}
		if (message.body === "Ai tạo ra mày thế?"||message.body === "ai tạo ra mày"||message.body === "ai là người tạo ra mày"||message.body === "Ai đã tạo ra mày"||message.body === "ai tạo ra mày?"||message.body === "ai sinh ra mày?"||message.body === "Ai đã tạo ra mày?"||message.body === "Tác giả"||message.body === "tác giả") {
			console.log("FormID: " + message.threadID + '->message: '+message.body);
			api.sendMessage("anh ấy tên là Sơn ^^, bản thân không có gì để nói vì suốt ngày cắm đầu vào những dòng code :) . \n- đây là facebook của anh ấy: https://www.facebook.com/myprofile.98.75", message.threadID);
			return;
		}
		if (message.body === "hướng dẫn"||message.body === "Hướng dẫn"||message.body === "HƯỚNG DẪN") {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Tin nhắn trả lời tự động. HD: \n- Trả lời: fb ,để ghé thăm tường của tôi. \n- Trả lời: sdt ,để lấy số điện thoại của tôi. \n- Trả lời kèm: dấu chấm ở đầu câu để tránh javis tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện. \n- Trả lời: Get id ,để tra cứu id của bạn. \n- Trả lời groups , để tham gia group của chúng tôi.", message.threadID);
			return;
		}
		if (message.body === "groups"||message.body === "Groups"||message.body === "GROUPS") {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Link nhóm:https://www.facebook.com/groups/thuthuatcydia/", message.threadID);
			api.sendMessage("Tin nhắn trả lời tự động. HD:  \n- Trả lời: fb , để ghé thăm tường của tôi. \n- Trả lời: sdt ,để lấy số điện thoại của tôi. \n- Trả lời kèm: dấu chấm ở đầu câu để tránh javis tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện. \n- Trả lời: Get id , để tra cứu id của bạn. \n- Trả lời: groups , để tham gia group của chúng tôi.", message.threadID);
			return;
		}
		if (message.body === "Giết"||message.body === "Giết bot"||message.body === "giết"||message.body === "bot lồn"||message.body === "địt mẹ bot"||message.body === ":("||message.body === ":)"||message.body === "xiên cc"||message.body === "thua"||message.body === "bot ngu lồn"||message.body === "cc"||message.body === "cục cứt"||message.body === "sủa") {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("chửi cái beeppp. tao xiên chết cụ mày giờ :v", message.threadID);
			return;
		}
		else if(message.body === "fb"||message.body === "Fb"||message.body ==="FB"||message.body === "fB") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("mời click: https://www.facebook.com/myprofile.98.75", message.threadID); 
			api.sendMessage("Tin nhắn trả lời tự động. HD:  \n- Trả lời: fb ,để ghé thăm tường của tôi. \n- Trả lời: sdt ,để lấy số điện thoại của tôi. \n- Trả lời kèm: dấu chấm ở đầu câu để tránh javis tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện. \n- Trả lời: Get id ,để tra cứu id của bạn. \n- Trả lời: groups , để tham gia group của chúng tôi.", message.threadID);
			return;
		}
		else if(message.body === "sdt"||message.body === "sđt"||message.body === "Sdt"||message.body === "Sđt"||message.body === "SDT"||message.body === "SĐT") { 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("SĐT: +0869147862", message.threadID); 
			api.sendMessage("Tin nhắn trả lời tự động. HD:  \n- Trả lời: fb ,để ghé thăm tường của tôi. \n- Trả lời: sdt ,để lấy số điện thoại của tôi. \n- Trả lời kèm: dấu chấm ở đầu câu để tránh javis tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện. \n- Trả lời: Get id ,để tra cứu id của bạn. \n- Trả lời: groups , để tham gia group của chúng tôi.", message.threadID);
			return;
		}
		else if (message.body.indexOf(".")===0){
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			return;
		}
		 else if (message.senderID==="10"||message.senderID==="1602644206481270"||message.senderID==="id_loại_trừ_3") {			 
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			return;
		}else if (message.SenderID==="100014360476504","100011605542796","100014006173455","100015202720398") {
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			api.sendMessage("Chào bạn, mình đang bận ^^~ sẽ trả lời bạn ngay khi đọc được tin nhắn nhé. Vui lòng không nhắn thêm ^^. \n- vui lòng trả lời dấu chấm trước câu để bot không tự động trả lời. \n- Trả lời: hướng dẫn , để xem danh sách tra cứu. \n- vui lòng không gửi nhãn dán hay ảnh. \n- nhắn: tác giả, để biết người tạo ra bot.", message.threadID);
			return;
		} else if (message.body)
		{
			console.log("FormID: " + message.threadID + '->Message: '+message.body);
			request(botkey + encodeURI(message.body),  
			function(error, response, body)
			{  
				if (error) api.sendMessage("Tao đang đơ, không trả lời được :)", message.threadID);
				if (body.indexOf("502 Bad Gateway") > 0 || body.indexOf("respSentence") < 0)
					api.sendMessage("Vui lòng trả lời kèm dấu chấm ở đầu câu để javis không trả lời tự động " + message.body, message.threadID 
				);
				text = JSON.parse(body);
				if (text.status == "200")
				{
					SimsimiAnswered = text.respSentence;
					if (message.body===text.respSentence) {
						return;
					} else
					SimsimiAnswered = text.respSentence;
					api.sendMessage(SimsimiAnswered+"\n \n --------\nTin nhắn trả lời tự động. HD:  \n- Trả lời: fb ,để ghé thăm tường của tôi. \n- Trả lời: sdt ,để lấy số điện thoại của tôi. \n- Trả lời kèm: dấu chấm ở đầu câu để tránh javis tự động trả lời. \n- Trả lời bất kỳ để tiếp tục cuộc trò chuyện. \n- Trả lời: Get id , để lấy id của bạn. \n- Trả lời: groups ,để tham gia group của chúng tôi.", message.threadID);
					api.markAsRead(message.threadID);
					console.log("Answered:"+SimsimiAnswered);
				}
			});
		}
	});
})