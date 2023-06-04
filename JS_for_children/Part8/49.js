var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "Пятая буква вашего имени: " + name[4] + ".";
};
fifthLetter("Сергей");