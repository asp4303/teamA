package com.mypt.controller;

import java.util.HashMap;
import java.util.Map;

import com.mypt.action.board.WriteAction;
import com.mypt.action.check.EmailCheckAction;
import com.mypt.action.check.NickCheckAction;
import com.mypt.action.crowded.CrowdedAction;
import com.mypt.action.detail.AdminTrainerDetailAction;
import com.mypt.action.detail.AdminTrainerUpdateAction;
import com.mypt.action.detail.AdminUserDetailAction;
import com.mypt.action.detail.AdminUserUpdateAction;
import com.mypt.action.detail.UserMyDetailAction;
import com.mypt.action.detail.UserMyUpdateAction;
import com.mypt.action.inbody.UserInbodyResultAction;
import com.mypt.action.income.IncomeAction;
import com.mypt.action.income.IncomeTrainerAction;
import com.mypt.action.income.MoveIncomeAction;
import com.mypt.action.list.AdminTrainerListViewAction;
import com.mypt.action.list.AdminUserListViewAction;
import com.mypt.action.list.TrainerUserListViewAction;
import com.mypt.action.login.LogoutAction;
import com.mypt.action.login.TrainerLoginAction;
import com.mypt.action.login.UserLoginAction;
import com.mypt.action.move.MoveCommunityAction;
import com.mypt.action.move.MoveInbody;
import com.mypt.action.move.MoveIntroAction;
import com.mypt.action.move.MovePayment;
import com.mypt.action.move.MoveSchedule;
import com.mypt.action.move.MoveUserMain;
import com.mypt.action.move.MoveUserMyProfile;
import com.mypt.action.move.MoveUserRegister;
import com.mypt.action.payment.UserPaymentDataAction;
import com.mypt.action.qr.QrCheckAction;
import com.mypt.action.qr.QrViewAction;
import com.mypt.action.register.AdminUserRegisterAction;
import com.mypt.action.schedule.TrainerScheduleSettingAction;



public class ActionFactory 
{
	
	//싱글톤
	private static ActionFactory instance = new ActionFactory();
	
	public static ActionFactory getInstance() 
	{
		return instance;
	}
	
	private ActionFactory()
	{

		//userList
		map.put("/userList", new AdminUserListViewAction());
		//trainerList
		map.put("/trainerList", new AdminTrainerListViewAction());
		//ptUserList
		map.put("/ptUserList", new TrainerUserListViewAction());
		
		// 인트로 화면
		map.put("/moveIntro", new MoveIntroAction());
		map.put("/moveInbody", new MoveInbody());
		//userLogin
		map.put("/userLogin", new UserLoginAction());
		map.put("/userMain", new MoveUserMain());
			
		//trainerLogin
		map.put("/trainerLogin", new TrainerLoginAction());
		
		//회원가입
		map.put("/moveUserRegister", new MoveUserRegister());		
		map.put("/userInsertAction", new AdminUserRegisterAction());
		map.put("/nickCheck", new NickCheckAction());
		map.put("/emailCheck", new EmailCheckAction());
		
		//인바디
		map.put("/getInbodyResult", new UserInbodyResultAction());
		
		//결제
		map.put("/movePayment", new MovePayment());
		map.put("/paymentData", new UserPaymentDataAction());

		
		//매출
		map.put("/moveIncome", new MoveIncomeAction());
		map.put("/incomeChart", new IncomeAction());
		map.put("/incomeTrainerChart", new IncomeTrainerAction());
		
		//detail
		map.put("/adminTrainerDetail", new AdminTrainerDetailAction());
		map.put("/adminUserDetail", new AdminUserDetailAction());
		
		map.put("/moveMyProfile", new MoveUserMyProfile());
		map.put("/userMyDetail", new UserMyDetailAction());
		
		//update
		map.put("/userMyUpdate", new UserMyUpdateAction());
		map.put("/adminTrainerUpdate", new AdminTrainerUpdateAction());
		map.put("/adminUserUpdate", new AdminUserUpdateAction());
		
		//qr코드
		map.put("/qrGet",new QrViewAction());
		
		// 출석
		map.put("/qrCheck",new QrCheckAction());
		
		// 스케줄 관리
		map.put("/moveSchedule",new MoveSchedule());
		map.put("/scheduleSetting",new TrainerScheduleSettingAction());
		
		//로그아웃
		map.put("/logout",new LogoutAction());
		
		// 혼잡도
		map.put("/crowded",new CrowdedAction());
		
		map.put("/community",new MoveCommunityAction());
		
		// 글쓰기
		map.put("/write",new WriteAction());	
		
		
		
		
	}
	
	private Map<String, Action> map = new HashMap< >();	
	
	
	public Action getAction(String command)
	{
		Action action = null;
		
		action = map.get(command);
		
		return action;
	}
	
}
