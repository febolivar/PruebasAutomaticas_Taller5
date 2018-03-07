var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');

defineSupportCode(({Given, When, Then}) => {
  Given('I go to losestudiantes home screen', () => {
    browser.url('/');
    if(browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar');
    }
  });

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000);
    browser.click('button=Ingresar');
  });

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys('wrongemail@example.com');

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys('123467891')
  });

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn');
    cajaLogIn.element('button=Ingresar').click()
  });

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000);
  });
  
  When(/^I fill with (.*) and (.*)$/ , (email, password) => {
     var cajaLogIn = browser.element('.cajaLogIn');

    var mailInput = cajaLogIn.element('input[name="correo"]');
    mailInput.click();
    mailInput.keys(email);

    var passwordInput = cajaLogIn.element('input[name="password"]');
    passwordInput.click();
    passwordInput.keys(password)
	});

	Then('I expect to see {string}', error => {
	var msgError=true;
	
	try{
		browser.waitForVisible('.aviso.alert.alert-danger', 5000);
	}
	catch(ex)
	{
		msgError=false;
	}
	
    var alertText = "";
				
	if (!msgError)
	{
		alertText = browser.element('.jsx-2021299586').getText();
	}	
	else
	{
		alertText = browser.element('.aviso.alert.alert-danger').getText();
	}
	
	expect(alertText).to.include(error);
	});
	
	//Sign-up
	
	When(/^I fill register with (.*) and (.*) and (.*) and (.*) and (.*)$/ , (nombre, apellido, correo, contrasena, clicacepto) => {
    var cajaLogIn = browser.element('.cajaSignUp');

    var vnombre = cajaLogIn.element('input[name="nombre"]');
	var vapellido = cajaLogIn.element('input[name="apellido"]');
	var vcorreo = cajaLogIn.element('input[name="correo"]');
	var vpassword = cajaLogIn.element('input[name="password"]');
	var vclicacepto = cajaLogIn.element('checkbox[name="acepta"]');
	var vprograma = cajaLogIn.element('select[name="idPrograma"]');
		
    vnombre.click();
    vnombre.keys(nombre);
	
	 vapellido.click();
    vapellido.keys(apellido);
	
	 vcorreo.click();
    vcorreo.keys(correo);
	
	 vpassword.click();
    vpassword.keys(contrasena);  
	
	vprograma.click();
	vprograma.selectByValue('66');

	if(clicacepto)
		vclicacepto.checked=true;
	
	});
	
	When('I try to sign-up', () => {
		var cajaLogIn = browser.element('.cajaSignUp');
		cajaLogIn.element('button=Registrarse').click()
	});
	
	Then('I expect to read {string}', mensaje => {
			
		var msgRegistered=true;
	
	try{
		browser.waitForVisible('.sweet-alert', 2000);
	}
	catch(ex)
	{
		msgRegistered=false;
	}
	
    var alertText = "";
				
	if (msgRegistered)
	{
		alertText = browser.element('.sweet-alert').getText();
	}	
	else
	{
		alertText = browser.element('.cajaSignUp').getText();
	}
	
	expect(alertText).to.include(mensaje);
	});

});

