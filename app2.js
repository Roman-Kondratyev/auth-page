const btn = document.querySelector(`button`);

function isValid(inp) {
    if (!inp) throw new Error(`Произошла ошибка сервера или поле для ввода "Password" пустое`)
}

btn.addEventListener(`click`, function () {
    try {
        const inp = document.querySelector(`.password`);
        const inp_2 = document.querySelector(`.verified_password`);
        isValid(inp.value);
        const div = document.querySelector(`.hidden`);
        const arr1 = inp.value.split(``).length >= 8;
        const arr2 = inp_2.value.split(``).length >= 8;
        // if (arr1=== true && arr2=== true) {
        //     console.log(`благослави тебя господь`);
        // } else {
        //     alert(`Пороль должен содержать не менее 8 символов`);
        // }
        if (inp.value === inp_2.value && arr1 === true && arr2 === true) {
            alert(`Пороль введен корректно`);
        } else {
            alert(`Пороли не совпадают, или введено недостаточно символов`);
        }
    }
    catch (error) {
        alert(error.message);
    }
}
)
