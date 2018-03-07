Feature: sign-up in losestudiantes
    As an user I want to sign-up on losestudiantes website in order to have an account

Scenario Outline: Test sign-up with right and wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill register with <nombre> and <apellido> and <correo> and <contrasena> and <clicacepto>
    And I try to sign-up
    Then I expect to read <mensaje>

    Examples:
      | nombre | apellido | correo | contrasena | clicacepto | mensaje |
	  | pedro | | | | 0 | Ingresa tu correo |
	  | pedro | navaja | | | 0 | Ingresa tu correo |
	  | pedro | navaja | pedro.navaja@lacalle.com | | 0 | Ingresa una contraseña |
	  | pedro | navaja | pedro.navaja@lacalle.com | pedrito | 0 | La contraseña debe ser al menos de 8 caracteres |
	  | pedro | navaja | pedro.navaja@lacalle.com | pedrito1 | 0 | Debes aceptar los términos y condiciones |
	  | pedro | | | | 1 | Ingresa tu correo |
	  | pedro | navaja | | | 1 | Ingresa tu correo |
	  | pedro | navaja | pedro.navaja@lacalle.com | | 1 | Ingresa una contraseña |
	  | pedro | navaja | pedro.navaja@lacalle.com | pedrito | 1 | La contraseña debe ser al menos de 8 caracteres |
	  | pedro | navaja | pedro1.navaja@lacalle.com | pedrito1 | 1 | Registro exitoso |
	  
	  
