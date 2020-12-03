function KtDangNhap()
{
	var tendangnhap=/^admin$/;
	var matkhau=/^admin$/;
	var tdn1=$('#txtTenDangNhap').val();
	var mkdn1=$('#txtMatKhau').val();
	if(tdn1=="")
		$('#tdn').html("Tên Đăng Nhập để trống!");
	else
		$('#tdn').html("");
	if(mkdn1=="")
		$('#mk').html("Mật Khẩu để trống!");
	else
		$('#mk').html("");
	if(tendangnhap.test(tdn1) && matkhau.test(mkdn1)) {
		alert("Đăng nhập thành công");
		window.location="./Home.html";
	}
	else
		alert("Sai tên đăng nhập hoặc mật khẩu");
}
function KtDangKy()
{
	var tdn1=$('#txtTenDangNhap').val();
	var mkdn1=$('#txtMatKhau').val();
	var nlmk1=$('#txtnlmk').val();
	var email=$('#txtEmail').val();
	var sdt1=$('#txtsdt').val();
	
	if(KtTenDangNhap(tdn1)&&KtMatKhau(mkdn1)&&KtEmail(email))
	{
		alert("Đăng Ký thành công ^^");
		window.location="./DangNhap.html";
	}	
	if(tdn1=="")
			$('#tdn').html("Tên Đăng Nhập để trống!");
			else
				if(tdn1.length<5 || tnd1.length>16)
					$('#tdn').html("Tên Đăng Nhập phải ít nhất 5 kí tự, tối đa 16 kí tự");
				else
					if(!KtTenDangNhap(tdn1))
						$('#tdn').html("Tên Đăng Nhập không hợp lệ!!");
					else
						$('#tdn').html("");
		//kt tai khoan
		if(mkdn1=="")
			$('#mk').html("Mật Khẩu để trống!");
		else
			if(!KtMatKhau(mkdn1))
				$('#mk').html("Mật Khẩu không hợp lệ!!");
			else
				$('#mk').html("");
		//kt mat khau
		if(nlmk1=="")
			$('#nlmk').html("Nhập lại mật khẩu!!");
		else
			if(nlmk1!=mkdn1)
				$('#nlmk').html("Không đúng!!");
			else
				$('#nlmk').html("");
		//kt nhap lai mat khau
		if(email=="")
			$('#email').html("Email để trống!");
		else
			if(!KtEmail(email))
				$('#email').html("Nhập sai Email!!");
			else
				$('#email').html("");
		//kt email
		if(sdt1=="")
			$('#sdt').html("Số điện thoại để trống!");
		else
			if(!KtSdt(sdt1))
				$('#sdt').html("Nhập sai Số điện thoại!!");
			else
				$('#sdt').html("");
		//kt sdt
}
function KtTenDangNhap(tendangnhap)
{
	var tdn=/^[a-z0-9_-]{5,16}$/;
	if(tdn.test(tendangnhap))
		return true;
	return false;
}
function KtMatKhau(matkhau)
{
	var mk = /^[a-z0-9_-]{6,18}$/;
	if(mk.test(matkhau))
		return true;
	return false;
}
function KtEmail(email)
{
	var e1=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	if(e1.test(email))
		return true;
	return false;
}
function KtSdt(sdt)
{
	var s1=/^0[0-9]{8,9}$/;
	if(s1.test(sdt))
		return true;
	return false;
}