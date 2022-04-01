package main

func (s *server) routes() {
	s.router.handleFunc("/api/submit/contact", s.handleMessage())
	s.router.HandleFunc("/api/", s.handleAPI())
	s.router.HandleFunc("/", s.handleIndex())
}
