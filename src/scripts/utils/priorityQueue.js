class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(ele) {
        let isEnqueued = false;
        for (let i = 0; i < this.queue.length; i++) {
            if(this.queue[i].cost >= ele.cost) {
                this.queue.splice(i, 0, ele);
                isEnqueued = true;
                break;
            }
        }
        if(!isEnqueued) this.queue.push(ele);
    }

    dequeue() {
        if (this.queue.length === 0) return null;
        return this.queue.shift();
    }
}

export default PriorityQueue;