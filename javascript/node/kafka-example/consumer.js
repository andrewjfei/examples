import Kafka from "@confluentinc/kafka-javascript";

const consumer = new Kafka.KafkaConsumer({
    "group.id": "kafka-example", // id for event partitioning between consumers within the same group
    "metadata.broker.list": "localhost:9092" // list of kafka broker to subscribe to
});

// connect to kafka brokers
consumer.connect();

consumer.on("ready", () => {
    // subscibe to kafka topics
    consumer.subscribe(["kafka-example"]);

    // consume events as soon as they are available on the stream
    consumer.consume();
});

consumer.on("data", (data) => {
    console.log(data.value.toString());
});
