type F = (...args: number[]) => void

function debounce(fn: F, t: number): F {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return function(...args) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn(...args);
        }, t);
    }
};