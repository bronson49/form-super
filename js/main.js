$('#dateStart').datepicker($.datepicker.regional["ru"]);


$(document).ready(function() {
    $('#form select').select2();
    $('#form').validate({
        rules : {
            name: {
                required: true,
                minlength: 2,
                lettersOnly: true,
            },
            lastname: {
                required: true,
                minlength: 2,
                lettersOnly: true,
            },
            email: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
        },
        messages: {
            name: {
                required: "Поле 'Имя' обязательно к заполнению",
                name : "Введите корректное имя ", // сообщение, если не соответствует правилу валидации
                minlength: "Введите не менее 2-х символов в поле 'Имя'",

            },
            lastname: {
                required: "Поле 'Фамилия' обязательно к заполнению",
                lastname : "Введите корректную фамилию ", // сообщение, если не соответствует правилу валидации
                minlength: "Введите не менее 2-х символов в поле 'Фамилия'",

            },
            email: {
                required: "Поле 'Email' обязательно к заполнению",
                email: "Некорректный формат адреса email"
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            confirm_password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long",
                equalTo: "Please enter the same password as above"
            },
        }
    });
});

// $.validator.methods.name = function( value, element ) {   // правило для всех type=text
//     return this.optional( element ) || /^[a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test( value );
// };
$.validator.addMethod("lettersOnly", function(value, element) {
    return this.optional(element) || /^[a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/.test(value);
}, "Введите корректное значение");

// $.validator.methods.email = function( value, element ) {
//     return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
// };

// $.extend($.validator.messages, {   // переписать все сообщения
//     required: "This field is required.",
//     remote: "Please fix this field.",
//     email: "Please enter a valid email address.",
//     name : "You can't use numbers in field \"Name\" ",
// });
$('#phone').inputmask("+38(099)-999-99-99");