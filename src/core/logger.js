class Logger {
    debug(...args) {
        if (process.env.NODE_ENV === 'development') {
            console.log(...args)
        }
    }
}

export default new Logger()
