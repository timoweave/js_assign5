function personConstructor(name) {
    var person = {
        name : name,
        distance_travelled: 0,
        say_name : function() {
            return this.name;
        },
        say_something: function(something) {
            var sentence = this.say_name() + ' says "' + something + '"';
            this.alarm(sentence);
        },
        walk : function() {
            this.distance_travelled += 3;
            var sentence = this.say_name() + " has walked, now travelled " + this.distance_travelled
            this.alarm(sentence);
        },
        run : function() {
            this.distance_travelled += 10;
            var sentence = this.say_name() + " has run, now travelled " + this.distance_travelled
            this.alarm(sentence);
        },
        crawl : function() {
            this.distance_travelled += 1;
            var sentence = this.say_name() + " has crawled, now travelled " + this.distance_travelled
            this.alarm(sentence);
        },
        alarm : function(something) {
            if (typeof alert === 'undefined') {
                console.log(something);
            } else {
                alert(something);
            }
        }
    };
    return person;
};

function ninjaConstructor(name) {
    var person = personConstructor(name);
    person.levelAvailable = ['yellow', 'brown', 'red', 'blue', 'green', 'black'];
    person.level = 0; // index to levelAvailable
    person.levelUp = function(x) {
        if (this.level < this.levelAvailable.length) {
            this.level += x;
        }
    };
    person.say_name = function() {
        return this.name + ' (' + this.levelAvailable[this.level] + ' belt)';
    };

    return person;
}

var person = ninjaConstructor('Jay');
person.say_something("let's workout");
person.walk();
person.run();
person.crawl();
person.walk();
person.walk();
person.say_something("thank you");
