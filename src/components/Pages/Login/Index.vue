<template>
    <section class="login">
        <div class="loginWrap all-center">
            <div class="left">
                <img :src="require('@/assets/login-logo.png')" alt="">
            </div>
            <div class="right">
                <div class="formTable">
                    <h1>用户登陆</h1>
                    <div class="account">
                        <img :src="require('@/assets/icon_admin.png')" alt="">
                        <input type="text" placeholder="账号" value="system">
                    </div>
                    <div class="password">
                        <img :src="require('@/assets/icon_pass.png')" alt="">
                        <input type="password" placeholder="密码" value="admin">
                    </div>
                    <div class="remember">
                        <input type="checkbox" name="" id="">
                        <span>记住我（公共场所慎用）</span>
                    </div>
                    <div class="loginBtn">
                        <span @click.stop="$router.push('/gis-map')">立即登陆</span>
                    </div>
                </div>
                <div class="org">
                    <span>Copyright ©</span>
                    <a href="http://www.sunnyhf.com/"> 中水三立数据技术股份有限公司 </a>
                    <span>皖ICP备17002002号</span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style scoped>
.login {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: url("../../../assets/login_bg.png") center center;
  background-color: #ccc;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.loginWrap {
  width: 1000px;
  height: 560px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
}
.loginWrap > .left {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 440px;
  box-sizing: border-box;
  background-color: rgba(9, 22, 51, 0.8);
}
.loginWrap > .left > img {
  width: 340px;
  height: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
}
.loginWrap > .right {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  width: 560px;
  box-sizing: border-box;
  background-color: #fff;
}
.loginWrap > .right > .formTable {
  width: 100%;
  margin-top: 100px;
}
.loginWrap > .right > .formTable > h1 {
  color: #386eca;
  font-size: 20px;
  text-align: center;
}
.loginWrap > .right > .formTable > .account {
  width: 360px;
  height: 64px;
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.loginWrap > .right > .formTable > .account > input {
  outline: none;
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  padding-left: 40px;
}
.loginWrap > .right > .formTable > .account > img {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
}

.loginWrap > .right > .formTable > .password {
  width: 360px;
  height: 64px;
  margin: 0 auto;
  margin-top: 20px;
  border-bottom: 1px solid #ddd;
  position: relative;
}
.loginWrap > .right > .formTable > .password > input {
  outline: none;
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
  padding-left: 40px;
}
.loginWrap > .right > .formTable > .password > img {
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
}
.loginWrap > .right > .formTable > .remember {
  width: 360px;
  height: 40px;
  margin: 0 auto;
  margin-top: 40px;
  position: relative;
  font-size: 14px;
  color: #a8aaac;
}
.loginWrap > .right > .formTable > .remember > span {
  display: inline-block;
  transform: translateY(-3px);
}
.loginWrap > .right > .formTable > .loginBtn {
  width: 360px;
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
  font-size: 16px;
  background-color: #22bac4;
  cursor: pointer;
  border-radius: 30px;
}
.loginWrap > .right > .formTable > .loginBtn:hover {
  background-color: #36d2dc;
}
.loginWrap > .right > .formTable > .loginBtn > span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.loginWrap > .right > .org {
  margin-top: 50px;
  text-align: center;
  color: #c4c8ca;
  font-size: 14px;
}
.loginWrap > .right > .org > a {
  color: #157ab5;
}
.loginWrap > .right > .org > a:hover {
  text-decoration: underline;
}
</style>
