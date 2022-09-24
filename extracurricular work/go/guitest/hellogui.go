package main

import (
	"fyne.io/fyne/v2/app"
	"fyne.io/fyne/v2/container"
	"fyne.io/fyne/v2/widget"
)

func main() {
	a := app.New()
	w := a.NewWindow("WARNING")

	hello := widget.NewLabel("This place is a message... and part of a system of messages... pay attention to it! ")
	w.SetContent(container.NewVBox(
		hello,
		widget.NewButton("Sending this message was important to us.\n We considered ourselves to be a powerful culture. ", func() {
			hello.SetText("This place is not a place of honor... \nno highly esteemed deed is commemorated here... \nnothing valued is here. ")
		}),
	))
	w.ShowAndRun()
}
