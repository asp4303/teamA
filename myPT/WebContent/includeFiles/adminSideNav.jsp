<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="layoutSidenav_nav">

        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
            
              <a class="nav-link" href="userList.do">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-tachometer-alt"></i>
                </div>
                메인페이지
              </a>
              
              <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseLayouts1"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div class="sb-nav-link-icon">
                  <i class="fas fa-columns"></i>
                </div>
                관리 페이지
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="collapseLayouts1"
                aria-labelledby="headingOne"
                data-parent="#sidenavAccordion"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="userList.do">회원 관리</a>
                  <a class="nav-link" href="trainerList.do"
                    >트레이너 관리</a
                  >
                </nav>
              </div>
              <a class="nav-link" href="moveUserRegister.do">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-chart-area"></i>
                </div>
                회원 등록
              </a>
              <a class="nav-link" href="moveIncome.do">
                <div class="sb-nav-link-icon">
                  <i class="fas fa-chart-area"></i>
                </div>
                매출 기록
              </a>
              <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseLayouts2"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div class="sb-nav-link-icon">
                  <i class="fas fa-columns"></i>
                </div>
                게시판
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="collapseLayouts2"
                aria-labelledby="headingOne"
                data-parent="#sidenavAccordion"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="community.do"
                    >커뮤니티 게시판</a
                  >
                  <a class="nav-link" href="photoBoard.jsp"
                    >포토 게시판</a
                  >
                  <a class="nav-link" href="question.jsp">Q & A</a>
                </nav>
              </div>
            </div>
          </div>

          <div class="sb-sidenav-footer"></div>
        </nav>
      </div>