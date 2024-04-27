#Concurrency & Default Behavior

Even when not adding the .concurrent property / annotation, tests that are stored in different files are executed concurrently (i.e., in parallel). This is done by both Vitest and Jest - ensuring that your tests run in a short amount of time.

With .concurrent you can enforce this behavior also inside the individual files (i.e., tests that live in one and the same file are executed concurrently).

Concurrent execution can reduce the amount of time your tests need to execute. A downside of concurrent execution is, that tests that perform clashing (global) state manipulations may interfere with each other.

-------------------------------------