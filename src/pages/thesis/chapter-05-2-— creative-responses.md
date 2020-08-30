---
templateKey: thesis-post
title: Chapter 05.2 — Creative Responses
date: 2020-08-30T02:30:58.105Z
---
![Figure 45. Wireless RF transmitters and receivers used in cube](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_071_image_0001.jpg "Figure 45. Wireless RF transmitters and receivers used in cube")

I have found the incorporation of lights really brings things to life. With light, you can replicate so much of the human spectrum. Light can show mood, urgency, it can be warm, cold, it can be inviting, or it can startle. In order to make my Interactive Selfie Cube come alive lights would be a necessity. They would allow the ability to incorporate personality, feedback, and emotion. In order to do this I needed to figure out a functional, effective solution to applying lights inside of the cube.

![Figure 46. LED lights connected and being tested with battery power and wireless data transfer](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_072_image_0001.jpg "Figure 46. LED lights connected and being tested with battery power and wireless data transfer")

I found a great strip of super bright programmable RGB LEDs in a strip meaning, I program any of the lights, at any given time, whether to be on or off and what color I want it to be allowing me to add pulsing tweens, patterns, and a variety of color to the cube interactions. This is all great; accept a linear strip would not work well it terms of mounting them inside my cube.

![Figure 47. Deconstruction of LED strip in order to solder custom string for cage ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_073_image_0001.jpg "Figure 47. Deconstruction of LED strip in order to solder custom string for cage ")

![Figure 48. Detail of soldered connections for custom LED strand ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_073_image_0002.jpg "Figure 48. Detail of soldered connections for custom LED strand ")

Too create an otherwise seamless incorporation of the LEDs into the cube I made use of the ability to cut them apart and solder them together in any order and with any length I would need. This was great, however, I included 24 lights. Each light required 6 soldered connections tightly packed together. This called for a grand total of 144 tedious solders just to incorporate the lights.

![Figure 49. Experimenting with installed LED string and interactions ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_074_image_0001.jpg "Figure 49. Experimenting with installed LED string and interactions ")

After the brains and lights were installed it was time to start testing and adapting the gesture sensitive functionalities paired with light change. As I said there is an accelerometer that can gauge x, y, and z acceleration and also the ability to sense 6 orientations. Meaning, as you flip the cube from side to side it knows what side it has landed on.

![Figure 50. Setting up LCD display for wireless data capture and debugging ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_075_image_0001.jpg "Figure 50. Setting up LCD display for wireless data capture and debugging ")

![Figure 51. Consolidating and cleaning up breadboard layout ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_075_image_0002.jpg "Figure 51. Consolidating and cleaning up breadboard layout ")

![Figure 52. Testing accelerometer and wireless data transfer](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_076_image_0001.jpg "Figure 52. Testing accelerometer and wireless data transfer")

After much testing of the data transfer through an RF wireless connection while running light functions I began to run into limitations of the Arduino processor and my power source. In order to capture real time acceleration data on the x, y, and z access I needed to be sending the output to the computer as much as possible. While doing this and running the light animation the Arduino would begin to be overloaded with processing and noticeable hesitation was seen. In order to adjust for this limitation I decided to only listen for orientation changes. Meaning, I could transmit much less frequently freeing up more processing power for the lights. 

The other limitation I ran into was the amount of power the LEDs required and a non-consistent voltage pattern interference provided from the battery. If I ran all LEDs at full power the lights would not display their true color. For instance, bright white became very warm. To adjust for this I run all LEDs at most 50% of optimal brightness to save on energy. This provided to be plenty bright enough in a dim lit room. The inconsistent voltage pattern interference caused a flickering of the lights. To adjust for this I decided to add a jitter of life to the lights. Each light was given a certain threshold of brightness. Every pass of the program the lights are assigned to increase or decrease their brightness by a randomly generated number within the threshold. This causes the illusion that every light is getting slightly larger or smaller as if the cube is jittering with life.

![Figure 53. Adding foam to help deaden sound and soften touch](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_077_image_0001.jpg "Figure 53. Adding foam to help deaden sound and soften touch")

 After being able to play with the cube for a while during testing I needed to start refining the experience. The acrylic, at larger size, was a little more malleable and didn’t feel as soft and the cavity of the cube had a plastic sounding echo. I needed to deaden the echo and make the cube feel more solid. To accomplish this I added a foam buffer between the plates and the cage.

![Figure 54. Detail shot of inner electronics](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_078_image_0001.jpg "Figure 54. Detail shot of inner electronics")

The final details were cleaning up the circuitry and figuring out a way to power the cube on and off. There are a wide variety of power switches. Toggle switches, switches with lights, button switches, large switches, small switches, but I needed my switch to make sense. While opening an apartment garage I saw a keyhole and remembered that there are key driven electric power switches. I instantly ran home, researched, and found a distributor that supplied them. 

I enjoyed the idea of a key power switch because it touches on some of the questions I was attempting to illicit during this interaction. The social ideas behind keys are ideas of importance, or possibly hiding, storing, or keeping something safe. Should you interact with this cube? What will happen when you turn the key? Turning a key is also a much more interactive approach at a switch as well as it forces hand eye coordination and takes a little bit longer than just pushing a button.

![Figure 55. Detail of power switch with keys inserted ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_079_image_0001.jpg "Figure 55. Detail of power switch with keys inserted ")

![Figure 56. Detail of power switch ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_079_image_0002.jpg "Figure 56. Detail of power switch ")

![Figure 57. Cube with all hardware and electronics integrated](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_080_image_0001.jpg "Figure 57. Cube with all hardware and electronics integrated")

The cube sits on a low base and this is intentional. I wanted to force the engaged to move, manipulate, and contort themselves through space before reaching the cube. This forces them to be engaged, make decisions, and be aware. A few concepts of how the bas would be created were explored before landing on the final design. 

A preferred idea spawned from a found, pre cut wood cookie–*log*. Personal beliefs that we should be resourceful often drive me to incorporate found objects into my designs. In this case as, it also provided the perfect, and substantial, connection to nature I was looking for. However, this piece weighed a significant amount and it was not feasible to transport. After a series of failed attempts at boring out the middle to relieve some of its weight, I moved on to the next idea.

![Figure 58. The hoped-to-be wood cookie base for the Interactive Selfie Cube](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_081_image_0001.jpg "Figure 58. The hoped-to-be wood cookie base for the Interactive Selfie Cube")

Still wanting to integrate the idea of nature into the stand, I found inspiration in board formed concrete. It provides a great mix of industry and nature, rigid structure, and its visual and textural qualities blend well with the cubes skin of acrylic and hardware. Using some found palette wood, I pieced together a mold with the pieces possessing the greatest texture. I made sure to collage these pieces together in a way providing visual interest and contrast. 

Once the mold was complete I needed to make sure the concrete mixture would be strong and smooth. This would be necessary as I was planning to make a 16”x16”x2” slab. I chose the 16” dimensions because it is double the size of the cube. I chose 2” as I didn’t want the form to become too heavy and I hoped 2” would be strong enough. I had created 2” molds in the past.

![Figure 59. Detail of board form wood mold for concrete stand creation attempt ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_082_image_0001.jpg "Figure 59. Detail of board form wood mold for concrete stand creation attempt ")

![Figure 60. Filtering out large sediment and rock from concrete mix to pour into mold ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_083_image_0001.jpg "Figure 60. Filtering out large sediment and rock from concrete mix to pour into mold ")

![Figure 61. Board form wood mold for concrete stand creation attempt ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_083_image_0002.jpg "Figure 61. Board form wood mold for concrete stand creation attempt ")

After preparing and pouring the mold, the time came to wait. I vibrated bubbles out of the mixture and left the concrete to dry and cure. 16 hours later I took a look. The slab had a crack, in the middle, across its entire length. The mold did not work. A few assumptions were it had dried too fast or 2” was not thick enough to support itself. I have different ideas to help strengthen, and lighten, concrete molds in the future. But for now, due to time constraints, it was time to move on to the final fail-safe option.

![Figure 62. Cured concrete upside down on board form wood mold after failed attempt](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_084_image_0001.jpg "Figure 62. Cured concrete upside down on board form wood mold after failed attempt")

The final option was to simply integrate sensors on to a square piece of treated wood. I was able to acquire a nice sheet of plywood already cut to size. After some time finishing the wood by sanding and applying a very light stain to keep its natural look the base was completed and functional. I made sure to integrate hardware as functional pieces into the base as well to create visual connections between the base and the cubes treatment. Large bolts provide both adjustable legs to stand the piece off of the grade and to support the proximity sensors. Special bolts were placed into the wood to provide a finished looking whole that the sensors cables could be dropped through.

![Figure 63. Final wood base created as a stand for the Interactive Selfie Cube](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_085_image_0001.jpg "Figure 63. Final wood base created as a stand for the Interactive Selfie Cube")

The proximity sensors were added to make up for some of the processing limitations found in the cube. Since the cube interaction lacks the ability to send as many control variables as I had hoped, the proximity sensors would make up. While a user is interacting with the cube they are now encouraged to walk around the base. As they walk around and pass the proximity sensors this will provide a way for them to move through space in the interface. For example, depending upon how close you stand to one of the proximity sensors it will determine how fast you move left on screen.

A final addition to the interface was sonification. I wanted to create a multisensory experience, which included auditory feedback. By using influence from my previous response called Sounds of Twitter I was able to implement a system that creates sounds. The system uses the text data included with each selfie to synthesize sounds. The way this is accomplished is through converting characters to their ASCII values. 
The first letter of each word creates a tone. This tone is carried out until the next word is reached. While this tone is being played each consecutive character also plays a tone. Each tone is played at a set beat. The use of sonification not only adds depth and mood but it is created by the data itself, therefore, creating and informing the experience by the experience itself. 

The cube and interface consist of six modes during the interaction. There is an initial sleep mode. When the cube is first turned on or when no one has interacted with it for a while it will default to sleep mode, a less exploratory more serene state. The lights in the cube are pure white and lightly pulse as if it is breathing. The interface displays selfies very small in a large three-dimensional grid slowly floating around space as if you are in a galaxy of twinkling selfies. 

The five other alternate modes are activated depending on what side the cube is oriented on consisting of flat, top, bottom, left, or right. Each mode has a specific color that the cube and the visuals animate to, in unison, each time the mode is changed. Each mode change has its own variation of how large the selfies are, how spaced out the selfies are, and how much effects on the generated sound is applied. Following this are a series of final photographs taken of the cube in its different stats as well as screen shots of the interface in its different states.

![Figure 64. The interface in its sleep mode ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_087_image_0001.jpg "Figure 64. The interface in its sleep mode ")

![Figure 65. The interface in an alternate mode 1](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_088_image_0001.jpg "Figure 65. The interface in an alternate mode 1")

![Figure 67. The interface in an alternate mode 3](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_088_image_0002.jpg "Figure 67. The interface in an alternate mode 3")

![Figure 68. The interface in an alternate mode 4 ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_089_image_0001.jpg "Figure 68. The interface in an alternate mode 4 ")

![Figure 69. The interface in an alternate mode 5](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_089_image_0002.jpg "Figure 69. The interface in an alternate mode 5")

![Figure 70. Final cube sitting on proximity sensing base](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_090_image_0001.jpg "Figure 70. Final cube sitting on proximity sensing base")

![Figure 71. Detail of final cube sitting on proximity sensing base 1 ](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_090_image_0002.jpg "Figure 71. Detail of final cube sitting on proximity sensing base 1 ")

![Figure 72. Detail of final cube sitting on proximity sensing base 2](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_091_image_0001.jpg "Figure 72. Detail of final cube sitting on proximity sensing base 2")

![Figure 73. Detail of final cube sitting on proximity sensing base 3](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_091_image_0002.jpg "Figure 73. Detail of final cube sitting on proximity sensing base 3")

![Figure 74. Detail of final cube sitting on proximity sensing base 4](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_092_image_0001.jpg "Figure 74. Detail of final cube sitting on proximity sensing base 4")

![Figure 75. Detail of final cube sitting on proximity sensing base 5](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_092_image_0002.jpg "Figure 75. Detail of final cube sitting on proximity sensing base 5")

![Figure 76. Detail of final cube sitting on proximity sensing base 6](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_093_image_0001.jpg "Figure 76. Detail of final cube sitting on proximity sensing base 6")

![Figure 80. Cube with lights in mode 2](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_095_image_0001.jpg "Figure 80. Cube with lights in mode 2")

![Figure 81. Cube with lights in mode 3](/img/i-can-so-i-will-now-we-must_-a-creative-response-to-selfie-cultu_page_095_image_0002.jpg "Figure 81. Cube with lights in mode 3")