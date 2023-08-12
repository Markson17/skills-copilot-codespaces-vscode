function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 1000,
        bonus: 200,
        getSalary: function() {
            return this.salary;
        },
        getBonus: function() {
            return this.bonus;
        },
        setBonus: function(bonus) {
            this.bonus = bonus;
        },
        getTotal: function() {
            return this.salary + this.bonus;
        }
    };
    return member;
}