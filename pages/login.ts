import { Page } from "@playwright/test";

export default class Login{
     constructor(public page:Page){

     }

     async doLogin(){
        let ss=await this.page.locator("(//li[contains(@class,'nav-item dropdown')])[3]")
await ss.hover();
await this.page.locator("//a[contains(.,'Login')]").click();

await this.page.locator("//input[@placeholder='E-Mail Address']").fill("sankar_prince@yahoo.com")
await this.page.locator("//input[@id='input-password']").fill("test@123")
await this.page.locator("//input[@value='Login']").click()
await this.page.locator("//div[@data-id='217825']//a[1]").click()
await this.page.locator("//a[contains(.,'Edit cart')]").click()
await this.page.locator("//button[@class='btn btn-danger']").click()

// await this.page.waitForTimeout(300000)
     }
}
