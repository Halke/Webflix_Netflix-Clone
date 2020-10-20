export default class Validate{
    constructor(value) {
        this.value = value;
    }

    isValidEmail() {
        let countOf = 0;

        for(let i = 0; i < this.value.length; i++){
            if(this.value[i] === '@') countOf++;
        }

        if(countOf > 1 || this.value[0] === '@' || this.value.slice(this.value.indexOf('@') + 1).length === 0) return false;
        return true;
    }

    isValidPassword() {

        if(this.value.length < 8 || this.value.length > 18){
            return false;
        }

        let countOfDigits = 0;

        for(let i = 0; i < this.value.length; i++){
            if(!isNaN(this.value[i])) countOfDigits++;
        }

        if(countOfDigits < 3) return false;
        return true;
    }

    isValidDateOfBirth() {
        let todayDate = new Date();
        let dateOfBirth = new Date(this.value);

        let timeDiff = Math.abs(todayDate.getTime() - dateOfBirth.getTime());

        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        let yearsDiff = Math.floor(diffDays / 365);
        
        return yearsDiff >= 18;
    }

    isValidGender() {
        if(this.value === 'none') return false;
        return true;
    }

    // const isOlderThan18 = () => {
    //     let dateFirst = new Date(formValue.dateOfBirth);
    //     let dateTemp = new Date();

    //     let dateSecond = new Date(`${dateTemp.getFullYear()}-${dateTemp.getMonth()}-${dateTemp.getDate()}`);
    //     
    //     let timeDiff = Math.abs(dateSecond.getTime() - dateFirst.getTime());
    //     
    //     let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    //     let yearsDiff = Math.floor(diffDays / 21);

    //     return yearsDiff >= 18;
    // }
}