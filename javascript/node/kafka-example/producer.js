import { Buffer } from "node:buffer";
import Kafka from "@confluentinc/kafka-javascript";

const producer = new Kafka.Producer({
    "metadata.broker.list": "localhost:9092" // list of kafka brokers to publish to
});

// connect to kafka brokers
producer.connect();

producer.on("ready", () => {
    let count = 0;

    try {
        setInterval(() => {
            count++;

            // publish to topic
            producer.produce(
                // topic
                "kafka-example",

                // partition (optional)
                null,

                // event
                Buffer.from(JSON.stringify({ message: `event ${count}` })),
                // key (optional)
                null,

                // timestamp
                Date.now()
            );
        }, 500);
    } catch (err) {
        console.error("an error occurred while trying to publish to topic");
        console.error(err);
    }
});

// handle producer errors
producer.on("event.error", (err) => {
    console.error("a producer error occurred");
    console.error(err);
});

// poll for delivery events (required to ensure acknowledgement
// queue does not get full)
producer.setPollInterval(100);
