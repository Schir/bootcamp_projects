;read about Structure and Interpretation of Computer Programs while reading some old blog posts from like 2005 and wanted to work through it a bit
;this is just one of the early exercises to show you how scheme works to start getting you used to some fundamental concepts
;I've included this #lang scheme at the top so that I can run it with Racket, since all the other alternatives seem like a bit of a PITA to get running.
    ;like, shinmera seems like a decent guy from the times I've interacted with them on discord, 
    ;and portacle seems like it'd be neat if I were exclusively using lisp on the regular,  
    ;but I do not want to learn how to use emacs just to do some basic editing work to see if Lisp is a language I like using
#lang scheme
;defining square as x*x
(define (square x) (* x x))

;making an iterative sqrt function
(define (sqrt-iter guess x)
    ;if the guess is good enough, return that, otherwise improve the guess
    (if (good-enough? guess x)
        guess
        (sqrt-iter (improve guess x) x)))

(define (improve guess x)
    ;improve the guess by averaging the guess and x/guess
    (average guess (/ x guess)))
;where average is defined as x+y/2
(define (average x y)
    (/ (+ x y) 2))
;a good enough guess is defined as follows:
(define (good-enough? guess x)
    ;is the guess squared minus x less than .001
    (< (abs (- (square guess) x)) 0.001))
;now defining the sqrt function iteratively, where the first guess is 1
(define (sqrt x)
    (sqrt-iter 1.0 x))

;it's asking me to make this and then apply it to sqrt-iter above.
;I'm not entirely sure why it's happening but when I stopped running it it said it had run sqrt-iter 65533 times, 
;and that's close enough to the 16-bit uint limit of 65535 to make me think it was hitting some limit.
;actually let's see, how would that expand out
;(sqrt-iter (1.0 9)) -> new-if((good-enough 1.0 9) 1.0 (sqrt-iter(average 1 (/ 9 1)))
;how does cond work again?
;let's see, looks like the else in cond here kind of works like a default statement in a switch. hm.
;is it just falling through?
;wish it were easier to find a lisp debugger
;1.6
(define (new-if predicate then-clause else-clause)
    ;though, the way that this is set up seems kind of weird to me
    ;can't really explain why, but this looks like the else statement is just what the program does when the predicate is true
    (cond (predicate then-clause) 
        (else else-clause))
)

;but then why does it seem to work for the simple cases here?
(new-if (= 2 3) 0 (* 5 5))
(new-if (= 1 1) 0 5)

;ah okay, looking it up now, it's because the normal if statement is evaluated differently from the rest of the functions. 
;if only evaluates the condition that's reached, while normally the function evaluates all the parameters first, 
;and there's no way to stop the regular order from continuing to evaluate a recursive function call without using an if statement
;what an interesting problem.
(sqrt 1.0)

(sqrt (+ 100 37))

(sqrt (+ (sqrt 2) (sqrt 3)))

;(square (sqrt 1000))

;1.8
;:effort:
;(define (cube-root-iter x y)
;    ((/ 
;        (+ 
;            (/ x (square y)) 
;            (* y 2)) 
;    3)))
