# Lab 8 - Starter
Brooks(Ruijia) Niu
1. Within a Github action that runs whenever code is pushed 

    Because manually run them locally before pushing code would take time and effort each time the local branch is updated. Also the local environment might be different than everyone else's, so it is easier and safer to run the test through Github actions. If we run all the tests after all development is completed, it would be extremely hard for team to debug and change things since many things are connected in a project and changing some of the componenets might result in a disaster. So run through Github Action is the best option out of three.
2. No

3. No. Because message feature requires interaction between components(send a message to another user), for which unit tests cannot perform.
4. Yes. Becuase the "mex message length" feature requires no interaction between components(only checks if the typed characters exceeded 80), for which unit test can handel really well.