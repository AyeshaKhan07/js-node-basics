function split(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        args[0] = args[0].split('');
        originalMethod.apply(this, args)
    }
}

class StringManager {
    @split
    print(str: string) {
        console.log(str)
    }
}

const sm = new StringManager();
sm.print("hello");