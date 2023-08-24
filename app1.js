const btn = document.querySelector(`button`);

function isValid(inp) {
    if (!inp) throw new Error(`Произошла ошибка сервера или поле для ввода "Password" пустое`);
}

btn.addEventListener(`click`, function () {
    try {
        const inp = document.querySelector(`.final_password`);
        const div = document.querySelector(`.hidden2`);
        const arr1 = inp.value.split(``).length >= 8;
        if (arr1 === true) {
            alert(`Пороль введен корректно`);
        } else {
            alert(`Введено недостаточно символов`);
        }
    }
    catch (error) {
        alert(error.message);
    }
}
)