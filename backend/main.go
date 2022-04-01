package main

import (
	"fmt"
	"net/http"
)

type server struct {
	router *someRouter
	email  string
}

func (s *server) handleIndex() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Server is active")
	}
}

func (s *server) handleAPI() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Server is communicating")
	}
}

func (s *server) handleMessage() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("Message trying to be sent")
	}
}
