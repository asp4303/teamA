jQuery(document).ready(function () {
  $(".btn").on("click", function () {
    if ($(this).is("#btnProgram")) {
      let cardId = $(this).parent().attr("id");
      let num = cardId[4];
      let dayPart = $("#" + cardId)
        .find("#pro" + num)
        .attr("id");
      let dayMention = $("#" + cardId)
        .find("#proMention" + num)
        .attr("id");
      if ($("#" + dayPart).val() == "") {
        let modalBody = $("#proSubmit").parent().prev().attr("class");
        $("." + modalBody)
          .find("#proPart")
          .val("");
        $("." + modalBody)
          .find("#proMention")
          .val("");
        $("#proSubmit").on("click", function () {
          $("#" + cardId)
            .find("#btnPT")
            .hide();
          $("#" + cardId)
            .find("#pro" + num)
            .attr("style", "display:flex");
          $("#" + dayPart).val(
            $("." + modalBody)
              .find("#proPart")
              .val()
          );
          $("#" + dayMention).val(
            $("." + modalBody)
              .find("#proMention")
              .val()
          );
          dayMention = "undefined";
          dayPart = "undefined";
          num = "undefined";
          cardId = "undefined";
        });
      } else {
        let modalBody = $("#proSubmit").parent().prev().attr("class");
        $("." + modalBody)
          .find("#proPart")
          .val($("#" + dayPart).val());
        $("." + modalBody)
          .find("#proMention")
          .val($("#" + dayMention).val());
        $("#proSubmit").on("click", function () {
          $("#" + cardId)
            .find("#btnPT")
            .hide();
          $("#" + cardId)
            .find("#pro" + num)
            .attr("style", "display:flex");
          $("#" + dayPart).val(
            $("." + modalBody)
              .find("#proPart")
              .val()
          );
          $("#" + dayMention).val(
            $("." + modalBody)
              .find("#proMention")
              .val()
          );
          dayMention = "undefined";
          dayPart = "undefined";
          num = "undefined";
          cardId = "undefined";
        });
      }

      $("#proCancel").on("click", function () {
        $("#" + cardId)
          .find("#btnPT")
          .show();
        $("#" + cardId)
          .find("#pro" + num)
          .attr("style", "display:none");

        $("#" + dayPart).val("");
        $("#" + dayMention).val("");
        dayMention = "undefined";
        dayPart = "undefined";
        cardId = "undefined";
        num = "undefined";
      });

      $(".close").on("click", function () {
        dayMention = "undefined";
        dayPart = "undefined";
        cardId = "undefined";
        num = "undefined";
      });
    }
    if ($(this).is("#btnPT")) {
      let cardId = $(this).parent().attr("id");
      let num = cardId[4];
      let dayTime = $("#" + cardId)
        .find(".PT")
        .attr("id");
      if ($("#" + dayTime).val() == "") {
        let modalBody = $("#ptSubmit").parent().prev().attr("class");
        $("." + modalBody)
          .find("#ptTime")
          .val("");
        $("#ptSubmit").on("click", function () {
          $("#" + cardId)
            .find("#btnProgram")
            .hide();
          $("#" + cardId)
            .find("#time" + num)
            .attr("style", "display:flex");
          $("#" + dayTime).val(
            $("." + modalBody)
              .find("#ptTime")
              .val()
          );
          dayTime = "undefined";
          num = "undefined";
          cardId = "undefined";
        });
      } else {
        let modalBody = $("#ptSubmit").parent().prev().attr("class");
        $("." + modalBody)
          .find("#ptTime")
          .val($("#" + dayTime).val());
        $("#ptSubmit").on("click", function () {
          $("#" + cardId)
            .find("#btnProgram")
            .hide();
          $("#" + cardId)
            .find("#time" + num)
            .attr("style", "display:flex");
          $("#" + dayTime).val(
            $("." + modalBody)
              .find("#ptTime")
              .val()
          );
          dayTime = "undefined";
          num = "undefined";
          cardId = "undefined";
        });
      }

      $("#ptCancel").on("click", function () {
        $("#" + cardId)
          .find("#btnProgram")
          .show();
        $("#" + cardId)
          .find("#time" + num)
          .attr("style", "display:none");

        $("#" + dayTime).val("");
        dayTime = "undefined";
        num = "undefined";
        cardId = "undefined";
      });
      $(".close").on("click", function () {
        dayMention = "undefined";
        dayPart = "undefined";
        cardId = "undefined";
        num = "undefined";
      });
    }
  });
});

$(".custom-select").css("width", "auto");
// $(this).attr("data-target", "#PT");

// 모바일에서 날짜
if (window.matchMedia("(max-width: 800px)").matches == true) {
  $(document).ready(function () {
    $(".custom-input").attr("style", "display:none");
    $(".custom-input").removeClass("input-group-prepend");
  });
} else {
  $(document).ready(function () {
    $(".custom-input").attr("style", "display:flex");
    $(".custom-input").addClass("input-group-prepend");
  });
}

$(window).resize(function () {
  if (window.matchMedia("(max-width: 800px)").matches == true) {
    $(document).ready(function () {
      $(".custom-input").attr("style", "display:none");
      $(".custom-input").removeClass("input-group-prepend");
    });
  } else {
    $(document).ready(function () {
      $(".custom-input").attr("style", "display:flex");
      $(".custom-input").addClass("input-group-prepend");
    });
  }
  if (window.matchMedia("(max-width: 574px)").matches == true) {
    $(".custom-submit").attr("style", "width:100%");
  } else {
    $(".custom-submit").attr("style", "width:");
  }
});
if (window.matchMedia("(max-width: 574px)").matches == true) {
  $(".custom-submit").attr("style", "width:100%");
} else {
  $(".custom-submit").attr("style", "width:");
}

// 드롭다운 선택시 화면 출력
var nowDate=new Date();
var year= nowDate.getFullYear();
var monthWeek="";
var month;
var weekend;
var date;
var dateDif=0;
var week=["mon","tue","wed","thu","fri"];
var dayLen;
// 윤년 처리
dayLen=isLeapYear(year);

var day;
var firstWeekNum;
var lastWeekNum;
var firstWeekDif=0;
var lastWeekDif=0;
var isFourWeeks=false;

// 월 선택
$("select[id=monthSelect]").on("change",function(){
	//주차 선택시 까지 완료버튼 사라짐
	$("#confirm").attr("style","display:none !important");
	
	month=this.value;
	console.log(month);
	firstWeekNum=weekNumberByMonth(new Date(year,month-1,1));
	lastWeekNum=weekNumberByMonth(new Date(year,month-1,dayLen[month-1]));
	console.log(month+"월 1일은 "+firstWeekNum.month+"월 "+firstWeekNum.weekNo+"주차");
	console.log(month+"월 "+dayLen[month-1]+"일은 "+lastWeekNum.month+"월 "+lastWeekNum.weekNo+"주차");
	if(firstWeekNum.month!=month){
		firstWeekDif=1;
	}else{
		firstWeekDif=0;
	}
	if(lastWeekNum.month!=month){
		lastWeekDif=1;
	}else{
		lastWeekDif=0;
	}
	$("#weekSelect").empty();
	$("#weekSelect").append("<option selected disabled>주</option>");
	let innerDate=new Date(year,month-1,1);
	if((firstWeekDif==1&&lastWeekDif==1&&innerDate.getDay()==6)||lastWeekNum.weekNo==4){
		for(var i=1;i<=4;i++){
			$("#weekSelect").append("<option value='"+(i+1)+"'>"+i+"주차</option>");
			isFourWeeks=true;
		}
	}else{
		for(var i=1;i<=5;i++){
			$("#weekSelect").append("<option value='"+i+"'>"+i+"주차</option>");
			isFourWeeks=false;
		}
	}
	
})

// 주차 선택
$("select[id=weekSelect]").on("change",function(){
	//선택시 완료버튼 생김
	$("#confirm").attr("style","display:inline-block !important");
	
	weekend=this.value;
	monthWeek+=month;
	monthWeek+="월 ";
	if(isFourWeeks==true){
		monthWeek+=weekend-1;
	}else{
		monthWeek+=weekend;
	}
	monthWeek+="주차";
	if($("#weekend").text()!=""){
		$("#weekend").text("");
		$("#weekend").append(monthWeek);
	}else{
		$("#weekend").append(monthWeek);
	}
	monthWeek="";
	date=new Date(year,month-1);
	day=new Array();
	for(var i=0;i<dayLen[month-1];i++){
		day.push(i+1);
	}
	if(date.getDay()!=1){
		dateDif=date.getDay()-1;
	}
	if(weekend==1){
		if(firstWeekDif==1){
			var firstDay=date.getDay();
			if(firstDay==6){
				for(var i=0;i<week.length;i++){
					date.setDate(day[i+2]);
					$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
					$("#"+week[i]).append(month+"/"+date.getDate());
					$("#date"+i).val(year+"-"+month+"-"+date.getDate());
				}
			}else if(firstDay==0){
				for(var i=0;i<week.length;i++){
					date.setDate(day[i+1]);
					$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
					$("#"+week[i]).append(month+"/"+date.getDate());
					$("#date"+i).val(year+"-"+month+"-"+date.getDate());
				}
			}
		}else{
			if(dateDif<0){
				for(var i=0;i<week.length;i++){
					date.setDate(day[i+1]);
					$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
					$("#"+week[i]).append(month+"/"+date.getDate());
					$("#date"+i).val(year+"-"+month+"-"+date.getDate());
				}
			}else{
				for(var i=0;i<dateDif;i++){
					$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
					if(month==1){
						const lastYear=new Date(year-1,11,1);
						$("#"+week[i]).append("("+lastYear.getFullYear()+")"
												+(lastYear.getMonth()+1)+"/"
												+(dayLen[lastYear.getMonth()]-dateDif+1+i));
						$("#date"+i).val(lastYear.getFullYear()+"-"
									+(lastYear.getMonth()+1)+"-"
									+(dayLen[lastYear.getMonth()]-dateDif+1+i));
					}else{
						$("#"+week[i]).append(month-1+"/"+(dayLen[month-2]-dateDif+1+i));
						$("#date"+i).val(year+"-"+(month-1)+"-"+(dayLen[month-2]-dateDif+1+i));
					}
				}
				for(var i=dateDif;i<week.length;i++){
					date.setDate(day[i-dateDif]);
					$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
					$("#"+week[i]).append(month+"/"+date.getDate());
					$("#date"+i).val(year+"-"+month+"-"+date.getDate());
				}
			}
		}
	}else if(weekend==2){
		for(var i=0;i<dateDif;i++){
			date.setDate(day[i]+(7*(weekend-1))-dateDif);
			$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
			$("#"+week[i]).append(month+"/"+date.getDate());
			$("#date"+i).val(year+"-"+month+"-"+date.getDate());
		}
		for(var i=dateDif;i<week.length;i++){
			date.setDate(day[i-dateDif]+(7*(weekend-1)));
			$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
			$("#"+week[i]).append(month+"/"+date.getDate());
			$("#date"+i).val(year+"-"+month+"-"+date.getDate());
		}
	}else if(weekend==3){
		for(var i=0;i<dateDif;i++){
			date.setDate(day[i]+(7*(weekend-1))-dateDif);
			$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
			$("#"+week[i]).append(month+"/"+date.getDate());
			$("#date"+i).val(year+"-"+month+"-"+date.getDate());
		}
		for(var i=dateDif;i<week.length;i++){
			date.setDate(day[i-dateDif]+(7*(weekend-1)));
			$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
			$("#"+week[i]).append(month+"/"+date.getDate());
			$("#date"+i).val(year+"-"+month+"-"+date.getDate());
		}
	}else if(weekend==4){
		for(var i=0;i<dateDif;i++){
			date.setDate(day[i]+(7*(weekend-1))-dateDif);
			$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
			$("#"+week[i]).append(month+"/"+date.getDate());
			$("#date"+i).val(year+"-"+month+"-"+date.getDate());
		}
		for(var i=dateDif;i<week.length;i++){
			date.setDate(day[i-dateDif]+(7*(weekend-1)));
			$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
			$("#"+week[i]).append(month+"/"+date.getDate());
			$("#date"+i).val(year+"-"+month+"-"+date.getDate());
		}
	}else if(weekend==5){
		if(lastWeekDif==1){
			let lastDate=dayLen[month-1];
			let count=0;
			let inerCount=0;
			for(var i=0;i<5;i++){
				count++;
				date.setDate(day[i]+(7*(weekend-1))-dateDif);				
				$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
				$("#"+week[i]).append(month+"/"+date.getDate());
				$("#date"+i).val(year+"-"+month+"-"+date.getDate());
				if(date.getDate()==lastDate){
					break;
				}
			}
			for(var i=count;i<week.length;i++){
				inerCount++;
				$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
				$("#"+week[i]).append((Number(month)+1)+"/"+inerCount);
				$("#date"+i).val(year+"-"+(Number(month)+1)+"-"+inerCount);
			}
		}else{
			date.setDate(dayLen[month-1]);
			var lastDay=date.getDay()+0;
			if(lastDay==0){
				
			}else{
				for(var i=0;i<lastDay;i++){
					date.setDate(day[i]+(7*(weekend-1))-dateDif);
					$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
					$("#"+week[i]).append(month+"/"+date.getDate());
					$("#date"+i).val(year+"-"+month+"-"+date.getDate());
			}
				for(var i=lastDay;i<5;i++){
					$("#"+week[i]).text($("#"+week[i]).text().substr(0,1));
					if(month==12){
						const nextYear=new Date(year+1,0,1);
						$("#"+week[i]).append("("+nextYear.getFullYear()+")"
										+(nextYear.getMonth()+1)+"/"+(i-lastDay+1));
						$("#date"+i).val(nextYear.getFullYear()+"-"
									+(nextYear.getMonth()+1)+"-"+(i-lastDay+1));
					}else{
						$("#"+week[i]).append((Number(month)+1)+"/"+(i-lastDay+1));
						$("#date"+i).val(year+"-"+(Number(month)+1)+"-"+(i-lastDay+1));
					} 
				}
			}
			
		}
				
	}	
	
})


function weekNumberByMonth(dateFormat) {
  const inputDate = new Date(dateFormat);
 
  // 인풋의 년, 월
  let year = inputDate.getFullYear();
  let month = inputDate.getMonth()+1;
 
  // 목요일 기준 주차 구하기
  const weekNumberByThurFnc = (paramDate) => {
 
    const year = paramDate.getFullYear();
    const month = paramDate.getMonth();
    const date = paramDate.getDate();
 
    // 인풋한 달의 첫 날과 마지막 날의 요일
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month+1, 0);
    const firstDayOfWeek = firstDate.getDay() === 0 ? 7 : firstDate.getDay();
    const lastDayOfweek = lastDate.getDay();
 
    // 인풋한 달의 마지막 일
    const lastDay = lastDate.getDate();
 
    // 첫 날의 요일이 금, 토, 일요일 이라면 true
    const firstWeekCheck = firstDayOfWeek === 5 || firstDayOfWeek === 6 || firstDayOfWeek === 7;
    // 마지막 날의 요일이 월, 화, 수라면 true
    const lastWeekCheck = lastDayOfweek === 1 || lastDayOfweek === 2 || lastDayOfweek === 3;
 
    // 해당 달이 총 몇주까지 있는지
    const lastWeekNo = Math.ceil((firstDayOfWeek - 1 + lastDay) / 7);
 
    // 날짜 기준으로 몇주차 인지
    let weekNo = Math.ceil((firstDayOfWeek - 1 + date) / 7);
 
    // 인풋한 날짜가 첫 주에 있고 첫 날이 월, 화, 수로 시작한다면 'prev'(전달 마지막 주)
    if(weekNo === 1 && firstWeekCheck) weekNo = 'prev';
    // 인풋한 날짜가 마지막 주에 있고 마지막 날이 월, 화, 수로 끝난다면 'next'(다음달 첫 주)
    else if(weekNo === lastWeekNo && lastWeekCheck) weekNo = 'next';
    // 인풋한 날짜의 첫 주는 아니지만 첫날이 월, 화 수로 시작하면 -1;
    else if(firstWeekCheck) weekNo = weekNo -1;
 
    return weekNo;
  };
 
  // 목요일 기준의 주차
  let weekNo = weekNumberByThurFnc(inputDate);
 
  // 이전달의 마지막 주차일 떄
  if(weekNo === 'prev') {
    // 이전 달의 마지막날
    const afterDate = new Date(year, month-1, 0);
    year = month === 1 ? year - 1 : year;
    month = month === 1 ? 12 : month - 1;
    weekNo = weekNumberByThurFnc(afterDate);
  }
  // 다음달의 첫 주차일 때
  if(weekNo === 'next') {
    year = month === 12 ? year + 1 : year;
    month = month === 12 ? 1 : month + 1;
    weekNo = 1;
  }
 
  return {month, weekNo};
}

function isLeapYear(thisyear){
	let result;
	if(thisyear%4==0){
		if(thisyear%100!=0||thisyear%400==0){
			result=[31,29,31,30,31,30,31,31,30,31,30,31];
	}	else{
			result=[31,28,31,30,31,30,31,31,30,31,30,31];
	}
	}else{
		result=[31,28,31,30,31,30,31,31,30,31,30,31];
	}
	
	return result;
}

// 스케줄 세팅 이동
function setting(){
	const date= new Array();
	for(var i=0;i<5;i++){
		date[i]=$("#date"+i).val();
		console.log(date[i]);
	}
	const time=new Array();
	for(var i=1;i<=5;i++){
		if($("#time"+i).val()==null){
			time[i]="";
		}else{
			time[i]=$("#time"+i).val();
		}
		console.log(time[i]);
	}
	const program=new Array();
	for(var i=1;i<=5;i++){
		if($("#pro"+i).val()==null){
			program[i]="";
		}else{
			program[i]=$("#pro"+i).val();
		}
		console.log(program[i]);
	}
	const proMention=new Array();
	for(var i=1;i<=5;i++){
		if($("#proMention"+i).val()==null){
			proMention[i]="";
		}else{
			proMention[i]=$("#proMention"+i).val();
		}
		console.log(proMention[i]);
	}
	
	$.ajax({
		url:"scheduleSetting.do",
		type:"post",
		data:{
			"date":date,
			"time":time,
			"program":program,
			"proMention":proMention
		},
		success:function(data){
			alert("성공"+data);
		},
		error:function(e){
			alert("실패");
			alert(e);
		}
	})
}

