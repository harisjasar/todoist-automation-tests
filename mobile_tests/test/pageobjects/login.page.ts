import Page from "./page";

class LoginPage extends Page {
    get moreSignInOptionsButton() {
        return $('android=new UiSelector().resourceId("com.todoist:id/more_signin_options")');
    }

    get loginWithEmail() {
        return $('android=new UiSelector().resourceId("com.todoist:id/email_login")');
    }

    get noneOfAbove() {
        return $('android=new UiSelector().resourceId("com.google.android.gms:id/cancel")');
    }

    get yourEmail() {
        return $('android=new UiSelector().resourceId("email")');
    }

    get yourPassword() {
        return $('android=new UiSelector().resourceId("password")');
    }

    get loginButton() {
        return $('android=new UiSelector().resourceId("auth_button_tag")');
    }

    async login(username, password) {
        await this.moreSignInOptionsButton.click();
        await this.loginWithEmail.click();
        await this.noneOfAbove.click();
        await this.yourEmail.setValue(username);
        await this.yourPassword.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();