$.ajax({
	url:"qrGet.do",
	type:"post",
	success:function(data){
		$("#qrImg").attr("src",data);
	},
	error:function(e){
		alert(e);
	}
})