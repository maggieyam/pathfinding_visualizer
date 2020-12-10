class PriorityQueue extends Array {
    constructor() {
        super();
        this.queue = [];
    }

    enqueue(ele) {
        if (this.queue.includes(ele)) return false;
        let isEnqueued = false;
        for (let i = 0; i < this.queue.length; i++) {
            const {cost, heuristic} = this.queue[i];
            if(cost + heuristic >= ele.cost + ele.heuristic) {
                this.queue.splice(i, 0, ele);
                isEnqueued = true;
                break;
            }
        }
        if(!isEnqueued) this.queue.push(ele);
        return true;
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        return this.queue.shift();
    }

    remove(ele) {
        const idx = this.queue.IndexOf(ele);
        this.queue.splice(idx, 1);
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

export default PriorityQueue;