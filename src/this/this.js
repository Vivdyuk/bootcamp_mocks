/*function whatsThis() {
    console.log(this);

    const obj = {
        getThis() {
            return this;
        },
        getAnotherThis: () => this
    }

    const giveMeThis = () => {
        return this;
    }

    console.log(obj.getThis());
    console.log(obj.getAnotherThis());
    console.log(giveMeThis());
}


whatsThis();*/

/*
function whatsThis() {
    console.log(this);

    const obj = {
        getThis() {
            return this;
        },
        getAnotherThis: () => this
    }

    const giveMeThis = () => {
        return this;
    }

    console.log(obj.getThis());
    console.log(obj.getAnotherThis.apply(['23', 2]));
    console.log(giveMeThis());
}


whatsThis.call('context');
*/

/*function whatsThis() {
    console.log(this);

    const obj = {
        getThis() {
            return this;
        },
        getAnotherThis: () => this
    }

    const giveMeThis = () => {
        return this;
    }

    console.log(obj.getThis.apply(['23', 2]));
    console.log(obj.getAnotherThis);
    console.log(giveMeThis());
}


whatsThis.apply(['context', 'text']);*/

/*function whatsThis() {
    console.log(this);

    const obj = {
        getThis() {
            return this;
        },
        getAnotherThis: () => this
    }

    const giveMeThis = () => {
        return this;
    }

    console.log(obj.getThis.call('text').apply('pretext'));
    console.log(obj.getAnotherThis());
    console.log(giveMeThis().bind('wtf'));
}


whatsThis.bind('bind')()*/

/*function whatsThis() {
    console.log(this);

    const obj = {
        getThis() {
            return this;
        },
        getAnotherThis: () => this
    }

    const giveMeThis = () => {
        return this;
    }

    console.log(obj.getThis.bind('text').apply(['pretext']));
    console.log(obj.getAnotherThis.call('obj'));
    console.log(giveMeThis.bind('wtf')().apply(['some value']));
}

whatsThis.bind(() => {})()*/