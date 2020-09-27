// implement a bindMe method similar to bind function
// Example, const fn1 = fn.bindMe(context); fn1();

Function.prototype.bindMe = function (context) {
    const fn = this;
    return function() {
        return fn.call(context);
    }
};

let student1 = {
    name: 'sandeep',
    score: 10,
    getScore: function (){
        return this.score;
    }
};

console.log(student1.getScore());

let employee1 = {
    score: 11
};

const employeeScore = student1.getScore.bindMe(employee1);
console.log(employeeScore());