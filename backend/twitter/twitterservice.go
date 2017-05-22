package twitter


import (
	"encoding/json"
	"net/http"
	"strconv"
	"log"
	"fmt"

	"github.com/dghubble/go-twitter/twitter"
	"github.com/Zenika/MARCEL/backend/auth"
	"github.com/gorilla/mux"

)


func GetTimeline(w http.ResponseWriter, r *http.Request) {
	client := auth.RequireTwitterClient();
	vars := mux.Vars(r)
	e := vars["nbTweets"]
	nbTweets, _ := strconv.Atoi(e)
	userTimelineParams := &twitter.UserTimelineParams{ScreenName: "ZenikaLille", Count: nbTweets}
	tweets, _, _ := client.Timelines.UserTimeline(userTimelineParams)
	j, err := json.Marshal(tweets)
	if err == nil {
		w.Write([]byte(j))
	} else {
		log.Fatal(err)
	}
}

func GetStream() {
	client := auth.RequireTwitterClient();
	demux := twitter.NewSwitchDemux()

	params := &twitter.StreamFilterParams{
		Track: []string{"kitten"},
		StallWarnings: twitter.Bool(true),
	}
	stream, err := client.Streams.Filter(params)
	if err != nil {
		log.Fatal(err)
	}
	demux.Tweet = func(tweet *twitter.Tweet) {
		fmt.Println(tweet.Text)
	}
	for message := range stream.Messages {
		demux.Handle(message);
	}
}