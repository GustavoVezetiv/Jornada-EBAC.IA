export default {
    jump: new KeyboardEvent('keydown', {key: 'Space', KeyCode: 32}),
        dispatchEvent(event) {
            document.dispatchEvent(this[event]);

        }
    }