$(document).ready(function() {
    // Функція для відкриття/закриття модальних вікон
    function toggleModal(modalId, action) {
        if (action === 'open') {
            $(modalId).fadeIn();
        } else if (action === 'close') {
            $(modalId).fadeOut();
        }
    }
    // Відкриття модальних форм
    $('#showLoginForm').click(() => toggleModal('#loginModal', 'open'));
    $('#showRegistrationForm').click(() => toggleModal('#registrationModal', 'open'));
    $('#showFeedbackForm').click(() => toggleModal('#feedbackFormContainer', 'open'));

    // Закриття модальних форм при кліку на "хрестик"
    $('.close').click(() => toggleModal('.modalForm', 'close'));

    // Спільні правила валідації
    const commonValidationRules = {
        first_name: "required",
        last_name: "required",
        nickname: "required",
        password: {
            minlength: 8,
        },
        confirm_password: {
            equalTo: "#password",
        },
        email: {
            required: true,
            email: true,
        },
        phone_number: {
            required: true,
            pattern: "[0-9]+"
        }
    };

    const commonValidationMessages = {
        first_name: "Будь ласка, введіть ім'я; ",
        last_name: "Будь ласка, введіть фамілію; ",
        nickname: "Будь ласка, введіть нікнейм; ",
        password: {
            required: "Будь ласка, введіть пароль; ",
            minlength: "Мінімум 8 символів в паролі; ",
            pattern: "Ваш пароль повинен містити цифри, літери та спеціальні символи; ",
        },
        confirm_password: {
            required: "Будь ласка, підтвердіть пароль; ",
            equalTo: "Паролі не співпадають; ",
        },
        email: {
            required: "Будь ласка, введіть емейл; ",
            email: "Введіть правильний формат емейлу; ",
        },
        phone_number: {
            required: "Будь ласка, введіть номер телефону; ",
            pattern: "Введіть тільки цифри у поле номеру телефону; ",
        }
    };

    // Валідація форми реєстрації
    $("#registrationForm").validate({
        rules: commonValidationRules,
        messages: commonValidationMessages,
        errorPlacement: function (error, element) {
            error.appendTo(element.parent());
        },
        submitHandler: function(form) {
            form.submit();
        },
        invalidHandler: function(event, validator) {
            $("#registrationForm input[type='submit']").prop("disabled", false);
        },
        success: function (label, element) {
            $("#registrationForm input[type='submit']").prop("disabled", false);
        },
        highlight: function (element, errorClass, validClass) {
            $("#registrationForm input[type='submit']").prop("disabled", true);
        }
    });

    // Валідація форми зворотного зв'язку
    $('#feedbackForm').validate({
        rules: {
            name: "required",
            email: commonValidationRules.email,
            subject: "required",
            message: "required"
        },
        messages: {
            name: "Будь ласка, введіть ваше ім'я",
            email: commonValidationMessages.email,
            subject: "Будь ласка, введіть тему звернення",
            message: "Будь ласка, введіть ваше повідомлення"
        },
        submitHandler: function(form) {
            $('#feedbackForm').fadeOut();
            $('#feedbackSuccessMessage').fadeIn();
        }
    });
});
