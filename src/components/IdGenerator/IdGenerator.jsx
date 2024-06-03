export function* idGenerator(start) {
    let a = start;
    while (true) {
        yield ++a;
    }
}