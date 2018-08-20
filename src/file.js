export class File {
    constructor({ type, path, timestamp, size, thumb }) {
        this.type = type
        this.path = path
        this.timestamp = timestamp
        this.size = size
        this.thumb = thumb
    }

    get basename() {
        return this.path.split(/[\\/]/).pop()
    }

    get extension() {
        return this.path.split('.').pop()
    }
}
