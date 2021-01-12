class PriorityQueue extends Array {
    constructor() {
        super();
        this.queue = [];
    }

    enqueue(vertex) {
        if (this.queue.includes(vertex)) return false;
        let isEnqueued = false;
        for (let i = 0; i < this.queue.length; i++) {
            const {cost, heuristic} = this.queue[i];
            if(cost + heuristic >= vertex.cost + vertex.heuristic) {
                this.queue.splice(i, 0, vertex);
                isEnqueued = true;
                break;
            }
        }
        if(!isEnqueued) this.queue.push(vertex);
        return true;
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        return this.queue.shift();
    }

    remove(vertex) {
        const idx = this.queue.IndexOf(vertex);
        this.queue.splice(idx, 1);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

export default PriorityQueue;