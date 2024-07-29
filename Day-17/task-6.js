class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addJob(job) {
        this.queue.enqueue(job);
        console.log(`Job ${job} added to the queue.`);
    }

    processJob() {
        if (this.queue.isEmpty()) {
            console.log("No jobs to process.");
            return;
        }
        const job = this.queue.dequeue();
        console.log(`Processing job ${job}...`);
    }

    displayQueue() {
        this.queue.display();
    }
}

// Example usage
const printerQueue = new PrinterQueue();
printerQueue.addJob('Job1');
printerQueue.addJob('Job2');
printerQueue.displayQueue(); // Output: Job1 Job2
printerQueue.processJob(); // Output: Processing job Job1...
printerQueue.displayQueue(); // Output: Job2
