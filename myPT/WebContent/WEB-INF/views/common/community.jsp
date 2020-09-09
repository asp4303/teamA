<%@page import="java.sql.Timestamp"%>
<%@page import="com.mypt.dao.CboardDao"%>
<%@page import="com.mypt.dto.CboardDto"%>
<%@page import="java.util.Vector"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<%
		request.setCharacterEncoding("utf-8");
		int totalRecord = 0;//총게시물수
		int numPerPage = 10;//페이지당 레코드 개수(5,10,15,30)
		int pagePerBlock = 15;//블럭당 페이지 개수
		int totalPage = 0;//총 페이지 개수
		int totalBlock = 0;//총 블럭 개수
		int nowPage = 1;//현재 페이지
		int nowBlock = 1;//현재 블럭
		CboardDao dao = CboardDao.getInstance();
		
				
		//검색에 필요한 변수
		String keyField = "", keyWord = "";
		//검색일때
		if(request.getParameter("keyWord")!=null){
			keyField = request.getParameter("keyField");
			keyWord = request.getParameter("keyWord");
		}
		
		//검색 후에 다시 처음화면 요청
		if(request.getParameter("reload")!=null&&
				request.getParameter("reload").equals("true")){
			keyField = ""; keyWord = "";
		}		
		
		totalRecord = dao.getTotalCount(keyField, keyWord);
		//out.print("totalRecord : " + totalRecord);
		
		//nowPage 요청 처리
		if(request.getParameter("nowPage")!=null){
			nowPage = Integer.parseInt(request.getParameter("nowPage"));
		}
		
		//sql문에 들어가는 start, cnt 선언
		int start = (nowPage*numPerPage)-numPerPage;
		int cnt = numPerPage;
		
		//전체페이지 개수
		totalPage = (int)Math.ceil((double)totalRecord/numPerPage);
		//전체블럭 개수
		 totalBlock = (int)Math.ceil((double)totalPage/pagePerBlock);
		//현재블럭
		nowBlock = (int)Math.ceil((double)nowPage/pagePerBlock);
%>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>커뮤니티 게시판</title>
    <link href="/myPT/css/styles.css" rel="stylesheet" />
    <link href="/myPT/css/index.css" rel="stylesheet"/>
    <link href="/myPT/css/widget.css" rel="stylesheet"/>

    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"
    ></script>
    
    <script type="text/javascript">
	function check() {
		if(document.searchFrm.keyWord.value==""){
			alert("검색어를 입력하세요.");
			document.searchFrm.keyWord.focus();
			return;
		}
		document.searchFrm.submit();
	}
	function pageing(page) {
		document.readFrm.nowPage.value = page;
		document.readFrm.submit();
	}
	function block(block) {
		document.readFrm.nowPage.value = 
			<%=pagePerBlock%>*(block-1)+1;
		document.readFrm.submit();
	}
	function  list() {
		document.listFrm.action = "list.jsp";
		document.listFrm.submit();
	}
	function numPerFn(numPerPage) {
		document.readFrm.numPerPage.value = numPerPage;
		document.readFrm.submit();
	}
	//list.jsp에서 read.jsp로 요청이 될때 기존에 조건 같이 넘어감.
	//기존 조건 : keyField,keyWord,nowPage,numPerPage
	function read(num) {
		document.readFrm.num.value = num;
		document.readFrm.action = "read.jsp";
		document.readFrm.submit();
	}
</script>

  </head>
  <body class="sb-nav-fixed">
    <!-- nav -->
    <jsp:include page="/includeFiles/nav.jsp"></jsp:include>
    <!-- nav -->

    <!-- QR 모달 -->
    <jsp:include page="/includeFiles/modalQR.jsp"></jsp:include>
    <!--//QR 모달-->

    <div id="layoutSidenav">
      <!-- sideNav -->
      <c:choose>
      <c:when test="${sessionScope.grade==0 }">
      <jsp:include page="/includeFiles/adminSideNav.jsp"></jsp:include>
      </c:when>
      <c:when test="${sessionScope.grade==1 }" >
      <jsp:include page="/includeFiles/trainerSideNav.jsp"></jsp:include>
      </c:when>
      <c:otherwise>
      <jsp:include page="/includeFiles/userSideNav.jsp"></jsp:include>
      </c:otherwise>
      </c:choose> 
      <!-- /sideNav -->
      
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid mt-3">
          <!-- 여기서부터 작성 -->
          <div class="row">
              <div class="col-12">
                <div class="card" style="overflow: auto">
                  <div class="card-body">
                    <h3 class="card-title text-center">커뮤니티</h3>
                  </div>
                  <select class="form-control text-center col-md-2" id="head">
                    <option value="정보">정보</option>
                    <option value="잡담">잡담</option>
                  </select>
                  <div class="table-responsive">
                    <table class="table mb-0">
                      <thead class="thead-light text-center">
                        <tr>
                          <th>말머리</th>
                          <th id="title" style="width: 50%">제목</th>
                          <th>작성자</th>
                          <th>작성일자</th>
                          <th>조회수</th>
                          <th>좋아요</th>
                        </tr>
                      </thead>
                      <tbody class="customtable text-center">
                      <%
                      Vector<CboardDto> vlist = 
      				dao.getBoardList(keyField, keyWord, start, cnt);
      				int listSize = vlist.size();//브라우저 화면에 표시될 게시물 번호
      				if(vlist.isEmpty()){
      					out.println("등록된 게시물이 없습니다.");
      				}else{
				for(int i=0;i<numPerPage;i++){
					if(i==listSize) break;
					CboardDto bean = vlist.get(i);
					int num = bean.getNum();//게시물 번호
					String title = bean.getTitle();//제목
					String writer = bean.getWriter();//이름
					Timestamp date = bean.getDate();//날짜
					int depth = bean.getDepth();//답변의 깊이
					int hit = bean.getHit();//조회수
					String head = bean.getHead();
					
					//댓글 count
					//int bcount = cmgr.getBCommentCount(num);
		%>
				<tr align="center">					
					<td>
						<%for(int j=0;j<depth;j++){out.println("&nbsp;&nbsp;");} %>
							<%if(depth>0){
								
							}else{
							if(head.equals("정보")){
							%>
					<div class="badge badge-primary"><%=head %></div>
						<%	}else{
							%>
					<div class="badge badge-success"><%=head %></div>
							<%}}%>					
<%-- 			댓글나중에처리	<%if(bcount>0){%> --%>
<%-- 							<font color="red">(<%=bcount%>)</font> --%>
<%-- 						<%}%> --%>
					</td>
					<%if(depth>0){%>
					<td>
					<div class="badge badge-light mr-2">답변</div>
					<a href="javascript:read('<%=num%>')">
					<%=title%>
					</a>
					</td>	
					<% } else{%>
					<td><a href="javascript:read('<%=num%>')"><%=title%></a></td>
					<%}
					
					 %>					
					<td><%=writer%></td>
					<td><%=date%></td>
					<td><%=hit%></td>
					<td><%=hit%></td>
				</tr>
		<%}}//---for%>                        
                        
                      </tbody>
                    </table>
                  </div>
                </div>

                <div class="form-group mt-3 float-right">
                  <a class="btn btn-primary text-white">글쓰기</a>
                </div>

                <ul class="pagination mt-5 ml-5 justify-content-center">
                <!-- 페이징 및 블럭 Start -->
				<%if(totalPage>0){%>
			<!-- 이전 블럭 -->
			<%if(nowBlock>1){ %>
				<li class="page-item">
				<a class="page-link" href="javascript:block('<%=nowBlock-1%>')">이전</a>
				</li>
			<%} else{ %>
			<li class="page-item">
			<a class="page-link text-muted" >이전</a>
			</li>
		<%}%>
			<!-- 페이징 -->
			<%
					int pageStart = (nowBlock-1)*pagePerBlock+1;
					int pageEnd = (pageStart+pagePerBlock)<totalPage?
							pageStart+pagePerBlock:totalPage+1;
					for(;pageStart<pageEnd;pageStart++){
			%>
				<li class="page-item">
				<a class="page-link" href="javascript:pageing('<%=pageStart%>')">
				
				<%if(nowPage==pageStart){%><font color="black"><%}%>
					<%=pageStart%>
				<%if(nowPage==pageStart){%></font><%}%>
				</a>
				</li>
			<%}//---for%>
			<!-- 다음 블럭 -->
			<%if(totalBlock>nowBlock){ %>
					<li class="page-item">
					<a class="page-link" href="javascript:block('<%=nowBlock+1%>')">다음</a>
					</li>
			<%} else{ %>
				<li class="page-item">
				<a class="page-link text-muted" >다음</a>
				</li>
			<%}%>
		<%}//---if1%>
		<!-- 페이징 및 블럭 End -->
<!--                   <li class="page-item"> -->
<!--                     <a class="page-link" href="#">이전</a> -->
<!--                   </li> -->
<!--                   <li class="page-item"> -->
<!--                     <a class="page-link" href="#">1</a> -->
<!--                   </li> -->
<!--                   <li class="page-item"> -->
<!--                     <a class="page-link" href="#">2</a> -->
<!--                   </li> -->
<!--                   <li class="page-item"> -->
<!--                     <a class="page-link" href="#">다음</a> -->
<!--                   </li> -->
                </ul>
                
                <form name="listFrm" method="post">
	<input type="hidden" name="reload" value="true">
	<input type="hidden" name="nowPage" value="1">
</form>

<form name="readFrm">
	<input type="hidden" name="nowPage" value="<%=nowPage%>">
	<input type="hidden" name="numPerPage" value="<%=numPerPage%>">
	<input type="hidden" name="keyField" value="<%=keyField%>">
	<input type="hidden" name="keyWord" value="<%=keyWord%>">
	<input type="hidden" name="num">
</form>
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js">
    </script>
    <script src="/myPT/js/scripts.js"></script>
    <script src="/myPT/js/scripts.js"></script>
    
  </body>
</html>
