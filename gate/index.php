<?php
//-- configインクルード --//
//include("config.php");
include ('/../_common/config.php');
//--ステータス--//
//check_login();

switch($F_md){
	case "in":
		if($F_user_id and $F_user_pw){
			$sql="select * from m_user";
			$sql.=" where user_id='".$F_user_id."' and user_pw='".$F_user_pw."'";
			$rs=exec_sql($db,$sql,$SERVER["SCRIPT_NAME"]);
			$RS_user=convert_rs($rs);

			if($RS_user[0]['user_cd']){
				$_SESSION['user_cd']=$RS_user[0]['user_cd'];
			}else{
				$error_message="ID�?�パスワード�?�間�?��?��?��?��?��?�。";
				include("common_error.inc");
				exit;
			}
			if($S_referer){
				header("location:".$S_referer."");
				exit;
			}else{
				header("location:".$G_root_url_s."/item/");
				exit;
			}
		}else{
			$error_message="入力�?れ�?��?�り�?��?�。";
			include("common_error.inc");
			exit;
		}
	break;

	case "out":
		unset($_SESSION['user_cd']);
		unset($_SESSION['referer']);
		header("location:".$G_root_url_s."/gate/");
		exit;
	break;

	default :
		if($_SESSION['user_cd']){
			header("location:".$G_root_url_s."/");
			exit;
		}
	break;
}

//-- .inc --//
include("index.inc");
exit;
?>
