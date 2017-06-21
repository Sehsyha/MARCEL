package main

import (
	"fmt"
	"time"

	client "github.com/gomqtt/client"

	"github.com/gomqtt/packet"
)

func main() {
	done := make(chan struct{})

	c := client.New()

	c.Callback = func(msg *packet.Message, err error) {
		if err != nil {
			panic(err)
		}

		fmt.Printf("%s: %s\n", msg.Topic, msg.Payload)
		close(done)
	}

	config := client.NewConfigWithClientID("mqtt://4eabe27f:c5e68ac27238e781@broker.shiftr.io", "gomqtt/client")

	connectFuture, err := c.Connect(config)
	if err != nil {
		panic(err)
	}

	err = connectFuture.Wait(10 * time.Second)
	if err != nil {
		panic(err)
	}

	subscribeFuture, err := c.Subscribe("test", 0)
	if err != nil {
		panic(err)
	}

	err = subscribeFuture.Wait(10 * time.Second)
	if err != nil {
		panic(err)
	}

	publishFuture, err := c.Publish("test", []byte("test"), 0, false)
	if err != nil {
		panic(err)
	}

	err = publishFuture.Wait(10 * time.Second)
	if err != nil {
		panic(err)
	}

	<-done

	err = c.Disconnect()
	if err != nil {
		panic(err)
	}

}
